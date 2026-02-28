export default function LaraSection() {
  const features = [
    "Clarity over complexity — every policy should be understandable by every employee.",
    "Speed over waiting — employees should not wait days for basic HR policy answers.",
    "Safety over shortcuts — AI assists HR communication, but never replaces human judgment.",
  ];

  return (
    <section className="bg-[#090909] px-5 py-[110px] md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[2.5px] text-[#c8ff00]">About OnboardIQ</p>
            <h2 className="mb-5 font-['Syne'] text-[clamp(28px,4vw,52px)] font-extrabold leading-[1.1] tracking-[-1.5px]">Why We Built This</h2>
            <p className="max-w-[540px] text-[16px] leading-[1.7] text-white/60">Because no new joiner should feel lost on their first day. OnboardIQ is an AI-powered HR Policy Assistant that explains onboarding, leave, attendance, and benefits in clear, simple language.</p>
            <ul className="my-7 flex list-none flex-col gap-3.5">
              {features.map((feature) => (
                <li className="flex items-start gap-3 text-[15px] leading-[1.5] text-white/85" key={feature}><span className="mt-2 h-[7px] w-[7px] shrink-0 rounded-full bg-[#c8ff00]" />{feature}</li>
              ))}
            </ul>
            <a href="#" className="inline-block rounded-[10px] bg-[#c8ff00] px-[30px] py-[15px] font-['Syne'] text-[15px] font-bold text-black shadow-[0_14px_34px_rgba(200,255,0,0.28)] transition hover:-translate-y-0.5">Learn About OnboardIQ</a>
          </div>
          <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#141414] p-9 shadow-[0_28px_60px_rgba(0,0,0,0.38)] before:pointer-events-none before:absolute before:-right-[60px] before:-top-[60px] before:h-[200px] before:w-[200px] before:bg-[radial-gradient(circle,rgba(200,255,0,0.1),transparent_70%)] before:content-['']">
            <div className="mb-6 flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="max-w-[85%] self-end rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 text-[12.5px] leading-[1.5] text-white/85">What makes OnboardIQ different from normal HR chatbots?</div>
              <div className="max-w-[85%] rounded-xl border border-[#c8ff00]/20 bg-[#c8ff00]/10 px-4 py-3 text-[12.5px] leading-[1.5] text-white">
                <div className="mb-1 text-[10px] font-bold uppercase tracking-[1px] text-[#c8ff00]">HR Bot</div>
                OnboardIQ is company-specific. It explains the policies of your selected company in plain language and stays strictly informational.
              </div>
              <div className="max-w-[85%] self-end rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 text-[12.5px] leading-[1.5] text-white/85">Can this bot approve leave or process payroll?</div>
              <div className="max-w-[85%] rounded-xl border border-[#c8ff00]/20 bg-[#c8ff00]/10 px-4 py-3 text-[12.5px] leading-[1.5] text-white">
                <div className="mb-1 text-[10px] font-bold uppercase tracking-[1px] text-[#c8ff00]">HR Bot</div>
                No. It provides policy guidance only. HR approvals and decisions always remain with human teams.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
