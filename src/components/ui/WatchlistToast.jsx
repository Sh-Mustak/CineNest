export default function WatchlistToast({ title, action, icon }) {
  return (
    <div className="cinenest-toast-content py-2 px-1.5 flex items-center gap-2">
      <span className="material-symbols-outlined cinenest-toast-icon">
        {icon}
      </span>

      <span className="cinenest-toast-title" title={title}>
        {title}
      </span>

      <span>{action}</span>
    </div>
  );
}