type TitleSectionProps = {
  children: React.ReactNode;
};

export function TitleSection({ children }: TitleSectionProps) {
  return (
    <h2
      className={`flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white`}
    >
      {children}
    </h2>
  );
}
