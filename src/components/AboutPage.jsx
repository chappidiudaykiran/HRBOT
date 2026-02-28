import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#090909] text-white leading-relaxed [background-image:radial-gradient(circle_at_20%_-10%,rgba(200,255,0,0.08),transparent_35%),radial-gradient(circle_at_80%_120%,rgba(0,255,204,0.05),transparent_40%)]">
      <Navbar />

      <main className="px-5 pb-16 pt-[120px] md:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <p className="mb-3 text-[11px] uppercase tracking-[2px] text-[#c8ff00]">About OnboardIQ</p>
            <h1 className="font-['Syne'] text-[clamp(30px,5vw,52px)] font-extrabold leading-[1.1] tracking-[-1.5px]">Why We Built This</h1>
            <p className="mt-4 text-lg text-white/75">Because no new joiner should feel lost on their first day.</p>
          </div>

          <section className="space-y-7">
            <article className="rounded-2xl border border-white/10 bg-[#111111] p-6 md:p-8">
              <h2 className="mb-4 font-['Syne'] text-2xl font-bold">The Problem</h2>
              <p className="text-white/80">Starting a new job is one of the most exciting moments of your career — but it can also be one of the most overwhelming. You've just received your offer letter, and suddenly you're buried under a 60-page employee handbook, waiting 3 days for HR to reply to a basic question, and expected to know every policy before you've even found your desk.</p>
              <p className="mt-4 text-white/80">Most companies haven't solved this. They hand you a document and hope for the best.</p>
              <p className="mt-4 text-white/80">We thought there had to be a better way.</p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-[#111111] p-6 md:p-8">
              <h2 className="mb-4 font-['Syne'] text-2xl font-bold">What We Built</h2>
              <p className="text-white/80">OnboardIQ is an AI-powered HR Policy Assistant designed specifically for newly placed employees. You select your company, and our bot instantly becomes your personal guide — explaining leave policies, attendance rules, onboarding steps, and employee benefits in plain, simple language.</p>
              <p className="mt-4 text-white/80">No jargon. No scrolling through endless PDFs. Just ask, and get a clear answer in seconds.</p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-[#111111] p-6 md:p-8">
              <h2 className="mb-4 font-['Syne'] text-2xl font-bold">What Makes Us Different</h2>
              <p className="text-white/80">Unlike generic HR chatbots, OnboardIQ is company-specific. Whether you've just landed a role at Google, Infosys, or Deloitte, the bot speaks the language of your workplace. It knows your company's policies, not someone else's.</p>
              <p className="mt-4 text-white/80">And because we believe AI should be used responsibly, our bot is strictly informational. It will never approve a leave request, process payroll, or make decisions on behalf of HR. It's your explainer, not your manager.</p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-[#111111] p-6 md:p-8">
              <h2 className="mb-4 font-['Syne'] text-2xl font-bold">Our Core Beliefs</h2>
              <ul className="space-y-3 text-white/80">
                <li><span className="font-semibold text-[#dfff72]">Clarity over complexity</span> — Every policy should be understandable by every employee, regardless of their background or experience level.</li>
                <li><span className="font-semibold text-[#dfff72]">Speed over waiting</span> — You shouldn't have to wait days to understand your own benefits.</li>
                <li><span className="font-semibold text-[#dfff72]">Safety over shortcuts</span> — AI should assist humans, never replace the human judgment that HR decisions require.</li>
              </ul>
            </article>

            <article className="rounded-2xl border border-white/10 bg-[#111111] p-6 md:p-8">
              <h2 className="mb-4 font-['Syne'] text-2xl font-bold">The Technology Behind It</h2>
              <p className="text-white/80">OnboardIQ is powered by Google's Gemini Flash model, accessed through Google AI Studio. The interface is built with Streamlit, keeping things fast, lightweight, and accessible right from your browser. The system is designed with strict prompt boundaries to ensure the bot stays informational and never oversteps.</p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-[#111111] p-6 md:p-8">
              <h2 className="mb-4 font-['Syne'] text-2xl font-bold">Built By</h2>
              <p className="text-white/80">A team of 4 students who believed that the future of HR isn't more paperwork — it's smarter conversations.</p>
            </article>

            <blockquote className="rounded-2xl border border-[#c8ff00]/30 bg-[#c8ff00]/10 p-6 text-base italic text-white/95 md:p-8">
              "Your offer letter was just the beginning. We're here to help you understand everything that comes next."
            </blockquote>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
