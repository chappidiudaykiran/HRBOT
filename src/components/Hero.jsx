import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const [companyQuery, setCompanyQuery] = useState("");

  const supportedCompanies = useMemo(
    () => [
      { value: "google", label: "Google", logo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" },
      { value: "infosys", label: "Infosys", logo: "https://www.samco.in/knowledge-center/wp-content/uploads/2024/12/Infosys-Share-Price.png" },
      { value: "microsoft", label: "Microsoft", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTWlnJCnn2ljYqv2t4XY9bM5U4pnohvXZRw&s" },
      { value: "tcs", label: "TCS", logo: "https://ibsintelligence.com/wp-content/uploads/2020/12/TCS.jpg" },
      { value: "accenture", label: "Accenture", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt4Oc4WBgxZ0KbEjfm1W067bK4yUEAntn3bw&s" },
      { value: "cisco", label: "Cisco", logo: "https://cdn.iconscout.com/icon/free/png-512/free-cisco-icon-svg-download-png-282320.png?f=webp&w=512" },
    ],
    []
  );

  const marqueeItems = [...supportedCompanies, ...supportedCompanies];

  const matchedCompany = supportedCompanies.find((company) => {
    const query = companyQuery.trim().toLowerCase();
    if (!query) return false;

    return company.label.toLowerCase() === query || company.value === query;
  });

  const handleCompanySubmit = () => {
    if (!matchedCompany) return;
    navigate(`/chat/${encodeURIComponent(matchedCompany.value)}`);
  };

  const handleCompanyCardClick = (companyValue) => {
    navigate(`/chat/${encodeURIComponent(companyValue)}`);
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-[90px] pt-[130px] text-center md:px-10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#090909] to-[#0f0f0f]" />
      <div className="pointer-events-none absolute -top-28 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#c8ff00]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-[360px] w-[560px] rounded-full bg-[#00ffcc]/10 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:60px_60px]" />
      <h1 className="relative mb-4 max-w-none whitespace-nowrap font-['Syne'] text-[36px] font-semibold leading-[1.2] tracking-normal text-white md:text-[42px]">
        Simplify <em className="not-italic text-[#c8ff00]">Employee Onboarding</em> and HR Policy Support
      </h1>
      <p className="relative mb-10 max-w-[640px] text-[17px] leading-[1.7] text-white/60">Your AI assistant answers policy questions instantly and guides employees through onboarding with consistent, approved information.</p>
      <div className="relative mb-6 w-full overflow-hidden border-y border-white/10 bg-gradient-to-b from-white/[0.01] to-transparent py-6">
        <p className="mb-4 text-center text-[11px] uppercase tracking-[2px] text-white/60">Companies</p>
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee">
            {marqueeItems.map((company, index) => (
              <button
                type="button"
                onClick={() => handleCompanyCardClick(company.value)}
                className="mx-3 flex min-w-[230px] items-center gap-4 rounded-2xl border border-white/10 bg-[#121212] px-5 py-4 text-left transition hover:-translate-y-0.5 hover:border-[#c8ff00]/40"
                key={`${company.value}-${index}`}
              >
                <div className="h-14 w-14 overflow-hidden rounded-lg bg-white">
                  <img
                    src={company.logo}
                    alt={`${company.label} logo`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="font-['Syne'] text-[18px] font-bold text-white/85">{company.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mb-4 flex w-full max-w-[620px] flex-col gap-3 md:flex-row md:items-center">
        <input
          type="text"
          list="company-options"
          value={companyQuery}
          onChange={(event) => setCompanyQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleCompanySubmit();
          }}
          placeholder="Search for companies"
          className="h-12 w-full flex-1 rounded-xl border border-white/10 bg-[#121212] px-4 text-[14px] text-white outline-none placeholder:text-white/50"
        />
        <datalist id="company-options">
          {supportedCompanies.map((company) => (
            <option key={company.value} value={company.label} />
          ))}
        </datalist>
        <button
          type="button"
          onClick={handleCompanySubmit}
          disabled={!matchedCompany}
          className="h-12 rounded-xl bg-[#c8ff00] px-6 font-['Syne'] text-[14px] font-bold text-black shadow-[0_12px_26px_rgba(200,255,0,0.25)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Submit
        </button>
      </div>

      <p className="relative max-w-[620px] text-[13px] text-white/55">After selecting a company, you will be redirected to the chatbot page.</p>
    </section>
  );
}
