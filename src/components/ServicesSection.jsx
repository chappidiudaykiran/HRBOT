import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ServicesSection() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const companies = useMemo(
    () => [
      { value: "google", name: "Google", logo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg", desc: "Company-specific onboarding and HR policy support for Google employees." },
      { value: "infosys", name: "Infosys", logo: "https://www.samco.in/knowledge-center/wp-content/uploads/2024/12/Infosys-Share-Price.png", desc: "Policy guidance and onboarding assistance tailored for Infosys teams." },
      { value: "microsoft", name: "Microsoft", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTWlnJCnn2ljYqv2t4XY9bM5U4pnohvXZRw&s", desc: "Get instant HR policy explanations and employee onboarding help for Microsoft." },
      { value: "tcs", name: "TCS", logo: "https://ibsintelligence.com/wp-content/uploads/2020/12/TCS.jpg", desc: "Explore onboarding flow and policy clarifications for TCS employees." },
      { value: "accenture", name: "Accenture", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt4Oc4WBgxZ0KbEjfm1W067bK4yUEAntn3bw&s", desc: "Ask leave, attendance, and benefits questions for Accenture HR policies." },
      { value: "cisco", name: "Cisco", logo: "https://cdn.iconscout.com/icon/free/png-512/free-cisco-icon-svg-download-png-282320.png?f=webp&w=512", desc: "Understand Cisco onboarding tasks and employee policy details quickly." },
    ],
    []
  );

  const filteredCompanies = useMemo(() => {
    const search = query.trim().toLowerCase();
    if (!search) return companies;

    return companies.filter((company) => {
      const text = `${company.name} ${company.value}`.toLowerCase();
      return text.includes(search);
    });
  }, [companies, query]);

  return (
    <section className="bg-[#101010] px-5 py-[110px] md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[2.5px] text-[#c8ff00]">Company Directory</p>
        <h2 className="mb-5 font-['Syne'] text-[clamp(28px,4vw,52px)] font-extrabold leading-[1.1] tracking-[-1.5px]">Type and Search Companies</h2>
        <p className="max-w-[540px] text-[16px] leading-[1.7] text-white/60">Search by company name and click any card to open its chatbot page.</p>
        <div className="mt-[22px] flex max-w-[560px] gap-2">
          <input
            type="text"
            placeholder="Type something to search companies"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="flex-1 rounded-lg border border-white/15 bg-[#121212] px-3.5 py-2.5 text-[13px] text-white outline-none placeholder:text-white/55"
          />
          <button type="button" className="rounded-lg bg-[#c8ff00] px-[18px] py-2.5 font-['Syne'] text-[13px] font-bold text-black transition hover:-translate-y-px">Search</button>
        </div>
        <div className="mt-[60px] grid grid-cols-1 gap-5 md:grid-cols-2">
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map((company) => (
              <button
                type="button"
                onClick={() => navigate(`/chat/${company.value}`)}
                className="rounded-[18px] border border-white/10 bg-[#141414] p-9 text-left transition duration-300 hover:-translate-y-1 hover:border-[#c8ff00]/30 hover:shadow-[0_22px_44px_rgba(0,0,0,0.36)]"
                key={company.name}
              >
                <div className="mb-6 h-16 w-16 overflow-hidden rounded-xl border border-[#c8ff00]/20 bg-white">
                  <img src={company.logo} alt={`${company.name} logo`} className="h-full w-full object-cover" />
                </div>
                <h3 className="mb-3 font-['Syne'] text-[20px] font-bold">{company.name}</h3>
                <p className="mb-4 text-[14px] leading-[1.7] text-white/60">{company.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold tracking-[0.5px] text-[#c8ff00]">Open Chatbot →</span>
              </button>
            ))
          ) : (
            <div className="rounded-[18px] border border-white/10 bg-[#141414] p-9">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#c8ff00]/20 bg-[#c8ff00]/10 text-[22px]">🔎</div>
              <h3 className="mb-3 font-['Syne'] text-[20px] font-bold">No companies found</h3>
              <p className="text-[14px] leading-[1.7] text-white/60">Try a different keyword to find the company and continue with chatbot support.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
