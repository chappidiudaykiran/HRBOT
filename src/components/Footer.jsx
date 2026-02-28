import { Link } from "react-router-dom";

export default function Footer() {
  const quickLinks = ["Home", "Onboarding", "Policies", "FAQ", "About"];

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] px-5 pb-10 pt-[60px] md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-[50px] grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr] md:gap-[60px]">
          <div>
            <Link to="/" className="font-['Syne'] text-[22px] font-extrabold tracking-[-0.5px] text-white">HR<span className="text-[#c8ff00]">Bot</span></Link>
            <p className="my-4 max-w-[280px] text-[14px] leading-[1.7] text-white/60">HumanResourcesOnboarding&Policy ExplainerBot helps teams deliver faster onboarding and consistent policy guidance.</p>
            <a href="#" className="inline-block rounded-[10px] bg-[#c8ff00] px-6 py-3 font-['Syne'] text-[13px] font-bold text-black shadow-[0_14px_34px_rgba(200,255,0,0.28)] transition hover:-translate-y-0.5">Get Started</a>
          </div>
          <div>
            <h4 className="mb-5 font-['Syne'] text-[14px] font-bold tracking-[0.5px]">Quick Links</h4>
            <ul className="flex list-none flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  {link === "Home" ? (
                    <Link to="/" className="text-[14px] text-white/60 transition hover:text-white">{link}</Link>
                  ) : link === "FAQ" ? (
                    <Link to="/faq" className="text-[14px] text-white/60 transition hover:text-white">{link}</Link>
                  ) : link === "About" ? (
                    <Link to="/about" className="text-[14px] text-white/60 transition hover:text-white">{link}</Link>
                  ) : (
                    <a href="#" className="text-[14px] text-white/60 transition hover:text-white">{link}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-5 font-['Syne'] text-[14px] font-bold tracking-[0.5px]">Join our HR updates community</h4>
            <div className="mt-3 flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 rounded-lg border border-white/15 bg-[#121212] px-3.5 py-2.5 text-[13px] text-white outline-none placeholder:text-white/55" />
              <button className="rounded-lg bg-[#c8ff00] px-[18px] py-2.5 font-['Syne'] text-[13px] font-bold text-black transition hover:-translate-y-px">Join</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-[30px] text-[13px] text-white/60 md:flex-row md:items-center">
          <span>© 2026 HRBot. All Rights Reserved.</span>
          <span>Built by Team-34 Kanya Rasi (RGUKT IIIT Students)</span>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">Privacy Policy</a>
            <a href="#" className="transition hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
