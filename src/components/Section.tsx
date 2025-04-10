type SectionProps = {
  children: React.ReactNode;
  id: string;
  className?: string;
};
export function Section({ children, id, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`section ${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl`}
    >
      {children}
    </section>
  );
}
