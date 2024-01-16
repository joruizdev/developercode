import { Astro, Html5, Tailwind, React, Redux, Aws, PostgresSQL, Node } from "../Icons";

function Project() {
  const PROJECTS = [
    {
      title: "Página web Medicos Salud",
      description: "Página web realizada para la empresa para la cual trabajo.",
      technology: [
        {
          name: "Html5",
          icon: <Html5 />,
        },
        {
          name: "Tailwind",
          icon: <Tailwind />,
        },
        {
          name: "Astro",
          icon: <Astro />,
        },
        {
          name: "React",
          icon: <React />,
        }
      ],
      image: "/images/website-medicossalud.png",
      url: "https://www.medicossalud.com",
    },
    {
      title: "Reserva de citas",
      description: "Sistema web para gestionar las citas del servicio de exámenes médicos para brevetes y el tiempo de atención de cada postulante.",
      technology: [
        {
          name: "Html5",
          icon: <Html5 />,
        },
        {
          name: "Tailwind",
          icon: <Tailwind />,
        },
        {
          name: "Redux",
          icon: <Redux />,
        },
        {
          name: "React",
          icon: <React />,
        },
        {
          name: "Node JS",
          icon: <Node />,
        },
        {
          name: "PostgresSQL",
          icon: <PostgresSQL />,
        },
        {
          name: "AWS",
          icon: <Aws />,
        }
      ],
      image: "/images/mtc2-medicossalud.png",
      url: "http://www.manager.medicossalud.com",
    }
  ]

  return (
    <section class="bg-center pb-24">
      <h2
        id="projects"
        class="text-center text-3xl text-fountain-blue-500 pb-5"
      >
        Proyectos
      </h2>
      <div class="grid xl:grid-cols-3 gap-5 ">
        {PROJECTS.map(({ url, image, title, description, technology }) => {
          return (
            <article class="rounded-md bg-slate-700 mx-5">
              <a href={url}>
                <img class="rounded-t-md w-full" src={image} alt={title} />
              </a>
              <footer class="text-[#EEEEEE]">
                <h3 class="p-2 text-xl">{title}</h3>
                <p class="p-2">{description}</p>
                <div className="p-2 pt-4">
                  {
                    <div className="flex gap-4 items-center flex-wrap">
                      {technology?.map(({ icon, name }) => (
                        <span className=" hover:text-primary text-fountain-blue-500 transition-all ease-in-out duration-200 flex gap-2 text-sm items-center">
                          {icon}
                          {name}
                        </span>
                      ))}
                    </div>
                  }
                </div>
              </footer>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Project;
