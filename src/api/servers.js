// src/api/servers.js

export const servers = [
  //PRIORITY SERVERS

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
    tv: (id, s, e) => `https://player.vidplus.to/embed/tv/${id}/${s}/${e}`,
  },

  {
    name: "Vembed",
    movie: (id) => `https://vembed.click/play/${id}`,
    tv: (id, s, e) => `https://vembed.click/play/${id}_${s}_${e}`,
  },
  {
    name: "StreamMafia",
    movie: (id) => `https://embed.streammafia.to/embed/movie/${id}`,
    tv: (id, s, e) => `https://embed.streammafia.to/embed/tv/${id}/${s}/${e}`,
  },
  {
    name: "VidBinge",
    movie: (id) => `https://vidbinge.to/movie/${id}`,
    tv: (id, s, e) => `https://vidbinge.to/tv/${id}/${s}/${e}`,
  },

  {
    name: "2embed.online",
    movie: (id) => `https://www.2embed.online/embed/movie/${id}`,
    tv: (id, s, e) => `https://www.2embed.online/embed/tv/${id}/${s}/${e}`,
  },
  {
    name: "2embed.cc",
    movie: (id) => `https://www.2embed.cc/embed/${id}`,
    tv: (id, s, e) => `https://www.2embed.cc/embedtv/${id}&s=${s}&e=${e}`,
  },
  {
    name: "GoDriver",
    movie: (id) => `https://godriveplayer.com/player.php?tmdb=${id}`,
    tv: (id, s, e) =>
      `https://godriveplayer.com/player.php?type=series&tmdb=${id}&season=${s}&episode=${e}`,
  },
  {
    name: "Multiembed",
    movie: (id) => `https://multiembed.mov/?video_id=${id}&tmdb=1`,
    tv: (id, s, e) =>
      `https://multiembed.mov/?video_id=${id}&tmdb=1&s=${s}&e=${e}`,
  },
  {
    name: "Vidsrc",
    movie: (id) => `https://vsembed.su/embed/movie?tmdb=${id}&autoplay=1`,
    tv: (id, s, e) =>
      `https://vsembed.su/embed/tv?tmdb=${id}&season=${s}&episode=${e}&autoplay=1&autonext=1`,
  },
  {
    name: "Autoembed",
    movie: (id) => `https://autoembed.co/movie/tmdb/${id}`,
    tv: (id, s, e) => `https://autoembed.co/tv/tmdb/${id}-${s}-${e}`,
  },
  {
    name: "SmashyStream",
    movie: (id) => `https://embed.smashystream.com/playere.php?tmdb=${id}`,
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
];
