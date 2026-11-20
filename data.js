/* ============================================================
   DADES DEL PORTFOLI — aquí és on edites el contingut.

   IDIOMES: cada text pot ser
     - un text simple ("Excel")  → igual en tots els idiomes, o
     - { ca: "...", es: "...", en: "..." } → un per idioma.
   Si falta un idioma, es mostra el català.

   PROJECTES
   - Afegir-ne un: copia un bloc de "projects" i canvia'l.
   - Ocultar-ne un: hidden: true (el TFM hi és, ocult, fins que l'acabis).
   - "scores": importància per a cada perfil d'oferta (0-10); més alt = més amunt.
   - "team": 1 = individual; un nombre >1 = equip d'aquesta mida; "equip" = mida no indicada.
   - "spine": títol curt que surt al llom del llibre (ha de ser curt!).
   - "types": tipus de projecte → dibuix del llom: scm (supply chain), ops (operacions),
     qual (qualitat), iiot (automatització/IIoT), pm (gestió de projectes). Pot tenir-ne diversos.
   - "img": imatge per a la pàgina esquerra del llibre obert (opcional).
   - "deck": presentació en vídeo dins la web ("video" = .mp4, "poster" = imatge de portada).
   - "links": URL de la presentació o de l'informe si els vols publicar ("" = no surt).
   ============================================================ */
window.PORTFOLIO = {
  person: {
    name: "Ona Jie Bonet Garcia",
    title: {
      ca: "Enginyera industrial · Organització industrial",
      es: "Ingeniera industrial · Organización industrial",
      en: "Industrial engineer · Industrial organisation"
    },
    // Frase curta sota el nom, a la portada.
    tagline: {
      ca: "Processos, cadena de subministrament, qualitat i dades: anàlisi per prendre millors decisions a planta.",
      es: "Procesos, cadena de suministro, calidad y datos: análisis para tomar mejores decisiones en planta.",
      en: "Processes, supply chain, quality and data: analysis for better decisions on the shop floor."
    },
    // Fitxa ràpida de la portada (format de full de dades).
    stats: [
      { k: { ca: "Experiència", es: "Experiencia", en: "Experience" }, v: { ca: "2 anys de pràctiques", es: "2 años de prácticas", en: "2 years of internships" } },
      { k: { ca: "Projectes", es: "Proyectos", en: "Projects" }, v: "auto" },
      { k: { ca: "Anglès", es: "Inglés", en: "English" }, v: "B2" },
      { k: { ca: "Disponibilitat", es: "Disponibilidad", en: "Availability" }, v: { ca: "Jornada completa", es: "Jornada completa", en: "Full-time" } }
    ],
    // Projectes destacats a la portada (id del projecte + imatge).
    featured: [
      { id: "dcs-marset", img: "assets/thumbs/dcs.jpg" },
      { id: "iiot", img: "assets/thumbs/iiot.jpg" },
      { id: "tfg-msa", img: "assets/thumbs/tfg.jpg" }
    ],
    location: "Vilassar de Dalt (Barcelona)",
    mapQuery: "Vilassar de Dalt, Barcelona",
    contact: {
      email: "onabonetgarcia@gmail.com",
      linkedin: "https://www.linkedin.com/in/ona-bonet-garcia",
      cv: ""            // URL d'un PDF del CV, si el vols oferir (sense telèfon!)
    },
    about: {
      ca: "Enginyera industrial (màster en curs) especialitzada en Organització Industrial, amb 2 anys d'experiència en pràctiques en entorns industrials (automoció i tèxtil). Perfil proactiu, curiós i organitzat, amb gran capacitat d'aprenentatge i sòlides habilitats analítiques per transformar dades en recomanacions clares. Disponibilitat per a una incorporació a jornada completa, compaginable amb la finalització del màster.",
      es: "Ingeniera industrial (máster en curso) especializada en Organización Industrial, con 2 años de experiencia en prácticas en entornos industriales (automoción y textil). Perfil proactivo, curioso y organizado, con gran capacidad de aprendizaje y sólidas habilidades analíticas para transformar datos en recomendaciones claras. Disponibilidad para incorporación a jornada completa, compatible con la finalización del máster.",
      en: "Industrial engineer (Master's in progress) specialising in Industrial Organisation, with 2 years of internship experience in industrial settings (automotive and textiles). Proactive, curious and organised, a fast learner with strong analytical skills to turn data into clear recommendations. Available to start full-time while completing the Master's."
    },
    others: [
      {
        title: { ca: "Entrenadora de bàsquet · Club de Bàsquet Vilassar de Dalt", es: "Entrenadora de baloncesto · Club de Bàsquet Vilassar de Dalt", en: "Basketball coach · Club de Bàsquet Vilassar de Dalt" },
        period: "2018 – 2023",
        text: { ca: "Planificació i organització d'entrenaments i activitats, gestió de material i espais, i coordinació amb les famílies.", es: "Planificación y organización de entrenamientos y actividades, gestión de material y espacios, y coordinación con las familias.", en: "Planned and organised training sessions and activities, managed equipment and facilities, and coordinated with families." }
      },
      {
        title: { ca: "Professora de classes particulars", es: "Profesora de clases particulares", en: "Private tutor" },
        period: "2019 – 2022",
        text: { ca: "Preparació de materials i adaptació de les classes a les necessitats de cada alumne.", es: "Preparación de materiales y adaptación de las clases a las necesidades de cada alumno.", en: "Prepared materials and adapted lessons to each student's needs." }
      },
    ],
    // Dades pràctiques destacades a «Sobre mi» (icona: travel, licence, car)
    badges: [
      { icon: "travel", text: { ca: "Disponibilitat per viatjar", es: "Disponibilidad para viajar", en: "Willing to travel" } },
      { icon: "licence", text: { ca: "Permís de conduir B", es: "Carné de conducir B", en: "Driving licence (B)" } },
      { icon: "car", text: { ca: "Vehicle propi", es: "Vehículo propio", en: "Own car" } }
    ],
    // Interessos personals: omple'ls (3-4, concrets) i l'apartat apareixerà sol.
    interests: [
      { ca: "Viatjar", es: "Viajar", en: "Travelling" },
      { ca: "Fotografia", es: "Fotografía", en: "Photography" },
      { ca: "Muntanya", es: "Montaña", en: "Mountains" }
    ]
  },

  /* ---------- PERFILS (un per tipus d'oferta) ---------- */
  profiles: {
    all:  { label: { ca: "Tots", es: "Todos", en: "All" }, headline: "", keywords: [] },
    scm: {
      label: { ca: "Supply chain i anàlisi", es: "Supply chain y análisis", en: "Supply chain & analytics" },
      headline: { ca: "Cadena de subministrament, planificació i anàlisi de dades", es: "Cadena de suministro, planificación y análisis de datos", en: "Supply chain, planning and data analysis" },
      keywords: ["KPIs", { ca: "Previsió de la demanda", es: "Previsión de la demanda", en: "Demand forecasting" }, "MRP", { ca: "Planificació agregada", es: "Planificación agregada", en: "Aggregate planning" }, { ca: "Selecció de proveïdors", es: "Selección de proveedores", en: "Supplier selection" }, { ca: "Rutes (VRP)", es: "Rutas (VRP)", en: "Routing (VRP)" }, "ERP", "Excel"]
    },
    ops: {
      label: { ca: "Operacions i millora contínua", es: "Operaciones y mejora continua", en: "Operations & continuous improvement" },
      headline: { ca: "Operacions, layout i millora contínua", es: "Operaciones, layout y mejora continua", en: "Operations, layout and continuous improvement" },
      keywords: ["Lean", "Kaizen", "Layout", "Takt time", "ROI", { ca: "Estudis de viabilitat", es: "Estudios de viabilidad", en: "Feasibility studies" }]
    },
    qual: {
      label: { ca: "Qualitat i estadística", es: "Calidad y estadística", en: "Quality & statistics" },
      headline: { ca: "Qualitat, estadística i anàlisi de variabilitat", es: "Calidad, estadística y análisis de variabilidad", en: "Quality, statistics and variability analysis" },
      keywords: ["MSA", "SPC", "R&R", "APQP / PPAP", "IATF 16949", { ca: "Sèries temporals", es: "Series temporales", en: "Time series" }]
    },
    iiot: {
      label: { ca: "Automatització i IIoT", es: "Automatización e IIoT", en: "Automation & IIoT" },
      headline: { ca: "Automatització, PLC i arquitectures IIoT", es: "Automatización, PLC y arquitecturas IIoT", en: "Automation, PLCs and IIoT architectures" },
      keywords: ["PLC", "GRAFCET", "Node-RED", "InfluxDB", "Grafana", "Docker", "MATLAB"]
    },
    pm: {
      label: { ca: "Gestió de projectes", es: "Gestión de proyectos", en: "Project management" },
      headline: { ca: "Direcció i planificació de projectes", es: "Dirección y planificación de proyectos", en: "Project leadership and planning" },
      keywords: ["Project manager", { ca: "Abast i temps", es: "Alcance y tiempo", en: "Scope & schedule" }, { ca: "Costos", es: "Costes", en: "Costs" }, { ca: "Riscos", es: "Riesgos", en: "Risks" }, "Gantt", "Project charter"]
    }
  },

  /* ---------- EXPERIÈNCIA ---------- */
  experience: {
    org: "Relats SAU", mapQuery: "Relats SAU, Caldes de Montbui",
    place: "Caldes de Montbui",
    role: { ca: "Estudiant en pràctiques", es: "Estudiante en prácticas", en: "Intern" },
    period: { ca: "Juny 2024 – Maig 2026", es: "Junio 2024 – Mayo 2026", en: "Jun 2024 – May 2026" },
    roles: [
      {
        id: "proc", end: "2026-05",   // "end" = data final (AAAA-MM), ordena la línia temporal
        title: { ca: "Enginyera de processos · departament tècnic", es: "Ingeniera de procesos · departamento técnico", en: "Process engineer · technical department" },
        period: { ca: "Febr. 2025 – Maig 2026", es: "Feb. 2025 – Mayo 2026", en: "Feb 2025 – May 2026" },
        did: [
          { ca: "Anàlisi de 8 línies de producció, identificant colls d'ampolla i oportunitats de millora a la secció de forns del procés de recobriment tèxtil amb silicona.", es: "Análisis de 8 líneas de producción, identificando cuellos de botella y oportunidades de mejora en la sección de hornos del proceso de recubrimiento textil con silicona.", en: "Analysed 8 production lines, identifying bottlenecks and improvement opportunities in the oven section of the silicone textile-coating process." },
          { ca: "Proposta d'una nova solució i elaboració del pla de negoci (cost vs. benefici), presentat a la direcció.", es: "Propuesta de una nueva solución y elaboración del plan de negocio (coste vs. beneficio), presentado a la dirección.", en: "Proposed a new solution and built the business case (cost vs. benefit), presented to management." },
          { ca: "Avaluació tècnica i econòmica de projectes de millora contínua, amb càlcul d'estalvis i ROI.", es: "Evaluación técnica y económica de proyectos de mejora continua, con cálculo de ahorros y ROI.", en: "Technical and economic assessment of continuous-improvement projects, including savings and ROI." },
          { ca: "Propostes de millores Lean (Kaizen) i col·laboració amb el departament tècnic per implementar-les.", es: "Propuestas de mejoras Lean (Kaizen) y colaboración con el departamento técnico para implementarlas.", en: "Proposed Lean (Kaizen) improvements and worked with the technical team to implement them." },
          { ca: "Instruccions de treball per a maquinària nova i documentació per a la gestió de canvis interns.", es: "Instrucciones de trabajo para maquinaria nueva y documentación para la gestión de cambios internos.", en: "Wrote work instructions for new machinery and internal change-management documentation." }
        ],
        tags: ["Lean", "Kaizen", "ROI", "Excel", "ERP", "SolidWorks"],
        scores: { all: 10, scm: 9, ops: 10, qual: 6, iiot: 3, pm: 7 }
      },
      {
        id: "qual", end: "2025-01",
        title: { ca: "Enginyera de qualitat · departament de qualitat", es: "Ingeniera de calidad · departamento de calidad", en: "Quality engineer · quality department" },
        period: { ca: "Juny 2024 – Gen. 2025", es: "Junio 2024 – Ene. 2025", en: "Jun 2024 – Jan 2025" },
        did: [
          { ca: "Treball de Fi de Grau: anàlisi de sistemes de mesura a la indústria automotriu (SPC, MSA), aplicant anàlisi estadística i de fiabilitat per proposar millores.", es: "Trabajo de Fin de Grado: análisis de sistemas de medición en la industria automotriz (SPC, MSA), aplicando análisis estadístico y de fiabilidad para proponer mejoras.", en: "Bachelor's thesis: measurement system analysis in the automotive industry (SPC, MSA), applying statistical and reliability analysis to propose improvements." },
          { ca: "Documentació tècnica (PPAPs) dins del procés APQP, segons VDA 2 i AIAG, amb comprovació del Cpk.", es: "Documentación técnica (PPAPs) dentro del proceso APQP, según VDA 2 y AIAG, con verificación del Cpk.", en: "Technical documentation (PPAPs) within APQP, following VDA 2 and AIAG, including Cpk checks." },
          { ca: "Plantilla única de PPAP per a VDA i AIAG, automatitzada amb macros de Visual Basic.", es: "Plantilla única de PPAP para VDA y AIAG, automatizada con macros de Visual Basic.", en: "Built a single PPAP template for VDA and AIAG, automated with Visual Basic macros." },
          { ca: "Auditories internes de producte (VDA 6.5), coordinant-me amb equips interns i clients.", es: "Auditorías internas de producto (VDA 6.5), coordinándome con equipos internos y clientes.", en: "Internal product audits (VDA 6.5), coordinating with internal teams and customers." }
        ],
        tags: ["APQP", "PPAP", "MSA", "SPC", "IATF 16949", "VBA"],
        scores: { all: 8, scm: 5, ops: 7, qual: 10, iiot: 3, pm: 4 }
      }
    ]
  },

  /* ---------- COMPETÈNCIES ---------- */
  skills: [
    {
      group: { ca: "Tècniques", es: "Técnicas", en: "Technical" },
      items: [
        { ca: "Anàlisi i optimització de processos", es: "Análisis y optimización de procesos", en: "Process analysis & optimisation" },
        "Lean manufacturing",
        { ca: "Anàlisi de dades", es: "Análisis de datos", en: "Data analysis" },
        { ca: "Millora contínua (Kaizen)", es: "Mejora continua (Kaizen)", en: "Continuous improvement (Kaizen)" },
        { ca: "Planificació de la producció (MRP)", es: "Planificación de la producción (MRP)", en: "Production planning (MRP)" },
        { ca: "Distribució en planta (layout)", es: "Distribución en planta (layout)", en: "Plant layout" },
        { ca: "Qualitat (MSA, SPC, PPAP)", es: "Calidad (MSA, SPC, PPAP)", en: "Quality (MSA, SPC, PPAP)" }
      ]
    },
    {
      group: { ca: "Transversals", es: "Transversales", en: "Soft skills" },
      items: [
        { ca: "Resolució analítica de problemes", es: "Resolución analítica de problemas", en: "Analytical problem solving" },
        { ca: "Gestió de projectes", es: "Gestión de proyectos", en: "Project management" },
        { ca: "Comunicació entre equips", es: "Comunicación entre equipos", en: "Cross-team communication" },
        { ca: "Treball en equip", es: "Trabajo en equipo", en: "Teamwork" },
        { ca: "IA generativa (Claude, Gemini) aplicada a documentació, anàlisi de dades i prototipatge", es: "IA generativa (Claude, Gemini) aplicada a documentación, análisis de datos y prototipado", en: "Generative AI (Claude, Gemini) applied to documentation, data analysis and prototyping" }
      ]
    },
    {
      group: { ca: "Eines", es: "Herramientas", en: "Tools" },
      /* lvl: 2 = bàsic, 3 = mitjà, 4 = mitjà-alt, 5 = avançat */
      items: [
        { n: "PowerPoint", lvl: 5, ic: "P", c: "#c43e1c" },
        { n: "Excel", lvl: 4, ic: "X", c: "#1d6f42" },
        { n: "AutoCAD", lvl: 3, ic: "A", c: "#c8102e" },
        { n: "SolidWorks", lvl: 3, ic: "SW", c: "#b5262b" },
        { n: "MATLAB", lvl: 2, ic: "M", c: "#d9622b" },
        { n: "VBA", lvl: 2, ic: "VB", c: "#5a5fc0" },
        { n: "Grafana", lvl: 2, ic: "G", c: "#e0620a" },
        { n: "SAP", lvl: 2, ic: "S", c: "#0a6ed1" }
      ]
    }
  ],

  /* ---------- FORMACIÓ ---------- */
  education: [
    {
      kind: "master", end: "2027-01",
      title: { ca: "Màster Universitari en Enginyeria Industrial", es: "Máster Universitario en Ingeniería Industrial", en: "Master's Degree in Industrial Engineering" },
      school: "ESEIAAT – UPC", mapQuery: "ESEIAAT UPC Terrassa",
      period: { ca: "Febr. 2025 – Prev. gen. 2027", es: "Feb. 2025 – Prev. ene. 2027", en: "Feb 2025 – exp. Jan 2027" },
      note: { ca: "Especialitat en Organització Industrial.", es: "Especialidad en Organización Industrial.", en: "Specialisation in Industrial Organisation." },
      points: [
        { ca: "Disseny de la Cadena de Subministrament i Disseny de Plantes Industrials: distribució en planta (layouts), construcció industrial i instal·lacions (AutoCAD, SolidWorks).", es: "Diseño de la Cadena de Suministro y Diseño de Plantas Industriales: distribución en planta (layouts), construcción industrial e instalaciones (AutoCAD, SolidWorks).", en: "Supply Chain Design and Industrial Plant Design: plant layouts, industrial construction and building services (AutoCAD, SolidWorks)." },
        { ca: "Direcció d'Operacions: Lean manufacturing, Kaizen, SMED.", es: "Dirección de Operaciones: Lean manufacturing, Kaizen, SMED.", en: "Operations Management: Lean manufacturing, Kaizen, SMED." },
        { ca: "Direcció Integrada de Projectes: cap de projecte del projecte de l'assignatura.", es: "Dirección Integrada de Proyectos: jefa de proyecto del proyecto de la asignatura.", en: "Integrated Project Management: project manager of the course project." }
      ]
    },
    {
      kind: "grau", end: "2025-01",
      title: { ca: "Grau en Enginyeria en Tecnologies Industrials", es: "Grado en Ingeniería en Tecnologías Industriales", en: "Bachelor's Degree in Industrial Technology Engineering" },
      school: "ESEIAAT – UPC", mapQuery: "ESEIAAT UPC Terrassa",
      period: { ca: "Set. 2020 – Gen. 2025", es: "Sept. 2020 – Ene. 2025", en: "Sep 2020 – Jan 2025" },
      note: "", points: []
    },
    {
      kind: "course", end: "2026-07",   // formació complementària: un altre color
      title: { ca: "Curs d'estiu NUAA", es: "Curso de verano NUAA", en: "NUAA summer school" },
      school: { ca: "Nanjing University of Aeronautics and Astronautics, Nanjing (Xina)", es: "Nanjing University of Aeronautics and Astronautics, Nanjing (China)", en: "Nanjing University of Aeronautics and Astronautics, Nanjing (China)" }, mapQuery: "Nanjing University of Aeronautics and Astronautics, Nanjing",
      period: { ca: "Jul. 2026", es: "Jul. 2026", en: "Jul 2026" },
      note: "",
      points: [
        { ca: "Tallers de cultura xinesa, visites a fàbriques i una competició de construcció d'avions contra equips internacionals.", es: "Talleres de cultura china, visitas a fábricas y una competición de construcción de aviones contra equipos internacionales.", en: "Chinese culture workshops, factory visits and an aircraft-building competition against international teams." }
      ]
    }
  ],

  /* ---------- IDIOMES (level: 1-6 → A1…C2; 7 = llengua materna) ---------- */
  languages: [
    { name: { ca: "Català", es: "Catalán", en: "Catalan" }, level: 7 },
    { name: { ca: "Castellà", es: "Castellano", en: "Spanish" }, level: 7 },
    { name: { ca: "Anglès", es: "Inglés", en: "English" }, level: 4 }
  ],

  /* ---------- PROJECTES ---------- */
  projects: [
    {
      id: "dcs-marset",
      spine: { ca: "Supply chain · Marset", es: "Supply chain · Marset", en: "Supply chain · Marset" },
      types: ["scm", "ops"], img: "assets/thumbs/dcs.jpg",
      title: { ca: "Disseny d'una cadena de subministrament per a Marset Iluminación", es: "Diseño de una cadena de suministro para Marset Iluminación", en: "Supply chain design for Marset Iluminación" },
      level: "Màster", year: "2025", team: 3,
      context: { ca: "Disseny de la Cadena de Subministrament", es: "Diseño de la Cadena de Suministro", en: "Supply Chain Design" },
      summary: {
        ca: "Disseny complet d'una nova nau de producció de la làmpada Milana per escalar a consum de masses: localització, layout, planificació de la producció i selecció de proveïdors.",
        es: "Diseño completo de una nueva nave de producción de la lámpara Milana para escalar al consumo de masas: localización, layout, planificación de la producción y selección de proveedores.",
        en: "End-to-end design of a new production plant for the Milana lamp to scale up to the mass market: location, layout, production planning and supplier selection."
      },
      did: [
        { ca: "Localització en tres etapes (continent, país, ciutat) amb el mètode del valor tècnic ponderat; la ciutat triada és Changzhou.", es: "Localización en tres etapas (continente, país, ciudad) con el método del valor técnico ponderado; la ciudad elegida es Changzhou.", en: "Three-stage location analysis (continent, country, city) using the weighted technical value method; Changzhou was selected." },
        { ca: "Estimació de la demanda anual (440.000 làmpades) a partir de la mida del mercat i d'una quota objectiu.", es: "Estimación de la demanda anual (440.000 lámparas) a partir del tamaño del mercado y de una cuota objetivo.", en: "Annual demand estimate (440,000 lamps) from market size and a target share." },
        { ca: "Layout de la nau: definició d'operacions, takt time de 13,5 s/ud, nombre de cèl·lules de treball i àrea de magatzem.", es: "Layout de la nave: definición de operaciones, takt time de 13,5 s/ud, número de células de trabajo y área de almacén.", en: "Plant layout: operations, 13.5 s/unit takt time, number of work cells and warehouse area." },
        { ca: "Planificació agregada, BOM i MRP.", es: "Planificación agregada, BOM y MRP.", en: "Aggregate planning, BOM and MRP." },
        { ca: "Selecció de proveïdors amb criteris ponderats i definició dels KPIs de seguiment del proveïdor.", es: "Selección de proveedores con criterios ponderados y definición de los KPIs de seguimiento del proveedor.", en: "Supplier selection with weighted criteria and definition of supplier-tracking KPIs." }
      ],
      tools: ["Excel", "PowerPoint"],
      // Presentació exportada a vídeo des del PowerPoint (amb animacions i vídeos), sense noms a la portada.
      // chapters: segon d'inici de cada diapositiva dins del vídeo (miniatures a assets/dcs/thumbs/sNN.jpg)
      deck: {
        video: "assets/dcs/presentacio.mp4", poster: "assets/dcs/poster.jpg",
        thumbs: "assets/dcs/thumbs/s",
        chapters: [0, 5, 10, 15, 20, 25, 30, 52, 75, 80, 103, 108, 113, 118, 123, 128, 133, 138, 143]
      },
      scores: { all: 10, scm: 10, ops: 9, qual: 2, iiot: 1, pm: 5 },
      links: { slides: "", report: "" }
    },
    {
      id: "vrp",
      spine: { ca: "Rutes VRP", es: "Rutas VRP", en: "VRP routing" },
      types: ["scm"],
      title: { ca: "Planificació de rutes de distribució (VRP)", es: "Planificación de rutas de distribución (VRP)", en: "Distribution route planning (VRP)" },
      level: "Màster", year: "2026", team: 2,
      context: { ca: "Models i Eines de Decisió", es: "Modelos y Herramientas de Decisión", en: "Decision Models and Tools" },
      summary: { ca: "Resolució d'un problema de rutes de vehicles amb l'heurística d'estalvis de Clarke & Wright.", es: "Resolución de un problema de rutas de vehículos con la heurística de ahorros de Clarke & Wright.", en: "Solving a vehicle routing problem with the Clarke & Wright savings heuristic." },
      did: [
        { ca: "Plantejament del cas: dades dels clients i matriu de distàncies.", es: "Planteamiento del caso: datos de los clientes y matriz de distancias.", en: "Case set-up: customer data and distance matrix." },
        { ca: "Implementació del codi de resolució: llista ordenada d'estalvis i construcció de les rutes.", es: "Implementación del código de resolución: lista ordenada de ahorros y construcción de las rutas.", en: "Solver code: ranked savings list and route construction." },
        { ca: "Anàlisi dels resultats i conclusions.", es: "Análisis de los resultados y conclusiones.", en: "Results analysis and conclusions." }
      ],
      tools: ["Clarke & Wright", { ca: "Heurístiques", es: "Heurísticas", en: "Heuristics" }],
      scores: { all: 8, scm: 9, ops: 5, qual: 2, iiot: 1, pm: 1 },
      links: { slides: "", report: "" }
    },
    {
      id: "stats",
      spine: { ca: "Sèries temporals i PCA", es: "Series temporales y PCA", en: "Time series & PCA" },
      types: ["qual", "scm"],
      title: { ca: "Estadística aplicada: sèries temporals i anàlisi multivariable", es: "Estadística aplicada: series temporales y análisis multivariante", en: "Applied statistics: time series and multivariate analysis" },
      level: "Màster", year: "2025", team: 1,
      context: { ca: "Estadística Aplicada a l'Organització Industrial", es: "Estadística Aplicada a la Organización Industrial", en: "Applied Statistics for Industrial Organisation" },
      summary: { ca: "Dues pràctiques d'anàlisi de dades: modelització i previsió d'una sèrie temporal, i anàlisi de components principals.", es: "Dos prácticas de análisis de datos: modelización y previsión de una serie temporal, y análisis de componentes principales.", en: "Two data-analysis assignments: time-series modelling and forecasting, and principal component analysis." },
      did: [
        { ca: "Sèries temporals: descomposició clàssica (tendència i estacionalitat) i model amb variables categòriques; validació dels residus, comparació dels dos models, autocorrelograma i previsions.", es: "Series temporales: descomposición clásica (tendencia y estacionalidad) y modelo con variables categóricas; validación de los residuos, comparación de los dos modelos, autocorrelograma y previsiones.", en: "Time series: classical decomposition (trend and seasonality) and a categorical-variable model; residual validation, model comparison, autocorrelogram and forecasts." },
        { ca: "Anàlisi multivariable: anàlisi de components principals i interpretació dels resultats.", es: "Análisis multivariante: análisis de componentes principales e interpretación de los resultados.", en: "Multivariate analysis: principal component analysis and interpretation." }
      ],
      tools: [{ ca: "Regressió", es: "Regresión", en: "Regression" }, { ca: "Components principals", es: "Componentes principales", en: "Principal components" }, "Excel"],
      scores: { all: 7, scm: 9, ops: 4, qual: 9, iiot: 2, pm: 1 },
      links: { slides: "", report: "" }
    },
    {
      id: "tfg-msa",
      spine: { ca: "TFG · MSA", es: "TFG · MSA", en: "Thesis · MSA" },
      types: ["qual"], img: "assets/thumbs/tfg.jpg",
      title: { ca: "TFG: sistema de gestió d'anàlisi de mesura (MSA) a la indústria d'automoció", es: "TFG: sistema de gestión del análisis de medición (MSA) en la industria automotriz", en: "Bachelor's thesis: measurement system analysis (MSA) in the automotive industry" },
      level: "Grau", year: "2024", team: 1,
      context: { ca: "Treball de Fi de Grau · en empresa de tèxtil tècnic per a automoció", es: "Trabajo de Fin de Grado · en empresa de textil técnico para automoción", en: "Bachelor's thesis · at a technical-textile automotive supplier" },
      summary: { ca: "Anàlisi dels sistemes de mesura d'una família de productes d'automoció per verificar-ne la capacitat i proposar millores en la seva gestió.", es: "Análisis de los sistemas de medición de una familia de productos de automoción para verificar su capacidad y proponer mejoras en su gestión.", en: "Analysis of the measurement systems for an automotive product family to check their capability and propose management improvements." },
      did: [
        { ca: "Avaluació de tres sistemes de mesura seguint el manual MSA: estabilitat, biaix, linealitat i repetibilitat i reproductibilitat (R&R).", es: "Evaluación de tres sistemas de medición según el manual MSA: estabilidad, sesgo, linealidad y repetibilidad y reproducibilidad (R&R).", en: "Assessed three measurement systems following the MSA manual: stability, bias, linearity and repeatability & reproducibility (R&R)." },
        { ca: "Identificació de factors de variabilitat que fins llavors no s'havien considerat.", es: "Identificación de factores de variabilidad que hasta entonces no se habían considerado.", en: "Identified sources of variability that had not been considered before." },
        { ca: "Propostes de millora dels sistemes de mesura i d'un pla genèric de gestió i documentació.", es: "Propuestas de mejora de los sistemas de medición y de un plan genérico de gestión y documentación.", en: "Improvement proposals for the measurement systems and a generic management and documentation plan." },
        { ca: "Pressupost i valoració de les implicacions ambientals i socials.", es: "Presupuesto y valoración de las implicaciones ambientales y sociales.", en: "Budget and assessment of environmental and social implications." }
      ],
      tools: ["MSA", "Minitab","ISO 9001", "IATF 16949"],
      scores: { all: 9, scm: 5, ops: 7, qual: 10, iiot: 2, pm: 3 },
      links: { slides: "", report: "" }
    },
    {
      id: "implantacio",
      spine: { ca: "Implantació industrial", es: "Implantación industrial", en: "Plant layout" },
      types: ["ops"],
      title: { ca: "Implantació d'un edifici industrial", es: "Implantación de un edificio industrial", en: "Industrial building layout and fire safety" },
      level: "Màster", year: "2025", team: 4,
      context: { ca: "Disseny i Construcció de Plantes Industrials", es: "Diseño y Construcción de Plantas Industriales", en: "Industrial Plant Design and Construction" },
      summary: { ca: "Distribució en planta d'una nau industrial i justificació del compliment de la normativa de seguretat en cas d'incendi.", es: "Distribución en planta de una nave industrial y justificación del cumplimiento de la normativa de seguridad contra incendios.", en: "Plant layout for an industrial building and compliance with fire-safety regulations." },
      did: [
        { ca: "Descripció del procés: diagrames de procés, de màquines i de fluxos.", es: "Descripción del proceso: diagramas de proceso, de máquinas y de flujos.", en: "Process description: process, machine and flow diagrams." },
        { ca: "Taula i diagrama relacional d'activitats; generació i avaluació d'alternatives de distribució en planta.", es: "Tabla y diagrama relacional de actividades; generación y evaluación de alternativas de distribución en planta.", en: "Activity relationship chart and diagram; generation and evaluation of layout alternatives." },
        { ca: "Sectorització i tipologia de l'establiment, risc intrínsec, estabilitat al foc, evacuació i elements de protecció contra incendis.", es: "Sectorización y tipología del establecimiento, riesgo intrínseco, estabilidad al fuego, evacuación y elementos de protección contra incendios.", en: "Fire sectors and building type, intrinsic risk, fire resistance, evacuation and fire-protection equipment." },
        { ca: "Plànols de planta (distribució, màquines, recorregut del material, evacuació i PCI).", es: "Planos de planta (distribución, máquinas, recorrido del material, evacuación y PCI).", en: "Floor plans (layout, machines, material flow, evacuation and fire protection)." }
      ],
      tools: ["AutoCAD", { ca: "Normativa d'incendis", es: "Normativa contra incendios", en: "Fire regulations" }],
      scores: { all: 6, scm: 6, ops: 9, qual: 3, iiot: 2, pm: 4 },
      links: { slides: "", report: "" }
    },
    {
      id: "iiot",
      spine: { ca: "IIoT al núvol", es: "IIoT en la nube", en: "Cloud IIoT" },
      types: ["iiot"], img: "assets/thumbs/iiot.jpg",
      title: { ca: "Arquitectura IIoT al núvol: del PLC al quadre de comandament", es: "Arquitectura IIoT en la nube: del PLC al cuadro de mando", en: "Cloud IIoT architecture: from PLC to dashboard" },
      level: "Màster", year: "2026", team: 1,
      context: "Industrial Internet of Things and Cyber Physical Systems",
      summary: { ca: "Arquitectura IIoT que recull dades d'un PLC, les emmagatzema, les processa i les visualitza.", es: "Arquitectura IIoT que recoge datos de un PLC, los almacena, los procesa y los visualiza.", en: "IIoT architecture that collects PLC data, then stores, processes and visualises it." },
      did: [
        { ca: "Màquina virtual Linux al núvol (Azure) gestionada per SSH/SCP i contenidors Docker.", es: "Máquina virtual Linux en la nube (Azure) gestionada por SSH/SCP y contenedores Docker.", en: "Linux virtual machine in the cloud (Azure) managed via SSH/SCP, with Docker containers." },
        { ca: "Adquisició de dades d'un PLC per Modbus amb fluxos de Node-RED i emmagatzematge a InfluxDB.", es: "Adquisición de datos de un PLC por Modbus con flujos de Node-RED y almacenamiento en InfluxDB.", en: "PLC data acquisition over Modbus with Node-RED flows, stored in InfluxDB." },
        { ca: "Processament i analítica amb scripts de MATLAB amb execució periòdica automàtica, i escriptura dels resultats a la base de dades.", es: "Procesado y analítica con scripts de MATLAB de ejecución periódica automática, y escritura de los resultados en la base de datos.", en: "Processing and analytics with MATLAB scripts running periodically, writing results back to the database." },
        { ca: "Quadres de comandament a Grafana amb dades brutes i processades.", es: "Cuadros de mando en Grafana con datos brutos y procesados.", en: "Grafana dashboards with raw and processed data." }
      ],
      tools: ["Azure", "Docker", "Node-RED", "InfluxDB", "Grafana", "MATLAB", "PowerPoint"],
      scores: { all: 8, scm: 6, ops: 3, qual: 3, iiot: 10, pm: 1 },
      links: { slides: "", report: "" }
    },
    {
      id: "plc",
      spine: "PLC · GRAFCET",
      types: ["iiot"],
      title: { ca: "Control seqüencial d'un creuament amb semàfors (PLC i GRAFCET)", es: "Control secuencial de un cruce con semáforos (PLC y GRAFCET)", en: "Sequential control of a traffic-light crossing (PLC and GRAFCET)" },
      level: "Màster", year: "2025", team: 2,
      context: { ca: "Producció Automatitzada i Control Avançat de Processos", es: "Producción Automatizada y Control Avanzado de Procesos", en: "Automated Production and Advanced Process Control" },
      summary: { ca: "Disseny i programació al PLC de la seqüència d'un creuament amb semàfors de cotxes i vianants.", es: "Diseño y programación en PLC de la secuencia de un cruce con semáforos de coches y peatones.", en: "Design and PLC programming of the sequence for a crossing with car and pedestrian lights." },
      did: [
        { ca: "Modelització amb GRAFCET (genèric i del sistema complet).", es: "Modelización con GRAFCET (genérico y del sistema completo).", en: "GRAFCET modelling (generic and full system)." },
        { ca: "Programació del PLC en llenguatge de contactes: inicialització, polsadors, intermitència i sortides dels semàfors.", es: "Programación del PLC en lenguaje de contactos: inicialización, pulsadores, intermitencia y salidas de los semáforos.", en: "PLC programming in ladder logic: initialisation, push buttons, flashing mode and light outputs." },
        { ca: "Millora del sistema afegint un temps mínim de pas continuat per als vehicles.", es: "Mejora del sistema añadiendo un tiempo mínimo de paso continuado para los vehículos.", en: "Improvement adding a minimum continuous green time for vehicles." }
      ],
      tools: ["PLC", "GRAFCET", { ca: "Diagrama de contactes", es: "Diagrama de contactos", en: "Ladder logic" }],
      scores: { all: 5, scm: 1, ops: 4, qual: 1, iiot: 9, pm: 1 },
      links: { slides: "", report: "" }
    },
    {
      id: "markov",
      spine: { ca: "Cadenes de Màrkov", es: "Cadenas de Márkov", en: "Markov chains" },
      types: ["scm"],
      title: { ca: "Cadenes de Màrkov: model d'un cas d'hàbits de lectura", es: "Cadenas de Márkov: modelo de un caso de hábitos de lectura", en: "Markov chains: modelling reading habits" },
      level: "Màster", year: "2025", team: 1,
      context: { ca: "Mètodes Quantitatius d'Organització Industrial", es: "Métodos Cuantitativos de Organización Industrial", en: "Quantitative Methods for Industrial Organisation" },
      summary: { ca: "Modelització d'un cas amb una cadena de Màrkov i resolució dels càlculs.", es: "Modelización de un caso con una cadena de Márkov y resolución de los cálculos.", en: "Modelling a case as a Markov chain and solving it." },
      did: [
        { ca: "Enunciat i definició dels estats i de les transicions.", es: "Enunciado y definición de los estados y las transiciones.", en: "Problem statement, states and transitions." },
        { ca: "Resolució i càlculs amb codi en R i fulls de càlcul.", es: "Resolución y cálculos con código en R y hojas de cálculo.", en: "Solution and calculations with R code and spreadsheets." },
        { ca: "Conclusions.", es: "Conclusiones.", en: "Conclusions." }
      ],
      tools: ["R", "Excel"],
      scores: { all: 4, scm: 6, ops: 4, qual: 5, iiot: 1, pm: 1 },
      links: { slides: "", report: "" }
    },
    {
      id: "cultius",
      spine: { ca: "Digitalització de cultius", es: "Digitalización de cultivos", en: "Crop digitalisation" },
      types: ["pm"],
      title: { ca: "Digitalització de cultius", es: "Digitalización de cultivos", en: "Crop digitalisation" },
      level: "Grau", year: "2024", team: 10,
      context: { ca: "Projectes (Q8)", es: "Proyectos (Q8)", en: "Engineering Projects (Q8)" },
      role: "Project manager",
      summary: { ca: "Projecte d'equip de digitalització de cultius agrícoles, amb direcció del projecte.", es: "Proyecto de equipo de digitalización de cultivos agrícolas, con dirección del proyecto.", en: "Team project on digitalising agricultural crops, leading the project." },
      did: [
        { ca: "Direcció de l'equip com a project manager.", es: "Dirección del equipo como project manager.", en: "Led the team as project manager." },
        { ca: "Project charter i planificació amb diagrama de Gantt.", es: "Project charter y planificación con diagrama de Gantt.", en: "Project charter and Gantt-chart planning." },
        { ca: "Pressupost de la solució i presentació de conclusions.", es: "Presupuesto de la solución y presentación de conclusiones.", en: "Solution budget and presentation of conclusions." }
      ],
      tools: ["Gantt", "Project charter"],
      scores: { all: 5, scm: 3, ops: 3, qual: 1, iiot: 5, pm: 10 },
      links: { slides: "", report: "" }
    },
    {
      id: "dip",
      spine: { ca: "Pla de gestió de projecte", es: "Plan de gestión de proyecto", en: "Project plan" },
      img: "assets/thumbs/dip.jpg",
      types: ["pm"],
      title: { ca: "Pla de gestió d'un projecte: d'un residu a un estalvi", es: "Plan de gestión de un proyecto: de un residuo a un ahorro", en: "Project management plan: turning waste into savings" },
      level: "Màster", year: "2026", team: "equip",
      context: { ca: "Direcció Integrada de Projectes", es: "Dirección Integrada de Proyectos", en: "Integrated Project Management" },
      role: "Project manager",
      summary: { ca: "Pla de gestió d'un prototip d'hivernacle a la coberta d'un edifici universitari, aprofitant-ne la sinergia amb la ventilació de l'edifici. Direcció de l'equip i lliuraments per àrees de coneixement.", es: "Plan de gestión de un prototipo de invernadero en la cubierta de un edificio universitario, aprovechando su sinergia con la ventilación del edificio. Dirección del equipo y entregas por áreas de conocimiento.", en: "Management plan for a greenhouse prototype on the roof of a university building, taking advantage of its synergy with the building's ventilation. Team lead, with deliverables by knowledge area." },
      did: [
        { ca: "Direcció de l'equip com a project manager.", es: "Dirección del equipo como project manager.", en: "Led the team as project manager." },
        { ca: "Gestió de l'abast (WBS) i del temps: fases del 2026 al 2027, fites, dependències, diagrama de xarxa i Gantt.", es: "Gestión del alcance (WBS) y del tiempo: fases de 2026 a 2027, hitos, dependencias, diagrama de red y Gantt.", en: "Scope (WBS) and schedule management: 2026–2027 phases, milestones, dependencies, network diagram and Gantt chart." },
        { ca: "Pressupost i corba de costos; adquisicions i contractes de subcontractació; qualitat (AMFE, PDCA, Ishikawa); comunicacions i matriu de riscos.", es: "Presupuesto y curva de costes; adquisiciones y contratos de subcontratación; calidad (AMFE, PDCA, Ishikawa); comunicaciones y matriz de riesgos.", en: "Budget and cost curve; procurement and subcontracting contracts; quality (FMEA, PDCA, Ishikawa); communications and risk matrix." },
        { ca: "Pla de gestió del projecte i presentació final.", es: "Plan de gestión del proyecto y presentación final.", en: "Project management plan and final presentation." }
      ],
      tools: ["Gantt", { ca: "Diagrama de xarxa", es: "Diagrama de red", en: "Network diagram" }, { ca: "Pla de gestió", es: "Plan de gestión", en: "Management plan" }, "PowerPoint"],
      scores: { all: 6, scm: 4, ops: 4, qual: 2, iiot: 1, pm: 10 },
      links: { slides: "", report: "" }
    },
    {
      id: "creativity",
      spine: { ca: "Projecte d'innovació", es: "Proyecto de innovación", en: "Innovation project" },
      types: ["pm"],
      title: { ca: "Projecte d'innovació en equip", es: "Proyecto de innovación en equipo", en: "Team innovation project" },
      level: "Grau", year: "2024", team: 3,
      context: { ca: "Creativitat i innovació (Q9)", es: "Creatividad e innovación (Q9)", en: "Creativity and Innovation (Q9)" },
      role: { ca: "Portaveu de l'equip", es: "Portavoz del equipo", en: "Team spokesperson" },
      summary: { ca: "Projecte d'equip d'identificació d'un problema i proposta de solució, amb presentació final.", es: "Proyecto de equipo de identificación de un problema y propuesta de solución, con presentación final.", en: "Team project identifying a problem and proposing a solution, with a final presentation." },
      did: [
        { ca: "Portaveu de l'equip a les presentacions.", es: "Portavoz del equipo en las presentaciones.", en: "Team spokesperson in presentations." },
        { ca: "Treball en equip amb repartiment de rols (portaveu i actes de les reunions).", es: "Trabajo en equipo con reparto de roles (portavoz y actas de las reuniones).", en: "Teamwork with defined roles (spokesperson and meeting minutes)." }
      ],
      tools: [],
      scores: { all: 2, scm: 1, ops: 1, qual: 1, iiot: 1, pm: 6 },
      links: { slides: "", report: "" }
    },

    /* Oculta fins que l'acabis: posa hidden: false i omple el resum. */
    {
      id: "tfm",
      spine: { ca: "TFM · Dosificació", es: "TFM · Dosificación", en: "Master's thesis · Dosing" },
      types: ["ops"],
      hidden: true,
      title: { ca: "TFM: estudi de viabilitat d'un nou sistema de dosificació de silicona", es: "TFM: estudio de viabilidad de un nuevo sistema de dosificación de silicona", en: "Master's thesis: feasibility study of a new silicone dosing system" },
      level: "Màster", year: "2026", team: 1,
      context: { ca: "Treball de Fi de Màster", es: "Trabajo de Fin de Máster", en: "Master's thesis" },
      summary: { ca: "Estudi de viabilitat tècnica, operativa i econòmica.", es: "Estudio de viabilidad técnica, operativa y económica.", en: "Technical, operational and economic feasibility study." },
      did: [],
      tools: [],
      scores: { all: 10, scm: 6, ops: 10, qual: 5, iiot: 1, pm: 5 },
      links: { slides: "", report: "" }
    }
  ]
};
