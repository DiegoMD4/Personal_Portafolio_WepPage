type SectionProps = {
  children: React.ReactNode;
  id: string;
  className?: string;
};
export function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`section ${className} scroll-m-24 w-full mx-auto container md:max-w-2xl lg:max-w-5xl`}
    >
      {children}
    </section>
  );
}
