import { COMPANIES } from "../constants";

export default function Marquee() {
  const shuffledCompanies = [...COMPANIES]
    .sort(() => Math.random() - 0.5)
    .map((company) => company.name);

  const items = [...shuffledCompanies, ...shuffledCompanies];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-gradient-to-b from-white/[0.01] to-transparent py-[42px]">
      <p className="mb-[30px] text-center text-[12px] uppercase tracking-[2px] text-white/60">Some Companies Using HR Onboarding & Policy Assistance</p>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee">
          {items.map((companyName, index) => (
            <div className="flex whitespace-nowrap px-9 font-['Syne'] text-[15px] font-bold text-white/70" key={`${companyName}-${index}`}>
              <span className="mr-2.5 mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8ff00]" />
              {companyName}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
