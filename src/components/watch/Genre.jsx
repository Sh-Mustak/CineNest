export default function Genre({genre}){
    return (
        <span className="px-2 py-0.5 rounded-[5px] text-[10px] sm:text-[11px] font-medium border border-primabg-primary text-white/80 transition-colors">
           {genre.name}
          </span>
    );
}