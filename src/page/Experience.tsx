const EXPERIENCE = [
  {
    date: "Currently working at...",
    title: "Frontend developer",
    company: "Oncorp S. de R.L.",
    description:
      "I collaborated with a team of developers in the design and development of responsive user interfaces. I participated in the integration of microservices through REST APIs, using React and TypeScript to ensure efficient communication between the interface and the backend.",
    link: "https://twitch.tv/midudev",
  },
  /*  {
      date: "Septiembre 2022",
      title: "Principal Frontend Engineer",
      company: "Adevinta Spain",
      description:
        "Responsable de la plataforma, componentes y utilidades para la creación y desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software. Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos.",
    }, */
];

export function Experience() {
  return (
    <ol className="relative mt-16">
      {EXPERIENCE.map((experience) => (
        <li className="">
          <ExperienceItem {...experience} />
        </li>
      ))}
    </ol>
  );
}
interface ExperienceItemProps {
  title: string;
  company: string;
  description: string;
  link?: string;
  date: string;
}

export function ExperienceItem({
  title,
  company,
  description,
  link,
  date,
}: ExperienceItemProps) {
  return (
    <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
      <div className="relative pb-12 md:col-span-2">
        <div className="sticky top-0">
          <span className="text-[#be3144] dark:text-yellow-400 -left-[42px] absolute rounded-full text-5xl">
            &bull;
          </span>

          <h3 className="text-xl font-bold text-[#be3144] dark:text-yellow-400 ">
            {title}
          </h3>
          <h4 className="font-semibold text-xl text-gray-600 dark:text-white">
            {company}
          </h4>
          <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">
            {date}
          </time>
        </div>
      </div>
      <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
        {description}
        {link && (
          <a
            href="/"
            role="link"
            className="inline-flex items-center text-lg font-medium text-[#c04f5e] dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-[#be3144]"
          >
            Know more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 icon icon-tabler icon-tabler-chevron-right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <>
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
