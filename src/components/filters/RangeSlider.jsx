export default function RangeSlider({
  label,
  min,
  max,
  step,
  value,
  format,
  onChange,
}) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col gap-2">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
        {label}
      </p>
      <div className="flex justify-between text-xs text-neutral-500 mb-1">
        <span>{format(min)}</span>
        <span className="text-orange-500 font-semibold">{format(value)}</span>
        <span>{format(max)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-[3px] rounded-full outline-none cursor-pointer appearance-none accent-orange-600"
        style={{
          background: `linear-gradient(to right, #ea580c ${pct}%, #252535 ${pct}%)`,
        }}
      />
    </div>
  );
}
