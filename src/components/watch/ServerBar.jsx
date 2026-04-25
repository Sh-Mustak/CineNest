import { servers } from "../../api/servers";

export default function ServerBar({ serverIndex, setServerIndex }) {
  return (
    <div className="flex gap-2 flex-wrap bg-s1 p-3 rounded-lg mb-4">
      {servers.map((srv, index) => (
        <button
          key={srv.name}
          onClick={() => setServerIndex(index)}
          className={`px-1 py-0.5 border border-white/30 rounded-sm text-xs md:text-sm lg:text-md font-bold ${
            serverIndex === index
              ? "bg-primary text-white border-primary"
              : "text-white/60"
          }`}
        >
          {srv.name}
        </button>
      ))}
    </div>
  );
}
