import { HOW_STEPS } from "../constants";

export default function HowSection() {
  return (
    <section className="bg-[#090909] px-5 py-[110px] md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[2.5px] text-[#c8ff00]">Implementation</p>
        <h2 className="mb-5 font-['Syne'] text-[clamp(28px,4vw,52px)] font-extrabold leading-[1.1] tracking-[-1.5px]">How We Set Up<br />Your HR Assistant</h2>
        <div className="mt-[60px] grid grid-cols-1 gap-[30px] md:grid-cols-3">
          {HOW_STEPS.map((step) => (
            <div className="rounded-[18px] border border-white/10 bg-white/[0.015] p-[26px]" key={step.num}>
              <div className="mb-[-20px] font-['Syne'] text-[80px] font-extrabold leading-none text-white/[0.04]">{step.num}</div>
              <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-white/10 bg-[#141414] text-2xl">{step.icon}</div>
              <h3 className="mb-3 font-['Syne'] text-[20px] font-bold">{step.title}</h3>
              <p className="text-[14px] leading-[1.7] text-white/60">{step.desc}</p>
              <br />
              <a href="#" className="inline-flex items-center gap-1.5 text-[13px] font-semibold tracking-[0.5px] text-[#c8ff00]">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
