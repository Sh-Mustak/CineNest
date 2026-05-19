// src/api/servers.js

export const servers = [
  // PRIORITY SERVERS

  {
    name: "Vidlink",
    movie: (id) => `https://vidlink.pro/movie/${id}`,
    tv: (id, s, e) => `https://vidlink.pro/tv/${id}/${s}/${e}`,
  },

  {
    name: "Vidrock",
    movie: (id) => `https://vidrock.net/movie/${id}`,
    tv: (id, s, e) => `https://vidrock.net/tv/${id}/${s}/${e}`,
  },

  {
    name: "Vidstorm",
    movie: (id) => `https://vidstorm.ru/movie/${id}`,
    tv: (id, s, e) => `https://vidstorm.ru/tv/${id}/${s}/${e}`,
  },

  {
    name: "VidPlus",
    movie: (id) => `https://player.vidplus.to/embed/movie/${id}`,
    tv: (id, s, e) =>
      `https://player.vidplus.to/embed/tv/${id}/${s}/${e}`,
  },

  {
    name: "VidFast",

    movie: (id) =>
      `https://vidfast.pro/movie/${id}?autoPlay=true&theme=3b82f6&hideServerControls=false`,

    tv: (id, s, e) =>
      `https://vidfast.pro/tv/${id}/${s}/${e}?autoPlay=true&theme=3b82f6&nextButton=true&autoNext=true`,
  },

  {
    name: "VidLux",

    movie: (id) =>
      `https://vidlux.online/embed/movie/${id}?color=3b82f6&autoplay=true`,

    tv: (id, s, e) =>
      `https://vidlux.online/embed/tv/${id}/${s}/${e}?color=3b82f6&autoplay=true`,
  },

  {
    name: "CineSrc",

    movie: (id) =>
      `https://cinesrc.st/embed/movie/${id}`,

    tv: (id, s, e) =>
      `https://cinesrc.st/embed/tv/${id}?s=${s}&e=${e}`,
  },
{
  name: "AutoEmbedApp",
  movie: (id) => `https://player.autoembed.app/embed/movie/${id}`,
  tv: (id, s, e) => `https://player.autoembed.app/embed/tv/${id}/${s}/${e}`,
},
  {
  name: "AnyEmbed",
  movie: (id) => `https://anyembed.com/embed/tmdb-movie-${id}`,
  tv: (id, s, e) => `https://anyembed.com/embed/tmdb-tv-${id}-${s}-${e}`,
},
  {
    name: "VidZee",

    movie: (id) =>
      `https://player.vidzee.wtf/embed/movie/${id}`,

    tv: (id, s, e) =>
      `https://player.vidzee.wtf/embed/tv/${id}/${s}/${e}`,
  },

  {
    name: "Videasy",

    movie: (id) =>
      `https://player.videasy.net/movie/${id}`,

    tv: (id, s, e) =>
      `https://player.videasy.net/tv/${id}/${s}/${e}`,
  },

  {
    name: "PrimeSrc",

    movie: (id) =>
      `https://primesrc.me/embed/movie?tmdb=${id}&fallback=true`,

    tv: (id, s, e) =>
      `https://primesrc.me/embed/tv?tmdb=${id}&season=${s}&episode=${e}&fallback=true`,
  },

  {
    name: "EmbedAPI",

    movie: (id) =>
      `https://player.embed-api.stream/?id=${id}&autoplay=true&theme=3b82f6`,

    tv: (id, s, e) =>
      `https://player.embed-api.stream/?id=${id}&s=${s}&e=${e}&autoplay=true&nextButton=true`,
  },

  {
    name: "Vembed",

    movie: (id) =>
      `https://vembed.click/play/${id}`,

    tv: (id, s, e) =>
      `https://vembed.click/play/${id}_${s}_${e}`,
  },

  {
    name: "StreamMafia",

    movie: (id) =>
      `https://embed.streammafia.to/embed/movie/${id}`,

    tv: (id, s, e) =>
      `https://embed.streammafia.to/embed/tv/${id}/${s}/${e}`,
  },

  {
    name: "NontonGo",

    movie: (id) =>
      `https://www.NontonGo.win/embed/movie/${id}`,

    tv: (id, s, e) =>
      `https://www.NontonGo.win/embed/tv/${id}/${s}/${e}`,
  },

  {
    name: "VidBinge",

    movie: (id) =>
      `https://vidbinge.to/movie/${id}`,

    tv: (id, s, e) =>
      `https://vidbinge.to/tv/${id}/${s}/${e}`,
  },

  {
    name: "MoviesAPI",

    movie: (id) =>
      `https://moviesapi.to/movie/${id}`,

    tv: (id, s, e) =>
      `https://moviesapi.to/tv/${id}-${s}-${e}`,
  },

  {
    name: "2embed.online",

    movie: (id) =>
      `https://www.2embed.online/embed/movie/${id}`,

    tv: (id, s, e) =>
      `https://www.2embed.online/embed/tv/${id}/${s}/${e}`,
  },

  {
    name: "2embed.cc",

    movie: (id) =>
      `https://www.2embed.cc/embed/${id}`,

    tv: (id, s, e) =>
      `https://www.2embed.cc/embedtv/${id}&s=${s}&e=${e}`,
  },

  {
    name: "GoDriver",

    movie: (id) =>
      `https://godriveplayer.com/player.php?tmdb=${id}`,

    tv: (id, s, e) =>
      `https://godriveplayer.com/player.php?type=series&tmdb=${id}&season=${s}&episode=${e}`,
  },

  {
    name: "Multiembed",

    movie: (id) =>
      `https://multiembed.mov/?video_id=${id}&tmdb=1`,

    tv: (id, s, e) =>
      `https://multiembed.mov/?video_id=${id}&tmdb=1&s=${s}&e=${e}`,
  },

  {
    name: "Vidsrc",

    movie: (id) =>
      `https://vsembed.su/embed/movie?tmdb=${id}&autoplay=1`,

    tv: (id, s, e) =>
      `https://vsembed.su/embed/tv?tmdb=${id}&season=${s}&episode=${e}&autoplay=1&autonext=1`,
  },

  {
    name: "Autoembed",

    movie: (id) =>
      `https://autoembed.co/movie/tmdb/${id}`,

    tv: (id, s, e) =>
      `https://autoembed.co/tv/tmdb/${id}-${s}-${e}`,
  },

  {
    name: "SmashyStream",

    movie: (id) =>
      `https://embed.smashystream.com/playere.php?tmdb=${id}`,

    tv: (id, s, e) =>
      `https://embed.smashystream.com/playere.php?tmdb=${id}&season=${s}&episode=${e}`,
  },

  {
    name: "SrcWtf",

    apis: [1, 2, 3, 4],
    currentApi: 0,

    movie: (id, apiIndex = 0) =>
      `https://vidsrc.wtf/api/${[1, 2, 3, 4][apiIndex]}/movie/?id=${id}&color=ffffff`,

    tv: (id, s, e, apiIndex = 0) =>
      `https://vidsrc.wtf/api/${[1, 2, 3, 4][apiIndex]}/tv/?id=${id}&s=${s}&e=${e}&color=ffffff`,
  },

  // STANDARD SERVERS

  {
    name: "Rive",

    movie: (id) =>
      `https://www.rivestream.app/embed?type=movie&id=${id}`,

    tv: (id, s, e) =>
      `https://www.rivestream.app/embed?type=tv&id=${id}&season=${s}&episode=${e}`,
  },

  {
    name: "111Movies",

    movie: (id) =>
      `https://www.111movies.net/movie/${id}`,

    tv: (id, s, e) =>
      `https://www.111movies.net/tv/${id}/${s}/${e}`,
  },

  {
    name: "VidSrcMov",

    movie: (id) =>
      `https://vidsrc.mov/embed/movie/${id}`,

    tv: (id, s, e) =>
      `https://vidsrc.mov/embed/tv/${id}/${s}/${e}`,
  },

  {
    name: "EmbedMaster",

    movie: (id) =>
      `https://embedmaster.link/movie/${id}`,

    tv: (id, s, e) =>
      `https://embedmaster.link/tv/${id}/${s}/${e}`,
  },

  {
    name: "VidSrcIcu",

    movie: (id) =>
      `https://vidsrc.icu/embed/movie/${id}`,

    tv: (id, s, e) =>
      `https://vidsrc.icu/embed/tv/${id}/${s}/${e}`,
  },

  {
    name: "MegaEmbed",

    movie: (id) =>
      `https://megaembed.com/embed/movie/${id}`,

    tv: (id, s, e) =>
      `https://megaembed.com/embed/tv/${id}/${s}/${e}`,
  },
{
  name: "EzVidApi",

  movie: (id) =>
    `https://ezvidapi.com/embed/movie/${id}`,

  tv: (id, s, e) =>
    `https://ezvidapi.com/embed/tv/${id}/${s}/${e}`,
},
];
