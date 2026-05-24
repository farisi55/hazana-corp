import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { Headset, Loader2, MessageCircle, Send, ShieldCheck, X } from 'lucide-react';
import logoImg from '../assets/images/logo.png';
import './CSChatWidget.css';

type ChatRole = 'assistant' | 'user';

type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

type PuterChatMessage = {
  role: 'system' | 'assistant' | 'user';
  content: string;
};

const WELCOME_MESSAGE = 'Assalamu\u2019alaikum, selamat datang di Hazana Corp. Ada yang bisa kami bantu?';
const LOGIN_NOTICE = 'Silahkan connect dengan Google Account Anda untuk melanjutkan chat dengan CS kami.';
const ERROR_MESSAGE =
  'Mohon maaf, CS Assistant sedang mengalami gangguan. Silakan coba beberapa saat lagi atau hubungi kami melalui Instagram.';

const SYSTEM_PROMPT = `
Anda adalah Hazana CS Assistant, customer service resmi Hazana Corp. Jawab dengan bahasa Indonesia yang sopan, profesional, ramah, dan ringkas. Fokus menjelaskan layanan Hazana Corp, business units, IT consulting, digital marketing, branding, e-commerce, halal business advisory, dan informasi umum perusahaan. Jika user bertanya tentang harga, kerja sama, atau project khusus, arahkan untuk menghubungi tim Hazana Corp secara resmi melalui form kontak atau Instagram. Jangan membuat klaim berlebihan. Jangan memberikan informasi hukum, finansial, atau teknis yang tidak pasti tanpa menyarankan konsultasi lebih lanjut.

Context Knowledge:
Hazana Corp is an integrated business group inspired by Islamic values and driven by innovation. Hazana Corp brings together diverse yet complementary business units under one trusted umbrella to serve communities with excellence, integrity, and purpose.

Tagline:
"Empowering Daily Life with Smart, Halal, and Digital Solutions"

Business Units:
- Hazza Store: Online Retail & E-commerce
- Hazza Travel: Halal Tourism & Travel Packages
- Hazza Properti: Syariah Housing & Furniture
- Hazza Solusindo: IT & App Development Solutions
- Hazza Agency: Digital Media & Social Content
- Hazza FNB: Food & Beverage - Upcoming

Services:
- Web & App Development
- Social Media / Viral Content
- E-commerce Operations
- Branding & Design
- Digital Ads
- Halal Business Advisory
- Social Media Marketing
- Brand Consulting
- Market Research
- Advertising
- Product Marketing
- Training
- Business Consulting
- IT Consulting

Company Info:
- Industry: Holding Company / Perusahaan Induk
- Company Size: 2-10 employees
- Headquarters: Bogor, Jawa Barat, Indonesia
- Founded: 2019
- Instagram: https://www.instagram.com/hazza.storeid/
`.trim();

function createMessage(role: ChatRole, content: string): ChatMessage {
  const id = typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
  return { id, role, content };
}

function getPuter() {
  return typeof window !== 'undefined' ? window.puter : undefined;
}

function readAIResponse(response: unknown): string {
  if (typeof response === 'string') return response;
  if (response && typeof response === 'object') {
    const possible = response as { message?: unknown; text?: unknown; content?: unknown; result?: unknown };
    if (typeof possible.message === 'string') return possible.message;
    if (typeof possible.text === 'string') return possible.text;
    if (typeof possible.content === 'string') return possible.content;
    if (typeof possible.result === 'string') return possible.result;
  }

  return '';
}

export default function CSChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSdkReady, setIsSdkReady] = useState(false);
  const [sdkFailed, setSdkFailed] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>(() => [createMessage('assistant', WELCOME_MESSAGE)]);
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  const refreshAuthState = useCallback(() => {
    const puter = getPuter();
    if (!puter?.auth?.isSignedIn) {
      setIsConnected(false);
      return false;
    }

    try {
      const signedIn = Boolean(puter.auth.isSignedIn());
      setIsConnected(signedIn);
      return signedIn;
    } catch {
      setIsConnected(false);
      return false;
    }
  }, []);

  useEffect(() => {
    let attempts = 0;
    let timeoutId: number | undefined;

    const checkSdk = () => {
      attempts += 1;
      const puter = getPuter();

      if (puter?.auth?.isSignedIn && puter?.auth?.signIn && puter?.ai?.chat) {
        setIsSdkReady(true);
        setSdkFailed(false);
        refreshAuthState();
        return;
      }

      if (attempts < 20) {
        timeoutId = window.setTimeout(checkSdk, 400);
        return;
      }

      setSdkFailed(true);
      setIsSdkReady(false);
      setIsConnected(false);
    };

    checkSdk();

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [refreshAuthState]);

  useEffect(() => {
    if (!isOpen) return;
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [isOpen, messages, isLoading]);

  const chatDisabled = useMemo(
    () => !isSdkReady || !isConnected || isConnecting || isLoading,
    [isSdkReady, isConnected, isConnecting, isLoading],
  );

  const handleConnect = async () => {
    const puter = getPuter();
    if (!puter?.auth?.signIn) {
      setSdkFailed(true);
      return;
    }

    setIsConnecting(true);
    try {
      await puter.auth.signIn();
      refreshAuthState();
    } catch {
      setMessages((current) => [...current, createMessage('assistant', ERROR_MESSAGE)]);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleSend = async () => {
    const text = input.trim();
    if (!text || chatDisabled) return;

    const puter = getPuter();
    if (!puter?.ai?.chat) {
      setSdkFailed(true);
      return;
    }

    const userMessage = createMessage('user', text);
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput('');
    setIsLoading(true);

    const puterMessages: PuterChatMessage[] = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...nextMessages.map((message) => ({
        role: message.role,
        content: message.content,
      })),
    ];

    try {
      const response = await puter.ai.chat(puterMessages);
      const responseText = readAIResponse(response) || ERROR_MESSAGE;
      setMessages((current) => [...current, createMessage('assistant', responseText)]);
    } catch {
      setMessages((current) => [...current, createMessage('assistant', ERROR_MESSAGE)]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      void handleSend();
    }
  };

  return (
    <div className="cs-chat-widget" aria-live="polite">
      {isOpen ? (
        <section className="cs-chat-panel" aria-label="Hazana CS Assistant">
          <header className="cs-chat-header">
            <div className="cs-chat-agent">
              <div className="cs-chat-avatar">
                <img src={logoImg} alt="Hazana Corp" />
              </div>
              <div>
                <h2>Hazana CS Assistant</h2>
                <p>
                  <span className="cs-chat-status-dot" />
                  Online Support
                </p>
              </div>
            </div>
            <button type="button" className="cs-chat-close" aria-label="Tutup chat" onClick={() => setIsOpen(false)}>
              <X size={18} aria-hidden="true" />
            </button>
          </header>

          <div className="cs-chat-body">
            <div className="cs-chat-trust">
              <ShieldCheck size={15} aria-hidden="true" />
              <span>Official support channel by Hazana Corp</span>
            </div>

            {!isConnected ? (
              <div className="cs-chat-notice">
                <p>{LOGIN_NOTICE}</p>
                <button type="button" onClick={handleConnect} disabled={!isSdkReady || sdkFailed || isConnecting}>
                  {isConnecting ? (
                    <>
                      <Loader2 size={16} className="cs-chat-spin" aria-hidden="true" />
                      Connecting...
                    </>
                  ) : (
                    'Connect Google Account'
                  )}
                </button>
                {sdkFailed ? (
                  <span className="cs-chat-sdk-warning">Puter AI belum tersedia. Periksa koneksi atau coba refresh halaman.</span>
                ) : null}
              </div>
            ) : null}

            <div className="cs-chat-messages">
              {messages.map((message) => (
                <div key={message.id} className={`cs-chat-row cs-chat-row-${message.role}`}>
                  <div className={`cs-chat-bubble cs-chat-bubble-${message.role}`}>{message.content}</div>
                </div>
              ))}

              {isLoading ? (
                <div className="cs-chat-row cs-chat-row-assistant">
                  <div className="cs-chat-bubble cs-chat-bubble-assistant cs-chat-typing">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              ) : null}

              <div ref={messageEndRef} />
            </div>
          </div>

          <footer className="cs-chat-input-area">
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleInputKeyDown}
              placeholder={isConnected ? 'Tulis pesan Anda...' : 'Connect account untuk mulai chat'}
              disabled={chatDisabled}
              rows={1}
              aria-label="Tulis pesan chat"
            />
            <button type="button" onClick={handleSend} disabled={chatDisabled || !input.trim()} aria-label="Kirim pesan">
              {isLoading ? <Loader2 size={18} className="cs-chat-spin" aria-hidden="true" /> : <Send size={18} aria-hidden="true" />}
            </button>
          </footer>
        </section>
      ) : null}

      <button
        type="button"
        className={`cs-chat-launcher${isOpen ? ' cs-chat-launcher-open' : ''}`}
        aria-label={isOpen ? 'Tutup Hazana CS Assistant' : 'Buka Hazana CS Assistant'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X size={25} aria-hidden="true" /> : <MessageCircle size={28} aria-hidden="true" />}
        {!isOpen ? (
          <span className="cs-chat-launcher-badge" aria-hidden="true">
            <Headset size={13} />
          </span>
        ) : null}
      </button>
    </div>
  );
}
