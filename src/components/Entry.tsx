import { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

type EntryProps = {
  onEnter: () => void;
};

export function Entry({ onEnter }: EntryProps) {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { theme, setLight, setDark } = useContext(ThemeContext);
  const [launched, setLaunched] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  const isSpanish = language === "es-ES";

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const launch = () => {
    if (launched) return;
    setLaunched(true);
    timer.current = window.setTimeout(onEnter, 2400);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center gap-9 px-4 py-8 relative overflow-hidden bg-night bg-grid dark ${
        launched ? "scene-out" : ""
      }`}
    >
      <span
        className="glow glow-drift -top-52 -left-44 w-[620px] h-[620px]"
        aria-hidden="true"
        style={{ background: "radial-gradient(closest-side, rgba(190,49,68,.24), transparent 72%)" }}
      ></span>
      <span
        className="glow glow-drift-rev -bottom-60 -right-52 w-[680px] h-[680px]"
        aria-hidden="true"
        style={{ background: "radial-gradient(closest-side, rgba(250,204,21,.1), transparent 72%)" }}
      ></span>
      <span
        className="glow glow-drift-slow top-[40%] left-[55%] w-[420px] h-[420px]"
        aria-hidden="true"
        style={{ background: "radial-gradient(closest-side, rgba(190,49,68,.11), transparent 72%)" }}
      ></span>

      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 sm:px-10 py-6">
        <span className="font-display font-bold text-[22px] text-night-text tracking-wide">
          DM<span className="text-accent">/</span>
        </span>
        <div className="flex items-center gap-3.5">
          <button
            onClick={changeLanguage}
            aria-label={isSpanish ? "Switch to English" : "Cambiar a español"}
            className="flex rounded-full border border-night-line overflow-hidden text-[13px] font-semibold"
          >
            <span className={isSpanish ? "px-3.5 py-1.5 bg-accent text-white" : "px-3.5 py-1.5 text-night-mute"}>
              ES
            </span>
            <span className={!isSpanish ? "px-3.5 py-1.5 bg-accent text-white" : "px-3.5 py-1.5 text-night-mute"}>
              EN
            </span>
          </button>
          <button
            onClick={theme === "dark" ? setLight : setDark}
            aria-label={isSpanish ? "Cambiar tema" : "Toggle theme"}
            className="w-9 h-9 rounded-full border border-night-line bg-night-soft flex items-center justify-center text-night-text"
          >
            {theme === "dark" ? <IoSunnyOutline /> : <IoMoonOutline />}
          </button>
        </div>
      </header>

      <div className="laptop-float relative z-10 flex flex-col items-center" style={{ perspective: "1500px" }}>
        <div
          className="w-[660px] max-w-[90vw] box-border border border-[#392B2F] border-b-0 rounded-t-[20px] p-3.5 pb-[18px] relative"
          style={{
            background: "linear-gradient(180deg, #221A1C, #171113)",
            transform: "rotateX(3deg)",
            transformOrigin: "bottom center",
          }}
        >
          <div className="absolute top-1.5 left-1/2 -ml-[3px] w-1.5 h-1.5 rounded-full bg-night border border-[#3C2D31]"></div>
          <div
            className="laptop-display box-border bg-[#0A0607] rounded-[9px] border border-night-line relative overflow-hidden font-mono text-[14.5px] leading-[2]"
            style={{ aspectRatio: "16 / 9.6" }}
          >
            {!launched ? (
              <button
                onClick={launch}
                aria-label={isSpanish ? "Encender y entrar al portafolio" : "Power on and enter the portfolio"}
                className="absolute inset-0 w-full text-left px-7 py-[22px] text-night-text cursor-pointer transition-transform active:scale-[.985]"
              >
                <span className="flex gap-[7px] mb-3.5">
                  <span className="w-[11px] h-[11px] rounded-full bg-accent inline-block"></span>
                  <span className="w-[11px] h-[11px] rounded-full bg-accent2 inline-block"></span>
                  <span className="w-[11px] h-[11px] rounded-full bg-[#4A3338] inline-block"></span>
                </span>
                <span className="tline t1 block text-night-mute">
                  <span className="text-accent-bright">diego@portfolio</span>:~$ whoami
                </span>
                <span className="t2 block text-night-text font-medium">
                  Diego Montoya — Ing. en Informática · Full Stack Developer
                </span>
                <span className="tline t3 block text-night-mute">
                  <span className="text-accent-bright">diego@portfolio</span>:~$ stack --principal
                </span>
                <span className="t4 block text-accent2">React · TypeScript · Next.js · Node.js · Firebase</span>
                <span className="block">
                  <span className="tline t5 inline-block align-bottom text-night-mute">
                    <span className="text-accent-bright">diego@portfolio</span>:~$ ./entrar --portafolio
                  </span>{" "}
                  <span className="cursor-late"></span>
                </span>
                <span className="tap-wrap absolute left-1/2 bottom-9 w-[60px] h-[60px] -ml-[30px] block">
                  <span className="tap-ring absolute inset-0 border-2 border-accent rounded-full"></span>
                  <span className="absolute inset-[19px] rounded-full bg-accent2"></span>
                </span>
              </button>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6">
                <span className="wipe" aria-hidden="true"></span>
                <div className="w-[340px] max-w-[90%] flex flex-col text-[13.5px]">
                  <span className="b0 text-night-mute">
                    <span className="text-accent-bright">$</span> ./entrar --portafolio
                  </span>
                  <span className="b1 text-night-body">
                    ▸ Cargando experiencia ....... <span className="text-accent2 font-semibold">OK</span>
                  </span>
                  <span className="b2 text-night-body">
                    ▸ Cargando proyectos ......... <span className="text-accent2 font-semibold">OK</span>
                  </span>
                  <span className="b3 text-night-body">
                    ▸ Aplicando tema ............. <span className="text-accent2 font-semibold">OK</span>
                  </span>
                </div>
                <span className="bar-track block w-[340px] max-w-[90%] h-[7px] rounded-full bg-night-line2 overflow-hidden">
                  <span className="bar"></span>
                </span>
                <span className="b4 text-night-mute text-[13px]">
                  {isSpanish ? "Abriendo portafolio…" : "Opening portfolio…"}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="w-[660px] max-w-[90vw] h-3 box-border border border-[#392B2F] border-t-0 bg-gradient-to-b from-[#2A1F22] to-night-soft"></div>
        <div className="w-[790px] max-w-[97vw] h-[22px] box-border border border-[#392B2F] rounded-b-[18px] rounded-t-[3px] relative bg-gradient-to-b from-[#2E2225] to-[#191315] shadow-[0_24px_50px_rgba(0,0,0,.65)]">
          <span className="absolute top-0 left-1/2 w-[130px] -ml-[65px] h-2 bg-[#120D0E] rounded-b-[9px]"></span>
        </div>
        <div
          aria-hidden="true"
          className="w-[560px] max-w-[80vw] h-6 mt-[18px] rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(0,0,0,.6), transparent)" }}
        ></div>
      </div>

      <div className="hint-wrap relative z-10 flex flex-col items-center gap-2 text-center">
        <p className="hint m-0 text-night-text text-[17px] font-semibold font-display">
          {isSpanish ? "Haz click o toca la pantalla para entrar" : "Click or tap the screen to enter"}
        </p>
        <p className="m-0 text-night-mute text-[13.5px]">
          {isSpanish ? "Click or tap the screen to enter" : "Haz click o toca la pantalla para entrar"}
        </p>
      </div>
    </div>
  );
}
