export default function ServerBar({ server, setServer }) {
  const servers = [
    { id: "server1", label: "2embed.online" },
    { id: "server2", label: "2embed.cc" },
    { id: "server3", label: "multiembed" },
    { id: "server4", label: "vidsrc" },
    { id: "server5", label: "Vidlink.pro" },
    { id: "server6", label: "VidPlus" },
  ];

  return (
    <div className="flex items-center gap-2 flex-wrap px-3 py-2 bg-s1 border border-white/[0.07] rounded-[10px] mb-4">
      <span className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold tracking-[.12em] uppercase text-ctm flex-shrink-0">
        <span className="material-symbols-outlined text-primary text-[13px]">
          dns
        </span>
        <p className="text-white/60 text-[5px] sm:text-xs">Server:</p>
      </span>

      <div className="flex gap-1.5 flex-wrap">
        {servers.map((srv) => (
          <button
            key={srv.id}
            onClick={() => setServer(srv.id)}
            className={`px-3 py-1 rounded-[6px] border text-[10px] sm:text-xs font-bold transition-all ${
              server === srv.id
                ? "bg-primary text-white"
                : "bg-transparent text-white/60 hover:bg-s2"
            }`}
          >
            {srv.label}
          </button>
        ))}
      </div>
    </div>
  );
}
