import { servers } from "../../api/servers";

export default function ServerBar({ serverIndex, setServerIndex }) {
  return (
    <div className="flex gap-2 flex-wrap bg-s1 p-3 rounded-lg mb-4">
      {servers.map((srv, index) => (
        <button
          key={srv.name}
          onClick={() => setServerIndex(index)}
          className={`px-3 py-1 rounded text-xs font-bold ${
            serverIndex === index
              ? "bg-primary text-white"
              : "text-white/60 hover:bg-s2"
          }`}
        >
          {srv.name}
        </button>
      ))}
    </div>
  );
}
