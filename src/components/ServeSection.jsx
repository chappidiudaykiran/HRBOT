import { SERVE_CARDS } from "../constants";

export default function ServeSection() {
  return (
    <section className="bg-[#101010] px-5 py-[110px] md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[2.5px] text-[#c8ff00]">Who It's For</p>
        <h2 className="mb-5 font-['Syne'] text-[clamp(28px,4vw,52px)] font-extrabold leading-[1.1] tracking-[-1.5px]">Built for teams that need<br />clear HR answers fast</h2>
        <div className="mt-[60px] grid grid-cols-1 gap-5 md:grid-cols-3">
          {SERVE_CARDS.map((card) => (
            <div className="cursor-pointer overflow-hidden rounded-[18px] border border-white/10 bg-[#141414] transition duration-300 hover:-translate-y-1.5 hover:border-[#c8ff00]/25 hover:shadow-[0_24px_50px_rgba(0,0,0,0.34)]" key={card.title}>
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[#171d17] to-[#1a1a29] text-6xl">{card.emoji}</div>
              <div className="p-7">
                <h3 className="mb-2.5 font-['Syne'] text-[20px] font-bold">{card.title}</h3>
                <p className="mb-5 text-[14px] leading-[1.6] text-white/60">{card.desc}</p>
                <a href="#" className="inline-flex items-center gap-1.5 text-[13px] font-semibold tracking-[0.5px] text-[#c8ff00]">Explore →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
