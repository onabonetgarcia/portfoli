/* ============================================================
   DADES DEL PORTFOLI — aquí és on edites el contingut.

   IDIOMES: cada text pot ser
     - un text simple ("Excel")  → igual en tots els idiomes, o
     - { ca: "...", es: "...", en: "..." } → un per idioma.
   Si falta un idioma, es mostra el català.

   PROJECTES
   - Afegir-ne un: copia un bloc de "projects" i canvia'l.
   - Ocultar-ne un: hidden: true (el TFM és visible com a «en curs» amb el resultat pendent).
   - "scores": importància per a cada perfil d'oferta (0-10); més alt = més amunt.
   - "team": 1 = individual; un nombre >1 = equip d'aquesta mida; "equip" = mida no indicada.
   - "spine": títol curt que surt al llom del llibre (ha de ser curt!).
   - "types": tipus de projecte → dibuix del llom: scm (supply chain), ops (operacions),
     qual (qualitat), iiot (automatització/IIoT), pm (gestió de projectes). Pot tenir-ne diversos.
   - "img": imatge per a la pàgina esquerra del llibre obert (opcional).
   - "deck": presentació en vídeo dins la web ("video" = .mp4, "poster" = imatge de portada).
     Per a altres idiomes afegeix-hi "es" / "en" amb els seus propis video, poster, thumbs i slides.
   - "result": una línia amb el resultat principal (xifra o decisió). Opcional: si no n'hi ha, no surt.
   - "links": URL de la presentació o de l'informe si els vols publicar ("" = no surt).
   ============================================================ */
window.PORTFOLIO = {
  person: {
    name: "Ona Jie Bonet Garcia",
    title: {
      ca: "Enginyera industrial · Organització industrial",
      es: "Ingeniera industrial · Organización industrial",
      en: "Industrial engineer · Operations management"
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
      { id: "dcs-lighting", img: "assets/thumbs/dcs.jpg" },
      { id: "iiot", img: "assets/thumbs/iiot.jpg" },
      { id: "tfg-msa", img: "assets/thumbs/tfg.jpg" },
      { id: "plc", img: "assets/plc-grafcet.png" }
    ],
    location: "Vilassar de Dalt (Barcelona)",
    mapQuery: "Vilassar de Dalt, Barcelona",
    contact: {
      email: "onabonetgarcia@gmail.com",
      linkedin: "https://www.linkedin.com/in/ona-bonet-garcia",
      // CV en PDF per a cada idioma (versió per al web, sense telèfon!)
      cv: { ca: "assets/cv/CV_Bonet_Garcia_Ona_ca.pdf", es: "assets/cv/CV_Bonet_Garcia_Ona_es.pdf", en: "assets/cv/CV_Bonet_Garcia_Ona_en.pdf" }
    },
    about: {
      ca: "Enginyera industrial (màster en curs) especialitzada en Organització Industrial, amb 2 anys d'experiència en pràctiques en entorns industrials (automoció i tèxtil). Perfil proactiu, curiós, creatiu i organitzat, amb gran capacitat d'aprenentatge i sòlides habilitats analítiques per transformar dades en recomanacions clares i presentar-les de manera visual.",
      es: "Ingeniera industrial (máster en curso) especializada en Organización Industrial, con 2 años de experiencia en prácticas en entornos industriales (automoción y textil). Perfil proactivo, curioso, creativo y organizado, con gran capacidad de aprendizaje y sólidas habilidades analíticas para transformar datos en recomendaciones claras y presentarlas de forma visual.",
      en: "Industrial engineer (Master's in progress) specialising in Operations Management (Industrial Organisation), with 2 years of internship experience in industrial settings (automotive and textiles). Proactive, curious, creative and organised, a fast learner with strong analytical skills to turn data into clear recommendations and present them visually."
    },
    others: [
      {
        title: { ca: "Entrenadora de bàsquet", es: "Entrenadora de baloncesto", en: "Basketball coach" },
        org: "Club de Bàsquet Vilassar de Dalt",
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
      keywords: ["KPIs", { ca: "Previsió de la demanda", es: "Previsión de la demanda", en: "Demand forecasting" }, "MRP", { ca: "Planificació agregada", es: "Planificación agregada", en: "Aggregate planning" }, { ca: "Rutes (VRP)", es: "Rutas (VRP)", en: "Routing (VRP)" }, "ERP", "Excel"]
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
        intro: { ca: "Al departament tècnic vaig treballar per millorar els processos de producció, des de l'anàlisi fins a documentar els canvis a planta.", es: "En el departamento técnico trabajé para mejorar los procesos de producción, desde el análisis hasta documentar los cambios en planta.", en: "In the technical department I worked on improving production processes, from analysis to documenting the changes on the shop floor." },
        main: {
          label: { ca: "Projecte principal", es: "Proyecto principal", en: "Main project" },
          challenge: { ca: "S'havien detectat ineficiències a la secció de forns del procés de recobriment tèxtil amb silicona.", es: "Se habían detectado ineficiencias en la sección de hornos del proceso de recubrimiento textil con silicona.", en: "Inefficiencies had been detected in the oven section of the silicone textile-coating process." },
          did: { ca: "Vaig analitzar el sistema de producció, identificar oportunitats de millora i proposar una nova solució amb el seu pla de negoci.", es: "Analicé el sistema de producción, identifiqué oportunidades de mejora y propuse una nueva solución con su plan de negocio.", en: "Analysed the production system, identified improvement opportunities and proposed a new solution with its business case." },
          result: { ca: "Proposta presentada a la direcció, amb l'anàlisi de cost i benefici.", es: "Propuesta presentada a la dirección, con el análisis de coste y beneficio.", en: "Proposal presented to management, backed by a cost-benefit analysis." }
        },
        other: [
          { t: { ca: "Millora contínua", es: "Mejora continua", en: "Continuous improvement" }, d: { ca: "Avaluació tècnica i econòmica de projectes de millora (estalvis, ROI) i accions Kaizen implementades amb l'equip tècnic.", es: "Evaluación técnica y económica de proyectos de mejora (ahorros, ROI) y acciones Kaizen implementadas con el equipo técnico.", en: "Technical and economic assessment of improvement projects (savings, ROI) and Kaizen actions implemented with the technical team." } },
          { t: { ca: "Documentació", es: "Documentación", en: "Documentation" }, d: { ca: "Instruccions de treball per a maquinària nova i documentació per a la gestió de canvis interns.", es: "Instrucciones de trabajo para maquinaria nueva y documentación para la gestión de cambios internos.", en: "Work instructions for new machinery and internal change-management documentation." } }
        ],
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
        intro: { ca: "Al departament de qualitat vaig donar suport als requisits dels clients d'automoció, des dels sistemes de mesura fins a la documentació per aprovar peces.", es: "En el departamento de calidad di soporte a los requisitos de los clientes de automoción, desde los sistemas de medición hasta la documentación para aprobar piezas.", en: "In the quality department I supported automotive customers' requirements, from measurement systems to the documentation needed to approve parts." },
        main: {
          label: { ca: "Projecte principal · Treball de Fi de Grau", es: "Proyecto principal · Trabajo de Fin de Grado", en: "Main project · Bachelor's thesis" },
          challenge: { ca: "Comprovar si els sistemes de mesura de producció complien els requisits de l'automoció.", es: "Comprobar si los sistemas de medición de producción cumplían los requisitos de la automoción.", en: "Check whether the measurement systems used in production met automotive requirements." },
          did: { ca: "Anàlisi de sistemes de mesura (MSA) i control estadístic de processos (SPC), amb anàlisi estadística i de fiabilitat.", es: "Análisis de sistemas de medición (MSA) y control estadístico de procesos (SPC), con análisis estadístico y de fiabilidad.", en: "Measurement system analysis (MSA) and statistical process control (SPC), with statistical and reliability analysis." },
          result: { ca: "Propostes de millora per al procés de mesura.", es: "Propuestas de mejora para el proceso de medición.", en: "Improvement proposals for the measurement process." }
        },
        other: [
          { t: { ca: "Aprovació de peces (PPAP)", es: "Aprobación de piezas (PPAP)", en: "Part approval (PPAP)" }, d: { ca: "Documentació PPAP dins de l'APQP, segons VDA 2 i AIAG, amb comprovació del Cpk i coordinació amb clients.", es: "Documentación PPAP dentro del APQP, según VDA 2 y AIAG, con verificación del Cpk y coordinación con clientes.", en: "PPAP documentation within APQP, following VDA 2 and AIAG, including Cpk checks and coordination with customers." } },
          { t: { ca: "Automatització", es: "Automatización", en: "Automation" }, d: { ca: "Plantilla única de PPAP per a VDA i AIAG, automatitzada amb macros de VBA.", es: "Plantilla única de PPAP para VDA y AIAG, automatizada con macros de VBA.", en: "A single PPAP template for VDA and AIAG, automated with VBA macros." } },
          { t: { ca: "Auditories", es: "Auditorías", en: "Audits" }, d: { ca: "Auditories internes de producte segons VDA 6.5.", es: "Auditorías internas de producto según VDA 6.5.", en: "Internal product audits following VDA 6.5." } }
        ],
        did: [
          { ca: "Treball de Fi de Grau: anàlisi de sistemes de mesura a la indústria automotriu (SPC, MSA), aplicant anàlisi estadística i de fiabilitat per proposar millores.", es: "Trabajo de Fin de Grado: análisis de sistemas de medición en la industria automotriz (SPC, MSA), aplicando análisis estadístico y de fiabilidad para proponer mejoras.", en: "Bachelor's thesis: measurement system analysis in the automotive industry (SPC, MSA), applying statistical and reliability analysis to propose improvements." },
          { ca: "Documentació tècnica (PPAPs) dins del procés APQP, segons VDA 2 i AIAG, amb comprovació del Cpk i coordinació amb equips interns i clients.", es: "Documentación técnica (PPAPs) dentro del proceso APQP, según VDA 2 y AIAG, con verificación del Cpk y coordinación con equipos internos y clientes.", en: "Technical documentation (PPAPs) within APQP, following VDA 2 and AIAG, including Cpk checks and coordination with internal teams and customers." },
          { ca: "Plantilla única de PPAP per a VDA i AIAG, automatitzada amb macros de Visual Basic.", es: "Plantilla única de PPAP para VDA y AIAG, automatizada con macros de Visual Basic.", en: "Built a single PPAP template for VDA and AIAG, automated with Visual Basic macros." },
          { ca: "Auditories internes de producte (VDA 6.5).", es: "Auditorías internas de producto (VDA 6.5).", en: "Internal product audits (VDA 6.5)." }
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
        { ca: "Rigor i atenció al detall", es: "Rigor y atención al detalle", en: "Rigour and attention to detail" },
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
      rows: [
        { t: { ca: "Cadena de subministrament i plantes", es: "Cadena de suministro y plantas", en: "Supply chain and plants" }, d: { ca: "Disseny de la cadena de subministrament i de plantes industrials: distribució en planta (layouts), construcció industrial i instal·lacions.", es: "Diseño de la cadena de suministro y de plantas industriales: distribución en planta (layouts), construcción industrial e instalaciones.", en: "Supply chain design and industrial plant design: plant layouts, industrial construction and building services." }, links: [{ id: "dcs-lighting", t: { ca: "Projecte de cadena", es: "Proyecto de cadena", en: "Supply chain project" } }, { id: "implantacio", t: { ca: "Projecte de plantes", es: "Proyecto de plantas", en: "Plant project" } }] },
        { t: { ca: "Direcció d'operacions", es: "Dirección de operaciones", en: "Operations management" }, d: { ca: "Lean manufacturing, Kaizen i SMED.", es: "Lean manufacturing, Kaizen y SMED.", en: "Lean manufacturing, Kaizen and SMED." } },
        { t: { ca: "Direcció de projectes", es: "Dirección de proyectos", en: "Project management" }, d: { ca: "Project manager d'un equip de 6 persones: abast, temps, costos, qualitat i riscos.", es: "Project manager de un equipo de 6 personas: alcance, tiempo, costes, calidad y riesgos.", en: "Project manager of a team of 6: scope, schedule, cost, quality and risk." }, link: "dip" },
        { t: { ca: "Treball de fi de màster", es: "Trabajo de fin de máster", en: "Master's thesis" }, d: { ca: "Estudi de viabilitat d'un nou sistema de dosificació de silicona.", es: "Estudio de viabilidad de un nuevo sistema de dosificación de silicona.", en: "Feasibility study of a new silicone dosing system." }, link: "tfm" }
      ],
      tags: ["AutoCAD", "SolidWorks", "Lean", "Kaizen", "SMED"]
    },
    {
      kind: "grau", end: "2025-01",
      title: { ca: "Grau en Enginyeria en Tecnologies Industrials", es: "Grado en Ingeniería en Tecnologías Industriales", en: "Bachelor's Degree in Industrial Technology Engineering" },
      school: "ESEIAAT – UPC", mapQuery: "ESEIAAT UPC Terrassa",
      period: { ca: "Set. 2020 – Gen. 2025", es: "Sept. 2020 – Ene. 2025", en: "Sep 2020 – Jan 2025" },
      note: "",
      rows: [
        { t: { ca: "Treball de fi de grau", es: "Trabajo de fin de grado", en: "Bachelor's thesis" }, d: { ca: "Sistema de gestió d'anàlisi de mesura (MSA) a la indústria d'automoció.", es: "Sistema de gestión del análisis de medición (MSA) en la industria automotriz.", en: "Measurement system analysis (MSA) in the automotive industry." }, link: "tfg-msa" },
        { t: { ca: "Projecte d'equip", es: "Proyecto de equipo", en: "Team project" }, d: { ca: "Project manager d'un equip de 10 persones: digitalització de cultius.", es: "Project manager de un equipo de 10 personas: digitalización de cultivos.", en: "Project manager of a team of 10: crop digitalisation." }, link: "cultius" },
        { t: { ca: "Innovació i creativitat", es: "Innovación y creatividad", en: "Innovation and creativity" }, d: { ca: "Projecte d'innovació en equip.", es: "Proyecto de innovación en equipo.", en: "Team innovation project." }, link: "creativity" }
      ]
    },
    {
      kind: "course", end: "2026-07",   // formació complementària: un altre color
      title: { ca: "Curs d'estiu NUAA", es: "Curso de verano NUAA", en: "NUAA summer school" },
      school: { ca: "Nanjing University of Aeronautics and Astronautics, Nanjing (Xina)", es: "Nanjing University of Aeronautics and Astronautics, Nanjing (China)", en: "Nanjing University of Aeronautics and Astronautics, Nanjing (China)" }, mapQuery: "Nanjing University of Aeronautics and Astronautics, Nanjing",
      period: { ca: "Jul. 2026", es: "Jul. 2026", en: "Jul 2026" },
      note: "",
      rows: [
        { t: { ca: "Cultura", es: "Cultura", en: "Culture" }, d: { ca: "Tallers de cultura xinesa i visites culturals a la ciutat de Nanjing.", es: "Talleres de cultura china y visitas culturales en la ciudad de Nanjing.", en: "Chinese culture workshops and cultural visits in the city of Nanjing." },
          gallery: { photos: ["assets/nanjing/6.jpg?v=2", "assets/nanjing/1.jpg?v=2", "assets/nanjing/4.jpg?v=2", "assets/nanjing/3.jpg?v=2", "assets/nanjing/5.jpg?v=2"], caps: [
            { ca: "Canal Qinhuai de nit", es: "Canal Qinhuai de noche", en: "Qinhuai canal at night" },
            { ca: "Taller de cal·ligrafia xinesa", es: "Taller de caligrafía china", en: "Chinese calligraphy workshop" },
            { ca: "Teulada del mausoleu de Sun Yat-sen", es: "Tejado del mausoleo de Sun Yat-sen", en: "Roof of the Sun Yat-sen Mausoleum" },
            { ca: "Hidroavió AG600 al campus de la NUAA", es: "Hidroavión AG600 en el campus de la NUAA", en: "AG600 amphibious aircraft on the NUAA campus" },
                        { ca: "Muralla de Nanjing al capvespre", es: "Muralla de Nanjing al atardecer", en: "Nanjing city wall at dusk" }
          ], cap: { ca: "Fotos de Nanjing fetes per mi.", es: "Fotos de Nanjing hechas por mí.", en: "Photos of Nanjing, taken by me." } } },
        { t: { ca: "Indústria", es: "Industria", en: "Industry" }, d: { ca: "Visites a fàbriques i programació de braç robòtic.", es: "Visitas a fábricas y programación de brazo robótico.", en: "Factory visits and robotic arm programming." }, video: { src: "assets/robot.mp4?v=1", title: { ca: "Programació d'un braç robòtic", es: "Programación de un brazo robótico", en: "Robotic arm programming" }, cap: { ca: "Pràctica a la NUAA: vam programar el braç en grup.", es: "Práctica en la NUAA: programamos el brazo en grupo.", en: "NUAA lab: we programmed the arm as a team." } } },
        { t: { ca: "Competició d'avions", es: "Competición de aviones", en: "Aircraft competition" }, d: { ca: "Construcció d'un avió contra equips internacionals.", es: "Construcción de un avión contra equipos internacionales.", en: "Building an aircraft against international teams." }, photo: "assets/nuaa-avio.jpg?v=1" }
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
      id: "dcs-lighting",
      spine: { ca: "Supply chain · Il·luminació", es: "Supply chain · Iluminación", en: "Supply chain · Lighting" },
      types: ["scm", "ops"], img: "assets/thumbs/dcs.jpg",
      title: { ca: "Disseny d'una cadena de subministrament per a una empresa d'il·luminació de disseny", es: "Diseño de una cadena de suministro para una empresa de iluminación de diseño", en: "Supply chain design for a design-lighting company" },
      level: "Màster", year: "2025", month: 12, team: 3,
      context: { ca: "Disseny de la Cadena de Subministrament", es: "Diseño de la Cadena de Suministro", en: "Supply Chain Design" },
      disclaimer: { ca: "Projecte acadèmic sense vinculació amb l'empresa. Xifres estimades, no facilitades per l'empresa.", es: "Proyecto académico sin vinculación con la empresa. Cifras estimadas, no facilitadas por la empresa.", en: "Academic project with no affiliation with the company. Figures are estimates, not provided by the company." },
      summary: {
        ca: "Disseny complet d'una nova nau de producció de la làmpada Milana per escalar a consum de masses: localització, layout, i planificació de la producció.",
        es: "Diseño completo de una nueva nave de producción de la lámpara Milana para escalar al consumo de masas: localización, layout y planificación de la producción.",
        en: "End-to-end design of a new production plant for the Milana lamp to scale up to the mass market: location, layout and production planning."
      },
      did: [
        { ca: "Localització en tres etapes (continent, país, ciutat) amb el mètode del valor tècnic ponderat; la ciutat triada és Changzhou.", es: "Localización en tres etapas (continente, país, ciudad) con el método del valor técnico ponderado; la ciudad elegida es Changzhou.", en: "Three-stage location analysis (continent, country, city) using the weighted technical value method; Changzhou was selected." },
        { ca: "Estimació de la demanda anual (440.000 làmpades) a partir de la mida del mercat i d'una quota objectiu.", es: "Estimación de la demanda anual (440.000 lámparas) a partir del tamaño del mercado y de una cuota objetivo.", en: "Annual demand estimate (440,000 lamps) from market size and a target share." },
        { ca: "Layout de la nau: definició d'operacions, takt time de 13,5 s/ud, nombre de cèl·lules de treball i àrea de magatzem.", es: "Layout de la nave: definición de operaciones, takt time de 13,5 s/ud, número de células de trabajo y área de almacén.", en: "Plant layout: operations, 13.5 s/unit takt time, number of work cells and warehouse area." },
        { ca: "Planificació agregada, BOM i MRP.", es: "Planificación agregada, BOM y MRP.", en: "Aggregate planning, BOM and MRP." }
      ],
      result: { ca: "Nau a Changzhou dimensionada per a 440.000 làmpades l'any, amb un takt time de 13,5 s/ud i el pla de producció (MRP) definit.", es: "Nave en Changzhou dimensionada para 440.000 lámparas al año, con un takt time de 13,5 s/ud y el plan de producción (MRP) definido.", en: "A plant in Changzhou sized for 440,000 lamps a year, with a 13.5 s/unit takt time and a defined production plan (MRP)." },
      tools: ["Excel", "PowerPoint", "SolidWorks"],
      // Presentació exportada a vídeo des del PowerPoint (amb animacions i vídeos), sense noms a la portada.
      // chapters: segon d'inici de cada diapositiva dins del vídeo (miniatures a assets/dcs/thumbs/sNN.jpg)
      deck: {
        video: "assets/dcs/presentacio.mp4", poster: "assets/dcs/poster.jpg",
        thumbs: "assets/dcs/thumbs/s",
        chapters: [0, 5, 10, 15, 20, 25, 30, 49.5, 70, 75, 97.5, 102.5, 107.5, 112.5, 117.5, 122.5, 127.5, 132.5, 137.5],
        slides: "assets/dcs/slides/", anim: [4, 5, 6, 7, 8, 10, 15, 19],
        // Versions de la presentació en altres idiomes (mateixos capítols i animacions; sense clau = català)
        es: { video: "assets/dcs/es/presentacio.mp4", poster: "assets/dcs/es/poster.jpg", thumbs: "assets/dcs/es/thumbs/s", slides: "assets/dcs/es/slides/" },
        // L'anglès té 18 diapositives (sense la final «FIN»)
        en: { video: "assets/dcs/en/presentacio.mp4", poster: "assets/dcs/en/poster.jpg", thumbs: "assets/dcs/en/thumbs/s", slides: "assets/dcs/en/slides/",
              chapters: [0, 5, 10, 15, 20, 25, 30, 49.5, 70, 75, 97.5, 102.5, 107.5, 112.5, 117.5, 122.5, 127.5, 132.5], anim: [4, 5, 6, 7, 8, 10, 15] }
      },
      scores: { all: 10, scm: 10, ops: 9, qual: 2, iiot: 1, pm: 5 },
      links: { slides: "", report: "" }
    },
    {
      id: "vrp",
      spine: { ca: "Rutes VRP", es: "Rutas VRP", en: "VRP routing" },
      types: ["scm"],
      title: { ca: "Planificació de rutes de distribució (VRP)", es: "Planificación de rutas de distribución (VRP)", en: "Distribution route planning (VRP)" },
      level: "Màster", year: "2026", month: 1, team: 2,
      context: { ca: "Models i Eines de Decisió", es: "Modelos y Herramientas de Decisión", en: "Decision Models and Tools" },
      summary: { ca: "Resolució d'un problema de rutes de vehicles amb l'heurística d'estalvis de Clarke & Wright.", es: "Resolución de un problema de rutas de vehículos con la heurística de ahorros de Clarke & Wright.", en: "Solving a vehicle routing problem with the Clarke & Wright savings heuristic." },
      did: [
        { ca: "Plantejament del cas: dades dels clients i matriu de distàncies.", es: "Planteamiento del caso: datos de los clientes y matriz de distancias.", en: "Case set-up: customer data and distance matrix." },
        { ca: "Implementació del codi de resolució: llista ordenada d'estalvis i construcció de les rutes.", es: "Implementación del código de resolución: lista ordenada de ahorros y construcción de las rutas.", en: "Solver code: ranked savings list and route construction." },
        { ca: "Anàlisi dels resultats i conclusions.", es: "Análisis de los resultados y conclusiones.", en: "Results analysis and conclusions." }
      ],
      result: { ca: "5 rutes que donen servei a 10 punts de venda respectant la capacitat dels vehicles (30 unitats) i les finestres horàries; l'últim servei acaba a les 14:30.", es: "5 rutas que dan servicio a 10 puntos de venta respetando la capacidad de los vehículos (30 unidades) y las ventanas horarias; el último servicio termina a las 14:30.", en: "5 routes serving 10 points of sale within the vehicle capacity (30 units) and their time windows; the last delivery ends at 14:30." },
      tools: ["Clarke & Wright", { ca: "Heurístiques", es: "Heurísticas", en: "Heuristics" }],
      scores: { all: 8, scm: 9, ops: 5, qual: 2, iiot: 1, pm: 1 },
      links: { slides: "", report: "" }
    },
    {
      id: "stats-ts",
      spine: { ca: "Sèries temporals", es: "Series temporales", en: "Time series" },
      types: ["qual", "scm"], img: { ca: "assets/thumbs/st.png", es: "assets/thumbs/st-es.png", en: "assets/thumbs/st-en.png" }, imgTS: true,
      title: { ca: "Estadística aplicada: modelització i previsió d'una sèrie temporal", es: "Estadística aplicada: modelización y previsión de una serie temporal", en: "Applied statistics: time-series modelling and forecasting" },
      level: "Màster", year: "2025", month: 12, team: 1,
      context: { ca: "Estadística Aplicada a l'Organització Industrial", es: "Estadística Aplicada a la Organización Industrial", en: "Applied Statistics for Industrial Organisation" },
      summary: { ca: "Modelització i previsió d'una sèrie temporal amb tendència creixent i estacionalitat, comparant dos models.", es: "Modelización y previsión de una serie temporal con tendencia creciente y estacionalidad, comparando dos modelos.", en: "Modelling and forecasting a time series with a rising trend and seasonality, comparing two models." },
      did: [
        { ca: "Descomposició clàssica de la sèrie: tendència (mitjana mòbil) i estacionalitat.", es: "Descomposición clásica de la serie: tendencia (media móvil) y estacionalidad.", en: "Classical decomposition of the series: trend (moving average) and seasonality." },
        { ca: "Model de regressió amb variables categòriques per a l'estacionalitat.", es: "Modelo de regresión con variables categóricas para la estacionalidad.", en: "Regression model with categorical variables for seasonality." },
        { ca: "Validació dels residus i comparació dels dos models.", es: "Validación de los residuos y comparación de los dos modelos.", en: "Residual validation and comparison of the two models." },
        { ca: "Autocorrelograma i previsions.", es: "Autocorrelograma y previsiones.", en: "Autocorrelogram and forecasts." }
      ],
      result: { ca: "Model triat: regressió amb variables categòriques (R² = 0,996; error màxim de 28 milers d'€), amb un error estable en el temps; la descomposició clàssica perd precisió a partir de t = 60. Previsions per als 8 períodes següents.", es: "Modelo elegido: regresión con variables categóricas (R² = 0,996; error máximo de 28 miles de €), con un error estable en el tiempo; la descomposición clásica pierde precisión a partir de t = 60. Previsiones para los 8 periodos siguientes.", en: "Chosen model: regression with categorical variables (R² = 0.996; maximum error of €28k), with a stable error over time; classical decomposition loses accuracy from t = 60. Forecasts for the next 8 periods." },
      tools: [{ ca: "Regressió", es: "Regresión", en: "Regression" }, "Excel"],
      scores: { all: 7, scm: 9, ops: 4, qual: 8, iiot: 2, pm: 1 },
      links: { slides: "", report: "" }
    },
    {
      id: "stats-pca",
      spine: { ca: "Anàlisi multivariable", es: "Análisis multivariante", en: "Multivariate analysis" },
      types: ["qual"], img: { ca: "assets/thumbs/pca.png", es: "assets/thumbs/pca-es.png", en: "assets/thumbs/pca-en.png" },
      title: { ca: "Estadística aplicada: anàlisi de components principals", es: "Estadística aplicada: análisis de componentes principales", en: "Applied statistics: principal component analysis" },
      level: "Màster", year: "2025", month: 10, team: 1,
      context: { ca: "Estadística Aplicada a l'Organització Industrial", es: "Estadística Aplicada a la Organización Industrial", en: "Applied Statistics for Industrial Organisation" },
      summary: { ca: "Anàlisi de components principals de les 7 proves de l'heptatló de 55 atletes, per resumir-ne el rendiment en dues variables noves.", es: "Análisis de componentes principales de las 7 pruebas del heptatlón de 55 atletas, para resumir su rendimiento en dos variables nuevas.", en: "Principal component analysis of the 7 heptathlon events of 55 athletes, summarising performance in two new variables." },
      did: [
        { ca: "Estudi de la matriu de correlacions per comprovar que el PCA és adequat.", es: "Estudio de la matriz de correlaciones para comprobar que el PCA es adecuado.", en: "Correlation-matrix check to confirm that PCA is suitable." },
        { ca: "Tipificació de les dades (variàncies molt diferents) i càlcul de valors i vectors propis.", es: "Tipificación de los datos (varianzas muy distintas) y cálculo de valores y vectores propios.", en: "Standardisation of the data (very different variances) and eigenvalue/eigenvector computation." },
        { ca: "Selecció de dues components (89,3 % de la variabilitat) amb el gràfic de colze.", es: "Selección de dos componentes (89,3 % de la variabilidad) con el gráfico de codo.", en: "Choice of two components (89.3% of the variance) using the scree plot." },
        { ca: "Interpretació: la primera component com a rendiment global i la segona com a perfil físic (força o agilitat); classificació dels atletes en el pla de les dues components.", es: "Interpretación: la primera componente como rendimiento global y la segunda como perfil físico (fuerza o agilidad); clasificación de los atletas en el plano de las dos componentes.", en: "Interpretation: the first component as overall performance and the second as physical profile (strength or agility); athletes classified in the two-component plane." }
      ],
      result: { ca: "Les 7 proves es resumeixen en 2 variables (89,3 % de la variabilitat): rendiment global i perfil físic de cada atleta.", es: "Las 7 pruebas se resumen en 2 variables (89,3 % de la variabilidad): rendimiento global y perfil físico de cada atleta.", en: "The 7 events reduced to 2 variables (89.3% of the variance): overall performance and physical profile of each athlete." },
      tools: [{ ca: "Components principals", es: "Componentes principales", en: "Principal components" }, "Excel"],
      scores: { all: 6, scm: 6, ops: 3, qual: 9, iiot: 2, pm: 1 },
      links: { slides: "", report: "" }
    },
    {
      id: "tfg-msa",
      spine: { ca: "TFG · MSA", es: "TFG · MSA", en: "Thesis · MSA" },
      types: ["qual"], img: "assets/thumbs/tfg.jpg",
      title: { ca: "Treball de fi de grau: sistema de gestió d'anàlisi de mesura (MSA) a la indústria d'automoció", es: "Trabajo de fin de grado: sistema de gestión del análisis de medición (MSA) en la industria automotriz", en: "Bachelor's thesis: measurement system analysis (MSA) in the automotive industry" },
      level: "Grau", year: "2025", month: 1, team: 1,
      context: { ca: "En empresa tèxtil tècnic per automoció", es: "En empresa textil técnico para automoción", en: "At a technical-textile automotive supplier" },
      summary: { ca: "Anàlisi dels sistemes de mesura d'una família de productes d'automoció per verificar-ne la capacitat i proposar millores en la seva gestió.", es: "Análisis de los sistemas de medición de una familia de productos de automoción para verificar su capacidad y proponer mejoras en su gestión.", en: "Analysis of the measurement systems for an automotive product family to check their capability and propose management improvements." },
      did: [
        { ca: "Avaluació de tres sistemes de mesura seguint el manual MSA: estabilitat, biaix, linealitat i repetibilitat i reproductibilitat (R&R).", es: "Evaluación de tres sistemas de medición según el manual MSA: estabilidad, sesgo, linealidad y repetibilidad y reproducibilidad (R&R).", en: "Assessed three measurement systems following the MSA manual: stability, bias, linearity and repeatability & reproducibility (R&R)." },
        { ca: "Identificació de factors de variabilitat que fins llavors no s'havien considerat.", es: "Identificación de factores de variabilidad que hasta entonces no se habían considerado.", en: "Identified sources of variability that had not been considered before." },
        { ca: "Propostes de millora dels sistemes de mesura i d'un pla genèric de gestió i documentació.", es: "Propuestas de mejora de los sistemas de medición y de un plan genérico de gestión y documentación.", en: "Improvement proposals for the measurement systems and a generic management and documentation plan." },
        { ca: "Pressupost i valoració de les implicacions ambientals i socials.", es: "Presupuesto y valoración de las implicaciones ambientales y sociales.", en: "Budget and assessment of environmental and social implications." }
      ],
      result: { ca: "Detecció de fonts de variabilitat que no es tenien en compte i un pla genèric per gestionar i documentar els sistemes de mesura.", es: "Detección de fuentes de variabilidad que no se tenían en cuenta y un plan genérico para gestionar y documentar los sistemas de medición.", en: "Sources of variability that had been overlooked were identified, plus a generic plan to manage and document the measurement systems." },
      tools: ["MSA", "Minitab", "ISO 9001", "IATF 16949"],
      scores: { all: 9, scm: 5, ops: 7, qual: 10, iiot: 2, pm: 3 },
      links: { slides: "", report: "" }
    },
    {
      id: "implantacio",
      spine: { ca: "Implantació industrial", es: "Implantación industrial", en: "Plant layout" },
      types: ["ops"],
      title: { ca: "Implantació d'un edifici industrial", es: "Implantación de un edificio industrial", en: "Industrial building layout and fire safety" },
      level: "Màster", year: "2025", month: 4, team: 4,
      context: { ca: "Disseny i Construcció de Plantes Industrials", es: "Diseño y Construcción de Plantas Industriales", en: "Industrial Plant Design and Construction" },
      summary: { ca: "Distribució en planta d'una nau industrial i justificació del compliment de la normativa de seguretat en cas d'incendi.", es: "Distribución en planta de una nave industrial y justificación del cumplimiento de la normativa de seguridad contra incendios.", en: "Plant layout for an industrial building and compliance with fire-safety regulations." },
      result: { ca: "De les quatre propostes de distribució avaluades pel mètode de factors ponderats, s'escull la D (9,30 sobre 10, davant 7,20, 8,30 i 8,60). L'edifici queda dividit en dos sectors d'incendi (nau de 2.881 m² i oficines de 1.208 m²), amb risc intrínsec baix (nivell 1) i configuració de tipus C, i es defineixen estabilitat al foc, evacuació i protecció (13 extintors a la nau).", es: "De las cuatro propuestas de distribución evaluadas por el método de factores ponderados, se escoge la D (9,30 sobre 10, frente a 7,20, 8,30 y 8,60). El edificio queda dividido en dos sectores de incendio (nave de 2.881 m² y oficinas de 1.208 m²), con riesgo intrínseco bajo (nivel 1) y configuración de tipo C, y se definen estabilidad al fuego, evacuación y protección (13 extintores en la nave).", en: "Of the four layout proposals scored with the weighted-factor method, option D is chosen (9.30 out of 10, versus 7.20, 8.30 and 8.60). The building is split into two fire sectors (2,881 m² plant and 1,208 m² offices), with low intrinsic risk (level 1) and type C configuration, and fire resistance, evacuation and protection are defined (13 extinguishers in the plant)." },
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
      types: ["iiot"], img: "assets/thumbs/iiot.jpg", imgSim: "dash",
      title: { ca: "Arquitectura IIoT al núvol: del PLC al quadre de comandament", es: "Arquitectura IIoT en la nube: del PLC al cuadro de mando", en: "Cloud IIoT architecture: from PLC to dashboard" },
      level: "Màster", year: "2026", month: 10, team: 1,
      context: "Industrial Internet of Things and Cyber Physical Systems",
      summary: { ca: "Sistema al núvol que vigila la vibració d'un motor elèctric i diagnostica si el coixinet està sa o fallant.", es: "Sistema en la nube que vigila la vibración de un motor eléctrico y diagnostica si el rodamiento está sano o fallando.", en: "Cloud system that monitors an electric motor's vibration and diagnoses whether its bearing is healthy or failing." },
      did: [
        { ca: "Muntatge a Azure d'una màquina virtual Linux amb Node-RED, InfluxDB i Grafana en contenidors Docker.", es: "Montaje en Azure de una máquina virtual Linux con Node-RED, InfluxDB y Grafana en contenedores Docker.", en: "Set-up of a Linux VM on Azure running Node-RED, InfluxDB and Grafana in Docker containers." },
        { ca: "Adquisició de dades: el PLC envia la vibració del motor (4 indicadors estadístics) i Node-RED la llegeix per Modbus i la desa a InfluxDB.", es: "Adquisición de datos: el PLC envía la vibración del motor (4 indicadores estadísticos) y Node-RED la lee por Modbus y la guarda en InfluxDB.", en: "Data acquisition: the PLC sends the motor's vibration (4 statistical indicators) and Node-RED reads it over Modbus and stores it in InfluxDB." },
        { ca: "Classificació amb MATLAB cada minut: resum de cada mesura en 2 valors i, si és coneguda, diagnòstic amb una xarxa neuronal (model facilitat): sa o fallada.", es: "Clasificación con MATLAB cada minuto: resumen de cada medida en 2 valores y, si es conocida, diagnóstico con una red neuronal (modelo facilitado): sano o fallo.", en: "Classification with MATLAB every minute: each measurement reduced to 2 values and, if known, diagnosed by a neural network (provided model): healthy or failure." },
        { ca: "Quadre de comandament a Grafana, que aquí es pot provar amb mesures reals.", es: "Cuadro de mando en Grafana, que aquí se puede probar con medidas reales.", en: "Grafana dashboard, which can be tried here with real measurements." }
      ],
      result: { ca: "Sistema funcionant de punta a punta: cada minut diagnostica automàticament l'estat del coixinet i el mostra al quadre de comandament.", es: "Sistema funcionando de punta a punta: cada minuto diagnostica automáticamente el estado del rodamiento y lo muestra en el cuadro de mando.", en: "A working end-to-end system: every minute it automatically diagnoses the bearing's condition and shows it on the dashboard." },
      tools: ["Azure", "Docker", "Node-RED", "InfluxDB", "Grafana", "MATLAB"],
      scores: { all: 8, scm: 6, ops: 3, qual: 3, iiot: 10, pm: 1 },
      links: { slides: "", report: "" }
    },
    {
      id: "plc",
      spine: "PLC · GRAFCET",
      types: ["iiot"], img: "assets/plc-grafcet-generic.png",
      imgAlt: "assets/plc-grafcet.png",
      imgFlow: {
        steps: [
          { id: "01", cars: "g", ped: "r", after: "Cx", t: { ca: "Estat inicial: cotxes en verd i vianants en vermell, a l'espera que es premi el polsador.", es: "Estado inicial: coches en verde y peatones en rojo, a la espera de que se pulse el botón.", en: "Initial state: cars green, pedestrians red, waiting for the push button." } },
          { id: "1 · 101", cars: "g", ped: "r", after: "5 s", t: { ca: "Es prem el polsador: els cotxes segueixen en verd 5 s.", es: "Se pulsa el botón: los coches siguen en verde 5 s.", en: "Button pressed: cars stay green for 5 s." } },
          { id: "2 · 101", cars: "a", ped: "r", after: "8 s", t: { ca: "Àmbar per als cotxes.", es: "Ámbar para los coches.", en: "Amber for cars." } },
          { id: "3 · 102", cars: "r", ped: "g", after: "25 s", t: { ca: "Cotxes en vermell i vianants en verd.", es: "Coches en rojo y peatones en verde.", en: "Cars red, pedestrians green." } },
          { id: "4 · 102", cars: "r", ped: "f", after: "9 s", t: { ca: "Verd intermitent dels vianants; en acabar, torna a l'estat 01.", es: "Verde intermitente de los peatones; al acabar, vuelve al estado 01.", en: "Pedestrians flashing green; then back to state 01." } }
        ],
        aux: [
          { id: "120", after: "0,8 s", t: { ca: "Llum del vianant apagada", es: "Luz del peatón apagada", en: "Pedestrian light off" } },
          { id: "121", after: "0,5 s", t: { ca: "Llum del vianant encesa", es: "Luz del peatón encendida", en: "Pedestrian light on" } }
        ]
      },
      title: { ca: "Control seqüencial d'un creuament amb semàfors (PLC i GRAFCET)", es: "Control secuencial de un cruce con semáforos (PLC y GRAFCET)", en: "Sequential control of a traffic-light crossing (PLC and GRAFCET)" },
      level: "Màster", year: "2025", month: 5, team: 2,
      context: { ca: "Producció Automatitzada i Control Avançat de Processos", es: "Producción Automatizada y Control Avanzado de Procesos", en: "Automated Production and Advanced Process Control" },
      summary: { ca: "Disseny i programació al PLC de la seqüència d'un creuament amb semàfors de cotxes i vianants.", es: "Diseño y programación en PLC de la secuencia de un cruce con semáforos de coches y peatones.", en: "Design and PLC programming of the sequence for a crossing with car and pedestrian lights." },
      result: { ca: "Programa de PLC (Sysmac Studio) que governa tres semàfors de cotxes i de vianants amb polsadors, prioritats i temporitzacions (5, 8, 25 i 9 s) i verd intermitent. Amb la millora, els vehicles tenen almenys 90 s de pas continuat entre seqüències.", es: "Programa de PLC (Sysmac Studio) que gobierna tres semáforos de coches y de peatones con pulsadores, prioridades y temporizaciones (5, 8, 25 y 9 s) y verde intermitente. Con la mejora, los vehículos tienen al menos 90 s de paso continuado entre secuencias.", en: "PLC program (Sysmac Studio) controlling three car and pedestrian lights with push buttons, priorities, timings (5, 8, 25 and 9 s) and flashing green. With the improvement, vehicles get at least 90 s of continuous green between sequences." },
      did: [
        { ca: "Modelització amb GRAFCET (genèric i del sistema complet).", es: "Modelización con GRAFCET (genérico y del sistema completo).", en: "GRAFCET modelling (generic and full system)." },
        { ca: "Programació del PLC en llenguatge de contactes: inicialització, polsadors, intermitència i sortides dels semàfors.", es: "Programación del PLC en lenguaje de contactos: inicialización, pulsadores, intermitencia y salidas de los semáforos.", en: "PLC programming in ladder logic: initialisation, push buttons, flashing mode and light outputs." },
        { ca: "Millora del sistema afegint un temps mínim de pas continuat per als vehicles.", es: "Mejora del sistema añadiendo un tiempo mínimo de paso continuado para los vehículos.", en: "Improvement adding a minimum continuous green time for vehicles." }
      ],
      tools: ["PLC", "Sysmac Studio", "GRAFCET", { ca: "Diagrama de contactes", es: "Diagrama de contactos", en: "Ladder logic" }],
      scores: { all: 5, scm: 1, ops: 4, qual: 1, iiot: 9, pm: 1 },
      links: { slides: "", report: "" }
    },
    {
      id: "markov",
      spine: { ca: "Cadenes de Màrkov", es: "Cadenas de Márkov", en: "Markov chains" },
      types: ["qual"],   // mètodes quantitatius → mateix dibuix que estadística
      title: { ca: "Cadenes de Màrkov: model d'un cas d'hàbits de lectura", es: "Cadenas de Márkov: modelo de un caso de hábitos de lectura", en: "Markov chains: modelling reading habits" },
      level: "Màster", year: "2025", month: 11, team: 1,
      context: { ca: "Mètodes Quantitatius d'Organització Industrial", es: "Métodos Cuantitativos de Organización Industrial", en: "Quantitative Methods for Industrial Organisation" },
      chain: {
        img: "assets/markov-chain.png",
        legend: [
          { k: "D", t: { ca: "Llibre digital", es: "Libro digital", en: "Digital book" } },
          { k: "NF", t: { ca: "Llibre nou físic", es: "Libro nuevo físico", en: "New physical book" } },
          { k: "2M", t: { ca: "Llibre de segona mà", es: "Libro de segunda mano", en: "Second-hand book" } },
          { k: "PA", t: { ca: "Llibre de la parada d'autobús", es: "Libro de la parada de autobús", en: "Bus-stop book" } }
        ]
      },
      costs: {
        stateHead: { ca: "Estat", es: "Estado", en: "State" },
        head: [{ ca: "Cost curt", es: "Coste corto", en: "Short cost" }, { ca: "Cost llarg", es: "Coste largo", en: "Long cost" }],
        rows: [
          { k: "D", v: { ca: ["6,50 €", "7,50 €"], es: ["6,50 €", "7,50 €"], en: ["€6.50", "€7.50"] } },
          { k: "NF", v: { ca: ["15 €", "20 €"], es: ["15 €", "20 €"], en: ["€15", "€20"] } },
          { k: "2M", v: { ca: ["10 €", "5 €"], es: ["10 €", "5 €"], en: ["€10", "€5"] } },
          { k: "PA", v: { ca: ["0 €", "0 €"], es: ["0 €", "0 €"], en: ["€0", "€0"] } }
        ]
      },
      summary: { ca: "Una lectora tria entre llibres digitals, nous, de segona mà o de la parada d'autobús, curts o llargs. Es modela com una cadena de Màrkov de 4 estats i 16 polítiques; la millor surt a 9,03 € de mitjana per canvi de llibre.", es: "Una lectora elige entre libros digitales, nuevos, de segunda mano o de la parada de autobús, cortos o largos. Se modela como una cadena de Márkov de 4 estados y 16 políticas; la mejor sale a 9,03 € de media por cambio de libro.", en: "A reader chooses between digital, new, second-hand or bus-stop books, short or long. It is modelled as a 4-state Markov chain with 16 policies; the best one costs €9.03 on average per book change." },
      did: [
        { ca: "Enunciat i definició dels estats i de les transicions.", es: "Enunciado y definición de los estados y las transiciones.", en: "Problem statement, states and transitions." },
        { ca: "Resolució i càlculs amb codi en R i fulls de càlcul.", es: "Resolución y cálculos con código en R y hojas de cálculo.", en: "Solution and calculations with R code and spreadsheets." },
        { ca: "Conclusió: la millor política (llibres curts digitals, de segona mà i de la parada; nous físics llargs) costa 9,03 € de mitjana per llibre; la pitjor, 11,35 €, és la seva inversa.", es: "Conclusión: la mejor política (libros cortos digitales, de segunda mano y de la parada; nuevos físicos largos) cuesta 9,03 € de media por libro; la peor, 11,35 €, es su inversa.", en: "Conclusion: the best policy (short digital, second-hand and bus-stop books; long new physical ones) costs €9.03 on average per book; the worst, €11.35, is its exact opposite." }
      ],
      result: { ca: "La millor política costa 9,03 € per canvi de llibre, un 20 % menys que la pitjor (11,35 €).", es: "La mejor política cuesta 9,03 € por cambio de libro, un 20 % menos que la peor (11,35 €).", en: "The best policy costs €9.03 per book change, 20% less than the worst one (€11.35)." },
      tools: ["R", "Excel"],
      scores: { all: 4, scm: 5, ops: 4, qual: 6, iiot: 1, pm: 1 },
      links: { slides: "", report: "" }
    },
    {
      id: "cultius",
      spine: { ca: "Digitalització de cultius", es: "Digitalización de cultivos", en: "Crop digitalisation" },
      types: ["pm"],
      title: { ca: "Digitalització de cultius", es: "Digitalización de cultivos", en: "Crop digitalisation" },
      level: "Grau", year: "2024", month: 6, team: 10,
      context: { ca: "Projectes", es: "Proyectos", en: "Projects" },
      role: "Project manager",
      summary: { ca: "Projecte d'equip de digitalització de cultius agrícoles, amb direcció del projecte.", es: "Proyecto de equipo de digitalización de cultivos agrícolas, con dirección del proyecto.", en: "Team project on digitalising agricultural crops, leading the project." },
      result: { ca: "Solució per a 10 hectàrees d'ordi d'una empresa cervesera: una vareta amb 5 sensors per hectàrea, alimentada amb placa fotovoltaica, i un dron. Recull en temps real humitat, nutrients, temperatura i vent, i en fa la traçabilitat amb una aplicació pròpia.", es: "Solución para 10 hectáreas de cebada de una empresa cervecera: una varilla con 5 sensores por hectárea, alimentada con placa fotovoltaica, y un dron. Recoge en tiempo real humedad, nutrientes, temperatura y viento, y hace su trazabilidad con una aplicación propia.", en: "Solution for 10 hectares of a brewer's barley: a post with 5 sensors per hectare, powered by a solar panel, plus a drone. It collects soil moisture, nutrients, temperature and wind in real time and traces the data through its own app." },
      did: [
        { ca: "Definició de l'arquitectura de la solució: Digital Twin que integra sensors, dron, núvol i dades externes.", es: "Definición de la arquitectura de la solución: Digital Twin que integra sensores, dron, nube y datos externos.", en: "Defined the solution architecture: a Digital Twin integrating sensors, drone, cloud and external data." },
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
      level: "Màster", year: "2026", month: 6, team: 6,
      context: { ca: "Direcció Integrada de Projectes", es: "Dirección Integrada de Proyectos", en: "Integrated Project Management" },
      role: "Project manager",
      summary: { ca: "Pla de gestió d'un prototip d'hivernacle a la coberta d'un edifici universitari, aprofitant-ne la sinergia amb la ventilació de l'edifici. Direcció de l'equip i lliuraments per àrees de coneixement.", es: "Plan de gestión de un prototipo de invernadero en la cubierta de un edificio universitario, aprovechando su sinergia con la ventilación del edificio. Dirección del equipo y entregas por áreas de conocimiento.", en: "Management plan for a greenhouse prototype on the roof of a university building, taking advantage of its synergy with the building's ventilation. Team lead, with deliverables by knowledge area." },
      result: { ca: "Pressupost de 213.580 € (177.280 € directes, 15.500 € indirectes i 20.800 € de contingències), dins els 250.000 € disponibles. Vint-i-un riscos avaluats: els 9 de criticitat alta es redueixen a puntuacions iguals o inferiors a 8 amb les mesures de resposta. El pla conclou que el projecte és viable tècnica, econòmica i organitzativament, amb entrega a la primavera del 2027.", es: "Presupuesto de 213.580 € (177.280 € directos, 15.500 € indirectos y 20.800 € de contingencias), dentro de los 250.000 € disponibles. Veintiún riesgos evaluados: los 9 de criticidad alta se reducen a puntuaciones iguales o inferiores a 8 con las medidas de respuesta. El plan concluye que el proyecto es viable técnica, económica y organizativamente, con entrega en la primavera de 2027.", en: "Budget of €213,580 (€177,280 direct, €15,500 indirect and €20,800 contingency), within the €250,000 available. Twenty-one risks assessed: the 9 critical ones drop to scores of 8 or below after the response measures. The plan concludes the project is technically, economically and organisationally viable, with delivery in spring 2027." },
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
      level: "Grau", year: "2024", month: 11, team: 9,
      context: { ca: "Innovació i creativitat: eines per a l'enginyeria", es: "Innovación y creatividad: herramientas para la ingeniería", en: "Innovation and Creativity: Tools for Engineering" },
      role: { ca: "Portaveu de l'equip", es: "Portavoz del equipo", en: "Team spokesperson" },
      summary: { ca: "Projecte d'equip que proposa una aplicació mòbil per llogar places d'aparcament entre particulars i compartir cotxe, amb prototip interactiu i presentació final.", es: "Proyecto de equipo que propone una aplicación móvil para alquilar plazas de aparcamiento entre particulares y compartir coche, con prototipo interactivo y presentación final.", en: "Team project proposing a mobile app to rent private parking spots and share cars, with an interactive prototype and a final presentation." },
      result: { ca: "Prototip interactiu de l'aplicació amb tres seccions: places d'aparcament (cerca per ubicació, horari i preu; lloguer mensual des de 60 €), cotxe compartit (70–150 € al dia) i els meus lloguers.", es: "Prototipo interactivo de la aplicación con tres secciones: plazas de aparcamiento (búsqueda por ubicación, horario y precio; alquiler mensual desde 60 €), coche compartido (70–150 € al día) y mis alquileres.", en: "Interactive prototype of the app with three sections: parking spots (search by location, hours and price; monthly rent from €60), car sharing (€70–150 a day) and my rentals." },
      did: [
        { ca: "Portaveu de l'equip a les presentacions.", es: "Portavoz del equipo en las presentaciones.", en: "Team spokesperson in presentations." },
        { ca: "Treball en equip amb repartiment de rols (portaveu i actes de les reunions).", es: "Trabajo en equipo con reparto de roles (portavoz y actas de las reuniones).", en: "Teamwork with defined roles (spokesperson and meeting minutes)." }
      ],
      tools: ["PowerPoint", { ca: "Prototip interactiu", es: "Prototipo interactivo", en: "Interactive prototype" }],
      scores: { all: 2, scm: 1, ops: 1, qual: 1, iiot: 1, pm: 6 },
      links: { slides: "", report: "" }
    },

    /* En curs: quan l'acabis, canvia el resultat per les conclusions. */
    {
      id: "tfm",
      spine: { ca: "TFM · Dosificació", es: "TFM · Dosificación", en: "Master's thesis · Dosing" },
      types: ["ops"],
      ongoing: true,
      title: { ca: "TFM: estudi de viabilitat d'un nou sistema de dosificació de silicona", es: "TFM: estudio de viabilidad de un nuevo sistema de dosificación de silicona", en: "Master's thesis: feasibility study of a new silicone dosing system" },
      level: "Màster", year: "2027", month: 1, team: 1,
      context: { ca: "Treball de Fi de Màster", es: "Trabajo de Fin de Máster", en: "Master's thesis" },
      summary: { ca: "Estudi de viabilitat tècnica, operativa i econòmica d'un nou sistema de dosificació de silicona per a una línia de recobriment tèxtil de cablejat industrial.", es: "Estudio de viabilidad técnica, operativa y económica de un nuevo sistema de dosificación de silicona para una línea de recubrimiento textil de cableado industrial.", en: "Technical, operational and economic feasibility study of a new silicone dosing system for a textile-coating line for industrial cabling." },
      did: [
        { ca: "Diagnosi del sistema actual: 8 línies que comparteixen 2 dosificadores de silicona, amb control en llaç obert.", es: "Diagnosis del sistema actual: 8 líneas que comparten 2 dosificadoras de silicona, con control en lazo abierto.", en: "Diagnosis of the current system: 8 lines sharing 2 silicone dosing machines, with open-loop control." },
        { ca: "Model de càlcul en Excel (OEE, consums, personal i costos), amb escenari millor i pitjor.", es: "Modelo de cálculo en Excel (OEE, consumos, personal y costes), con escenario mejor y peor.", en: "Excel calculation model (OEE, consumption, staff and costs), with best and worst scenarios." },
        { ca: "Detecció dels problemes de cada element: només s'aprofita el 90 % de la silicona dels bidons.", es: "Detección de los problemas de cada elemento: solo se aprovecha el 90 % de la silicona de los bidones.", en: "Finding each element's problems: only 90 % of the silicone in the drums is used." },
        { ca: "Comparació de quatre alternatives i selecció amb valor tècnic ponderat.", es: "Comparación de cuatro alternativas y selección con valor técnico ponderado.", en: "Comparing four alternatives and selecting one with a weighted technical value." },
        { ca: "Pròxim: viabilitat econòmica, implementació i riscos.", es: "Próximo: viabilidad económica, implementación y riesgos.", en: "Next: economic feasibility, implementation and risks." }
      ],
      result: { ca: "Pendent: treball en curs. De moment, l'OEE actual és del 79–80 % i el problema principal és la silicona que queda als bidons.", es: "Pendiente: trabajo en curso. De momento, el OEE actual es del 79–80 % y el problema principal es la silicona que queda en los bidones.", en: "Pending: work in progress. So far, current OEE is 79–80 % and the main problem is the silicone left in the drums." },
      tools: ["Excel", "OEE", { ca: "Valor tècnic ponderat", es: "Valor técnico ponderado", en: "Weighted technical value" }],
      scores: { all: 10, scm: 6, ops: 10, qual: 5, iiot: 1, pm: 5 },
      links: { slides: "", report: "" }
    }
  ]
};
