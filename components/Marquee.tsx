import { ticker } from "@/lib/data";

export function Marquee() {
  const row = [...ticker, ...ticker, ...ticker, ...ticker];
  return (
    <div className="overflow-hidden border-b-[3px] border-ink bg-ink py-2.5">
      <div className="animate-ticker flex w-max items-center gap-6 whitespace-nowrap text-[15px] font-bold text-yellow">
        {row.map((t, i) => (
          <span key={`${t}-${i}`} className="flex items-center gap-6">
            {t} <span className="text-red">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
