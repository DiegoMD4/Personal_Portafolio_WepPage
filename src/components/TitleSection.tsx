type TitleSectionProps = {
  children: React.ReactNode;
  num?: string;
};

export function TitleSection({ children, num }: TitleSectionProps) {
  return (
    <h2 className="flex items-center mb-8 text-3xl md:text-[34px] font-bold font-display gap-x-3.5 text-day-text dark:text-night-text">
      {num && <span className="font-mono text-xl text-accent2">{num}</span>}
      {children}
    </h2>
  );
}
