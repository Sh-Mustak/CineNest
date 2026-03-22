/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/**
 * CineNest AdBlocker — Service Worker
 * Place this file in your /public folder (Vite serves /public as root)
 */

let blockedDomains = new Set();
let blockedKeywords = new Set();

// ─── Install: load blocklist ──────────────────────────────────────────────────
self.addEventListener("install", (event) => {
  event.waitUntil(
    fetch("/blocklist.json")
      .then((res) => res.json())
      .then((data) => {
        blockedDomains = new Set(data.domains || []);
        blockedKeywords = new Set(data.keywords || []);
        console.log(
          `[CineNest SW] Loaded ${blockedDomains.size} blocked domains`,
        );
      })
      .catch(() => {
        blockedDomains = new Set(FALLBACK_DOMAINS);
        blockedKeywords = new Set(FALLBACK_KEYWORDS);
        console.warn("[CineNest SW] Using fallback blocklist");
      }),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
  console.log("[CineNest SW] ✅ Active");
});

// ─── Fetch: intercept & block ─────────────────────────────────────────────────
self.addEventListener("fetch", (event) => {
  const url = event.request.url;
  if (!url.startsWith("http")) return;

  try {
    const { hostname } = new URL(url);
    const lowerHostname = hostname.toLowerCase();
    const lowerUrl = url.toLowerCase();

    if (shouldBlock(lowerHostname, lowerUrl)) {
      event.respondWith(
        new Response("", {
          status: 204,
          headers: { "X-Blocked-By": "CineNest-AdBlocker" },
        }),
      );
      // Notify React app about the block
      self.clients
        .matchAll()
        .then((clients) =>
          clients.forEach((c) =>
            c.postMessage({ type: "CN_BLOCKED", hostname: lowerHostname }),
          ),
        );
    }
  } catch (_) {}
});

function shouldBlock(hostname, fullUrl) {
  if (blockedDomains.has(hostname)) return true;
  // Check parent domains (e.g. ads.evil.com → evil.com)
  const parts = hostname.split(".");
  for (let i = 1; i < parts.length - 1; i++) {
    if (blockedDomains.has(parts.slice(i).join("."))) return true;
  }
  for (const kw of blockedKeywords) {
    if (fullUrl.includes(kw)) return true;
  }
  return false;
}

// ─── Fallback built-in blocklist ──────────────────────────────────────────────
const FALLBACK_DOMAINS = [
  "vidsrcme.ru",
  "vidsrc-embed.ru",
  "usrpubtrk.com",
  "trafficjunky.net",
  "traffichaus.com",
  "exoclick.com",
  "juicyads.com",
  "plugrush.com",
  "hilltopads.net",
  "adsterra.com",
  "propellerads.com",
  "clickadu.com",
  "popcash.net",
  "popads.net",
  "adcash.com",
  "coinhive.com",
  "coin-hive.com",
  "minero.cc",
  "cryptoloot.pro",
  "webmine.pro",
  "jsecoin.com",
  "doubleclick.net",
  "googleadservices.com",
  "googlesyndication.com",
  "amazon-adsystem.com",
  "scorecardresearch.com",
  "quantserve.com",
  "adbull.me",
  "shorte.st",
  "adf.ly",
  "linkvertise.com",
  "popunder.net",
  "pops.gg",
  "hlspop.com",
  "adspyglass.com",
  "fuckadblock.com",
  "blockadblock.com",
  "revcontent.com",
  "outbrain.com",
  "taboola.com",
  "mgid.com",
];

const FALLBACK_KEYWORDS = [
  "/ads/",
  "/ad/",
  "/adserver/",
  "/adserve/",
  "/adsystem/",
  "/adtrack",
  "/advert",
  "/popup",
  "/popunder",
  "/clicktrack",
  "track.php",
  "click.php",
  "redirect.php",
  "/miner/",
  "cryptonight",
];
