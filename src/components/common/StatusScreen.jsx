import { LogoMark } from "./Logo/Logo";

/** Full-height centred message used by the 404 and error pages. */
export default function StatusScreen({ code, title, text, children }) {
  return (
    <section className="grid min-h-[70vh] place-content-center justify-items-center gap-1.5 px-5 py-20 text-center">
      <LogoMark size={72} />
      {code && (
        <span className="text-gradient mt-3.5 font-display text-[clamp(90px,16vw,160px)] leading-none font-extrabold tracking-[-0.06em]">
          {code}
        </span>
      )}
      <h1 className="mt-2.5 text-[clamp(28px,4vw,42px)] font-extrabold">{title}</h1>
      <p className="max-w-[460px] text-muted">{text}</p>
      <div className="mt-[18px] flex flex-wrap justify-center gap-3">{children}</div>
    </section>
  );
}
