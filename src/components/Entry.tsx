import { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

type EntryProps = {
  onEnter: () => void;
};

const PROMPT = "diego@portfolio:~$ ";

const chStyle = (chars: number) =>
  ({ "--w": `${chars}ch`, width: `${chars}ch` }) as React.CSSProperties;

export function Entry({ onEnter }: EntryProps) {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { theme, setLight, setDark } = useContext(ThemeContext);
  const [launched, setLaunched] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  const isSpanish = language === "es-ES";
  const isDark = theme === "dark";

  const t = isSpanish
    ? {
        out1: "Diego Montoya — Ing. en Informática · Full Stack Developer",
        cmd2: "stack --principal",
        cmd3: "./entrar --portafolio",
        boot1: "▸ Cargando experiencia ....... ",
        boot2: "▸ Cargando proyectos ......... ",
        boot3: "▸ Aplicando tema ............. ",
        opening: "Abriendo portafolio…",
        hint: "Haz click o toca la pantalla para entrar",
        hintAlt: "Click or tap the screen to enter",
      }
    : {
        out1: "Diego Montoya — Computer Engineer · Full Stack Developer",
        cmd2: "stack --main",
        cmd3: "./enter --portfolio",
        boot1: "▸ Loading experience ......... ",
        boot2: "▸ Loading projects ........... ",
        boot3: "▸ Applying theme ............. ",
        opening: "Opening portfolio…",
        hint: "Click or tap the screen to enter",
        hintAlt: "Haz click o toca la pantalla para entrar",
      };

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const launch = () => {
    if (launched) return;
    setLaunched(true);
    timer.current = window.setTimeout(onEnter, 2400);
  };

  const laptopTopStyle = {
    background: isDark ? "linear-gradient(180deg, #221A1C, #171113)" : "linear-gradient(180deg, #E5D8DA, #D9CCCE)",
    transform: "rotateX(3deg)",
    transformOrigin: "bottom center",
  };

  const laptopBaseStyle = {
    background: isDark ? "linear-gradient(180deg, #2A1F22, #1A1315)" : "linear-gradient(180deg, #C9BDBE, #E5D8DA)",
  };

  const laptopBottomStyle = {
    background: isDark ? "linear-gradient(180deg, #2E2225, #191315)" : "linear-gradient(180deg, #D1C6C7, #EDE7E8)",
    boxShadow: isDark ? "0 24px 50px rgba(0,0,0,.65)" : "0 24px 50px rgba(0,0,0,.35)",
  };

  const laptopShadowStyle = isDark
    ? "radial-gradient(closest-side, rgba(0,0,0,.6), transparent)"
    : "radial-gradient(closest-side, rgba(0,0,0,.25), transparent)";

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center gap-9 px-4 py-8 relative overflow-hidden ${isDark ? "bg-night" : "bg-day"} bg-grid ${launched ? "scene-out" : ""}`}
    >
      <span
        className="glow glow-drift -top-52 -left-44 w-[620px] h-[620px]"
        aria-hidden="true"
        style={{ background: "radial-gradient(closest-side, rgba(190,49,68,.32), transparent 72%)" }}
      ></span>
      <span
        className="glow glow-drift-rev -bottom-60 -right-52 w-[680px] h-[680px]"
        aria-hidden="true"
        style={{ background: "radial-gradient(closest-side, rgba(224,86,107,.18), transparent 72%)" }}
      ></span>
      <span
        className="glow glow-drift-slow top-[40%] left-[55%] w-[420px] h-[420px]"
        aria-hidden="true"
        style={{ background: "radial-gradient(closest-side, rgba(190,49,68,.16), transparent 72%)" }}
      ></span>
      <span
        className="glow glow-drift top-[30%] left-[20%] w-[300px] h-[300px]"
        aria-hidden="true"
        style={{ background: "radial-gradient(closest-side, rgba(224,86,107,.14), transparent 72%)" }}
      ></span>

      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 sm:px-10 py-6">
        <span className={`font-display font-bold text-[22px] tracking-wide ${isDark ? "text-night-text" : "text-day-text"}`}>
          DM<span className="text-accent">/</span>
        </span>
        <div className="flex items-center gap-3.5">
          <button
            onClick={changeLanguage}
            aria-label={isSpanish ? "Switch to English" : "Cambiar a español"}
            className={`flex rounded-full border overflow-hidden text-[13px] font-semibold ${isDark ? "border-night-line" : "border-day-line"}`}
          >
            <span
              className={isSpanish ? "px-3.5 py-1.5 bg-accent text-white" : `px-3.5 py-1.5 ${isDark ? "text-night-mute" : "text-day-mute"}`}
            >
              ES
            </span>
            <span
              className={!isSpanish ? "px-3.5 py-1.5 bg-accent text-white" : `px-3.5 py-1.5 ${isDark ? "text-night-mute" : "text-day-mute"}`}
            >
              EN
            </span>
          </button>
          <button
            onClick={theme === "dark" ? setLight : setDark}
            aria-label={isSpanish ? "Cambiar tema" : "Toggle theme"}
            className={`w-9 h-9 rounded-full border flex items-center justify-center ${isDark ? "border-night-line bg-night-soft text-night-text" : "border-day-line bg-day-soft text-day-text"}`}
          >
            {theme === "dark" ? <IoSunnyOutline /> : <IoMoonOutline />}
          </button>
        </div>
      </header>

      <div className="laptop-float relative z-10 flex flex-col items-center" style={{ perspective: "1500px" }}>
        <div
          className={`w-[660px] max-w-[90vw] box-border rounded-t-[20px] p-3.5 pb-[18px] relative ${isDark ? "border border-[#392B2F] border-b-0" : "border border-[#9A8C8E] border-b-0 shadow-[0_4px_12px_rgba(0,0,0,.12)]"}`}
          style={laptopTopStyle}
        >
          <div className={`absolute top-1.5 left-1/2 -ml-[3px] w-1.5 h-1.5 rounded-full border ${isDark ? "bg-night border-[#3C2D31]" : "bg-[#D9CCCE] border-[#9A8C8E]"}`}></div>
          <div
            className={`laptop-display box-border rounded-[9px] relative overflow-hidden font-mono text-[clamp(8px,2.05vw,14.5px)] leading-[2] ${isDark ? "bg-[#0A0607] border border-night-line text-night-text" : "bg-[#FFFFFF] border border-[#9A8C8E] text-day-text shadow-[0_8px_24px_rgba(0,0,0,.12)]"}`}
            style={{ aspectRatio: "16 / 9.6" }}
          >
            {!launched ? (
              <button
                key={language}
                onClick={launch}
                aria-label={isSpanish ? "Encender y entrar al portafolio" : "Power on and enter the portfolio"}
                className={`absolute inset-0 w-full text-left px-4 py-3 sm:px-7 sm:py-[22px] cursor-pointer transition-transform active:scale-[.985] ${isDark ? "text-night-text" : "text-day-text"}`}
              >
                <span className="flex gap-[7px] mb-3.5">
                  <span className="w-[11px] h-[11px] rounded-full bg-accent inline-block"></span>
                  <span className="w-[11px] h-[11px] rounded-full bg-accent-bright inline-block"></span>
                  <span className={`w-[11px] h-[11px] rounded-full inline-block ${isDark ? "bg-[#4A3338]" : "bg-[#C9BDBE]"}`}></span>
                </span>
                <span className={`tline t1 block ${isDark ? "text-night-mute" : "text-day-mute"}`} style={chStyle(PROMPT.length + 6)}>
                  <span className="text-accent-bright">diego@portfolio</span>:~$ whoami
                </span>
                <span className={`t2 block font-medium ${isDark ? "text-night-text" : "text-day-text"}`}>{t.out1}</span>
                <span className={`tline t3 block ${isDark ? "text-night-mute" : "text-day-mute"}`} style={chStyle(PROMPT.length + t.cmd2.length)}>
                  <span className="text-accent-bright">diego@portfolio</span>:~$ {t.cmd2}
                </span>
                <span className="t4 block text-accent-bright">React · TypeScript · Next.js · Node.js · Firebase</span>
                <span className="block">
                  <span
                    className={`tline t5 inline-block align-bottom ${isDark ? "text-night-mute" : "text-day-mute"}`}
                    style={chStyle(PROMPT.length + t.cmd3.length)}
                  >
                    <span className="text-accent-bright">diego@portfolio</span>:~$ {t.cmd3}
                  </span>{" "}
                  <span className="cursor-late"></span>
                </span>
                <span className="tap-wrap absolute left-1/2 bottom-9 w-[60px] h-[60px] -ml-[30px] block">
                  <span className="tap-ring absolute inset-0 border-2 border-accent rounded-full"></span>
                  <span className="absolute inset-[19px] rounded-full bg-accent-bright"></span>
                </span>
              </button>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6">
                <span className="wipe" aria-hidden="true"></span>
                <div className="w-[340px] max-w-[90%] flex flex-col text-[0.93em]">
                  <span className={`b0 ${isDark ? "text-night-mute" : "text-day-mute"}`}>
                    <span className="text-accent-bright">$</span> {t.cmd3}
                  </span>
                  <span className={`b1 ${isDark ? "text-night-body" : "text-day-body"}`}>
                    {t.boot1}
                    <span className="text-accent-bright font-semibold">OK</span>
                  </span>
                  <span className={`b2 ${isDark ? "text-night-body" : "text-day-body"}`}>
                    {t.boot2}
                    <span className="text-accent-bright font-semibold">OK</span>
                  </span>
                  <span className={`b3 ${isDark ? "text-night-body" : "text-day-body"}`}>
                    {t.boot3}
                    <span className="text-accent-bright font-semibold">OK</span>
                  </span>
                </div>
                <span className={`bar-track block w-[340px] max-w-[90%] h-[7px] rounded-full overflow-hidden ${isDark ? "bg-night-line2" : "bg-[#D8CBCC]"}`}>
                  <span className="bar"></span>
                </span>
                <span className={`b4 text-[0.9em] ${isDark ? "text-night-mute" : "text-day-mute"}`}>{t.opening}</span>
              </div>
            )}
          </div>
        </div>
        <div
          className={`w-[660px] max-w-[90vw] h-3 box-border border-b-0 ${isDark ? "border border-[#392B2F]" : "border border-[#C9BDBE]"}`}
          style={laptopBaseStyle}
        ></div>
        <div
          className={`w-[790px] max-w-[97vw] h-[22px] box-border rounded-b-[18px] rounded-t-[3px] relative border ${isDark ? "border-[#392B2F]" : "border-[#C9BDBE]"}`}
          style={laptopBottomStyle}
        >
          <span className={`absolute top-0 left-1/2 w-[130px] -ml-[65px] h-2 rounded-b-[9px] ${isDark ? "bg-[#120D0E]" : "bg-[#9A8C8E]"}`}></span>
        </div>
        <div
          aria-hidden="true"
          className="w-[560px] max-w-[80vw] h-6 mt-[18px] rounded-full"
          style={{ background: laptopShadowStyle }}
        ></div>
      </div>

      <div className="hint-wrap relative z-10 flex flex-col items-center gap-2 text-center">
        <p className={`hint m-0 text-[17px] font-semibold font-display ${isDark ? "text-night-text" : "text-day-text"}`}>{t.hint}</p>
        <p className={`m-0 text-[13.5px] ${isDark ? "text-night-mute" : "text-day-mute"}`}>{t.hintAlt}</p>
      </div>
    </div>
  );
}
