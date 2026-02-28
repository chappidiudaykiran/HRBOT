import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const API_URL = "http://15.207.112.72:8000/ask";
const COMPANY_LABELS = {
  accenture: "Accenture",
  cisco: "Cisco",
  google: "Google",
  infosys: "Infosys",
  microsoft: "Microsoft",
  tcs: "TCS",
};

const SUPPORTED_LANGUAGES = [
  "English",
  "Hindi",
  "Spanish",
  "French",
  "German",
  "Chinese",
  "Japanese",
  "Korean",
  "Tamil",
  "Telugu",
];

const normalizeCompany = (companyValue) => {
  const value = (companyValue || "").toLowerCase();
  return COMPANY_LABELS[value] ? value : "google";
};

const renderInlineText = (text) => {
  const chunks = text.split(/(\*\*[^*]+\*\*)/g);

  return chunks.map((chunk, index) => {
    const isBold = chunk.startsWith("**") && chunk.endsWith("**");
    if (!isBold) return <span key={`${chunk}-${index}`}>{chunk}</span>;

    return (
      <strong key={`${chunk}-${index}`} className="font-semibold text-[#d7ff66]">
        {chunk.slice(2, -2)}
      </strong>
    );
  });
};

const renderBotMessage = (text) => {
  const lines = text.split("\n");

  return (
    <div className="space-y-2">
      {lines.map((rawLine, index) => {
        const line = rawLine.trim();
        if (!line) return <div key={`empty-${index}`} className="h-1" />;

        if (/^###\s+/.test(line)) {
          return (
            <h3 key={`h3-${index}`} className="mt-2 rounded-lg bg-white/5 px-2 py-1 text-[13px] font-bold text-[#e8ffa1]">
              {renderInlineText(line.replace(/^###\s+/, ""))}
            </h3>
          );
        }

        if (/^[-*]\s+/.test(line)) {
          return (
            <div key={`ul-${index}`} className="flex items-start gap-2 text-[14px] text-white/95">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8ff00]" />
              <p>{renderInlineText(line.replace(/^[-*]\s+/, ""))}</p>
            </div>
          );
        }

        if (/^\d+\.\s+/.test(line)) {
          const number = line.match(/^\d+/)?.[0] || "";
          const content = line.replace(/^\d+\.\s+/, "");

          return (
            <div key={`ol-${index}`} className="flex items-start gap-2 text-[14px] text-white/95">
              <span className="mt-0.5 min-w-[18px] text-[#c8ff00]">{number}.</span>
              <p>{renderInlineText(content)}</p>
            </div>
          );
        }

        return (
          <p key={`p-${index}`} className="text-[14px] leading-relaxed text-white/95">
            {renderInlineText(line)}
          </p>
        );
      })}
    </div>
  );
};

export default function ChatPage() {
  const navigate = useNavigate();
  const { companyName } = useParams();
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("query") || "";
  const hasAutoSearched = useRef(false);
  const selectedCompany = useMemo(() => normalizeCompany(decodeURIComponent(companyName || "google")), [companyName]);
  const selectedCompanyLabel = COMPANY_LABELS[selectedCompany];

  const [input, setInput] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: `Hi! I'm your HR Policy ExplainerBot for ${selectedCompanyLabel}. Ask me anything about onboarding, leaves, policies, and compliance.`,
    },
  ]);

  const sendQuestion = async (questionText) => {
    const trimmedInput = questionText.trim();
    if (!trimmedInput || isLoading) return;

    setMessages((previousMessages) => [...previousMessages, { role: "user", text: trimmedInput }]);
    setInput("");

    try {
      setIsLoading(true);

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company: selectedCompany,
          query: trimmedInput,
          language: selectedLanguage,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      const answerText = data?.answer || "No answer received from the server.";

      setMessages((previousMessages) => [...previousMessages, { role: "bot", text: answerText }]);
    } catch (error) {
      const errorMessage =
        error?.message === "Failed to fetch"
          ? "Network/CORS error: request could not reach API Gateway. Check CORS and endpoint availability."
          : `API error: ${error?.message || "Unknown error"}`;

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          role: "bot",
          text: errorMessage,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    await sendQuestion(input);
  };

  useEffect(() => {
    if (!initialQuery || hasAutoSearched.current) return;

    hasAutoSearched.current = true;
    sendQuestion(initialQuery);
  }, [initialQuery]);

  return (
    <div className="min-h-screen bg-[#090909] px-5 py-8 text-white md:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:flex-row md:items-center md:justify-between md:p-5">
          <div>
            <p className="text-[11px] uppercase tracking-[2px] text-[#c8ff00]">Selected Company</p>
            <h1 className="font-['Syne'] text-2xl font-bold md:text-3xl">{selectedCompanyLabel} HR Chatbot</h1>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-medium text-white/70">Language</span>
              <select
                value={selectedLanguage}
                onChange={(event) => setSelectedLanguage(event.target.value)}
                className="h-10 rounded-lg border border-white/15 bg-[#121212] px-3 text-[13px] text-white outline-none"
              >
                {SUPPORTED_LANGUAGES.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Back
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">
          <div className="h-[62vh] space-y-3 overflow-y-auto p-4 md:p-6">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[85%] rounded-xl px-4 py-3 text-[14px] leading-relaxed ${
                  message.role === "user"
                    ? "ml-auto border border-white/10 bg-white/[0.07] text-white/90"
                    : "border border-[#c8ff00]/20 bg-[#c8ff00]/10 text-white"
                }`}
              >
                {message.role === "bot" && (
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[1px] text-[#c8ff00]">HR Bot</p>
                )}
                {message.role === "bot" ? renderBotMessage(message.text) : <p className="whitespace-pre-wrap">{message.text}</p>}
              </div>
            ))}

            {isLoading && (
              <div className="max-w-[85%] rounded-xl border border-[#c8ff00]/20 bg-[#c8ff00]/10 px-4 py-3 text-[14px] leading-relaxed text-white">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[1px] text-[#c8ff00]">HR Bot</p>
                Thinking...
              </div>
            )}
          </div>

          <div className="border-t border-white/10 bg-[#0f0f0f] p-4 md:p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSend();
                  }
                }}
                placeholder="Type your onboarding or policy question..."
                className="h-12 flex-1 rounded-xl border border-white/10 bg-[#121212] px-4 text-[14px] text-white outline-none placeholder:text-white/50"
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={isLoading}
                className="h-12 rounded-xl bg-[#c8ff00] px-6 font-['Syne'] text-[14px] font-bold text-black shadow-[0_12px_26px_rgba(200,255,0,0.25)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
