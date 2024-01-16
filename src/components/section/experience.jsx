import { Aws, Node, PstgresSQL, React, Redux } from "../Icons";
function About() {
  const EXPERIENCE = [
    {
      title: "Jefe de sistemas",
      subTitle: "Implementación de sistema",
      dateInit: "2022",
      dateEnd: "2024",
      company: "MEDICOS SALUD",
      description:
        "Desarrollé un sistema de control de atenciones para el servicio de exámenes médicos para brevetes. El sistema realiza el registro de citas, reprogramaciones, control de ingresos, control del tiempo de atención de cada paciente y reportes diversos.",
      technology: "ReactJS, Redux, NodeJS, PostgresSQL, AWS Lightsail",
      description2: "Las tecnologías que se usaron para este proyecto fueron:"
    },
    {
      title: "Jefe de sistemas",
      subTitle: "Mejora en el sistema ocupacional",
      dateInit: "2021",
      dateEnd: "2021",
      company: "MEDICOS SALUD",
      description:
        "Llevé la gestión de mejora del sistema ocupacional en cuanto a la gestión de exámenes médicos conjuntamente con el proveedor, se implementarón nuevos formatos y se mejoró el control de ingresos",
      technology: "Php, MySQL",
    },
    {
      title: "Jefe de sistemas",
      subTitle: "Renovación de equipos",
      dateInit: "2021",
      dateEnd: "2021",
      company: "MEDICOS SALUD",
      description:
        "Llevé la gestión de mejora de los equipos tecnológicos de la empresa, se renovaron 40 computadoras y 60 celulares (dentro de las 07 sedes que posee la empresa), se mejoró la sala de reuniones con equipos multimedia y se adquirió un servidor NAS para la gestión de archivos",
      technology: "Php, MySQL",
    },
    {
      title: "Analista de sistemas",
      subTitle: "Implementación de infraestructura de red",
      dateInit: "2021",
      dateEnd: "2019",
      company: "MEDICOS SALUD",
      description:
        "Implementé la infraestructura de red de 03 sedes ubicadas en los departamentos de Arequipa, Cerro de Pasco y Marcona respectivamente, teniendo en cuenta los estandares de conexion de red.",
      technology: "",
    },
  ];
  return (
    <section class="bg-center pb-24">
      <h2 id="experience" class="text-center text-4xl text-fountain-blue-500 pb-5">
        Experiencia
      </h2>
      {EXPERIENCE.map(
        ({
          title,
          dateInit,
          dateEnd,
          description,
          technology,
          subTitle,
          company,
          technologydos,
          description2
        }) => {
          return (
            <div class="px-5 py-5">
              <div class="flex text-[#EEEEEE] gap-4">
                <div class="border border-l-0.5 border-cyan-500 rounded-md"></div>
                <div>
                  <h3 class="text-2xl ">{title}</h3>
                  <div class="text-sm py-1 rounded-md flex items-center gap-2 w-50 text-primary">
                    <span>{company}</span>
                    <span>{dateInit}</span>
                    <span>-</span>
                    <span>{dateEnd}</span>
                  </div>
                  <h4 class="pt-5 pb-3">{subTitle}</h4>
                  <p class=" pb-4">{description}</p>
                  <p class=" pb-4">{description2}</p>
                  <p class=" pb-4">{technology}</p>
                </div>
              </div>
            </div>
          );
        },
      )}
    </section>
  );
}

export default About;
