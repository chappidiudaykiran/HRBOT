import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const FAQ_ITEMS = [
  {
    question: "What can this HR Bot help me with?",
    answer:
      "The bot explains onboarding steps, leave rules, attendance policies, benefits, and common HR guidelines for your selected company.",
  },
  {
    question: "Can the bot approve leave or make HR decisions?",
    answer:
      "No. It is informational only. HR approvals, policy exceptions, and final decisions are always handled by human HR teams.",
  },
  {
    question: "How do I choose my company?",
    answer:
      "On the home page, search/select your company and submit. You can also click a company card directly to open the chatbot.",
  },
  {
    question: "Can I ask questions in other languages?",
    answer:
      "Yes. On the chatbot page, use the language selector and ask in your preferred language.",
  },
  {
    question: "What if the answer looks incomplete?",
    answer:
      "Try asking a more specific question (for example: policy name, location, or scenario). You can also ask follow-up questions for clarity.",
  },
  {
    question: "Who built OnboardIQ?",
    answer:
      "A team of 4 students focused on making HR onboarding clearer, faster, and easier for new joiners.",
  },
];

export default function FaqPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#090909] text-white leading-relaxed [background-image:radial-gradient(circle_at_20%_-10%,rgba(200,255,0,0.08),transparent_35%),radial-gradient(circle_at_80%_120%,rgba(0,255,204,0.05),transparent_40%)]">
      <Navbar />

      <main className="px-5 pb-16 pt-[120px] md:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <p className="mb-3 text-[11px] uppercase tracking-[2px] text-[#c8ff00]">Support</p>
            <h1 className="font-['Syne'] text-[clamp(30px,5vw,52px)] font-extrabold leading-[1.1] tracking-[-1.5px]">Frequently Asked Questions</h1>
            <p className="mt-4 max-w-2xl text-white/70">
              Quick answers about how to use the HR Policy ExplainerBot effectively.
            </p>
          </div>

          <section className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <button
                type="button"
                key={item.question}
                onClick={() => navigate(`/chat/google?query=${encodeURIComponent(item.question)}`)}
                className="w-full rounded-2xl border border-white/10 bg-[#111111] p-6 text-left transition hover:-translate-y-0.5 hover:border-[#c8ff00]/40 md:p-7"
              >
                <h2 className="mb-3 font-['Syne'] text-xl font-bold text-white">{item.question}</h2>
                <p className="text-white/75">{item.answer}</p>
              </button>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
