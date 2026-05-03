import { useWatchlistContext } from "../../context/useWatchlistContext";

export default function Toast() {
  const { toast } = useWatchlistContext();

  if (!toast) return null;

  return (
    <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded-md shadow-lg z-50 animate-fade-in">
      {toast}
    </div>
  );
}
