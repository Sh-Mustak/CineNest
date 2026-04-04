export default function Pill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-150 whitespace-nowrap
        ${active
          ? "bg-orange-600 border-orange-600 text-white"
          : "border-white/10 text-neutral-400 hover:border-orange-500 hover:text-white"
        }`}
    >
      {label}
    </button>
  );
}