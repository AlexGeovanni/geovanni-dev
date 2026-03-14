export interface IJob {
  title: string;
  tags: string[];
  description: string;
  year: number;
  pathImg: string;
  link?: string;
}

export const data_jobs:IJob[] =[
    {
        title:"Sorteos el viejon",
        tags:["Maquetado", "Desarrollo Frontend", "Diseño"],
        description:"Un diseño de una landing page como parte de una prueba técnica previa a la incorporación a la empresa.",
        year:2025,
        pathImg:"/works/landing-viejon.png",
        link:""
    },
    {
        title:"Sphere",
        tags:["Maquetado", "Desarrollo Frontend"],
        description:"Un diseño de una landing page como parte de una prueba técnica previa a la incorporación a la empresa.",
        year:2024,
        pathImg:"/works/landing-b.png",
        link:""
    },
    
]

// export experience_data =[
//     {
//         id:1,
//         company:"B life",
//         title:"Desarrollador Frontend",
//         date:"2024 - 2025",
//         desc:"Desarrollo interfaces web con tecnologías modernas, creando soluciones útiles que combinan diseño y rendimiento para mejorar la experiencia del usuario."
//     }
// ]
