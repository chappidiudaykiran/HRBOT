export default function CtaSection() {
  return (
    <section className="bg-[#101010] px-5 py-[110px] md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-[26px] border border-[#c8ff00]/20 bg-gradient-to-br from-[#c8ff00]/10 to-[#00ffcc]/5 px-8 py-14 text-center md:px-20 md:py-20">
          <div className="pointer-events-none absolute left-1/2 top-[-100px] h-[400px] w-[400px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(200,255,0,0.12),transparent_70%)]" />
          <p className="relative mb-4 text-[11px] font-semibold uppercase tracking-[2.5px] text-[#c8ff00]">Free HR Bot Consultation</p>
          <h2 className="relative mb-5 font-['Syne'] text-[clamp(28px,4vw,52px)] font-extrabold tracking-[-1.5px]">Launch Your Onboarding &<br />Policy ExplainerBot</h2>
        </div>
      </div>
    </section>
  );
}
