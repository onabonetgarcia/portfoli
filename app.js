(function () {
  "use strict";
  var D = window.PORTFOLIO;
  var $ = function (id) { return document.getElementById(id); };

  /* ============ TEXTOS DE LA INTERFÍCIE ============ */
  var UI = {
    ca: {
      skip: "Anar als projectes", toAbout: "Baixar a Sobre mi", close: "Tancar",
      tabs: { inici: "Inici", experiencia: "Experiència", projectes: "Projectes", formacio: "Formació", competencies: "Competències" },
      tabDesc: { experiencia: "Relats · 2 rols", projectes: "%n projectes", formacio: "Màster, grau i NUAA", competencies: "Eines i idiomes" },
      heroTag: "Portfoli d'enginyeria", about: "Sobre mi", featured: "Projectes destacats", explore: "Explora",
      experience: "Experiència", projects: "Projectes", skills: "Competències", education: "Formació", complementary: "Formació complementària",
      languages: "Idiomes", others: "Altres experiències", interests: "Interessos", slides: "Diapositives", slide: "Diapositiva", playAnim: "▶ Veure l'animació", fullVid: "Veure la presentació completa", backSlides: "← Tornar a les diapositives", prevSl: "Diapositiva anterior", nextSl: "Diapositiva següent", fsBtn: "Pantalla completa", animTag: "Animació", dbl: "clic en un projecte per obrir-lo",
      viewFor: "Veure el portfoli per a:", fLevel: "Nivell", fYear: "Any", fType: "Tipus", fToggle: "Filtres",
      all: "Tots", master: "Màster", grau: "Grau", course: "Curs d'estiu", solo: "Individual", group: "Equip", groupOf: "Equip de ",
      clear: "✕ Esborrar filtres", nProjects: " projectes", showing: function (a, b) { return "Es mostren " + a + " de " + b + " projectes"; },
      empty: "Cap projecte amb aquests filtres.", ongoing: "Treball en curs", did: "Què vaig fer", didNow: "Què estic fent", didTeam: "Què vam fer", cars: "Semàfor de cotxes", peds: "Semàfor de vianants", featTip: "Clica per mostrar només els projectes destacats (★)", featFilter: "Projectes destacats", rotHint: "Gira el mòbil per veure l’esquema i els gràfics junts.", zoomCta: "Prova el GRAFCET interactiu", zoomHint: "Clica la figura per veure la seqüència", sequence: "Seqüència", aux: "GRAFCET auxiliar (intermitència)", showFull: "Veure el sistema complet", showGeneric: "Veure el genèric", plate: "PREM EL BOTÓ", fullHint: "C1 mou el creuament 1; C2, els creuaments 1 i 2 alhora; C3, els tres alhora. Un creuament no arrenca si algun dels anteriors està en seqüència (E101/E102, E201/E202).", pressShort: "Prem", pressHint: "Prem el semàfor dels vianants (Cx)", fast: "Animació 5 vegades més ràpida que el temps real", lg_g: "Verd", lg_a: "Àmbar", lg_r: "Vermell", lg_f: "Verd intermitent", tools: "Eines", role: "Rol: ", result: "Resultat",
      shelf: "Prestatgeria", list: "Llista", open: "Obrir el llibre", hint: "Clica per obrir-lo",
      lgLevel: "Color", lgType: "Dibuix del llom", lgFeat: "Destacat", featTxt: "Projecte destacat", featTxtPl: "Projectes destacats", lgThick: "Gruix", thin: "individual", thick: "equip",
      prevBook: "Projecte anterior", nextBook: "Projecte següent",
      greeting: "Selecció pensada per a ", portfolio: "Portfoli", native: "Llengua materna",
      mapShow: "Veure on és al mapa", mapOpen: "Obrir a Google Maps ↗", mapTitle: "Mapa de ",
      mailSubject: "Contacte des del teu portfoli", mailTo: "Enviar-me un correu", mailApp: "Programa de correu", cvBtn: "Descarregar CV", contact: "Contacte", copy: "Copiar l'adreça de correu", copied: "Correu copiat al porta-retalls",
      ainote: "Aquest portfoli l'he dissenyat i dirigit jo (contingut, decisions i revisió), amb Claude com a assistent de programació.",
      footer: "Projectes acadèmics i de pràctiques (ESEIAAT-UPC). Les dades d'empreses s'han omès o generalitzat per confidencialitat."
    },
    es: {
      skip: "Ir a los proyectos", toAbout: "Bajar a Sobre mí", close: "Cerrar",
      tabs: { inici: "Inicio", experiencia: "Experiencia", projectes: "Proyectos", formacio: "Formación", competencies: "Competencias" },
      tabDesc: { experiencia: "Relats · 2 roles", projectes: "%n proyectos", formacio: "Máster, grado y NUAA", competencies: "Herramientas e idiomas" },
      heroTag: "Portafolio de ingeniería", about: "Sobre mí", featured: "Proyectos destacados", explore: "Explora",
      experience: "Experiencia", projects: "Proyectos", skills: "Competencias", education: "Formación", complementary: "Formación complementaria",
      languages: "Idiomas", others: "Otras experiencias", interests: "Intereses", slides: "Diapositivas", slide: "Diapositiva", playAnim: "▶ Ver la animación", fullVid: "Ver la presentación completa", backSlides: "← Volver a las diapositivas", prevSl: "Diapositiva anterior", nextSl: "Diapositiva siguiente", fsBtn: "Pantalla completa", animTag: "Animación", dbl: "pulsa un proyecto para abrirlo",
      viewFor: "Ver el portafolio para:", fLevel: "Nivel", fYear: "Año", fType: "Tipo", fToggle: "Filtros",
      all: "Todos", master: "Máster", grau: "Grado", course: "Curso de verano", solo: "Individual", group: "Equipo", groupOf: "Equipo de ",
      clear: "✕ Borrar filtros", nProjects: " proyectos", showing: function (a, b) { return "Se muestran " + a + " de " + b + " proyectos"; },
      empty: "Ningún proyecto con estos filtros.", ongoing: "Trabajo en curso", did: "Qué hice", didNow: "Qué estoy haciendo", didTeam: "Qué hicimos", cars: "Semáforo de coches", peds: "Semáforo de peatones", featTip: "Pulsa para mostrar solo los proyectos destacados (★)", featFilter: "Proyectos destacados", rotHint: "Gira el móvil para ver el esquema y los gráficos juntos.", zoomCta: "Prueba el GRAFCET interactivo", zoomHint: "Pulsa la figura para ver la secuencia", sequence: "Secuencia", aux: "GRAFCET auxiliar (intermitencia)", showFull: "Ver el sistema completo", showGeneric: "Ver el genérico", plate: "PULSE EL BOTÓN", fullHint: "C1 activa el cruce 1; C2, los cruces 1 y 2 a la vez; C3, los tres a la vez. Un cruce no arranca si alguno de los anteriores está en secuencia (E101/E102, E201/E202).", pressShort: "Pulsa", pressHint: "Pulsa el semáforo de peatones (Cx)", fast: "Animación 5 veces más rápida que el tiempo real", lg_g: "Verde", lg_a: "Ámbar", lg_r: "Rojo", lg_f: "Verde intermitente", tools: "Herramientas", role: "Rol: ", result: "Resultado",
      shelf: "Estantería", list: "Lista", open: "Abrir el libro", hint: "Pulsa para abrirlo",
      lgLevel: "Color", lgType: "Dibujo del lomo", lgFeat: "Destacado", featTxt: "Proyecto destacado", featTxtPl: "Proyectos destacados", lgThick: "Grosor", thin: "individual", thick: "equipo",
      prevBook: "Proyecto anterior", nextBook: "Proyecto siguiente",
      greeting: "Selección pensada para ", portfolio: "Portafolio", native: "Lengua materna",
      mapShow: "Ver dónde está en el mapa", mapOpen: "Abrir en Google Maps ↗", mapTitle: "Mapa de ",
      mailSubject: "Contacto desde tu portafolio", mailTo: "Enviarme un correo", mailApp: "Programa de correo", cvBtn: "Descargar CV", contact: "Contacto", copy: "Copiar la dirección de correo", copied: "Correo copiado al portapapeles",
      ainote: "Este portafolio lo he diseñado y dirigido yo (contenido, decisiones y revisión), con Claude como asistente de programación.",
      footer: "Proyectos académicos y de prácticas (ESEIAAT-UPC). Los datos de empresas se han omitido o generalizado por confidencialidad."
    },
    en: {
      skip: "Skip to projects", toAbout: "Scroll to About", close: "Close",
      tabs: { inici: "Home", experiencia: "Experience", projectes: "Projects", formacio: "Education", competencies: "Skills" },
      tabDesc: { experiencia: "Relats · 2 roles", projectes: "%n projects", formacio: "Master's, Bachelor's, NUAA", competencies: "Tools and languages" },
      heroTag: "Engineering portfolio", about: "About", featured: "Featured projects", explore: "Explore",
      experience: "Experience", projects: "Projects", skills: "Skills", education: "Education", complementary: "Additional training",
      languages: "Languages", others: "Other experience", interests: "Interests", slides: "Slides", slide: "Slide", playAnim: "▶ Play animation", fullVid: "Watch the full presentation", backSlides: "← Back to slides", prevSl: "Previous slide", nextSl: "Next slide", fsBtn: "Full screen", animTag: "Animation", dbl: "click a project to open it",
      viewFor: "View the portfolio for:", fLevel: "Level", fYear: "Year", fType: "Type", fToggle: "Filters",
      all: "All", master: "Master's", grau: "Bachelor's", course: "Summer school", solo: "Individual", group: "Team", groupOf: "Team of ",
      clear: "✕ Clear filters", nProjects: " projects", showing: function (a, b) { return "Showing " + a + " of " + b + " projects"; },
      empty: "No projects match these filters.", ongoing: "Work in progress", did: "What I did", didNow: "What I am doing", didTeam: "What we did", cars: "Car light", peds: "Pedestrian light", featTip: "Click to show only the featured projects (★)", featFilter: "Featured projects", rotHint: "Rotate your phone to see the diagram and charts together.", zoomCta: "Try the interactive GRAFCET", zoomHint: "Click the figure to see the sequence", sequence: "Sequence", aux: "Auxiliary GRAFCET (flashing)", showFull: "Show full system", showGeneric: "Show generic", plate: "PUSH BUTTON", fullHint: "C1 runs crossing 1; C2 runs crossings 1 and 2 together; C3 runs all three. A crossing does not start if an earlier one is mid-sequence (E101/E102, E201/E202).", pressShort: "Press", pressHint: "Press the pedestrian light (Cx)", fast: "Animation 5x faster than real time", lg_g: "Green", lg_a: "Amber", lg_r: "Red", lg_f: "Flashing green", tools: "Tools", role: "Role: ", result: "Result",
      shelf: "Bookshelf", list: "List", open: "Open the book", hint: "Click to open",
      lgLevel: "Colour", lgType: "Spine pattern", lgFeat: "Featured", featTxt: "Featured project", featTxtPl: "Featured projects", lgThick: "Thickness", thin: "individual", thick: "team",
      prevBook: "Previous project", nextBook: "Next project",
      greeting: "Curated for ", portfolio: "Portfolio", native: "Native",
      mapShow: "Show on the map", mapOpen: "Open in Google Maps ↗", mapTitle: "Map of ",
      mailSubject: "Contact from your portfolio", mailTo: "Send me an email", mailApp: "Email app", cvBtn: "Download CV", contact: "Contact", copy: "Copy email address", copied: "Email copied to clipboard",
      ainote: "I designed and directed this portfolio myself (content, decisions and review), with Claude as a coding assistant.",
      footer: "Academic and internship projects (ESEIAAT-UPC). Company data has been omitted or generalised for confidentiality."
    }
  };
  var TABS = ["inici", "experiencia", "formacio", "projectes", "competencies"];
  var CT_INTRO = {
    exp: {
      ca: "Dos rols a Relats (Caldes de Montbui), compaginats amb els estudis: primer a qualitat per a clients d'automoció i després a enginyeria de processos.",
      es: "Dos roles en Relats (Caldes de Montbui), compaginados con los estudios: primero en calidad para clientes de automoción y después en ingeniería de procesos.",
      en: "Two roles at Relats (Caldes de Montbui), alongside my studies: first in quality for automotive customers, then in process engineering."
    },
    edu: {
      ca: "Titulacions i formació complementària, de la més recent a la més antiga. A l'altre costat, en gris, l'experiència de cada moment.",
      es: "Titulaciones y formación complementaria, de la más reciente a la más antigua. Al otro lado, en gris, la experiencia de cada momento.",
      en: "Degrees and additional training, most recent first. On the other side, in grey, the work experience at each point in time."
    }
  };
  var TYPES = ["scm", "ops", "qual", "iiot", "pm"];
  var CEFR = ["A1", "A2", "B1", "B2", "C1", "C2"];

  /* ============ ESTAT (URL: ?l= &p= &e= &hero=a|b  #pestanya) ============ */
  var params = new URLSearchParams(location.search);
  function stored(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  var lang = params.get("l");
  if (!UI[lang]) lang = stored("portfoli-lang");
  if (!UI[lang]) lang = "ca";
  var profile = params.get("p");
  if (!D.profiles[profile]) profile = "all";
  var company = (params.get("e") || "").trim().slice(0, 60);
  var hero = params.get("hero") === "b" ? "b" : "a";
  var mobile = window.matchMedia && window.matchMedia("(max-width: 700px)").matches;
  var savedView = stored("portfoli-view");   /* sense preferència guardada: en mòbil comença amb la llista, en ordinador amb la prestatgeria */
  var viewMode = mobile ? "list" : (savedView === "list" ? "list" : "shelf");   /* mòbil: només llista (la prestatgeria no hi té lloc) */
  var F = { level: "all", year: "all", team: "all", fav: false };
  var tab = "inici";
  document.body.dataset.hero = hero;

  /* ============ HELPERS (sempre textContent: res de l'URL va a innerHTML) ============ */
  function T(v) { return v == null ? "" : (typeof v === "object" ? (v[lang] || v.ca || "") : String(v)); }
  function U(k) { return UI[lang][k]; }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function clear(n) { n.textContent = ""; return n; }

  /* Gràfic interactiu de la sèrie temporal (projecte «Sèries temporals»): sempre surt la resposta Y;
     els botons afegeixen la descomposició clàssica, el model amb variables categòriques (el triat) i les previsions. */
  var TSL = {
    ca: { y: "Resposta Y", dec: "Descomposició clàssica", cat: "Variables categòriques", fc: "Previsions", clr: "Neteja", best: "model triat", unit: "milers d’€", note: "R² = 0,996", hint: "Clica els textos de sota per veure’ls al gràfic", need: "Activa primer el model amb variables categòriques: les previsions surten d’aquest model" },
    es: { y: "Respuesta Y", dec: "Descomposición clásica", cat: "Variables categóricas", fc: "Previsiones", clr: "Limpiar", best: "modelo elegido", unit: "miles de €", note: "R² = 0,996", hint: "Pulsa los textos de abajo para verlos en el gráfico", need: "Activa primero el modelo con variables categóricas: las previsiones salen de este modelo" },
    en: { y: "Response Y", dec: "Classical decomposition", cat: "Categorical variables", fc: "Forecasts", clr: "Clear", best: "chosen model", unit: "€ thousands", note: "R² = 0.996", hint: "Click the texts below to show them on the chart", need: "Turn on the categorical-variables model first: the forecasts come from that model" }
  };
  var tsw = null;
  function tsLink(node, ctl, isOn, act, color, isDis, disTip) {   /* un text del llibre es converteix en botó que governa el gràfic; isDis = quan surt en gris i no es pot clicar */
    node.classList.add("ts-link"); node.setAttribute("role", "button"); node.tabIndex = 0;
    if (color) { node.classList.add("ts-btn"); node.style.setProperty("--c", color); }
    function sync(o) {
      node.classList.toggle("on", !!isOn(o)); node.setAttribute("aria-pressed", isOn(o) ? "true" : "false");
      var dis = !!(isDis && isDis(o)); node.classList.toggle("dis", dis); node.setAttribute("aria-disabled", dis ? "true" : "false");
      if (disTip) { if (dis) node.title = disTip; else node.removeAttribute("title"); }
    }
    node.addEventListener("click", function (ev) { ev.stopPropagation(); act(ctl); });
    node.addEventListener("keydown", function (ev) { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); act(ctl); } });
    ctl.listeners.push(sync); sync(ctl.on);
  }
  function buildTS() {
    var D = window.ST_DATA, L = TSL[lang] || TSL.ca, wrap = el("div", "tsfig");
    if (!D) { return wrap; }
    var W = 520, H = 330, ml = 46, mr = 14, mt = 14, mb = 34, XM = 110, YM = 900;
    function sx(t) { return ml + (W - ml - mr) * t / XM; }
    function sy(v) { return mt + (H - mt - mb) * (1 - v / YM); }
    function sv(tag, at, parent, text) { var n = document.createElementNS(NS, tag); for (var k in at) n.setAttribute(k, at[k]); if (text != null) n.textContent = text; if (parent) parent.appendChild(n); return n; }
    var svg = sv("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": T(PORTFOLIO.projects.filter(function (q) { return q.id === "stats-ts"; })[0].title) });
    var t, v;
    for (v = 0; v <= YM; v += 100) { sv("line", { x1: ml, x2: W - mr, y1: sy(v), y2: sy(v), stroke: v === 0 ? "#9a9a9a" : "#e3e3e3", "stroke-width": 1 }, svg); sv("text", { x: ml - 6, y: sy(v) + 4, "text-anchor": "end", "class": "tsax" }, svg, v); }
    for (t = 0; t <= XM; t += 20) { sv("line", { x1: sx(t), x2: sx(t), y1: sy(0), y2: sy(0) + 4, stroke: "#9a9a9a" }, svg); sv("text", { x: sx(t), y: sy(0) + 17, "text-anchor": "middle", "class": "tsax" }, svg, t); }
    sv("text", { x: (ml + W - mr) / 2, y: H - 4, "text-anchor": "middle", "class": "tsax tsti" }, svg, "t");
    sv("text", { x: 11, y: (mt + H - mb) / 2, "text-anchor": "middle", transform: "rotate(-90 11 " + (mt + H - mb) / 2 + ")", "class": "tsax tsti" }, svg, L.unit);
    function path(arr) { return arr.map(function (y, i) { return (i ? "L" : "M") + sx(i + 1).toFixed(1) + "," + sy(y).toFixed(1); }).join(""); }
    sv("path", { d: path(D.y), fill: "none", stroke: "#1f8fd6", "stroke-width": 2, "stroke-linejoin": "round" }, svg);
    D.y.forEach(function (y, i) { sv("circle", { cx: sx(i + 1), cy: sy(y), r: 2.3, fill: "#1f8fd6" }, svg); });
    var gDec = sv("g", { "class": "tsl off" }, svg), gCat = sv("g", { "class": "tsl off" }, svg);
    sv("path", { d: path(D.dec), fill: "none", stroke: "#e8761a", "stroke-width": 1.8, "stroke-dasharray": "5 3", "stroke-linejoin": "round" }, gDec);
    sv("path", { d: path(D.cat), fill: "none", stroke: "#7b3fb8", "stroke-width": 2.2, "stroke-linejoin": "round" }, gCat);
    var badge = el("div", "tsbadge", "★ " + L.best + " · " + L.note); /* etiqueta sobre el model triat */
    var gFc = sv("g", {}, svg), dots = [], segs = [];
    D.fc.forEach(function (y, i) {
      if (i > 0) segs.push(sv("path", { d: "M" + sx(99 + i).toFixed(1) + "," + sy(D.fc[i - 1]).toFixed(1) + "L" + sx(100 + i).toFixed(1) + "," + sy(y).toFixed(1), fill: "none", stroke: "#d1322f", "stroke-width": 1.4, "stroke-dasharray": "4 3", "class": "tsdot" }, gFc));
      dots.push(sv("path", { d: "M" + sx(100 + i) + "," + (sy(y) - 5) + "l4.5,5l-4.5,5l-4.5,-5z", fill: "#d1322f", "class": "tsdot" }, gFc));
    });
    var top = el("div", "tsbtns"); wrap.appendChild(top); var holder = el("div", "tssvg"); holder.appendChild(svg); holder.appendChild(badge); wrap.appendChild(holder);

    var bar = el("div", "tsbar"), on = { dec: false, cat: false, fc: false }, timers = [], ctl = { on: on, listeners: [] };
    function paint() {
      gDec.setAttribute("class", "tsl" + (on.dec ? "" : " off")); gCat.setAttribute("class", "tsl" + (on.cat ? "" : " off"));
      badge.className = "tsbadge" + (on.cat ? " in" : "");
      clr.disabled = !(on.dec || on.cat || on.fc);
      ctl.listeners.forEach(function (f) { f(on); });
    }
    function stopFc() { timers.forEach(clearTimeout); timers = []; }
    function showFc(show) {                                       /* cada punt surt amb el tros de línia que hi arriba, en ordre de t */
      stopFc();
      dots.concat(segs).forEach(function (d) { d.setAttribute("class", "tsdot"); });
      if (!show) return;
      dots.forEach(function (d, i) { timers.push(setTimeout(function () { if (i > 0) segs[i - 1].setAttribute("class", "tsdot in"); d.setAttribute("class", "tsdot in"); }, 110 * i)); });
    }
    ctl.toggle = function (k) {
      if (k === "fc" && !on.fc && !on.cat) return;                       /* les previsions surten del model amb variables categòriques: sense ell no es poden activar */
      on[k] = !on[k];
      if (k === "fc") showFc(on[k]);
      if (k === "cat" && !on.cat && on.fc) { on.fc = false; showFc(false); }   /* si s'apaga el model, s'apaguen també les previsions */
      paint();
    };
    ctl.set = function (k, v) { if (on[k] !== v) ctl.toggle(k); };
    var chips = {};
    [["dec", "#e8761a"], ["cat", "#7b3fb8"], ["fc", "#d1322f"]].forEach(function (c) {          /* botons a dalt (només es veuen en mòbil) */
      var b = el("button", "tsbtn"); b.type = "button"; b.setAttribute("aria-pressed", "false");
      var sw = el("i", "tssw"); sw.style.background = c[1]; b.appendChild(sw); b.appendChild(document.createTextNode(L[c[0]] + (c[0] === "cat" ? " ★" : "")));
      b.addEventListener("click", function (ev) { ev.stopPropagation(); ctl.toggle(c[0]); }); chips[c[0]] = b; top.appendChild(b);
    });
    ctl.listeners.push(function (o) { Object.keys(chips).forEach(function (k) { chips[k].setAttribute("aria-pressed", o[k] ? "true" : "false"); }); chips.fc.disabled = !o.cat; chips.fc.title = o.cat ? "" : L.need; });
    ctl.need = L.need;
    var clr = el("button", "tsbtn tsclr", "✕ " + L.clr); clr.type = "button"; clr.title = L.clr;
    clr.addEventListener("click", function (ev) { ev.stopPropagation(); on.dec = on.cat = on.fc = false; showFc(false); paint(); });
    bar.appendChild(el("span", "tshint", L.hint)); bar.appendChild(clr); paint();
    wrap.appendChild(bar); wrap.ctl = ctl;
    return wrap;
  }
  var NS = "http://www.w3.org/2000/svg";
  var STROKE = {
    pin: [["path", { d: "M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" }], ["circle", { cx: 12, cy: 10, r: 2.5 }]],
    mail: [["rect", { x: 3, y: 5, width: 18, height: 14, rx: 2 }], ["path", { d: "M3 7l9 6 9-6" }]],
    copy: [["rect", { x: 9, y: 9, width: 11, height: 11, rx: 2 }], ["path", { d: "M5 15V5a2 2 0 0 1 2-2h10" }]],
    download: [["path", { d: "M12 4v11M7 10l5 5 5-5M5 20h14" }]],
    linkedin: [["rect", { x: 3, y: 3, width: 18, height: 18, rx: 3 }], ["path", { d: "M8 11v6M8 7.6v.01M12 17v-6M12 13.5c0-1.4 1-2.5 2.5-2.5S17 12.1 17 13.5V17" }]],
    travel: [["circle", { cx: 12, cy: 12, r: 9 }], ["path", { d: "M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" }]],
    licence: [["rect", { x: 3, y: 5, width: 18, height: 14, rx: 2 }], ["circle", { cx: 8.5, cy: 11, r: 2 }], ["path", { d: "M5.5 16c.6-1.4 1.7-2 3-2s2.4.6 3 2M14 10h4M14 13.5h4" }]],
    car: [["path", { d: "M5 16v2M19 16v2M3 13l2-5.5A2 2 0 0 1 6.9 6h10.2a2 2 0 0 1 1.9 1.5L21 13v3H3z" }], ["circle", { cx: 7.5, cy: 13.5, r: 1 }], ["circle", { cx: 16.5, cy: 13.5, r: 1 }]]
  };
  function sicon(name) {
    var s = document.createElementNS(NS, "svg");
    s.setAttribute("viewBox", "0 0 24 24"); s.setAttribute("aria-hidden", "true");
    STROKE[name].forEach(function (p) {
      var n = document.createElementNS(NS, p[0]);
      Object.keys(p[1]).forEach(function (k) { n.setAttribute(k, p[1][k]); });
      s.appendChild(n);
    });
    return s;
  }
  var FILL = {
    solo: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4 0-8 2-8 5v1h16v-1c0-3-4-5-8-5z",
    group: "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm7 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM9 13c-3.5 0-7 1.8-7 4.5V20h14v-2.5C16 14.8 12.5 13 9 13zm7 0c-.5 0-1 0-1.5.1 1.5 1 2.5 2.4 2.5 4.4V20h5v-2.5c0-2.6-3-4.5-6-4.5z"
  };
  function icon(name) {
    var s = document.createElementNS(NS, "svg"), p = document.createElementNS(NS, "path");
    s.setAttribute("viewBox", "0 0 24 24"); s.setAttribute("aria-hidden", "true");
    p.setAttribute("d", FILL[name]); s.appendChild(p);
    return s;
  }
  function isSolo(t) { return t === 1; }
  function isFeatured(id) { return (D.person.featured || []).some(function (f) { return f.id === id; }); }
  function lv(p) { return p.level === "Grau" ? "grau" : "master"; }
  function levelTag(level) { return el("span", "tag " + (level === "Grau" ? "lvl-grau" : "lvl-master"), level === "Grau" ? U("grau") : U("master")); }
  function yearTag(y) { var t = el("span", "tag year", y); t.setAttribute("data-year", y); return t; }
  function teamTag(team) {
    var solo = isSolo(team), t = el("span", "tag " + (solo ? "solo" : "group"));
    t.appendChild(icon(solo ? "solo" : "group"));
    t.appendChild(document.createTextNode(solo ? U("solo") : (typeof team === "number" ? U("groupOf") + team : U("group"))));
    return t;
  }
  function decos(types) {
    var d = el("span", "decos");
    (types || []).forEach(function (t) { d.appendChild(el("span", "deco " + t)); });
    return d;
  }
  function score(item) { return (item.scores && (item.scores[profile] != null ? item.scores[profile] : item.scores.all)) || 0; }
  function hash(s) { var h = 0; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h); }
  var visible = D.projects.filter(function (p) { return !p.hidden; });
  var current = [];   // llista filtrada i ordenada que es veu ara
  var irrel = {};     // llibres poc rellevants per al perfil triat (es mostren apagats, a la dreta)
  var toastTimer;
  function toast(msg, ms) {
    var t = $("toast"); t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.hidden = true; }, ms || 1800);
  }

  /* ============ IDIOMA ============ */
  var langBox = $("lang");
  ["ca", "es", "en"].forEach(function (l) {
    var b = el("button", null, l.toUpperCase());
    b.type = "button"; b.dataset.v = l;
    b.setAttribute("aria-label", { ca: "Català", es: "Castellano", en: "English" }[l]);
    b.addEventListener("click", function () { setLang(l); });
    langBox.appendChild(b);
  });
  var langPill = el("span", "lang-pill"); langPill.setAttribute("aria-hidden", "true"); langBox.insertBefore(langPill, langBox.firstChild); langBox.classList.add("sl");
  function moveLangPill(anim) {
    var cur = langBox.querySelector('button[data-v="' + lang + '"]'); if (!cur || !cur.offsetWidth) return;
    if (!anim) langPill.style.transition = "none";
    langPill.style.width = cur.offsetWidth + "px"; langPill.style.height = cur.offsetHeight + "px"; langPill.style.transform = "translate(" + cur.offsetLeft + "px," + cur.offsetTop + "px)";
    if (!anim) { void langPill.offsetWidth; langPill.style.transition = ""; }
  }
  var langFirst = true;
  function setLang(l) {
    lang = l; store("portfoli-lang", l);
    var u = new URL(location.href);
    if (l === "ca") u.searchParams.delete("l"); else u.searchParams.set("l", l);
    try { history.replaceState(null, "", u); } catch (e) {}
    renderAll();
  }

  /* ============ PESTANYES ============ */
  function buildTabs() {
    var nav = clear($("tabs"));
    TABS.forEach(function (id) {
      var a = el("a", null, U("tabs")[id]); a.href = "#" + id; a.dataset.t = id;
      nav.appendChild(a);
    });
  }
  function route(keepScroll) {
    var h = decodeURIComponent(location.hash.slice(1)), anchor = null;
    if (TABS.indexOf(h) < 0) { anchor = h && $(h) ? h : null; h = "inici"; }
    tab = h;
    document.querySelectorAll(".view").forEach(function (v) { v.hidden = v.dataset.tab.split(" ").indexOf(tab) < 0; });
    // Experiència ⇄ Formació: la mateixa línia temporal; l'eix llisca d'un costat a l'altre
    var m = tab === "formacio" ? "edu" : "exp";
    var changed = $("ct").className.indexOf("mode-" + m) < 0 && $("ct").className.indexOf("mode-") >= 0;
    $("ct").className = "ct mode-" + m + (changed ? " swap" : "");   /* al mòbil les files entren lliscant (CSS .swap); a l'ordinador llisca l'eix */
    if (changed) setTimeout(function () { $("ct").classList.remove("swap"); }, 700);
    document.querySelectorAll(".ct-tab").forEach(function (a) { a.setAttribute("aria-current", String(a.dataset.m === m)); });
    $("ct-intro").textContent = T(CT_INTRO[m]); var ci = $("ct-intro"); ci.className = "ct-intro m-" + m; void ci.offsetWidth; ci.className += " wp";
    document.querySelectorAll("#tabs a").forEach(function (a) {
      if (a.dataset.t === tab) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    document.body.classList.toggle("home", tab === "inici");
    document.title = D.person.name + " · " + (tab === "inici" ? U("portfolio") : U("tabs")[tab]) + (company ? " · " + company : "");
    var act = document.querySelector("#tabs a[aria-current]");
    if (act && act.scrollIntoView) act.scrollIntoView({ block: "nearest", inline: "nearest" });
    if (keepScroll !== true) { if (anchor) $(anchor).scrollIntoView(); else window.scrollTo(0, 0); }
    onScroll();
  }
  window.addEventListener("hashchange", function () { route(); });
  function go(id) { if (location.hash !== "#" + id) location.hash = id; else route(); }

  /* ============ PORTADA: el nom s'encongeix en baixar i apareix la resta ============ */
  var root = document.documentElement, ticking = false, counted = false;
  function measure() { root.style.setProperty("--tbh", $("topbar").offsetHeight + "px"); }
  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () {
      var h = $("hero"), st = h.querySelector(".stage");
      /* el 40svh extra de la portada (CSS) és "temps de pausa" amb totes les dades visibles: no compta per a l'animació */
      var range = Math.max(1, h.offsetHeight - st.offsetHeight - window.innerHeight * 0.4);
      var p = tab === "inici" ? Math.min(1, Math.max(0, window.scrollY / range)) : 1;
      root.style.setProperty("--p", p.toFixed(3));
      /* --q: 0 mentre la portada és quieta amb totes les dades; puja a 1 quan comença a marxar i apareix el blanc (la fletxa s'esvaeix) */
      var q = tab === "inici" ? Math.min(1, Math.max(0, (window.scrollY - (h.offsetHeight - st.offsetHeight) + window.innerHeight * 0.15) / (window.innerHeight * 0.25))) : 1;
      root.style.setProperty("--q", q.toFixed(3));
      var rev = p > 0.28;
      document.body.classList.toggle("revealed", rev);
      document.body.classList.toggle("past-hero", tab !== "inici" || $("name").getBoundingClientRect().bottom < $("topbar").offsetHeight);
      if (rev && hero === "b" && !counted) { counted = true; countUp(); }
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () { measure(); onScroll(); });
  // opció B: les xifres de la fitxa compten des de 0
  function countUp() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.querySelectorAll("#stats dd").forEach(function (dd) {
      var m = dd.textContent.match(/^(\d+)(.*)$/);
      if (!m) return;
      var end = +m[1], rest = m[2], t0 = null;
      function step(t) {
        if (!t0) t0 = t;
        var k = Math.min(1, (t - t0) / 900);
        dd.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + rest;
        if (k < 1) requestAnimationFrame(step);
      }
      dd.textContent = "0" + rest; requestAnimationFrame(step);
    });
  }

  /* ============ INICI ============ */
  function renderHome() {
    $("tb-name").textContent = D.person.name;
    $("tb-title").textContent = T(D.person.title);
    $("hero-tag").textContent = "[ " + U("heroTag") + " ]";
    $("name").textContent = D.person.name;
    $("title").textContent = T(D.person.title);
    $("tagline").textContent = T(D.person.tagline);
    var g = $("greeting"); g.hidden = !company;
    if (company) g.textContent = U("greeting") + company;
    /* la població va en una línia de text petita sota el títol (amb el mapa en passar-hi el ratolí); els botons queden en una sola fila */
    var hl = clear($("hero-loc"));
    if (D.person.location) {
      var lb = el("button", "loc-btn"); lb.appendChild(sicon("pin")); lb.appendChild(document.createTextNode(D.person.location));
      mapPopup(hl, lb, D.person.location, D.person.mapQuery || D.person.location);
    }
    renderContact($("contact"), "", true);
    renderContact($("contact-foot"), "-foot", true);   /* el mateix contacte al peu de totes les pestanyes */
    var st = clear($("stats"));
    (D.person.stats || []).forEach(function (s) {
      var d = el("div"); d.appendChild(el("dt", null, T(s.k)));
      d.appendChild(el("dd", null, s.v === "auto" ? String(visible.length) : T(s.v)));
      st.appendChild(d);
    });
    $("about-text").textContent = T(D.person.about);
    var bd = clear($("badges"));
    (D.person.badges || []).forEach(function (x) {
      var li = el("li"); if (STROKE[x.icon]) li.appendChild(sicon(x.icon));
      li.appendChild(document.createTextNode(T(x.text))); bd.appendChild(li);
    });
    var ints = D.person.interests || [], ib = clear($("interests"));
    ints.forEach(function (x) { ib.appendChild(el("li", null, T(x))); });
    $("interests-block").hidden = !ints.length;

    var fe = clear($("featured"));
    (D.person.featured || []).forEach(function (f) {
      var p = byId(f.id);
      if (!p || p.hidden) return;
      var b = el("button", "feat"); b.type = "button";
      var im = el("img"); im.src = T(f.img); im.alt = ""; b.appendChild(im);   /* sense «lazy»: dins del carrusel horitzontal el navegador no les carregava */
      var ft = el("span", "ft"), m = el("span", "meta");
      m.appendChild(levelTag(p.level)); m.appendChild(yearTag(p.year));
      ft.appendChild(m); ft.appendChild(el("b", null, T(p.title)));
      b.appendChild(ft);
      b.addEventListener("pointerenter", function () { warmDeck(p); });
      b.addEventListener("focus", function () { warmDeck(p); });
      b.addEventListener("click", function () {
        F.level = F.year = F.team = "all"; F.fav = false; setProfile("all"); openBook(p.id, "feat");
      });
      fe.appendChild(b);
    });
    /* mòbil: els destacats són un carrusel que es passa amb el dit; els punts diuen quin es veu */
    var dots = clear($("feat-dots"));
    Array.prototype.forEach.call(fe.children, function (c, k) {
      var d = el("button"); d.type = "button"; d.setAttribute("aria-label", String(k + 1));
      d.addEventListener("click", function () { fe.scrollTo({ left: c.offsetLeft - fe.offsetLeft - 16, behavior: "smooth" }); });
      dots.appendChild(d);
    });
    featDots();
    var ex = clear($("explore"));
    TABS.slice(1).forEach(function (id, i) {
      var a = el("a"); a.href = "#" + id;
      a.appendChild(el("span", "n", "0" + (i + 2)));
      a.appendChild(el("b", null, U("tabs")[id]));
      a.appendChild(el("span", null, U("tabDesc")[id].replace("%n", visible.length)));
      ex.appendChild(a);
    });
    var ul = clear($("others"));
    (D.person.others || []).forEach(function (o) {
      var li = el("li");
      li.appendChild(el("b", null, T(o.title)));
      if (o.org) li.appendChild(el("span", "org", o.org));
      if (o.period) li.appendChild(el("span", "when", o.period));
      li.appendChild(el("p", null, T(o.text)));
      ul.appendChild(li);
    });
  }
  function featDots() {
    var fe = $("featured"), ds = $("feat-dots").children, n = fe.children.length;
    if (!n) return;
    var step = fe.scrollWidth / n, i = Math.round(fe.scrollLeft / step);
    if (fe.scrollLeft + fe.clientWidth >= fe.scrollWidth - 4) i = n - 1;   /* al final del tot: l'últim */
    Array.prototype.forEach.call(ds, function (d, k) { d.classList.toggle("on", k === i); });
    $("feat-prev").disabled = i <= 0; $("feat-next").disabled = i >= n - 1;
  }
  function featGo(dir) {
    var fe = $("featured"), c = fe.children[0]; if (!c) return;
    fe.scrollBy({ left: dir * (c.offsetWidth + 12), behavior: "smooth" });
  }
  $("feat-prev").addEventListener("click", function () { featGo(-1); });
  $("feat-next").addEventListener("click", function () { featGo(1); });
  $("featured").addEventListener("scroll", featDots, { passive: true });
  function byId(id) { return D.projects.filter(function (x) { return x.id === id; })[0]; }

  /* ----- contacte: mapa en passar el ratolí, correu i LinkedIn ----- */
  var mapClosers = [], mapSeq = 0;
  document.addEventListener("click", function (e) { mapClosers.forEach(function (f) { f(e); }); });
  // Botó amb xinxeta + finestra de mapa (Google Maps) dins de "host"; "btn" ja ha de tenir el contingut visible
  function mapPopup(host, btn, label, q) {
    var pop = el("div", "map-pop"), id = "map-pop-" + (++mapSeq);
    btn.type = "button"; btn.setAttribute("aria-expanded", "false"); btn.setAttribute("aria-controls", id);
    btn.setAttribute("aria-label", label + " · " + U("mapShow"));
    pop.id = id; pop.hidden = true;
    var link = el("a", null, U("mapOpen"));
    link.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
    link.target = "_blank"; link.rel = "noopener";
    pop.appendChild(link);
    var loaded = false, hideT;
    var open = function () {
      clearTimeout(hideT);
      if (!loaded) {   // el mapa només es carrega el primer cop que s'obre
        var f = el("iframe");
        f.src = "https://www.google.com/maps?q=" + encodeURIComponent(q) + "&z=12&output=embed";
        f.title = U("mapTitle") + label; f.loading = "lazy";
        f.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
        pop.insertBefore(f, link); loaded = true;
      }
      pop.hidden = false; btn.setAttribute("aria-expanded", "true");
    };
    var close = function () { pop.hidden = true; btn.setAttribute("aria-expanded", "false"); };
    var closeSoon = function () { clearTimeout(hideT); hideT = setTimeout(close, 280); };
    host.addEventListener("pointerenter", function (e) { if (e.pointerType === "mouse") open(); });
    host.addEventListener("pointerleave", function (e) { if (e.pointerType === "mouse") closeSoon(); });
    btn.addEventListener("click", function () { open(); });
    host.addEventListener("focusout", function (e) { if (!host.contains(e.relatedTarget)) closeSoon(); });
    host.addEventListener("keydown", function (e) { if (e.key === "Escape") { close(); btn.focus(); } });
    mapClosers = mapClosers.filter(function (f) { return f.host.isConnected; });
    var cf = function (e) { if (!host.contains(e.target)) close(); }; cf.host = host; mapClosers.push(cf);
    host.appendChild(btn); host.appendChild(pop);
  }
  /* box: llista on es dibuixa (portada o peu de pàgina); sfx: sufix perquè els id dels menús no es repeteixin */
  function renderContact(box, sfx, noLoc) {   /* noLoc: sense la població (al peu de pàgina no hi surt) */
    var c = clear(box || $("contact")), ct = D.person.contact; sfx = sfx || "";
    if (D.person.location && !noLoc) {
      var li = el("li"), btn = el("button", "cbtn");
      btn.appendChild(sicon("pin")); btn.appendChild(document.createTextNode(D.person.location));
      mapPopup(li, btn, D.person.location, D.person.mapQuery || D.person.location);
      c.appendChild(li);
    }
    if (ct.email) {
      /* clic al correu: menú per triar com escriure. Un enllaç mailto: sol no fa res si l'ordinador no té cap programa de correu configurat
         (passa molt amb qui fa servir Gmail o Outlook al navegador), per això s'ofereixen també Gmail, Outlook i copiar l'adreça. */
      var li2 = el("li"), a = el("button", "cbtn"), mp = el("div", "map-pop mail-pop"), sub = encodeURIComponent(U("mailSubject")), to = encodeURIComponent(ct.email);
      a.type = "button"; a.title = U("mailTo"); a.setAttribute("aria-label", U("mailTo") + ": " + ct.email);
      a.setAttribute("aria-expanded", "false"); a.setAttribute("aria-haspopup", "true");
      a.appendChild(sicon("mail")); a.appendChild(document.createTextNode(ct.email));
      mp.hidden = true; mp.id = "mail-pop" + sfx;  a.setAttribute("aria-controls", mp.id);
      function mclose() { mp.hidden = true; a.setAttribute("aria-expanded", "false"); }
      [["Gmail", "https://mail.google.com/mail/?view=cm&fs=1&to=" + to + "&su=" + sub],
       ["Outlook", "https://outlook.office.com/mail/deeplink/compose?to=" + to + "&subject=" + sub],
       [U("mailApp"), "mailto:" + ct.email + "?subject=" + sub]].forEach(function (o) {
        var l = el("a", null, o[0]); l.href = o[1];
        if (o[1].indexOf("http") === 0) { l.target = "_blank"; l.rel = "noopener"; }
        l.addEventListener("click", mclose); mp.appendChild(l);
      });
      var cp = el("button", null); cp.type = "button"; cp.appendChild(sicon("copy")); cp.appendChild(document.createTextNode(U("copy")));
      cp.addEventListener("click", function () {
        var done = function () { toast(U("copied")); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(ct.email).then(done, function () { fallbackCopy(ct.email); done(); });
        else { fallbackCopy(ct.email); done(); }
        mclose();
      });
      mp.appendChild(cp);
      a.addEventListener("click", function () { var o = mp.hidden; mp.hidden = !o; a.setAttribute("aria-expanded", String(o)); if (o) mp.querySelector("a").focus(); });
      li2.addEventListener("keydown", function (e) { if (e.key === "Escape") { mclose(); a.focus(); } });
      mapClosers = mapClosers.filter(function (f) { return f.host.isConnected; });
      var mc = function (e) { if (!li2.contains(e.target)) mclose(); }; mc.host = li2; mapClosers.push(mc);
      li2.appendChild(a); li2.appendChild(mp); c.appendChild(li2);
    }
    if (ct.linkedin) {
      var li3 = el("li"), a3 = el("a", "cbtn");
      a3.href = ct.linkedin; a3.target = "_blank"; a3.rel = "noopener";
      a3.appendChild(sicon("linkedin"));
      a3.appendChild(document.createTextNode(ct.linkedin.replace(/^https?:\/\/(www\.)?/, "")));
      li3.appendChild(a3); c.appendChild(li3);
    }
    if (T(ct.cv)) {   /* CV en l'idioma de la web; s'obre en una pestanya nova per veure'l abans de baixar-lo */
      var li4 = el("li"), a4 = el("a", "cbtn cv-btn");
      a4.href = T(ct.cv); a4.target = "_blank"; a4.rel = "noopener"; a4.type = "application/pdf";
      a4.appendChild(sicon("download")); a4.appendChild(document.createTextNode(U("cvBtn")));
      li4.appendChild(a4); c.appendChild(li4);
    }
  }
  function fallbackCopy(text) {
    var t = el("textarea"); t.value = text; t.setAttribute("readonly", ""); t.style.position = "fixed"; t.style.opacity = "0";
    document.body.appendChild(t); t.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(t);
  }

  /* ============ AVIÓ: en passar per sobre d'una fila amb foto, surt per la dreta del text, fa 3 loops per la pàgina i aterra a l'esquerra; llavors surt la foto ============ */
  function makePlane(cls) {
    var s = document.createElementNS(NS, "svg");
    s.setAttribute("viewBox", "0 0 36 26"); s.setAttribute("class", cls); s.setAttribute("aria-hidden", "true");
    [["35,13 3,1 9,13 3,25", "#d1322f", "#1b2430", "1.4"], ["30,13 12,5.5 16,13 12,20.5", "#ffffff", "none", "0"], ["24,13 15,9.5 18,13 15,16.5", "#2b4fbf", "none", "0"]].forEach(function (p) {
      var n = document.createElementNS(NS, "polygon");
      n.setAttribute("points", p[0]); n.setAttribute("fill", p[1]); n.setAttribute("stroke", p[2]); n.setAttribute("stroke-width", p[3]); n.setAttribute("stroke-linejoin", "round");
      s.appendChild(n);
    });
    return s;
  }
  function planeTrack(S, E, tr, rr) {   /* camí: surt del títol, travessa el text cap a la dreta, gir en U, 2 loops cap a l'esquerra (un dins la targeta, un fora), baixada i aterratge a E mirant a la dreta */
    var N = 300, XMAX = window.innerWidth - 40, R = 34, r1 = 38, drift = 1.5 * R;
    var y0 = Math.min(S.y - 60, Math.max(2 * R + 30, S.y - 100)); r1 = (S.y - y0) / 2;   /* el gir en U acaba exactament a l'alçada de vol: sense «S» */
    var Tx = Math.min(tr.right - 6, XMAX - r1);
    var P = [], i;
    function bez(a, b, c, d) { for (var n = 1; n <= 40; n++) { var t = n / 40, m = 1 - t; P.push([m * m * m * a[0] + 3 * m * m * t * b[0] + 3 * m * t * t * c[0] + t * t * t * d[0], m * m * m * a[1] + 3 * m * m * t * b[1] + 3 * m * t * t * c[1] + t * t * t * d[1]]); } }
    function loop(cx) { for (var i = 1; i <= 60; i++) { var f = i / 60, ph = 2 * Math.PI * f; P.push([cx - R * Math.sin(ph) - drift * f, y0 - R + R * Math.cos(ph)]); } }
    P.push([S.x, S.y]); P.push([Tx, S.y]);
    for (i = 1; i <= 40; i++) { var th = Math.PI * i / 40; P.push([Tx + r1 * Math.sin(th), S.y - r1 * (1 - Math.cos(th))]); }   /* mitja volta a l'extrem dret */
    var x1 = Math.max(rr.left + 40 + R + drift, tr.left + (Tx - tr.left) * 0.5);   /* loop 1: dins la targeta */
    P.push([x1, y0]); loop(x1);
    var x2 = Math.min(E.x + 20 + drift, x1 - drift - 2 * R - 20);   /* loop 2: a l'esquerra de la targeta */
    P.push([x2 + drift, y0]); P.push([x2, y0]); loop(x2);
    var xe = x2 - drift, r2 = (E.y - y0) / 2;
    P.push([E.x, y0]);   /* mitja volta suau (esquerra → baix → dreta) fins a aterrar a E mirant a la dreta */
    for (i = 1; i <= 40; i++) { var t2 = Math.PI * i / 40; P.push([E.x - r2 * Math.sin(t2), y0 + r2 - r2 * Math.cos(t2)]); }
    var cum = [0], total = 0;
    for (i = 1; i < P.length; i++) { total += Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]); cum.push(total); }
    var out = [], seg = 1, prev = null, mx = -1e9, vmax = 1 / 0.825;
    for (i = 0; i <= N; i++) {
      var s = i / N, d = (s < 0.15 ? vmax * s * s / 0.3 : s > 0.8 ? 1 - vmax * (1 - s) * (1 - s) / 0.4 : vmax * (s - 0.075)) * total;   /* perfil de velocitat: accelera molt ràpid el primer 15 %, creuer, i frena només el darrer 20 % per aterrar */
      while (seg < P.length - 1 && cum[seg] < d) seg++;
      var span = cum[seg] - cum[seg - 1] || 1, t = Math.max(0, Math.min(1, (d - cum[seg - 1]) / span));
      var a = Math.atan2(P[seg][1] - P[seg - 1][1], P[seg][0] - P[seg - 1][0]) * 180 / Math.PI;
      if (prev === null) prev = a; while (a - prev > 180) a -= 360; while (a - prev < -180) a += 360;
      prev = a;
      var px = P[seg - 1][0] + (P[seg][0] - P[seg - 1][0]) * t;
      mx = Math.max(mx, px);
      out.push({ x: px, y: P[seg - 1][1] + (P[seg][1] - P[seg - 1][1]) * t, a: a, mx: mx });
    }
    return out;
  }
  function wirePlane(row, txt, idle) {
    var land = makePlane("xp-landed"), cur = null;
    row.appendChild(land);
    function clean() {
      if (!cur) return;
      cur.anim.cancel(); cur.rev.cancel(); cancelAnimationFrame(cur.raf); if (cur.el.parentNode) cur.el.parentNode.removeChild(cur.el); if (cur.tr.parentNode) cur.tr.parentNode.removeChild(cur.tr);
      window.removeEventListener("scroll", cur.skip, true); cur = null;
    }
    function end() { clean(); row.classList.remove("fly"); row.classList.add("landed"); }
    function stop() { clean(); row.classList.remove("fly", "landed"); }
    function start() {
      stop();
      var rr = row.getBoundingClientRect(), tr = txt.getBoundingClientRect(), ir = idle.getBoundingClientRect();
      var big = window.matchMedia && window.matchMedia("(hover: hover) and (min-width: 761px)").matches;
      if (!row.animate || !big || window.matchMedia("(prefers-reduced-motion: reduce)").matches || tr.left - rr.left < 60) { row.classList.add("landed"); return; }   /* sense animació: text i foto surten directament */
      var cy = rr.top + rr.height / 2, S = { x: ir.left + ir.width / 2, y: cy }, E = { x: rr.left - 34, y: cy };
      land.style.left = (E.x - rr.left - 21) + "px"; land.style.top = (E.y - rr.top - 15) + "px";
      var el = makePlane("xp-plane"); document.body.appendChild(el);
      var track = planeTrack(S, E, tr, rr), n = track.length - 1;
      var frames = track.map(function (p, i) { return { offset: i / n, transform: "translate(" + (p.x - 21).toFixed(1) + "px," + (p.y - 15).toFixed(1) + "px) rotate(" + p.a.toFixed(1) + "deg)" }; });
      var reveal = track.map(function (p, i) { var f = Math.max(0, Math.min(1, (p.mx - 14 - tr.left) / (tr.width || 1))); return { offset: i / n, clipPath: "inset(0 " + ((1 - f) * 100).toFixed(1) + "% 0 0)" }; });
      var dur = 3000;
      var anim = el.animate(frames, { duration: dur, easing: "linear", fill: "forwards" });
      var rev = txt.animate(reveal, { duration: dur, easing: "linear", fill: "forwards" });
      var tr2 = document.createElementNS(NS, "svg"), K = 26, STEP = 2, OFF = [-7, 7], segs = [];   /* 2 esteles fines (una per motor) que s'esvaeixen darrere l'avió */
      tr2.setAttribute("class", "xp-trail"); tr2.setAttribute("aria-hidden", "true");
      OFF.forEach(function (o, w) { for (var j = 0; j < K; j++) { var pth = document.createElementNS(NS, "path"); pth.setAttribute("fill", "none"); pth.setAttribute("stroke-linecap", "round"); pth.setAttribute("stroke", "#a9b3c4"); pth.setAttribute("stroke-opacity", (1 * Math.pow(1 - j / K, 1.1)).toFixed(2)); pth.setAttribute("stroke-width", (4.8 - 3.4 * j / K).toFixed(1)); tr2.appendChild(pth); segs.push({ p: pth, o: o, j: j }); } });
      document.body.appendChild(tr2);
      cur = { el: el, anim: anim, rev: rev, skip: end, tr: tr2, raf: 0 };
      (function tick() {
        if (!cur || cur.anim !== anim) return;
        var k0 = Math.min(n, Math.max(0, Math.floor((anim.currentTime || 0) / dur * n)));
        segs.forEach(function (s) {
          var a0 = Math.max(0, k0 - (s.j + 1) * STEP), a1 = Math.max(0, k0 - s.j * STEP);
          if (a1 <= a0) { s.p.setAttribute("d", ""); return; }
          var A = track[a0], B = track[a1], ra = A.a * Math.PI / 180, rb = B.a * Math.PI / 180;
          s.p.setAttribute("d", "M" + (A.x - s.o * Math.sin(ra)).toFixed(1) + " " + (A.y + s.o * Math.cos(ra)).toFixed(1) + " L" + (B.x - s.o * Math.sin(rb)).toFixed(1) + " " + (B.y + s.o * Math.cos(rb)).toFixed(1));
        });
        cur.raf = requestAnimationFrame(tick);
      })();
      anim.onfinish = end;
      window.addEventListener("scroll", end, true);   /* si es fa scroll, l'avió aterra al moment */
      row.classList.add("fly");
    }
    row.addEventListener("mouseenter", start); row.addEventListener("focus", start);
    row.addEventListener("mouseleave", stop); row.addEventListener("blur", stop);
  }

  /* ============ GALERIA: pila de fotos; en tocar la de dalt va al final de la pila i agafa un angle nou (-10°..+10°) ============ */
  /* ============ VÍDEO DEL BRAÇ ROBÒTIC: un braç (SVG) agafa un bloc, el porta al centre i el bloc es converteix en el vídeo ============ */
  function openVideo(g) {
    var title = T(g.title), running = true, raf = 0, t0 = 0, revealed = false;
    var ov = el("div", "gal-ov vid-ov"), box = el("div", "gal-box vid-wait"), st = el("div", "vid-stage");
    ov.setAttribute("role", "dialog"); ov.setAttribute("aria-modal", "true"); ov.setAttribute("aria-label", title);
    var x = el("button", "gal-x", "\u00d7"); x.type = "button"; x.setAttribute("aria-label", "\u00d7");
    var cp = el("p", "gal-cap", title), by = el("p", "gal-by", T(g.cap || ""));
    var vid = document.createElement("video"); vid.className = "vid-el"; vid.src = g.src; vid.muted = true; vid.preload = "auto"; vid.setAttribute("playsinline", ""); st.appendChild(vid);
    var rep = el("button", "vid-replay", "\u21bb"); rep.type = "button"; rep.setAttribute("aria-label", "\u21bb"); st.appendChild(rep);
    function replay() { rep.classList.remove("show"); vid.currentTime = 0; var q = vid.play(); if (q && q.catch) q.catch(function () {}); }
    vid.addEventListener("ended", function () { rep.classList.add("show"); });   /* en acabar, el vídeo s'atura i es pot tornar a reproduir */
    rep.addEventListener("click", function (e) { e.stopPropagation(); replay(); });
    box.appendChild(x); box.appendChild(cp); box.appendChild(by); box.appendChild(st); ov.appendChild(box);
    document.body.appendChild(ov); document.body.classList.add("gal-open");
    var VW = window.innerWidth, VH = window.innerHeight, R = st.getBoundingClientRect(), TY = VH, TT = VH - (VW < 600 ? 46 : 64);   /* escena a pantalla completa, en píxels */
    var svg = document.createElementNS(NS, "svg"); svg.setAttribute("class", "vid-scene"); svg.setAttribute("viewBox", "0 0 " + VW + " " + VH); svg.setAttribute("width", VW); svg.setAttribute("height", VH); svg.setAttribute("aria-hidden", "true"); ov.appendChild(svg);
    function sv(n, a, p) { var e = document.createElementNS(NS, n); for (var k in a) e.setAttribute(k, a[k]); (p || svg).appendChild(e); return e; }
    var defs = sv("defs", {}); var gr = sv("linearGradient", { id: "vgOr", x1: 0, y1: 0, x2: 0, y2: 1 }, defs);
    sv("stop", { offset: "0", "stop-color": "#f58a3c" }, gr); sv("stop", { offset: ".55", "stop-color": "#e8661a" }, gr); sv("stop", { offset: "1", "stop-color": "#c9500f" }, gr);
    
    var narrow = VW < 600, bw = narrow ? 28 : 40, pad = narrow ? 16 : 34, S = { x: Math.max(64, R.left - 120), y: TY - 96 };
    var bxs = (narrow ? [0, 0.5, 1].map(function (f) { var lo = S.x + 98, hi = VW - 30; return lo + (hi - lo) * f - bw / 2; }) : [0.2, 0.5, 0.8].map(function (f) { return R.left + R.width * f - bw / 2; })), cols = ["#2f6fd1", "#2fa05a", "#d1322f"], blocks = [];
    sv("rect", { x: bxs[0] - pad, y: TT, width: bxs[2] + bw + pad - (bxs[0] - pad), height: 64, rx: 4, fill: "#c9d0da" }); sv("rect", { x: bxs[0] - pad, y: TT, width: bxs[2] + bw + pad - (bxs[0] - pad), height: 5, fill: "#9aa5b3" });   /* taula petita */
    cols.forEach(function (c, i) { blocks.push(sv("rect", { x: bxs[i], y: TT - bw, width: bw, height: bw, rx: 3, fill: c, stroke: "rgba(0,0,0,.25)" })); });
    var target = blocks[2], pickX = bxs[2] + bw / 2;
    var C = { x: R.left + R.width / 2, y: R.top + R.height / 2 }, TL = 64;
    var far = Math.max(Math.hypot(pickX - S.x, TT - bw - 120 - TL - S.y), Math.hypot(C.x - S.x, C.y - 20 - TL - S.y)), L1 = Math.max(170, far * 0.66), L2 = L1;
    /* robot: base negra, columna taronja, braç i avantbraç cònics, juntes negres i ventosa */
    var arm = sv("g", { "class": "vid-arm" });
    sv("path", { d: "M" + (S.x - 52) + " " + TY + " L" + (S.x - 40) + " " + (TY - 38) + " L" + (S.x + 40) + " " + (TY - 38) + " L" + (S.x + 52) + " " + TY + " Z", fill: "#1d2026" }, arm);
    sv("rect", { x: S.x - 34, y: S.y - 8, width: 68, height: 70, rx: 16, fill: "url(#vgOr)", stroke: "#b8490f", "stroke-width": 2 }, arm);
    function limb(p1, p2, r1, r2) {
      var f = Math.atan2(p2.y - p1.y, p2.x - p1.x), nx = -Math.sin(f), ny = Math.cos(f);
      var a1 = [p1.x + nx * r1, p1.y + ny * r1], a2 = [p2.x + nx * r2, p2.y + ny * r2], b2 = [p2.x - nx * r2, p2.y - ny * r2], b1 = [p1.x - nx * r1, p1.y - ny * r1];
      return "M" + a1 + " L" + a2 + " A" + r2 + " " + r2 + " 0 0 0 " + b2 + " L" + b1 + " A" + r1 + " " + r1 + " 0 0 0 " + a1 + " Z";
    }
    var la = sv("path", { fill: "url(#vgOr)", stroke: "#b8490f", "stroke-width": 2, "stroke-linejoin": "round" }, arm), lb = sv("path", { fill: "url(#vgOr)", stroke: "#b8490f", "stroke-width": 2, "stroke-linejoin": "round" }, arm);
    var hl1 = sv("line", { stroke: "rgba(255,255,255,.3)", "stroke-width": 7, "stroke-linecap": "round" }, arm), hl2 = sv("line", { stroke: "rgba(255,255,255,.3)", "stroke-width": 5, "stroke-linecap": "round" }, arm);
    var caps = [30, 23, 15].map(function (r) { var c1 = sv("circle", { r: r * 0.66, fill: "#16181d" }, arm), c2 = sv("circle", { r: r * 0.28, fill: "#4a505a" }, arm); return [c1, c2, r]; });
    var tool = sv("g", {}, arm);
    sv("rect", { x: -11, y: 0, width: 22, height: 18, rx: 3, fill: "#3a3f48" }, tool); sv("rect", { x: -4, y: 18, width: 8, height: 18, fill: "#16181d" }, tool);
    var cup = sv("path", { d: "M-7 36 L7 36 L9 44 L13 50 L17 64 L-17 64 L-13 50 L-9 44 Z", fill: "#23272e", stroke: "#0e1014", "stroke-width": 1.5 }, tool);
    sv("line", { x1: -10, y1: 46, x2: 10, y2: 46, stroke: "#4a505a", "stroke-width": 1.5 }, tool); sv("line", { x1: -14, y1: 55, x2: 14, y2: 55, stroke: "#4a505a", "stroke-width": 1.5 }, tool);
    var held = sv("rect", { width: bw, height: bw, rx: 3, fill: "#d1322f", stroke: "rgba(0,0,0,.25)", opacity: 0 });
    var tri = sv("path", { d: "M-7 -10 L11 0 L-7 10 Z", fill: "#fff", opacity: 0 });
    function setArm(px, py, sq) {   /* (px,py) = punt de contacte de la ventosa; cinemàtica inversa de 2 segments amb el colze cap amunt */
      var wx0 = px, wy0 = py - TL, dx = wx0 - S.x, dy = wy0 - S.y, d = Math.min(Math.hypot(dx, dy), L1 + L2 - 1), a = Math.atan2(dy, dx);
      var b = Math.acos(Math.max(-1, Math.min(1, (L1 * L1 + d * d - L2 * L2) / (2 * L1 * d)))), th = a - b;
      var E = { x: S.x + L1 * Math.cos(th), y: S.y + L1 * Math.sin(th) }, W = { x: S.x + d * Math.cos(a), y: S.y + d * Math.sin(a) };
      la.setAttribute("d", limb(S, E, 28, 21)); lb.setAttribute("d", limb(E, W, 20, 13));
      var J = [S, E, W]; caps.forEach(function (c, i) { c[0].setAttribute("cx", J[i].x); c[0].setAttribute("cy", J[i].y); c[1].setAttribute("cx", J[i].x); c[1].setAttribute("cy", J[i].y); });
      function hl(h, p, q, r) { var f = Math.atan2(q.y - p.y, q.x - p.x), nx = -Math.sin(f) * r * 0.45, ny = Math.cos(f) * r * 0.45; h.setAttribute("x1", p.x + nx); h.setAttribute("y1", p.y + ny); h.setAttribute("x2", q.x + nx); h.setAttribute("y2", q.y + ny); }
      hl(hl1, { x: S.x, y: S.y }, E, 28); hl(hl2, E, W, 20);
      tool.setAttribute("transform", "translate(" + W.x.toFixed(1) + "," + (W.y + TL).toFixed(1) + ") scale(1," + (1 - 0.14 * sq) + ") translate(0," + (-TL) + ")");   /* la ventosa s'aixafa sense separar-se del bloc */
      return { x: W.x, y: W.y + TL };
    }
    var Y0 = TT - bw, UP = 120, P = [[0, S.x + far * 0.55, TT - 220, 0], [1000, pickX, Y0 - UP, 0], [650, pickX, Y0, 0], [350, pickX, Y0, 1], [650, pickX, Y0 - UP, 1], [1200, C.x, C.y - bw / 2, 1], [350, C.x, C.y - bw / 2, 1]];
    var TOTAL = 0; P.forEach(function (p, i) { if (i) TOTAL += p[0]; });
    var EXP = 800;
    function ease(k) { return k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; }
    function showVideo() {
      running = false; cancelAnimationFrame(raf);
      svg.style.opacity = "0"; vid.style.opacity = "1"; st.classList.add("on"); box.classList.remove("vid-wait"); vid.style.cursor = "pointer";
      var pr = vid.play(); if (pr && pr.catch) pr.catch(function () {});
    }
    function frame(now) {
      if (!running) return;
      if (!t0) t0 = now;
      var t = now - t0, acc = 0, i = 1;
      if (t < TOTAL) {
        while (i < P.length - 1 && t > acc + P[i][0]) { acc += P[i][0]; i++; }
        var k = ease(Math.min(1, (t - acc) / P[i][0])), a = P[i - 1], b = P[i];
        var tp = setArm(a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k, i >= 3 ? 1 : 0);
        if (i >= 4) { target.setAttribute("opacity", 0); held.setAttribute("opacity", 1); held.setAttribute("x", tp.x - bw / 2); held.setAttribute("y", tp.y); }
        raf = requestAnimationFrame(frame); return;
      }
      var e = Math.min(1, (t - TOTAL) / EXP), q = ease(e), end = setArm(C.x, C.y - bw / 2, 1);   /* el bloc creix fins a ocupar tota la pantalla del vídeo */
      held.setAttribute("x", (end.x - bw / 2) + (R.left - (end.x - bw / 2)) * q); held.setAttribute("y", end.y + (R.top - end.y) * q);
      held.setAttribute("width", bw + (R.width - bw) * q); held.setAttribute("height", bw + (R.height - bw) * q); held.setAttribute("rx", 3 + 9 * q);
      arm.setAttribute("opacity", 1 - q);
      if (e >= 1) { showVideo(); return; }
      raf = requestAnimationFrame(frame);
    }
    function close() {
      running = false; cancelAnimationFrame(raf); try { vid.pause(); } catch (er) {}
      document.removeEventListener("keydown", key, true); if (ov.parentNode) ov.parentNode.removeChild(ov); document.body.classList.remove("gal-open");
    }
    function key(e) { if (e.key === "Escape") { e.stopPropagation(); close(); } }
    x.addEventListener("click", close); ov.addEventListener("click", function (e) { if (e.target === ov) close(); });
    st.addEventListener("click", function () { if (running) showVideo(); else if (vid.ended) replay(); else if (vid.paused) { var q = vid.play(); if (q && q.catch) q.catch(function () {}); } else vid.pause(); });   /* durant l'animació salta al vídeo; després pausa/reprèn */
    document.addEventListener("keydown", key, true); x.focus();
    setArm(P[0][1], P[0][2], 0);
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) showVideo(); else raf = requestAnimationFrame(frame);
  }  function openGallery(g) {
    var cap = T(g.cap), list = g.photos.slice(), cards = [], order = [], busy = false;
    var ov = el("div", "gal-ov"), box = el("div", "gal-box"), stack = el("div", "gal-stack");
    ov.setAttribute("role", "dialog"); ov.setAttribute("aria-modal", "true"); ov.setAttribute("aria-label", cap);
    var x = el("button", "gal-x", "×"); x.type = "button"; x.setAttribute("aria-label", "×");
    var cp = el("p", "gal-cap", ""), by = el("p", "gal-by", cap), hint = el("p", "gal-hint", { ca: "Toca la foto per passar-la", es: "Toca la foto para pasarla", en: "Tap the photo to pass it" }[lang] || "");
    function ang() { return (Math.random() * 10 - 5); }
    ov.addEventListener("contextmenu", function (e) { e.preventDefault(); });
    function layout() { order.forEach(function (c, i) { c.el.style.zIndex = String(order.length - i); }); if (order[0]) cp.textContent = g.caps && g.caps[order[0].i] ? T(g.caps[order[0].i]) : ""; }
    list.forEach(function (src, i) {
      var c = { el: el("div", "gal-card"), a: ang(), i: i };
      var im = el("img"); im.src = src; im.alt = cap + " " + (i + 1); im.draggable = false; var fr = el("div", "gal-frame"); fr.appendChild(im); c.el.appendChild(fr);
      im.addEventListener("load", function () { fr.className = "gal-frame " + (im.naturalHeight > im.naturalWidth ? "v" : "h"); });
      im.addEventListener("error", function () { var k = order.indexOf(c); if (k >= 0) order.splice(k, 1); if (c.el.parentNode) c.el.parentNode.removeChild(c.el); layout(); });
      c.el.style.transform = "rotate(" + c.a.toFixed(1) + "deg)";
      c.el.addEventListener("click", function () { if (order[0] === c) pass(); });
      cards.push(c); order.push(c); stack.appendChild(c.el);
    });
    layout();
    function pass() {
      if (busy || order.length < 2) return; busy = true;
      var c = order[0];
      c.el.style.transform = "translate(64%, -6%) rotate(" + (c.a + 8).toFixed(1) + "deg)";   /* 1) la foto surt per la dreta */
      setTimeout(function () {
        order.shift(); order.push(c); c.a = ang(); layout();   /* 2) passa per sota de la pila */
        c.el.style.transform = "rotate(" + c.a.toFixed(1) + "deg)";   /* 3) i s'hi col·loca amb un angle nou */
        setTimeout(function () { busy = false; }, 330);
      }, 300);
    }
    function back() {   /* foto anterior: l'última de la pila torna a dalt entrant per la dreta */
      if (busy || order.length < 2) return; busy = true;
      var c = order.pop(); order.unshift(c); c.a = ang(); layout();
      c.el.style.transition = "none"; c.el.style.transform = "translate(64%, -6%) rotate(" + (c.a + 8).toFixed(1) + "deg)";
      void c.el.offsetWidth; c.el.style.transition = ""; c.el.style.transform = "rotate(" + c.a.toFixed(1) + "deg)";
      setTimeout(function () { busy = false; }, 330);
    }
    function close() { document.removeEventListener("keydown", key, true); if (ov.parentNode) ov.parentNode.removeChild(ov); document.body.classList.remove("gal-open"); }
    function key(e) { if (e.key === "Escape") { e.stopPropagation(); close(); } else if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") { e.preventDefault(); pass(); } else if (e.key === "ArrowLeft") { e.preventDefault(); back(); } }
    x.addEventListener("click", close);
    function ico(d) { var s = document.createElementNS(NS, "svg"); s.setAttribute("viewBox", "0 0 24 24"); s.setAttribute("width", "20"); s.setAttribute("height", "20"); s.setAttribute("aria-hidden", "true"); var p = document.createElementNS(NS, "path"); p.setAttribute("d", d); p.setAttribute("fill", "none"); p.setAttribute("stroke", "currentColor"); p.setAttribute("stroke-width", "2.4"); p.setAttribute("stroke-linecap", "round"); p.setAttribute("stroke-linejoin", "round"); s.appendChild(p); return s; }
    x.textContent = ""; x.appendChild(ico("M6 6l12 12M18 6L6 18"));
    var pv = el("button", "gal-nav prev"), nx = el("button", "gal-nav next");
    pv.appendChild(ico("M15 5l-7 7 7 7")); nx.appendChild(ico("M9 5l7 7-7 7"));
    pv.type = nx.type = "button"; pv.setAttribute("aria-label", "←"); nx.setAttribute("aria-label", "→");
    pv.addEventListener("click", back); nx.addEventListener("click", pass);
    box.appendChild(pv); box.appendChild(nx);
    ov.addEventListener("click", function (e) { if (e.target === ov) close(); });
    box.appendChild(x); box.appendChild(cp); box.appendChild(stack); box.appendChild(by); box.appendChild(hint); ov.appendChild(box);
    document.body.appendChild(ov); document.body.classList.add("gal-open"); document.addEventListener("keydown", key, true); x.focus();
  }

  /* dissuasió de descàrrega: sense menú contextual ni arrossegar a les imatges (no és una protecció real) */
  document.addEventListener("contextmenu", function (e) { if (e.target && e.target.tagName === "IMG") e.preventDefault(); });
  document.addEventListener("dragstart", function (e) { if (e.target && e.target.tagName === "IMG") e.preventDefault(); });

  /* ============ LÍNIA TEMPORAL ÚNICA: EXPERIÈNCIA I FORMACIÓ ============ */
  // Cada fila: [costat esquerre | eix | costat dret]. L'experiència va a l'esquerra i la formació a la dreta.
  // El costat actiu mostra la fitxa completa; l'altre, només una etiqueta curta apagada.
  function renderTrajectory() {
    var X = D.experience, org = X.org + " · " + X.place + " · " + T(X.role);
    var items = X.roles.map(function (r) {
      return { side: "exp", kind: "exp", end: r.end || "", title: T(r.title), period: T(r.period), org: X.org + " · " + X.place, orgTail: T(X.role), mapQuery: X.mapQuery, points: r.main ? null : r.did, role: r, tags: r.tags, label: T(X.role) };
    }).concat(D.education.map(function (e) {
      var k = e.kind || "master";
      return { side: "edu", kind: k, end: e.end || "", title: T(e.title), period: T(e.period), org: T(e.school), mapQuery: e.mapQuery, note: T(e.note), points: e.rows ? null : e.points, rows: e.rows, tags: e.tags, label: U(k === "course" ? "course" : k) };
    }));
    items.sort(function (a, b) { return a.end < b.end ? 1 : a.end > b.end ? -1 : (a.side === "edu" ? -1 : 1); });

    var ol = clear($("ct"));
    items.forEach(function (it) {
      var li = el("li", "row " + it.side + " " + it.kind);
      var L = el("div", "side l"), A = el("div", "axis"), R = el("div", "side r");
      A.appendChild(el("span", "dot"));
      var full = el("div", "full"), h = el("div", "tl-head"), b = el("b", null, it.title);
      b.appendChild(el("span", "kind", it.label));
      h.appendChild(b); h.appendChild(el("span", null, it.period)); full.appendChild(h);
      if (it.org) { var op = el("p", "org"); op.textContent = it.org + (it.orgTail ? " · " + it.orgTail : ""); full.appendChild(op); }   /* sense mapa: el mapa només és al contacte */
      if (it.note) full.appendChild(el("p", "note", it.note));
      if (it.rows && it.rows.length) {   /* formació: esquema d'etiqueta + descripció; si una fila té foto, surt en passar-hi per sobre */
        var eo = el("div", "xp-other xp-edu");
        it.rows.forEach(function (o) {
          var rw = el("div", "xp-row"); rw.appendChild(el("b", null, T(o.t))); var dp = el("p", null, T(o.d)); rw.appendChild(dp);
          var lks = (o.links || (o.link ? [{ id: o.link }] : [])).filter(function (L2) { return byId(L2.id); });   /* enllaços als llibrets dels projectes, com a xips sota el text */
          if (lks.length) {
            var lw = el("span", "xp-links"); rw.classList.add("has-links"); rw.appendChild(lw);
            lks.forEach(function (L2) {
              var lk = el("button", "xp-link"); lk.type = "button";
              var bi = document.createElementNS(NS, "svg"); bi.setAttribute("viewBox", "0 0 24 24"); bi.setAttribute("width", "14"); bi.setAttribute("height", "14"); bi.setAttribute("aria-hidden", "true");
              var bp = document.createElementNS(NS, "path"); bp.setAttribute("d", "M4 5.5C4 4.7 4.7 4 5.5 4H11v15H5.5C4.7 19 4 18.300 4 17.500zM20 5.5C20 4.7 19.300 4 18.500 4H13v15h5.500c.8 0 1.500-.7 1.500-1.500z"); bp.setAttribute("fill", "none"); bp.setAttribute("stroke", "currentColor"); bp.setAttribute("stroke-width", "1.8"); bp.setAttribute("stroke-linejoin", "round"); bi.appendChild(bp);
              lk.appendChild(bi); lk.appendChild(el("span", null, L2.t ? T(L2.t) : { ca: "Veure el projecte", es: "Ver el proyecto", en: "View the project" }[lang] || "Veure el projecte"));
              lk.classList.add(byId(L2.id).level === "Grau" ? "lg" : "lm"); if (byId(L2.id).ongoing) { lk.classList.add("lo"); rw.classList.add("xp-ongoing"); } lk.addEventListener("click", function (ev) { ev.stopPropagation(); F.level = F.year = F.team = "all"; F.fav = false; setProfile("all"); openBook(L2.id, true); });
              lw.appendChild(lk);
            });
          }
          if (o.photo) {
            var im = el("img", "xp-photo"); im.src = o.photo; im.alt = T(o.t); im.loading = "lazy";
            im.addEventListener("error", function () { rw.classList.remove("has-photo"); rw.removeAttribute("tabindex"); if (im.parentNode) im.parentNode.removeChild(im); });
            var idle = makePlane("xp-idle"); rw.querySelector("b").appendChild(idle);
            rw.classList.add("has-photo"); rw.tabIndex = 0; rw.appendChild(im); wirePlane(rw, rw.querySelector("p"), idle);
          }
          if (o.gallery) {   /* clic: finestra amb la pila de fotos (només si la primera carrega) */
            var probe = new Image();
            probe.onload = function () {
              rw.classList.add("has-gallery"); rw.tabIndex = 0; rw.setAttribute("role", "button");
              rw.querySelector("b").appendChild(el("span", "xp-hint", { ca: "fotos", es: "fotos", en: "photos" }[lang] || "fotos"));
              rw.addEventListener("click", function () { openGallery(o.gallery); });
              rw.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openGallery(o.gallery); } });
            };
            probe.src = o.gallery.photos[0];
          }
          if (o.video) {   /* clic: un braç robòtic mou un bloc i comença el vídeo (només si el vídeo carrega) */
            var vp = document.createElement("video");
            vp.preload = "metadata"; vp.muted = true;
            vp.onloadedmetadata = function () {
              rw.classList.add("has-gallery"); rw.tabIndex = 0; rw.setAttribute("role", "button");
              rw.querySelector("b").appendChild(el("span", "xp-hint", { ca: "vídeo", es: "vídeo", en: "video" }[lang] || "vídeo"));
              rw.addEventListener("click", function (e) { if (e.target.closest && e.target.closest(".xp-link")) return; openVideo(o.video); });
              rw.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openVideo(o.video); } });
            };
            vp.src = o.video.src;
          }
          eo.appendChild(rw);
        });
        if (eo.querySelector(".has-links")) [].forEach.call(eo.querySelectorAll(".xp-row"), function (r0) { r0.classList.add("has-links"); });   /* mateixa disposició a totes les files de la targeta */
        if (!(it.tags && it.tags.length)) eo.classList.add("no-tags");   /* sense etiquetes a sota: l'última fila no porta ratlla inferior */
        full.appendChild(eo);
      }
      if (it.role && it.role.main) {
        var r = it.role, m = r.main, XL = { ca: ["El repte", "Què vaig fer", "Resultat", "Altres responsabilitats"], es: ["El reto", "Qué hice", "Resultado", "Otras responsabilidades"], en: ["The challenge", "What I did", "The result", "Other responsibilities"] };
        var xl = XL[lang] || XL.ca;
        if (r.intro) full.appendChild(el("p", "xp-intro", T(r.intro)));
        full.appendChild(el("p", "xp-sec", T(m.label)));
        var g = el("div", "xp-grid");
        [["challenge", 0], ["did", 1], ["result", 2]].forEach(function (k) {
          var c = el("div", k[0] === "result" ? "xp-col result" : "xp-col");
          c.appendChild(el("b", null, xl[k[1]])); c.appendChild(el("p", null, T(m[k[0]]))); g.appendChild(c);
        });
        full.appendChild(g);
        if (r.other && r.other.length) {
          full.appendChild(el("p", "xp-sec", xl[3]));
          var ot = el("div", "xp-other");
          r.other.forEach(function (o) { var rw = el("div", "xp-row"); rw.appendChild(el("b", null, T(o.t))); var dp = el("p", null, T(o.d)); rw.appendChild(dp);
          if (o.link && byId(o.link)) {   /* enllaç al llibre del projecte */
            var lk = el("button", "xp-link", { ca: "Veure el projecte", es: "Ver el proyecto", en: "View the project" }[lang] || "Veure el projecte"); lk.type = "button";
            lk.appendChild(document.createTextNode(" \u2192"));
            lk.classList.add(byId(o.link).level === "Grau" ? "lg" : "lm"); if (byId(o.link).ongoing) { lk.classList.add("lo"); rw.classList.add("xp-ongoing"); } lk.addEventListener("click", function (ev) { ev.stopPropagation(); F.level = F.year = F.team = "all"; F.fav = false; setProfile("all"); openBook(o.link, true); });
            dp.appendChild(document.createTextNode(" ")); dp.appendChild(lk);
          } ot.appendChild(rw); });
          full.appendChild(ot);
        }
      }
      if (it.points && it.points.length) {
        var ul = el("ul", "pts"); it.points.forEach(function (p) { ul.appendChild(el("li", null, T(p))); }); full.appendChild(ul);
      }
      if (it.tags && it.tags.length) {
        var tl = el("ul", "tools"); it.tags.forEach(function (t) { tl.appendChild(el("li", null, T(t))); }); full.appendChild(tl);
      }
      var mini = el("div", "mini"); mini.appendChild(el("b", null, it.title)); mini.appendChild(el("span", null, it.period));
      mini.addEventListener("click", function () { go(it.side === "exp" ? "experiencia" : "formacio"); });
      var host = it.side === "exp" ? L : R;
      host.appendChild(full); host.appendChild(mini);
      li.appendChild(L); li.appendChild(A); li.appendChild(R);
      ol.appendChild(li);
    });
  }

  /* ============ PROJECTES ============ */
  var pc = $("profile-chips");
  function chip(box, key, value, label, deco) {
    var b = el("button", "chip");
    b.type = "button"; b.dataset.v = value;
    if (deco) b.appendChild(deco);
    b.appendChild(document.createTextNode(label));
    b.addEventListener("click", function () {
      if (key === "profile") setProfile(value); else { F[key] = value; renderProjects(); }
    });
    box.appendChild(b);
  }
  function dot(cls, year) { var d = el("span", "dot " + (cls || "")); if (year) d.setAttribute("data-year", year); return d; }
  function setProfile(p) {
    profile = p;
    var u = new URL(location.href);
    if (p === "all") u.searchParams.delete("p"); else u.searchParams.set("p", p);
    try { history.replaceState(null, "", u); } catch (e) {}
    renderProjects();
  }
  function buildFilters() {
    clear(pc);
    Object.keys(D.profiles).forEach(function (k) { chip(pc, "profile", k, T(D.profiles[k].label)); });
    var fl = clear($("f-level")), fy = clear($("f-year")), ft = clear($("f-team"));
    chip(fl, "level", "all", U("all"));
    chip(fl, "level", "Màster", U("master"), dot("lvl-master"));
    chip(fl, "level", "Grau", U("grau"), dot("lvl-grau"));
    chip(fy, "year", "all", U("all"));
    var years = {}; visible.forEach(function (p) { years[p.year] = 1; });
    Object.keys(years).sort().reverse().forEach(function (y) { chip(fy, "year", y, y); });
    chip(ft, "team", "all", U("all"));
    chip(ft, "team", "solo", U("solo"), icon("solo"));
    chip(ft, "team", "group", U("group"), icon("group"));
    $("clear").textContent = U("clear");
    $("f-toggle-txt").textContent = U("fToggle");
    var vm = clear($("view-mode"));
    [["shelf", U("shelf")], ["list", U("list")]].forEach(function (m) {
      var b = el("button", null, m[1]); b.type = "button"; b.dataset.v = m[0];
      b.addEventListener("click", function () { viewMode = m[0]; store("portfoli-view", viewMode); renderProjects(); });
      vm.appendChild(b);
    });

  }
  $("feat-link").addEventListener("click", function (ev) { ev.preventDefault(); F.level = F.year = F.team = "all"; F.fav = true; if (!mobile) { viewMode = "shelf"; store("portfoli-view", viewMode); } setProfile("all"); go("projectes"); });
  $("f-fav").addEventListener("click", function () { F.fav = !F.fav; renderProjects(); });
  /* mòbil: plegar i desplegar els filtres (en ordinador el botó no es veu i les files sempre hi són) */
  $("f-toggle").addEventListener("click", function () {
    var open = $("filters").classList.toggle("open");
    this.setAttribute("aria-expanded", String(open));
  });
  /* mòbil: el perfil és un desplegable; en triar-ne un es tanca */
  $("pf-toggle").addEventListener("click", function () {
    var open = $("pf-panel").classList.toggle("pf-open");
    this.setAttribute("aria-expanded", String(open));
    $("pf-panel").style.setProperty("--pf-top", (this.offsetTop + this.offsetHeight + 6) + "px");   /* la llista surt per sobre, sota el botó */
  });
  pc.addEventListener("click", function (e) { if (e.target.closest && e.target.closest(".chip")) { $("pf-panel").classList.remove("pf-open"); $("pf-toggle").setAttribute("aria-expanded", "false"); } });
  $("clear").addEventListener("click", function () { F.level = F.year = F.team = "all"; F.fav = false; setProfile("all"); });

  function renderLegend() {
    var lg = clear($("legend"));
    function group(title, items) {
      var g = el("span", "lg"); g.appendChild(el("span", "ttl", title));
      items.forEach(function (i) { g.appendChild(i); });
      lg.appendChild(g);
    }
    function mini(cls, inner) { var m = el("span", "mini " + cls); if (inner) m.appendChild(inner); return m; }
    function pair(m, label) { var s = el("span", "lg"); s.appendChild(m); s.appendChild(document.createTextNode(label)); return s; }
    /* només la marca de destacat; la resta de normes (color, dibuix, gruix) van sense llegenda */
    //group(U("lgLevel"), [pair(mini("master"), U("master")), pair(mini("grau"), U("grau"))]);
    //group(U("lgType"), TYPES.map(function (t) { return pair(mini("master", el("span", "deco " + t)), T(D.profiles[t].label)); }));
    //group(U("lgThick"), [pair(mini("master thin"), U("thin")), pair(mini("master thick"), U("thick"))]);
    var fg = el("button", "lg lg-feat"); fg.type = "button"; fg.setAttribute("aria-pressed", String(F.fav)); fg.title = U("featTip"); fg.addEventListener("click", function () { F.fav = !F.fav; renderProjects(); }); fg.appendChild(el("span", "mini-star", "★")); fg.appendChild(document.createTextNode(U((D.person.featured || []).length > 1 ? "featTxtPl" : "featTxt"))); lg.appendChild(fg);
  }

  /* ----- prestatgeria ----- */
  var preview = $("preview"), wrap = $("shelf-wrap");
  function bookWidth(team) { return team === 1 ? 44 : (typeof team === "number" ? 48 + team * 4 : 60); }
  function showPreview(p, btn) {
    warmDeck(p);   /* en passar per sobre del llibre ja es comencen a baixar les diapositives */
    clear(preview);
    preview.appendChild(el("p", "hint" + (seen[p.id] ? " seen" : ""), "↗ " + U("hint")));   /* al principi i ben visible */
    preview.appendChild(el("b", null, T(p.title)));
    preview.appendChild(el("p", null, T(p.summary)));
    preview.hidden = false;
    // posició fixa respecte a la finestra: així mai allarga la pàgina ni crea scroll
    var br = btn.getBoundingClientRect(), vw = document.documentElement.clientWidth, vh = window.innerHeight;
    var pw = preview.offsetWidth, ph = preview.offsetHeight;
    var left = Math.min(Math.max(8, br.left + br.width / 2 - pw / 2), vw - pw - 8);
    var top = $("shelf-wrap").getBoundingClientRect().bottom + 12;   /* sempre sota la prestatgeria */
    preview.style.left = left + "px"; preview.style.top = top + "px";
  }
  function hidePreview() { preview.hidden = true; }
  window.addEventListener("scroll", hidePreview, { passive: true });
  var shelfT = [], dropRAF = 0;
  function renderShelf() {
    var sh = $("shelf"), wrap = $("shelf-wrap");
    shelfT.forEach(clearTimeout); shelfT = []; cancelAnimationFrame(dropRAF); wrap.style.overflowClipMargin = ""; wrap.style.overflowY = ""; $("main").style.overflow = ""; $("main").style.overflowClipMargin = "";
    wrap.style.transition = ""; wrap.style.minHeight = "";
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var old = {}, oldRect = {};
    sh.querySelectorAll(".bk").forEach(function (b) {
      b.classList.remove("fall", "enter", "put"); b.style.translate = ""; b.style.rotate = ""; b.style.zIndex = ""; b.style.visibility = ""; b.style.opacity = ""; b.style.transition = ""; b.style.pointerEvents = "";
      b.style.animationDelay = ""; old[b.dataset.id] = b;
    });
    Object.keys(old).forEach(function (id) { oldRect[id] = old[id].getBoundingClientRect(); });
    var keep = {}; current.forEach(function (p) { keep[p.id] = 1; });
    var wr = wrap.getBoundingClientRect();
    var animate = !reduce && wr.width > 0 && Object.keys(old).length > 0;
    var leaving = animate ? Object.keys(old).filter(function (id) { return !keep[id]; }) : [];

    function rebuild() {
      var hadMsg = !!sh.querySelector(".shelf-msg");   // si ja hi era, no es torna a escombrar
      clear(sh);
      var firstIrrel = true, made = [];
      /* cap llibre de color: l'avís va a la lleixa com una peça més, a l'esquerra (ocupa l'espai lliure i no tapa cap llibre);
         en aparèixer, el text s'escombra des de l'esquerra */
      if (current.every(function (p) { return irrel[p.id]; })) sh.appendChild(el("div", "shelf-msg" + (hadMsg ? "" : " wipe"), U("empty")));
      current.forEach(function (p) {
        var slot = el("div", "slot" + (irrel[p.id] && firstIrrel ? " irrel-first" : "")); if (irrel[p.id]) firstIrrel = false;
        var b = el("button", "bk " + lv(p) + (seen[p.id] ? " seen" : "") + (irrel[p.id] ? " irrel" : "") + (p.ongoing ? " ongoing" : ""));
        b.type = "button"; b.dataset.ft = (p.types || [])[0] || ""; b.dataset.id = p.id;
        b.style.setProperty("--w", bookWidth(p.team) + "px");
        b.style.setProperty("--h", ((p.level === "Grau" ? 256 : 296)) + "px");   // Màster més alt que Grau
        b.setAttribute("aria-label", T(p.title) + " · " + p.year + " · " + U("open"));
        var types = p.types || [];
        if (isFeatured(p.id)) { b.classList.add("fav"); var st = el("span", "bk-star", "★"); st.setAttribute("aria-hidden", "true"); b.appendChild(st); b.setAttribute("aria-label", b.getAttribute("aria-label") + " · " + U("featTxt")); }
        b.appendChild(decos(types.slice(0, 1)));
        b.appendChild(el("span", "bk-title", T(p.spine || p.title)));
        b.appendChild(el("span", "bk-year", p.year));
        b.addEventListener("pointerenter", function (e) { if (e.pointerType === "mouse") showPreview(p, b); });
        b.addEventListener("pointerleave", hidePreview);
        b.addEventListener("focus", function () { showPreview(p, b); });
        b.addEventListener("blur", hidePreview);
        b.addEventListener("click", function () { hidePreview(); openBook(p.id); });
        slot.appendChild(b); sh.appendChild(slot); made.push(b);
      });
      wrap.style.minHeight = "";
      if (!animate) return;
      // si la prestatgeria s'encongeix (menys files), l'alçada baixa suaument amb el lliscament dels llibres: abans el text de sota feia un salt
      var newH = wrap.getBoundingClientRect().height;
      if (newH < wr.height - 1) {
        wrap.style.minHeight = wr.height + "px"; void wrap.offsetHeight;
        wrap.style.transition = "min-height .7s cubic-bezier(.45,0,.2,1)"; wrap.style.minHeight = newH + "px";
        shelfT.push(setTimeout(function () { wrap.style.transition = ""; wrap.style.minHeight = ""; }, 760));
      }
      // els llibres que es queden llisquen cap al seu nou lloc; els que tornen es posen a la lleixa després
      var moved = [], entering = [];
      made.forEach(function (b) {
        var r0 = oldRect[b.dataset.id];
        if (!r0) { b.classList.add("enter"); entering.push(b); return; }
        var r1 = b.getBoundingClientRect(), dx = r0.left - r1.left, dy = r0.top - r1.top;
        if (Math.abs(dx) + Math.abs(dy) > 1) { b.style.transition = "none"; b.style.translate = dx + "px " + dy + "px"; moved.push(b); }
      });
      void sh.offsetWidth;
      moved.forEach(function (b) { b.style.transition = "translate .7s cubic-bezier(.45,0,.2,1)"; b.style.translate = "0px 0px"; });
      shelfT.push(setTimeout(function () { moved.forEach(function (b) { b.style.transition = ""; b.style.translate = ""; }); }, 780));
      shelfT.push(setTimeout(function () {
        entering.forEach(function (b, i) { b.style.animationDelay = (i * 80) + "ms"; b.classList.remove("enter"); b.classList.add("put"); });
        shelfT.push(setTimeout(function () { entering.forEach(function (b) { b.classList.remove("put"); b.style.animationDelay = ""; }); }, 800 + entering.length * 80));
      }, moved.length ? 620 : 0));
    }

    if (!leaving.length) { rebuild(); return; }
    // 1) els llibres que ja no toquen cauen per gravetat: xoquen amb els llibres que es queden i entre ells (no es poden superposar)
    wrap.style.minHeight = wr.height + "px";
    hidePreview();
    var gone = {}; leaving.forEach(function (id) { gone[id] = 1; });
    var obst = Object.keys(old).filter(function (id) { return !gone[id]; }).map(function (id) {
      var r = oldRect[id]; return { left: r.left, right: r.right, top: r.top, bottom: r.bottom };
    });
    var bodies = leaving.map(function (id) {
      var b = old[id], r = oldRect[id];
      var op = parseFloat(getComputedStyle(b).opacity); if (!(op > 0)) op = 1;   /* opacitat de partida: 1 en color, ,55 en gris */
      b.style.pointerEvents = "none"; b.style.transition = "none"; b.style.zIndex = "30";
      return { b: b, r: r, op: op, dx: 0, dy: 0, vx: 0, vy: -260, rot: 0, vr: (Math.random() < .5 ? -1 : 1) * (25 + Math.random() * 30), gone: false };
    });
    var finished = false;
    var mainEl = $("main");
    function finish() { if (finished) return; finished = true; cancelAnimationFrame(dropRAF); wrap.style.overflowClipMargin = ""; wrap.style.overflowY = ""; mainEl.style.overflow = ""; mainEl.style.overflowClipMargin = ""; rebuild(); }
    var G = 1500, lastT = 0, startT = 0, wl = wr.left, wrr = wr.right, shelfBottom = sh.getBoundingClientRect().bottom, floorY = shelfBottom + 600, restT = 0;
    /* els llibres cauen sense aturar-se i passen per darrere de la fila «Contacte ———» del peu (que queda per sobre, amb la
       paraula dins d'un requadre). El contingut es retalla a la vora de baix d'aquesta fila: el llibre desapareix quan l'ha travessat sencer */
    var footLine = document.querySelector("#site-foot .sec-label"), toLine = false, lineY = 0;
    if (footLine && footLine.offsetParent) {
      var flr = footLine.getBoundingClientRect(); lineY = flr.top + flr.height / 2;   /* alçada de la línia horitzontal (al mig de la fila) */
      if (lineY > shelfBottom) { toLine = true; floorY = lineY + 5000; }
    }
    if (toLine) {
      wrap.style.overflowY = "visible";
      /* retall de <main> amb marge fins a la fila: així els llibres no allarguen la pàgina */
      mainEl.style.overflow = "clip";
      mainEl.style.overflowClipMargin = Math.max(0, Math.round(lineY - mainEl.getBoundingClientRect().bottom)) + "px";
    }
    else wrap.style.overflowClipMargin = "190px";
    function step(now) {
      if (finished) return;
      if (!startT) { startT = lastT = now; }
      var dt = Math.min(.032, (now - lastT) / 1000); lastT = now;
      // els de sota primer, així els de dalt cauen sobre ells
      var order = bodies.slice().sort(function (a, c) { return (c.r.top + c.dy) - (a.r.top + a.dy); });
      order.forEach(function (o) {
        var w = o.r.width, h = o.r.height, L = o.r.left + o.dx, T = o.r.top + o.dy;
        if (o.rest) return;
        var others = obst.concat(bodies.filter(function (q) { return q !== o && !q.gone; }).map(function (q) {
          var l = q.r.left + q.dx, t = q.r.top + q.dy; return { left: l, right: l + q.r.width, top: t, bottom: t + q.r.height };
        }));
        others.push({ left: -1e5, right: 1e5, top: floorY, bottom: floorY + 1000, floor: true });   // el terra
        o.vy += G * dt;
        var nT = T + o.vy * dt, nL = L, sup = null;
        others.forEach(function (q) {
          var ox = Math.min(L + w, q.right) - Math.max(L, q.left);
          if (ox > 3 && T + h <= q.top + 2 && nT + h >= q.top && (!sup || q.top < sup.top)) sup = q;
        });
        if (sup) {
          nT = sup.top - h; o.vy = 0;
          if (sup.floor) { o.rest = true; }   // ja és al terra: queda aturat (i els altres s'hi apilen a sobre)
          else {   // a sobre d'un llibre: rellisca cap al costat més proper fins que cau; mai en vertical a través d'un altre
            if (!o.dir) o.dir = (L + w / 2) < (sup.left + sup.right) / 2 ? -1 : 1;
            o.vx = Math.min(300, o.vx + 700 * dt);
            nL = L + o.dir * o.vx * dt;
            var blocked = false;
            others.forEach(function (q) {
              if (q === sup) return;
              var ox = Math.min(nL + w, q.right) - Math.max(nL, q.left), oy = Math.min(nT + h, q.bottom) - Math.max(nT, q.top);
              if (ox > 3 && oy > 3) blocked = true;
            });
            if (nL < wl || nL > wrr - w) blocked = true;
            if (blocked) { nL = L; o.vx = 0; if (o.flipped) o.rest = true; else { o.flipped = true; o.dir = -o.dir; } }
          }
        } else { o.vx = 0; o.dir = 0; }   // en l'aire cau recte
        o.dx = nL - o.r.left; o.dy = nT - o.r.top;
        o.b.style.translate = o.dx + "px " + o.dy + "px";
        if (toLine) { if (nT >= lineY) { o.gone = true; o.rest = true; o.b.style.visibility = "hidden"; } }   /* ja ha passat sencer per darrere de la línia */
        else {   /* sense peu a sota (no hauria de passar): com abans, s'esvaeix en baixar de la prestatgeria */
          var past = nT + h - shelfBottom;
          if (past > 0) o.b.style.opacity = o.op * Math.max(0, 1 - past / 170);   /* des de la seva opacitat (els grisos no s'enfosqueixen) */
          if (past >= 170) { o.gone = true; o.rest = true; o.b.style.visibility = "hidden"; }
        }
      });
      if (bodies.every(function (o) { return o.gone; })) { finish(); return; }
      /* sense pausa: només si algun llibre es queda encallat a sobre d'un altre (o passa massa estona) s'esvaeixen tots */
      if ((!toLine && bodies.every(function (o) { return o.rest; })) || now - startT > (toLine ? 3200 : 2400)) {
        if (!restT) { restT = now; }
        if (now - restT > 450) {   // una estona aturats, i s'esvaeixen
          bodies.forEach(function (o) { o.b.style.transition = "opacity .3s"; o.b.style.opacity = "0"; });
          shelfT.push(setTimeout(finish, 320)); return;
        }
      }
      dropRAF = requestAnimationFrame(step);
    }
    dropRAF = requestAnimationFrame(step);
    // 2) quan han caigut, la resta es desplaça cap al seu lloc (temporitzador de seguretat si la pestanya està en segon pla)
    shelfT.push(setTimeout(finish, 4000));
  }

  /* ----- vista de llista ----- */
  function card(item) {
    var c = el("article", "card " + (item.level === "Grau" ? "lvl-grau" : "lvl-master") + (isSolo(item.team) ? " team-solo" : " team-group") + (irrel[item.id] ? " irrel" : "") + (item.ongoing ? " ongoing" : ""));
    if (isFeatured(item.id)) { c.classList.add("fav"); c.appendChild(el("span", "card-star", "★")); }
    var meta = el("p", "meta");
    meta.appendChild(levelTag(item.level)); meta.appendChild(yearTag(item.year));
    if (item.team != null) meta.appendChild(teamTag(item.team));
    c.appendChild(meta);
    c.appendChild(el("h3", null, T(item.title)));
    if (item.context) c.appendChild(el("p", "context", T(item.context)));
    if (item.role) c.appendChild(el("p", "role", U("role") + T(item.role)));
    c.appendChild(el("p", "summary", T(item.summary)));
    if (item.tools && item.tools.length) {
      var tl = el("ul", "tools"); item.tools.forEach(function (t) { tl.appendChild(el("li", null, T(t))); }); c.appendChild(tl);
    }
    // doble clic (o Enter) obre el llibre; en pantalles tàctils, un toc
    if (seen[item.id]) c.classList.add("seen");
    c.tabIndex = 0; c.setAttribute("role", "button"); c.setAttribute("aria-label", T(item.title) + " · " + U("open"));
    var touch = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
    c.addEventListener("click", function () { var s = window.getSelection && window.getSelection(); if (s) s.removeAllRanges(); openBook(item.id); });
    c.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openBook(item.id); } });
    return c;
  }
  function press(box, val) {
    Array.prototype.forEach.call(box.children, function (b) { b.setAttribute("aria-pressed", String(b.dataset.v === val)); });
    if (box === pc) { var pt = $("pf-toggle-txt"); if (pt) pt.textContent = profile === "all" ? U("all") : T(D.profiles[profile].label); }   // mòbil: el desplegable mostra el perfil triat
  }
  /* teranyina de cantonada (SVG): fils radials des de la cantonada superior dreta i anells una mica caiguts; l'aranya penja d'un fil i puja i baixa */
  function cobweb() {
    var NS = "http://www.w3.org/2000/svg", W = 170, H = 230, cx = W, R = [22, 44, 68, 94, 122], N = 7, d = "";
    function sv(tag, at) { var n = document.createElementNS(NS, tag); Object.keys(at).forEach(function (k) { n.setAttribute(k, at[k]); }); return n; }
    var svg = sv("svg", { viewBox: "0 0 " + W + " " + H, width: W, height: H, "aria-hidden": "true", focusable: "false" });
    var ang = []; for (var i = 0; i < N; i++) ang.push(Math.PI / 2 + (Math.PI / 2) * i / (N - 1));   /* de baix (vora dreta) a l'esquerra (vora de dalt) */
    function pt(a, r) { return [cx + Math.cos(a) * r, Math.sin(a) * r]; }
    ang.forEach(function (a) { var p = pt(a, 140); d += "M" + cx + ",0L" + p[0].toFixed(1) + "," + p[1].toFixed(1); });
    R.forEach(function (r, j) {
      for (var i = 0; i < N - 1; i++) {
        var rr = r * (1 + ((i * 7 + j * 3) % 5 - 2) * 0.025);   /* petites irregularitats: no és un dibuix perfecte */
        var p1 = pt(ang[i], rr), p2 = pt(ang[i + 1], rr), m = pt((ang[i] + ang[i + 1]) / 2, rr * 0.86);   /* el fil cau cap a la cantonada */
        d += (i ? "" : "M" + p1[0].toFixed(1) + "," + p1[1].toFixed(1)) + "Q" + m[0].toFixed(1) + "," + m[1].toFixed(1) + " " + p2[0].toFixed(1) + "," + p2[1].toFixed(1);
      }
    });
    svg.appendChild(sv("path", { d: d, class: "cw-web" }));
    var g = sv("g", { class: "cw-spider" });
    g.appendChild(sv("line", { x1: 0, y1: -400, x2: 0, y2: 0, class: "cw-thread" }));
    var legs = sv("g", { class: "cw-legs" });
    [[-1, -4], [-1, -1], [-1, 2], [-1, 5], [1, -4], [1, -1], [1, 2], [1, 5]].forEach(function (l) {
      var s = l[0], y = l[1];
      legs.appendChild(sv("path", { d: "M0," + (y * 0.6 + 4) + "Q" + (s * 7) + "," + (y - 4) + " " + (s * 10) + "," + (y + 3) }));
    });
    g.appendChild(legs);
    g.appendChild(sv("ellipse", { cx: 0, cy: 3, rx: 3.2, ry: 3, class: "cw-body" }));
    g.appendChild(sv("ellipse", { cx: 0, cy: 9, rx: 4.6, ry: 5.4, class: "cw-body" }));
    var hang = sv("g", { transform: "translate(112 0)" }); hang.appendChild(g); svg.appendChild(hang);
    var box = el("div", "cobweb"); box.id = "cobweb"; box.appendChild(svg);
    return box;
  }
  function renderProjects() {
    var P = D.profiles[profile];
    $("f-fav").setAttribute("aria-pressed", String(F.fav)); $("f-fav").lastChild.textContent = U("featFilter"); $("f-fav").title = U("featTip");
    press(pc, profile); press($("f-level"), F.level); press($("f-year"), F.year); press($("f-team"), F.team); press($("view-mode"), viewMode);
    $("headline").textContent = profile === "all" ? "" : T(P.headline);   // amb «Tots» el panell es queda més baix
    var kw = clear($("keywords"));
    if (profile !== "all") P.keywords.forEach(function (k) { kw.appendChild(el("li", null, T(k))); });
    function isRel(p) { return profile === "all" || (p.types || []).indexOf(profile) >= 0; }
    var shelfOn = viewMode === "shelf";
    current = visible.filter(function (p) {
      return (isRel(p) || shelfOn) &&                           // perfil: a la prestatgeria els poc rellevants surten en gris a la dreta; a la llista s'amaguen
             (F.level === "all" || p.level === F.level) &&
             (F.year === "all" || p.year === F.year) &&
             (F.team === "all" || (F.team === "solo") === isSolo(p.team)) &&
             (!F.fav || isFeatured(p.id));
    }).map(function (p, i) { return { p: p, i: i }; })
      .sort(function (a, b) { var ra = isRel(a.p), rb = isRel(b.p); if (ra !== rb) return ra ? -1 : 1;
        return (b.p.year - a.p.year) || ((b.p.month || 0) - (a.p.month || 0)) || (score(b.p) - score(a.p)) || (a.i - b.i); })   /* més recent primer: any i després mes */
      .map(function (x) { return x.p; });
    irrel = {}; current.forEach(function (p) { if (!isRel(p)) irrel[p.id] = 1; });
    var relN = current.length - Object.keys(irrel).length;
    /* sense cap llibre: la prestatgeria es queda buida, amb una teranyina i una aranya a la cantonada dreta */
    $("shelf-wrap").hidden = !shelfOn;
    if (shelfOn && !$("cobweb")) $("shelf-wrap").appendChild(cobweb());
    $("shelf-wrap").classList.toggle("empty", !current.length);
    $("legend").hidden = !shelfOn || !current.length; renderLegend();
    $("projects").hidden = shelfOn;
    if (shelfOn) renderShelf();
    else { var box = clear($("projects")); current.forEach(function (p) { box.appendChild(card(p)); }); }
    $("empty").hidden = relN > 0;
    $("empty").classList.toggle("shelf-mode", shelfOn);   // prestatgeria: en pantalla gran l'avís va dins la lleixa (rebuild) i aquest s'amaga per CSS; en mòbil, a sota
    var active = profile !== "all" || F.level !== "all" || F.year !== "all" || F.team !== "all" || F.fav;
    $("clear").disabled = !active;
    /* mòbil: el botó «Filtres» diu quants filtres de nivell/any/tipus hi ha posats (amb el plec tancat no es veuen) */
    var nf = (F.level !== "all") + (F.year !== "all") + (F.team !== "all");
    $("f-badge").textContent = nf; $("f-badge").hidden = !nf;
    $("count").textContent = (active ? U("showing")(profile === "all" ? current.length : relN, visible.length) : visible.length + U("nProjects")) +
      (shelfOn || window.matchMedia("(max-width: 700px)").matches ? "" : " · " + U("dbl"));   /* mòbil: sense l'avís, perquè càpiga en una línia */
    if (typeof topBtn !== "undefined") updateTop();
  }

  /* ============ LLIBRE OBERT ============ */
  var bookDlg = $("book"), bookEl = $("book-el"), order = [], idx = 0, turning = false;
  var seen = {};   // llibres que ja s'han obert (es veuen més apagats a la prestatgeria i a la llista)
  bookDlg.addEventListener("close", function () { renderProjects(); });
  /* presentació en l'idioma actual: els camps de d[lang] (video, poster, thumbs, slides) substitueixen els del català */
  function deckFor(d) {
    var o = d[lang]; if (!o) return d;
    var r = {}, k;
    for (k in d) if (k !== "es" && k !== "en") r[k] = d[k];
    for (k in o) r[k] = o[k];
    return r;
  }
  /* precàrrega de la presentació: totes les diapositives i miniatures, una a una i en ordre (la primera arriba abans).
     Es crida en passar per sobre del llibre (o de la targeta destacada) i en obrir-lo; el vídeo comença a baixar en obrir el llibre. */
  var warmed = {};
  function warmDeck(p) {
    if (!p || !p.deck) return;
    var d = deckFor(p.deck), key = p.id + "-" + lang;
    if (warmed[key] || !d.slides) return;
    warmed[key] = true;
    var n = (d.chapters || []).length, i = 0;
    (function nextImg() {
      if (i >= n) return;
      var k = String(++i).padStart(2, "0"), a = new Image(), done = false;
      a.onload = a.onerror = function () { if (!done) { done = true; nextImg(); } };
      a.src = d.slides + k + ".jpg";
      if (d.thumbs) { var t = new Image(); t.src = d.thumbs + k + ".jpg"; }
    })();
  }
  /* amb l'estalvi de dades activat (mòbil) el vídeo no es baixa fins que es reprodueix */
  var saveData = !!(navigator.connection && navigator.connection.saveData);
  /* ----- presentació com a visor de diapositives; les que tenen animació es reprodueixen soles (només el seu tros del vídeo) ----- */
  function deckView(d) {
    var chs = d.chapters || [], n = chs.length, cur = 0, clip = null, inVideo = false, fullMode = false;
    var box = el("div", "dv"), stage = el("div", "dv-stage"), img = el("img", "dv-img");
    var v = el("video"); v.preload = saveData ? "metadata" : "auto"; v.setAttribute("playsinline", ""); v.hidden = true; v.src = d.video; /* sense «poster»: mostrava la portada del vídeo sobre la diapositiva mentre el vídeo carregava */
    var prev = el("button", "dv-nav prev", "‹"), next = el("button", "dv-nav next", "›");
    prev.type = next.type = "button"; prev.setAttribute("aria-label", U("prevSl")); next.setAttribute("aria-label", U("nextSl"));
    /* controls propis de l'animació: només mostren el seu tros, no tot el vídeo */
    var ctl = el("div", "dv-ctl"), pp = el("button", "dv-pp"), rng = el("input"), tm = el("span", "dv-tm");
    pp.type = "button"; rng.type = "range"; rng.min = 0; rng.max = 1000; rng.value = 0; rng.setAttribute("aria-label", U("slide"));
    ctl.hidden = true; ctl.appendChild(pp); ctl.appendChild(rng); ctl.appendChild(tm);
    var tag = el("span", "dv-tag"); tag.hidden = true;
    stage.appendChild(img); stage.appendChild(v); stage.appendChild(prev); stage.appendChild(next); stage.appendChild(ctl); stage.appendChild(tag);
    var bar = el("div", "dv-bar"), count = el("span", "dv-count"), act = el("button", "dv-act"), full = el("button", "dv-act ghost"), fs = el("button", "dv-act ghost");
    act.type = full.type = fs.type = "button"; fs.textContent = U("fsBtn"); fs.setAttribute("aria-label", U("fsBtn"));
    bar.appendChild(count); bar.appendChild(act); bar.appendChild(full);
    bar.appendChild(fs);
    var strip = el("div", "chapters"); strip.setAttribute("role", "group"); strip.setAttribute("aria-label", U("slides"));
    function isAnim(i) { return (d.anim || []).indexOf(i + 1) >= 0; }
    var btns = chs.map(function (t, i) {
      var b = el("button", "chap"); b.type = "button"; b.setAttribute("aria-label", U("slide") + " " + (i + 1) + (isAnim(i) ? " · " + U("animTag") : ""));
      var im = el("img"); im.src = d.thumbs + String(i + 1).padStart(2, "0") + ".jpg"; im.alt = ""; im.loading = "lazy";
      b.appendChild(im); b.appendChild(el("span", null, String(i + 1)));
      if (isAnim(i)) b.appendChild(el("i", "chap-anim", "▶"));
      b.addEventListener("click", function () { show(i, true); });
      strip.appendChild(b); return b;
    });
    function two(i) { return String(i + 1).padStart(2, "0"); }
    function fmt(s) { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); }
    function clipLen() { return clip.to - clip.from; }
    function mode(kind) {   // "img" | "clip" | "full"
      inVideo = kind !== "img"; fullMode = kind === "full";
      v.hidden = !inVideo; img.hidden = false;   // la imatge es queda a sota fins que el vídeo té fotograma (així no surt negre)
      v.controls = fullMode; ctl.hidden = kind !== "clip";
      prev.hidden = next.hidden = fullMode;
      if (kind === "img") { seekTok++; v.pause(); clip = null; tag.hidden = true; }
      refresh();
    }
    function refresh() {
      count.textContent = (cur + 1) + " / " + n;
      btns.forEach(function (b, i) { b.classList.toggle("on", i === cur); });
      act.hidden = !isAnim(cur) || inVideo;
      act.textContent = U("playAnim");
      full.textContent = fullMode ? U("backSlides") : U("fullVid");
    }
    function ppIcon() { pp.textContent = (v.ended || (clip && v.currentTime >= clip.to - 0.1)) ? "↻" : (v.paused ? "▶" : "❚❚"); }
    function show(i, user) {
      cur = Math.max(0, Math.min(n - 1, i));
      img.src = d.slides + two(cur) + ".jpg"; img.alt = U("slide") + " " + (cur + 1);
      img.classList.remove("swap"); void img.offsetWidth; img.classList.add("swap");
      mode("img");
      var sc = btns[cur]; if (sc && strip.scrollTo) strip.scrollTo({ left: sc.offsetLeft - strip.clientWidth / 2 + sc.offsetWidth / 2, behavior: "smooth" });
      [cur - 1, cur + 1].forEach(function (k) { if (k >= 0 && k < n) { var pl = new Image(); pl.src = d.slides + two(k) + ".jpg"; } });   // precarrega les veïnes
      if (user && isAnim(cur)) playClip();   // en arribar a una diapositiva amb animació, es reprodueix sola
    }
    function waitFrame() {   // el vídeo no es veu fins que el salt s'ha completat: evita el fotograma negre
      v.classList.add("wait");
      clearTimeout(waitFrame.t); waitFrame.t = setTimeout(function () { v.classList.remove("wait"); }, 1800);
    }
    v.addEventListener("seeked", function () { v.classList.remove("wait"); });
    v.addEventListener("playing", function () { v.classList.remove("wait"); });
    function playClip() {
      var from = chs[cur] + 0.5, to =   /* el vídeo té un petit fos d'entrada (~0,4 s) en què encara es veu la diapositiva anterior: s'hi entra després */ cur + 1 < n ? chs[cur + 1] : (v.duration || chs[cur] + 8);
      clip = { from: from, to: to }; mode("clip");
      tag.textContent = U("animTag"); tag.hidden = false; setTimeout(function () { tag.hidden = true; }, 2200);
      waitFrame(); seekPlay(from); ppIcon();
    }
    /* el salt a un segon només val quan el vídeo ja té les metadades; abans es perdia i la diapositiva s'animava des del principi (imatge que no corresponia) */
    var seekTok = 0;
    function seekPlay(t) {
      var tok = ++seekTok;
      function go() { if (tok !== seekTok) return; v.currentTime = t; var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); }
      if (v.readyState >= 1) { go(); return; }
      v.addEventListener("loadedmetadata", function f() { v.removeEventListener("loadedmetadata", f); go(); });
      clearTimeout(waitFrame.t); waitFrame.t = setTimeout(function () { v.classList.remove("wait"); }, 8000);
      if (v.preload === "none" || v.networkState === 0) v.load();
    }
    function playFull() { clip = null; mode("full"); waitFrame(); seekPlay(0); }
    prev.addEventListener("click", function () { show(cur - 1, true); });
    next.addEventListener("click", function () { show(cur + 1, true); });
    act.addEventListener("click", function () { playClip(); });
    full.addEventListener("click", function () { if (fullMode) mode("img"); else playFull(); });
    pp.addEventListener("click", function () {
      if (!clip) return;
      if (v.currentTime >= clip.to - 0.1) { v.currentTime = clip.from; v.play(); }
      else if (v.paused) v.play(); else v.pause();
    });
    rng.addEventListener("input", function () { if (clip) v.currentTime = clip.from + clipLen() * rng.value / 1000; });
    v.addEventListener("play", ppIcon); v.addEventListener("pause", ppIcon);
    v.addEventListener("timeupdate", function () {
      if (!clip) return;
      if (v.currentTime >= clip.to - 0.05) { v.pause(); v.currentTime = clip.to - 0.06; }
      rng.value = Math.max(0, Math.min(1000, (v.currentTime - clip.from) / clipLen() * 1000));
      tm.textContent = fmt(v.currentTime - clip.from) + " / " + fmt(clipLen());
      ppIcon();
    });
    v.addEventListener("ended", function () { if (fullMode) mode("img"); else ppIcon(); });
    /* pantalla completa: primer la del navegador; si no hi és o la rebutja (visor integrat, iPhone...), un diàleg a pantalla sencera */
    var fsDlg = null, stageHome = null, xb = el("button", "dv-x", "✕"); xb.type = "button"; xb.setAttribute("aria-label", U("close")); xb.hidden = true; stage.appendChild(xb);
    function exitFake() {
      if (!fsDlg) return;
      var d = fsDlg; fsDlg = null; stage.classList.remove("fs-fake"); xb.hidden = true;
      if (stageHome && stageHome.parentNode) { stageHome.parentNode.insertBefore(stage, stageHome); stageHome.parentNode.removeChild(stageHome); }
      if (d.open) d.close();
      if (d.parentNode) d.parentNode.removeChild(d);
    }
    function enterFake() {
      if (fsDlg || !document.createElement("dialog").showModal) return;
      fsDlg = document.createElement("dialog"); fsDlg.className = "dv-fsdlg";
      stageHome = document.createComment("stage"); stage.parentNode.insertBefore(stageHome, stage);
      fsDlg.appendChild(stage); document.body.appendChild(fsDlg); fsDlg.showModal();
      stage.classList.add("fs-fake"); xb.hidden = false;
      fsDlg.addEventListener("close", exitFake);
    }
    xb.addEventListener("click", function (e) { e.stopPropagation(); exitFake(); });
    fs.addEventListener("click", function () {
      var fe = document.fullscreenElement || document.webkitFullscreenElement;
      if (fe) { (document.exitFullscreen || document.webkitExitFullscreen).call(document); return; }
      if (fsDlg) { exitFake(); return; }
      var req = stage.requestFullscreen || stage.webkitRequestFullscreen, pr = null;
      if (!req || mobile) { enterFake(); return; }   // al mòbil sempre el diàleg propi: la del navegador falla o no fa res en molts visors
      try { pr = req.call(stage); } catch (e) { enterFake(); return; }
      if (pr && pr.catch) pr.catch(enterFake);
    });
    box.addEventListener("keydown", function (e) {
      if (fullMode) return;
      if (e.key === "ArrowRight") { e.stopPropagation(); e.preventDefault(); show(cur + 1, true); }
      else if (e.key === "ArrowLeft") { e.stopPropagation(); e.preventDefault(); show(cur - 1, true); }
    });
    var x0 = null;   // lliscar amb el dit
    stage.addEventListener("pointerdown", function (e) { x0 = e.clientX; });
    stage.addEventListener("pointerup", function (e) { if (x0 !== null && !fullMode && Math.abs(e.clientX - x0) > 40 && e.target !== rng) show(cur + (e.clientX < x0 ? 1 : -1), true); x0 = null; });
    box.appendChild(stage); box.appendChild(bar); box.appendChild(strip);
    show(0, false);
    return box;
  }

  /* codi de barres inventat amb mes i any (p.month si existeix; si no, un mes inventat) */
  function barcode(p) {
    var mo = p.month || (hash(p.id) % 12 + 1), seed = hash(p.id + "bc"), x = 0, NS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(NS, "svg");
    for (var i = 0; i < 38; i++) {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      var bw = 1 + ((seed >> 8) % 3);
      if (i % 2 === 0) { var r = document.createElementNS(NS, "rect"); r.setAttribute("x", x); r.setAttribute("y", 0); r.setAttribute("width", bw); r.setAttribute("height", 30); r.setAttribute("fill", "#111"); svg.appendChild(r); }
      x += bw;
    }
    svg.setAttribute("viewBox", "0 0 " + x + " 30"); svg.setAttribute("preserveAspectRatio", "none");
    var w = el("div", "cv-bc"); w.appendChild(svg); w.appendChild(el("span", "cv-bn", (mo < 10 ? "0" : "") + mo + "   " + p.year));
    return w;
  }
  /* centra el llibre en vertical entre la creu de tancar i les piles (només visual: top relatiu) */
  function centerBook() {
    if (!bookDlg.open || narrow()) { bookEl.style.top = ""; return; }
    bookEl.style.top = "0px";
    if (bookDlg.classList.contains("single")) return;   /* sense fletxes ni piles (display:none → rect buit): el diàleg ja queda centrat pel navegador */
    var bt = bookDlg.getBoundingClientRect().top + bookEl.offsetTop;   /* posició de layout (ignora les animacions 3D) */
    var b = { top: bt, bottom: bt + bookEl.offsetHeight }, cb = $("book-close").getBoundingClientRect().bottom, pv = $("book-prev").getBoundingClientRect();
    var pileTop = pv.bottom - 99;                  /* les piles tenen un alt màxim fix */
    var d = ((pileTop - b.bottom) - (b.top - cb)) / 2;
    bookEl.style.top = Math.round(d) + "px";
  }
  window.addEventListener("resize", centerBook);
  function markSeen() {
    var q = order[idx]; if (!q) return;
    seen[q.id] = true;
    document.querySelectorAll(".bk").forEach(function (x) { if (x.dataset.id === q.id) x.classList.add("seen"); });   /* marca groga al prestatge, en directe */
  }
  function fillBook(p) {
    /* «llegit» només quan s'obre el llibre (markSeen), no en passar-hi la portada */
    bookEl.classList.remove("master", "grau"); bookEl.classList.add(lv(p));
    /* mateixa proporció que al prestatge: gruix del llom i alçada segons el llibre */
    var shelfH = (p.level === "Grau" ? 212 : 252);
    bookEl.style.setProperty("--sw", bookWidth(p.team) + "px");   /* llom = mateix ample que al prestatge */
    bookEl.style.setProperty("--ph", Math.round(shelfH / 252 * 620) + "px");
    bookDlg.style.setProperty("--navgap", (Math.round(212 / 252 * 620) - Math.round(shelfH / 252 * 620)) + "px");   /* la fila de fletxes queda sempre a la mateixa alçada, sigui Màster o Grau */
    bookEl.classList.toggle("ongoing", !!p.ongoing);          /* llibre d'un treball en curs: tapes més fluixes */
    if (!bookEl.querySelector(".bk-tapa")) {
      ["bk-tapa soroll", "bk-llom soroll", "bk-pg-l soroll", "bk-pg-r soroll", "bk-plec"].forEach(function (c) {
        var d = el("span", "bk-l " + c); d.setAttribute("aria-hidden", "true"); bookEl.insertBefore(d, bookEl.firstChild);
      });
    }
    if (!bookEl.querySelector(".bk-cover3d")) {
      var c3 = el("span", "bk-l bk-cover3d"); c3.setAttribute("aria-hidden", "true");
      c3.appendChild(el("span", "bk-cv-f soroll")); c3.appendChild(el("span", "bk-cv-b soroll")); bookEl.appendChild(c3);
    }
    var fr = bookEl.querySelector(".bk-cv-f");
    bookEl.dataset.ft = (p.types || [])[0] || "";
    if (fr) {
      clear(fr);
      var fc = el("div", "fc");                                   /* portada (davant) */
      fc.appendChild(el("b", "cv-t", T(p.title))); if (p.context) fc.appendChild(el("i", "cv-s", T(p.context))); fc.appendChild(el("span", "cv-y", String(p.year)));
      fr.appendChild(fc);
      var bc = el("div", "bcv");                                  /* contraportada: títol, resum i codi de barres */
      bc.appendChild(el("b", "cv-t2", T(p.title)));
      if (p.context) bc.appendChild(el("i", "cv-m", T(p.context)));
      bc.appendChild(el("p", "cv-r", T(p.summary || p.context || "")));
      if (false && p.did && p.did.length) {
        var bs = el("div", "cv-s2"); bs.appendChild(el("span", "cv-h", (p.ongoing ? U("didNow") : p.team != null && !isSolo(p.team) ? U("didTeam") : U("did"))));
        var bl = el("ul", "cv-l"); p.did.slice(0, 2).forEach(function (t) { bl.appendChild(el("li", null, T(t))); }); bs.appendChild(bl); bc.appendChild(bs);
      }
      if (p.tools && p.tools.length) { var tg = el("div", "cv-tg"); p.tools.slice(0, 6).forEach(function (t) { tg.appendChild(el("span", null, T(t))); }); bc.appendChild(tg); }
      bc.appendChild(barcode(p));
      fr.appendChild(bc);
    }
    var L = clear($("page-left")), R = clear($("page-right")), costTb = null;
    if (p.deck) {
      var dk = deckFor(p.deck);   // versió de la presentació en l'idioma actual
      L.appendChild(dk.slides ? deckView(dk) : (function () { var v = el("video"); v.controls = true; v.preload = "none"; v.setAttribute("playsinline", ""); v.src = dk.video; return v; })());
    } else if (p.chain) {
      var cf = el("div", "chainfig"), ci = el("img"); ci.src = p.chain.img; ci.alt = ""; cf.appendChild(ci);
      var co = p.costs, tb = el("table", "chain-cost");
      var hr = el("tr"); hr.appendChild(el("th")); hr.appendChild(el("th", null, T(co.stateHead)));
      co.head.forEach(function (h) { hr.appendChild(el("th", "n", T(h))); }); tb.appendChild(hr);
      p.chain.legend.forEach(function (g, i) {
        var tr = el("tr"); tr.appendChild(el("th", null, g.k)); tr.appendChild(el("td", null, T(g.t)));
        T(co.rows[i].v).forEach(function (v) { tr.appendChild(el("td", "n", v)); }); tb.appendChild(tr);
      });
      cf.appendChild(tb); L.appendChild(cf);
    } else if (p.img) {
      if (p.imgFlow) { var cw = el("div", "cover-img cover-svg"); cw.appendChild(buildGrafcet(false, "gx-st").svg); var zb = el("span", "zoom-cta"); zb.appendChild(el("span", "zc-ic", "▶")); zb.appendChild(document.createTextNode(U("zoomCta"))); cw.appendChild(zb); cw.setAttribute("role", "button"); cw.tabIndex = 0; cw.addEventListener("keydown", function (ev) { if (ev.key === "Enter") cw.click(); }); L.appendChild(cw); }   /* GRAFCET en SVG: s'adapta a l'idioma */
      else if (p.imgTS) { tsw = buildTS(); L.appendChild(tsw); }                  /* sèrie temporal: gràfic amb botons per afegir-hi els models */
      else if (p.imgSim) { var cd =el("div", "cover-img cover-svg cover-sim"), ti = el("img", "dash-th"); ti.src = T(p.img); ti.alt = ""; cd.appendChild(ti); var zd = el("span", "zoom-cta"); zd.appendChild(el("span", "zc-ic", "▶")); zd.appendChild(document.createTextNode((DASH[lang] || DASH.ca).cta)); cd.appendChild(zd); cd.setAttribute("role", "button"); cd.tabIndex = 0; cd.addEventListener("keydown", function (ev) { if (ev.key === "Enter") cd.click(); }); L.appendChild(cd); }   /* miniatura + simulació interactiva */
      else { var im = el("img", "cover-img"); im.src = T(p.img); im.alt = ""; L.appendChild(im); }
      if (p.imgFlow) {                                            /* llegenda curta sota la figura; el detall és a l'ampliació */
        var lg = el("ul", "fig-legend");
        [["cars", "SD", U("cars")], ["ped", "SC", U("peds")]].forEach(function (k) {
          var li = el("li"); li.appendChild(el("span", "lg-tag " + k[0], k[1])); li.appendChild(document.createTextNode(" " + k[2])); lg.appendChild(li);
        });
        lg.appendChild(el("li", "lg-hint", U("zoomHint")));
        L.appendChild(lg);
      }
    } else {
      var cv = el("div", "cover" + (p.ongoing ? " ongoing" : "")); cv.appendChild(decos(p.types));
      cv.appendChild(el("b", null, T(p.spine || p.title)));
      cv.appendChild(el("span", null, (p.level === "Grau" ? U("grau") : U("master")) + " · " + p.year));
      L.appendChild(cv);
    }
    var h = el("h2", null, T(p.title)); h.id = "book-title"; L.appendChild(h);
    if (p.context) L.appendChild(el("p", "context", T(p.context)));
    if (p.role) L.appendChild(el("p", "role", U("role") + T(p.role)));
    if (p.team != null) { var tp = el("p", "teamline"); tp.appendChild(teamTag(p.team)); L.appendChild(tp); }
    if (p.disclaimer) L.appendChild(el("p", "disclaimer", T(p.disclaimer)));
    if (costTb) L.appendChild(costTb);
    if (p.ongoing) { var og = el("p", "ongoing"); og.appendChild(el("i", "og-dot")); og.appendChild(document.createTextNode(U("ongoing"))); L.appendChild(og); }   /* treball en curs */

    R.appendChild(el("p", "summary", T(p.summary)));
    if (p.did && p.did.length) {
      R.appendChild(el("h3", null, (p.ongoing ? U("didNow") : p.team != null && !isSolo(p.team) ? U("didTeam") : U("did"))));
      var ul = el("ul", "pts"); p.did.forEach(function (t, i) { var li = el("li", null, T(t)); ul.appendChild(li); if (p.imgTS && tsw && tsw.ctl) { var k = { 0: "dec", 1: "cat", 3: "fc" }[i]; if (k) tsLink(li, tsw.ctl, function (o) { return o[k]; }, function (c) { c.toggle(k); }, { dec: "#e8761a", cat: "#7b3fb8", fc: "#d1322f" }[k], k === "fc" ? function (o) { return !o.cat; } : null, k === "fc" ? tsw.ctl.need : null); } }); R.appendChild(ul);
    }
    if (p.result) {   /* resultat en una línia, destacat */
      var rs = el("div", "result"); rs.appendChild(el("b", null, U("result"))); rs.appendChild(el("p", null, T(p.result))); R.appendChild(rs); if (p.imgTS && tsw && tsw.ctl) tsLink(rs, tsw.ctl, function (o) { return o.cat && o.fc && !o.dec; }, function (c) { var all = c.on.cat && c.on.fc && !c.on.dec; c.set("dec", false); c.set("cat", !all); c.set("fc", !all); }, "#7b3fb8");   /* resultat = model triat + previsions, sense la descomposició (no és la solució final) */
    }
    if (p.tools && p.tools.length) {
      R.appendChild(el("h3", null, U("tools")));
      var tl = el("ul", "tools"); p.tools.forEach(function (t) { tl.appendChild(el("li", null, T(t))); }); R.appendChild(tl);
    }
    var l = p.links || {}, links = el("div", "links"), any = false;
    [["slides", "Slides"], ["report", "PDF"]].forEach(function (k) {
      if (l[k[0]]) { var a = el("a", null, k[1] + " ↗"); a.href = l[k[0]]; a.target = "_blank"; a.rel = "noopener"; links.appendChild(a); any = true; }
    });
    if (any) R.appendChild(links);
    L.scrollTop = 0; R.scrollTop = 0; bookDlg.scrollTop = 0;   /* un llibre nou sempre s'obre des de dalt (el diàleg recorda on t'havies quedat) */
    $("book-count").textContent = (idx + 1) + " / " + order.length;
    $("book-pos").textContent = featMode ? U("featured") : profile === "all" ? U("projects") : T(D.profiles[profile].label);
    document.querySelectorAll(".bk.pulled").forEach(function (x) { x.classList.remove("pulled"); });
    document.querySelectorAll(".bk").forEach(function (x) { if (x.dataset.id === p.id) x.classList.add("pulled"); });   /* el llibre obert està inclinat; els altres, drets */
    renderPiles();
    if (bookDlg.open) { fitPages(); centerBook(); }
    $("book-prev").disabled = idx === 0;
    $("book-next").disabled = idx === order.length - 1;
  }
  /* piles de llibres: els anteriors a l'esquerra i els següents a la dreta (clic = anar-hi) */
  var pileOff = {};
  function renderPiles() {
    function fill(box, list, side) {
      clear(box);
      /* gruix proporcional al prestatge; si la pila és alta es comprimeix per mantenir-la dins d'un alt màxim i que hi càpiguen tots */
      var th = list.map(function (it) { return bookWidth(it.p.team) * 0.31; });
      /* factor de compressió constant per a tota la llista: un llibre no canvia de gruix en passar d'una pila a l'altra */
      var all = order.map(function (q) { return bookWidth(q.team) * 0.31 + 1; }), avg = all.reduce(function (a, v) { return a + v; }, 0) / Math.max(1, all.length);
      var k = Math.min(1, (narrow() ? 99 : 128) / Math.max(1, Math.max(1, order.length - 1) * avg));
      var rb = Math.max(2, Math.min(8, Math.min.apply(null, order.map(function (q) { return Math.max(4, Math.round(bookWidth(q.team) * 0.31 * k)); })) - 2));   /* el llibre més prim de tots fixa la mida de la marca per a tots */
      list.forEach(function (it, ix) {
        var p = it.p, b = el("button", "pb"); b.type = "button";
        b.style.background = irrel[p.id] ? "#a3a5aa" : (p.level === "Grau" ? "#8c2a42" : "#2154c5");   /* no rellevant (amb filtre): gris */
        b.style.width = (p.level === "Grau" ? 79 : 92) + "px";   /* llargada proporcional a l'alçada al prestatge (256/296) */
        var hh = Math.max(4, Math.round(th[ix] * k)); b.style.height = hh + "px"; b.style.setProperty("--rb", rb + "px");   /* gruix proporcional al llom del prestatge */
        var ok = side + p.id, ox = side === "l" ? "r" + p.id : "l" + p.id; delete pileOff[ox]; if (pileOff[ok] === undefined) pileOff[ok] = Math.round(Math.random() * 9);   /* el desordre es manté; només es sorteja de nou el llibre que canvia de pila */
        b.style[side === "l" ? "marginRight" : "marginLeft"] = pileOff[ok] + "px";   /* desapilat aleatori dins d'uns marges, nou a cada canvi de llibre */
        if (seen[p.id]) b.classList.add("seen");   /* marca groga: ja l'has obert */
        b.title = T(p.title); b.setAttribute("aria-label", T(p.title));
        b.addEventListener("click", function () { turn(it.i - idx); });
        box.appendChild(b);
      });
    }
    var L = [], R = [];
    order.forEach(function (p, i) { if (i < idx) L.push({ p: p, i: i }); else if (i > idx) R.push({ p: p, i: i }); });
    fill($("pile-l"), L, "l");     /* més pròxim a dalt: s'ordena per CSS (column-reverse) */
    fill($("pile-r"), R, "r");
  }
  function narrow() { return window.matchMedia && window.matchMedia("(max-width: 700px), (orientation: landscape) and (max-height: 520px)").matches; }
  function playOpen() {
    if (narrow()) return;
    bookEl.classList.remove("closing", "mir", "ns", "shut"); void bookEl.offsetWidth; bookEl.classList.add("opening");
    setTimeout(function () { bookEl.classList.remove("opening"); }, 700);
  }
  /* si el text no hi cap, l'encongeix una mica perquè no calgui lliscar */
  function fitPages() {
    ["page-left", "page-right"].forEach(function (id) {
      var pg = $(id), kids = Array.prototype.slice.call(pg.children), z = 1;
      kids.forEach(function (k) { k.style.zoom = ""; });
      while (pg.scrollHeight > pg.clientHeight + 1 && z > 0.5) { z -= 0.02; kids.forEach(function (k) { k.style.zoom = z; }); }
    });
  }
  var featMode = false;
  function openBook(id, solo) {
    warmDeck(byId(id));
    order = current.length ? current.slice() : visible.slice();
    featMode = solo === "feat";   /* des dels destacats d'Inici: es navega només entre els destacats */
    if (featMode) order = (D.person.featured || []).map(function (f) { return byId(f.id); }).filter(function (q) { return q && !q.hidden; });
    var single = !featMode && (viewMode === "list" || !!solo);   /* des de la llista: només aquest llibre, sense piles ni fletxes */
    if (single && byId(id)) order = [byId(id)];
    bookDlg.classList.toggle("single", single); bookDlg.classList.toggle("solo", !!solo && !featMode);
    idx = Math.max(0, order.map(function (p) { return p.id; }).indexOf(id));
    if (order[idx].id !== id) { var p0 = byId(id); if (p0) { order.unshift(p0); idx = 0; } }
    fillBook(order[idx]);
    markSeen();
    var wasOpen = bookDlg.open;
    if (!wasOpen) { if (bookDlg.showModal) bookDlg.showModal(); else bookDlg.setAttribute("open", ""); }
    bookDlg.scrollTop = 0;
    fitPages(); centerBook(); setTimeout(function () { fitPages(); centerBook(); bookDlg.scrollTop = 0; }, 150); setTimeout(fitPages, 700);
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!wasOpen && !reduce) playOpen();
  }
  function alignTo(g) {                          /* el llibre nou queda centrat amb el centre de l'antic */
    if (narrow()) return;
    var cur = parseFloat(bookEl.style.top) || 0, st = bookEl.offsetTop - cur;
    bookEl.style.top = Math.round(g.offsetTop + g.offsetHeight / 2 - bookEl.offsetHeight / 2 - st) + "px";
  }
  function cloneGhost() {                        /* còpia estàtica del llibre tancat actual */
    var g = bookEl.cloneNode(true);
    g.querySelectorAll("[id]").forEach(function (e) { e.removeAttribute("id"); });
    g.removeAttribute("id"); g.setAttribute("aria-hidden", "true");
    g.querySelectorAll("video").forEach(function (v) { v.pause(); });
    g.className = bookEl.className.replace(/\b(opening|closing|ns|shut|shut-in)\b/g, "") + " book-ghost shut";
    g.style.cssText += ";animation:none;position:absolute;margin:0;pointer-events:none;left:" + bookEl.offsetLeft + "px;top:" + bookEl.offsetTop + "px;width:" + bookEl.offsetWidth + "px;height:" + bookEl.offsetHeight + "px";
    return g;
  }
  function reopenGhost(g) {                      /* clic al llibre antic: torna a ser el llibre actual i s'obre */
    if (turning || !bookEl.classList.contains("shut")) return;
    var cur = cloneGhost(); cur.classList.add("keep"); bookEl.parentNode.insertBefore(cur, bookEl);   /* la portada actual s'esvaeix */
    var gm = g.classList.contains("mir"), oi = parseInt(g.dataset.i, 10);
    if (g.parentNode) g.parentNode.removeChild(g);
    idx = oi; fillBook(order[idx]);
    var oh2 = cur.offsetHeight, nh2 = bookEl.offsetHeight; bookEl.style.marginBottom = oh2 > nh2 ? (oh2 - nh2) + "px" : ""; alignTo(cur);
    bookEl.classList.remove("mir", "shut-in", "opening", "closing", "ns"); bookEl.classList.add("shut"); if (gm) bookEl.classList.add("mir");
    openShut();
  }
  function fadeGhosts() {
    document.querySelectorAll(".book-ghost.keep").forEach(function (g) { g.classList.remove("keep"); g.style.transition = "opacity .4s"; g.style.opacity = "0"; setTimeout(function () { if (g.parentNode) g.parentNode.removeChild(g); }, 450); });
  }
  function turn(dir) {
    var n = idx + dir;
    if (turning || n < 0 || n >= order.length) return;
    var vids = bookEl.querySelectorAll("video"); vids.forEach(function (v) { v.pause(); });
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || narrow()) { idx = n; markSeen(); fillBook(order[idx]); return; }
    turning = true;
    var wasShut = bookEl.classList.contains("shut"), closeMir = dir > 0;                         /* següent: es tanca cap a l'esquerra */
    var shutMir = dir < 0;                                                                       /* fletxa dreta: portada a la dreta; fletxa esquerra: contraportada a l'esquerra (sempre, també amb fletxes seguides) */
    function showCover() {                       /* surt la portada del llibre nou, amb una transició suau */
      var oldMir = wasShut ? bookEl.classList.contains("mir") : closeMir;
      var ghost = bookEl.cloneNode(true);        /* còpia del llibre antic, tancat, que s'esvaeix */
      ghost.querySelectorAll("[id]").forEach(function (e) { e.removeAttribute("id"); });
      ghost.removeAttribute("id"); ghost.setAttribute("aria-hidden", "true");
      ghost.querySelectorAll("video").forEach(function (v) { v.pause(); });
      ghost.className = bookEl.className.replace(/\b(opening|closing|mir|ns|shut|shut-in)\b/g, "") + " book-ghost shut" + (oldMir ? " mir" : "");
      ghost.style.cssText += ";animation:none;position:absolute;margin:0;pointer-events:none;left:" + bookEl.offsetLeft + "px;top:" + bookEl.offsetTop + "px;width:" + bookEl.offsetWidth + "px;height:" + bookEl.offsetHeight + "px";
      bookEl.parentNode.insertBefore(ghost, bookEl);
      idx = n; fillBook(order[idx]);
      var oh = ghost.offsetHeight, nh = bookEl.offsetHeight; bookEl.style.marginBottom = oh > nh ? (oh - nh) + "px" : ""; alignTo(ghost);   /* si el llibre antic és més alt, reserva el seu espai perquè no tapi les fletxes */
      bookEl.style.transition = ""; bookEl.style.translate = "";   /* el fantasma (que ja porta el desplaçament de 12 px) agafa el relleu: no hi ha salt */
      bookEl.classList.remove("opening", "closing", "mir", "ns", "shut-in"); bookEl.style.animation = "";
      bookEl.classList.add("shut"); if (shutMir) bookEl.classList.add("mir"); void bookEl.offsetWidth; bookEl.classList.add("shut-in");
      if (wasShut) { fadeGhosts(); requestAnimationFrame(function () { ghost.style.transition = "opacity .5s"; ghost.style.opacity = "0"; }); }
      else {
        fadeGhosts(); ghost.classList.add("keep"); ghost.dataset.i = String(n - dir); ghost.style.pointerEvents = "auto";
        /* el fantasma ocupa tota l'àrea del llibre: només la seva meitat visible reobre l'antic; l'altra meitat és la portada nova */
        var onOld = function (e) { var r = ghost.getBoundingClientRect(); return (e.clientX < r.left + r.width / 2) === oldMir; };
        ghost.addEventListener("mousemove", function (e) { ghost.style.cursor = "pointer"; });
        ghost.addEventListener("click", function (e) { if (onOld(e)) reopenGhost(ghost); else openShut(); });   /* clic al llibre tancat = torna a aquest */
      }
      setTimeout(function () { if (!ghost.classList.contains("keep") && ghost.parentNode) ghost.parentNode.removeChild(ghost); bookEl.classList.remove("shut-in"); turning = false; }, 560);
    }
    if (bookEl.classList.contains("shut")) { showCover(); return; }
    bookEl.classList.remove("opening", "mir", "shut-in"); bookEl.classList.add("ns"); if (closeMir) bookEl.classList.add("mir"); bookEl.style.animation = "none"; void bookEl.offsetWidth; bookEl.classList.add("closing");
    bookEl.style.transition = "translate .6s ease-in-out"; bookEl.style.translate = (closeMir ? "-12px" : "12px") + " 0";   /* el llibre tancat ja es separa 12 px durant el tancament (si no, saltava en acabar) */
    setTimeout(showCover, 620);                  /* es tanca i després surt la portada del següent */
  }
  function openShut() {                          /* clic a la portada: s'obre el llibre */
    if (turning || !bookEl.classList.contains("shut")) return;
    turning = true;
    markSeen();     fadeGhosts(); bookEl.style.marginBottom = ""; bookEl.classList.remove("shut", "shut-in"); bookEl.classList.add("ns"); bookEl.style.animation = "none"; void bookEl.offsetWidth; bookEl.classList.add("opening");
    setTimeout(function () { bookEl.classList.remove("opening", "ns", "mir"); bookEl.style.animation = ""; turning = false; }, 700);
  }
  bookEl.addEventListener("click", openShut);
  /* clic a la figura de la pàgina: s'amplia (clic al fons, × o Esc per tancar).
     Si el projecte té imgFlow, l'ampliació és un GRAFCET interactiu: prem el semàfor dels vianants i els quadres s'il·luminen com els semàfors. */
  var zoomEl = null, zoomTimers = [], SVGNS = "http://www.w3.org/2000/svg";
  function closeZoom() { if (dashStop) { dashStop(); dashStop = null; } zoomTimers.forEach(clearTimeout); zoomTimers = []; if (zoomEl && zoomEl.parentNode) zoomEl.parentNode.removeChild(zoomEl); zoomEl = null; }
  function sv(tag, attrs, parent, text) { var n = document.createElementNS(SVGNS, tag); for (var k in attrs) n.setAttribute(k, attrs[k]); if (text != null) n.textContent = text; if (parent) parent.appendChild(n); return n; }
  /* GRAFCET dibuixat en SVG (genèric d'un semàfor o sistema complet de tres). Les etiquetes es tradueixen segons l'idioma. */
  var GW = { ca: { g: "Verd", a: "Àmbar", r: "Vermell" }, es: { g: "Verde", a: "Ámbar", r: "Rojo" }, en: { g: "Green", a: "Amber", r: "Red" } };
  function buildGrafcet(full, cls) {
    var W = GW[lang] || GW.ca, VB = full ? "0 0 900 900" : "0 0 320 900";
    var s = sv("svg", { viewBox: VB, "class": cls || "gx" }), boxes = {};
    var defs = sv("defs", {}, s), mk = sv("marker", { id: "gxa", viewBox: "0 0 10 10", refX: "8", refY: "5", markerWidth: "7", markerHeight: "7", orient: "auto" }, defs);
    sv("path", { d: "M0 0L10 5L0 10z", fill: "#111" }, mk);
    var gr = sv("linearGradient", { id: "gx01", x1: "0", x2: "1", y1: "0", y2: "0" }, defs);
    sv("stop", { offset: "50%", "stop-color": "#5fcf80" }, gr); sv("stop", { offset: "50%", "stop-color": "#ef6b6b" }, gr);
    function line(x1, y1, x2, y2) { sv("line", { x1: x1, y1: y1, x2: x2, y2: y2, "class": "gx-l" }, s); }
    function bar(x1, x2, y) { line(x1, y, x2, y); line(x1, y + 3, x2, y + 3); }
    function step(id, x, y, init) {
      if (init) sv("rect", { x: x - 4, y: y - 4, width: 48, height: 48, "class": "gx-s2" }, s);
      boxes[id] = sv("rect", { x: x, y: y, width: 40, height: 40, "class": "gx-s" }, s);
      sv("text", { x: x + 20, y: y + 25, "class": "gx-n", "text-anchor": "middle" }, s, id);
    }
    function out(sx, sy, w, lines) {
      var h = lines.length > 1 ? 36 : 22, oy = sy + 20 - h / 2;
      line(sx + 40, sy + 20, sx + 49, sy + 20);
      sv("rect", { x: sx + 49, y: oy, width: w, height: h, "class": "gx-o" }, s);
      lines.forEach(function (t, i) { sv("text", { x: sx + 49 + w / 2, y: oy + 15 + i * 14, "class": "gx-t", "text-anchor": "middle" }, s, t); });
    }
    function tr(x, y, label, lx) { line(x - 9, y, x + 9, y); sv("text", { x: lx || x + 14, y: y + 4, "class": "gx-t" }, s, label); }
    function cond(x, y, parts) {                   /* condició amb 101/102 negats (barra a sobre) */
      line(x - 9, y, x + 9, y);
      var t = sv("text", { x: x + 14, y: y + 4, "class": "gx-t" }, s);
      parts.forEach(function (p) { var ts = sv("tspan", {}, t, p.t); if (p.o) ts.setAttribute("text-decoration", "overline"); });
    }
    /* una columna = un semàfor. n = número de semàfor (en ids i sortides); c = centre x; steps = [inici, cotxes verd, àmbar, vianants verd, intermitent, vermell vianants, vermell cotxes] */
    function column(c, n, st, T, xaux) {
      var xl = c - 77, xr = c + 63, sd = full ? "SD" + n : "SDx", sc = full ? "SC" + n : "SCx";
      step(st[0], c - 20, 50, true); out(c - 20, 50, 74, [sd + " " + W.g, sc + " " + W.r]);
      bar(c - 100, c + 93, 138);
      line(xl, 141, xl, 165); step(st[1], xl - 20, 165); out(xl - 20, 165, 70, [sd + " " + W.g]);
      line(xl, 205, xl, 262); tr(xl, 235, T[0], xl + 10);
      step(st[2], xl - 20, 262); out(xl - 20, 262, 70, [sd + " " + W.a]); line(xl, 302, xl, 316);
      line(xr, 141, xr, 165); step(st[5], xr - 20, 165); out(xr - 20, 165, 74, [sc + " " + W.r]); line(xr, 205, xr, 316);
      bar(c - 100, c + 93, 316);
      line(c, 319, c, 366); tr(c, 347, T[1]);
      bar(c - 100, c + 93, 366);
      line(xl, 369, xl, 398); step(st[3], xl - 20, 398); out(xl - 20, 398, 70, [sc + " " + W.g]);
      line(xl, 438, xl, 495); tr(xl, 468, T[2], xl + 10);
      step(st[4], xl - 20, 495); out(xl - 20, 495, 70, [sc + " " + W.g]);
      sv("text", { x: c + 5, y: 490, "class": "gx-t", "text-anchor": "middle" }, s, xaux[0]); line(c + 5, 494, c + 5, 504);
      line(xl, 535, xl, 548);
      line(xr, 369, xr, 398); step(st[6], xr - 20, 398); out(xr - 20, 398, 74, [sd + " " + W.r]); line(xr, 438, xr, 548);
      bar(c - 100, c + 93, 548);
      line(c, 551, c, 598); tr(c, 577, T[3], c + 10);
      /* GRAFCET auxiliar de la intermitència */
      var ax = c + 2;
      step(xaux[1], ax - 20, 710, true); line(ax, 750, ax, 815); tr(ax, 785, xaux[3], ax + 10);
      step(xaux[2], ax - 20, 815); tr(ax, 872, xaux[4], ax + 10);
      sv("polyline", { points: ax + ",855 " + ax + ",885 " + (ax - 59) + ",885 " + (ax - 59) + ",692 " + (ax - 2) + ",692 " + (ax - 2) + ",704", "class": "gx-l", fill: "none", "marker-end": "url(#gxa)" }, s);
    }
    if (!full) {
      column(145, 1, ["01", "1", "2", "3", "4", "101", "102"], ["T0/x1", "T1/x2", "T2/x3", "T3/x4"], ["x121", "120", "121", "T4/x120", "T5/x121"]);
      line(145, 90, 145, 138); tr(145, 120, "Cx");
      sv("polyline", { points: "145,598 145,626 8,626 8,36 143,36 143,46", "class": "gx-l", fill: "none", "marker-end": "url(#gxa)" }, s);
    } else {
      column(145, 1, ["01", "1", "2", "3", "4", "101", "102"], ["T0/x1", "T1/x2", "T2/x3", "T3/x4"], ["x121", "120", "121", "T4/x120", "T5/x121"]);
      column(425, 2, ["02", "5", "6", "7", "8", "201", "202"], ["T7/x5", "T8/x6", "T9/x7", "T10/x8"], ["x221", "220", "221", "T11/x220", "T12/x221"]);
      column(705, 3, ["03", "9", "10", "11", "12", "301", "302"], ["T13/x9", "T14/x10", "T15/x11", "T16/x12"], ["x321", "320", "321", "T17/x320", "T18/x321"]);
      [145, 425, 705].forEach(function (c) { line(c, 90, c, 138); line(c, 28, c, 50); });
      line(145, 28, 705, 28);
      line(145, 598, 705, 598);
      cond(145, 120, [{ t: "C1 + C2 + C3" }]);
      cond(425, 120, [{ t: "(C2 + C3) * (" }, { t: "101", o: 1 }, { t: " ∩ " }, { t: "102", o: 1 }, { t: ")" }]);
      cond(705, 120, [{ t: "C3 * (" }, { t: "101", o: 1 }, { t: " ∩ " }, { t: "102", o: 1 }, { t: ") * (" }, { t: "201", o: 1 }, { t: " ∩ " }, { t: "202", o: 1 }, { t: ")" }]);
      sv("polyline", { points: "425,598 425,626 8,626 8,16 423,16 423,28", "class": "gx-l", fill: "none", "marker-end": "url(#gxa)" }, s);
    }
    return { svg: s, boxes: boxes };
  }
  /* ============ SIMULACIÓ INTERACTIVA DEL QUADRE DE COMANDAMENT (projecte IIoT) ============
     Dades sintètiques amb valors semblants als del projecte (mateix to i estructura que el Grafana real).
     Clic: el temps avança i els gràfics s'omplen; també es pot pausar, reiniciar o moure amb el lliscador. */
  var DASH = {
    ca: { t1: "PC1 en el temps", t2: "PC2 en el temps", pct: "Estat de la màquina (%)", st: "Estat de la màquina", pc: "PC1 vs PC2", avg: "Estat mitjà de la màquina", ok: "Sa", bad: "Fallada de coixinet", known: "Dades conegudes", unk: "Dades desconegudes", state: "Estat", hint: "Clica per simular el pas del temps", again: "Torna-ho a veure", play: "Reprodueix", pause: "Pausa", restart: "Torna a l’inici i neteja el gràfic", clr: "Neteja", speed: "Velocitat", note: "Dades reals del projecte (15/10/2026, 16:13–22:04), reproduïdes sobre la marxa.", cta: "Prova el quadre de comandament", live: "Pas a pas", liveC: "Veure com es classifica", liveT: "Mostra pas a pas com es classifica cada mesura", stop: "Atura", zin: "Zoom", zout: "Tot", zinT: "Amplia el gràfic: mostra només els últims minuts i les dades es mouen amb el temps", zoutT: "Mostra tot l’interval", mn: "min", tip: "" },
    es: { t1: "PC1 en el tiempo", t2: "PC2 en el tiempo", pct: "Estado de la máquina (%)", st: "Estado de la máquina", pc: "PC1 vs PC2", avg: "Estado medio de la máquina", ok: "Sano", bad: "Fallo de rodamiento", known: "Datos conocidos", unk: "Datos desconocidos", state: "Estado", hint: "Pulsa para simular el paso del tiempo", again: "Volver a verlo", play: "Reproducir", pause: "Pausa", restart: "Vuelve al inicio y limpia el gráfico", clr: "Limpiar", speed: "Velocidad", note: "Datos reales del proyecto (15/10/2026, 16:13–22:04), reproducidos sobre la marcha.", cta: "Prueba el cuadro de mando", live: "Paso a paso", liveC: "Ver cómo se clasifica", liveT: "Muestra paso a paso cómo se clasifica cada medida", stop: "Parar", zin: "Zoom", zout: "Todo", zinT: "Amplía el gráfico: muestra solo los últimos minutos y los datos se mueven con el tiempo", zoutT: "Muestra todo el intervalo", mn: "min", tip: "Prueba «● En directo»: verás cómo cada medida recorre el esquema y aparece en el gráfico." },
    en: { t1: "PC1 over time", t2: "PC2 over time", pct: "State of the machine (%)", st: "State of the machine", pc: "PC1 vs PC2", avg: "Average machine state", ok: "Healthy", bad: "Bearing failure", known: "Known data", unk: "Unknown data", state: "State", hint: "Click to simulate time passing", again: "Watch again", play: "Play", pause: "Pause", restart: "Back to the start and clear the chart", clr: "Clear", speed: "Speed", note: "Real project data (15/10/2026, 16:13–22:04), replayed on the fly.", cta: "Try the dashboard", live: "Step by step", liveC: "See how it is classified", liveT: "Shows step by step how each measurement is classified", stop: "Stop", zin: "Zoom", zout: "All", zinT: "Zoom in: shows only the last few minutes and the data moves with time", zoutT: "Show the whole range", mn: "min", tip: "Try “● Live”: watch each measurement travel the diagram and appear on the chart." }
  };
  var dashStop = null;
  function dashReal() {                                            /* dades REALES de la base de dades InfluxDB (15/10/2026, 16:13–22:04 hora local) */
    var R = window.IIOT_REAL, N = 1404, d = { N: N, TOT: R.tot, real: 1, s1: [], s2: [], p: [], px: [], py: [], st: [], kb: R.kb, kx: R.kx, ky: R.ky, pok: R.kp, ub: R.ub, ux: R.ux, uy: R.uy }, i, j;
    var sx = [], sy = [], c = [], ps = [], pn = [], lx = [], ly = [], kc = []; d.kd = [];
    for (i = 0; i < N; i++) { kc.push(0); sx.push(0); sy.push(0); c.push(0); ps.push(0); pn.push(0); lx.push(NaN); ly.push(NaN); }
    for (j = 0; j < R.kb.length; j++) { i = R.kb[j]; if (i >= N) continue; sx[i] += R.kx[j]; sy[i] += R.ky[j]; c[i]++; kc[i]++; ps[i] += R.kp[j]; pn[i]++; lx[i] = R.kx[j]; ly[i] = R.ky[j]; }
    for (j = 0; j < R.ub.length; j++) { i = R.ub[j]; if (i >= N) continue; sx[i] += R.ux[j]; sy[i] += R.uy[j]; c[i]++; lx[i] = R.ux[j]; ly[i] = R.uy[j]; }
    for (i = 0; i < N; i++) {
      var p = pn[i] ? ps[i] / pn[i] / 100 : NaN;
      d.s1.push(c[i] ? sx[i] / c[i] : NaN); d.s2.push(c[i] ? sy[i] / c[i] : NaN); d.p.push(p); d.px.push(lx[i]); d.py.push(ly[i]);
      d.st.push(pn[i] ? (p >= 0.5 ? 1 : 0) : -1); d.kd.push(c[i] && kc[i] * 2 >= c[i] ? 1 : 0);
    }
    return d;
  }
  function dashData() {
    if (dashData.c) return dashData.c;
    if (window.IIOT_REAL) { dashData.c = dashReal(); return dashData.c; }
    var seed = 20261015;
    function rnd() { seed |= 0; seed = seed + 0x6D2B79F5 | 0; var t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }
    function nrm() { return Math.sqrt(-2 * Math.log(1 - rnd())) * Math.cos(2 * Math.PI * rnd()); }
    function cl(v, a, b) { return v < a ? a : v > b ? b : v; }
    function pt(bad) {                                              /* punt PC1-PC2: correcte = dins/al voltant del núvol blau; fallada = es desplaça cap a la dreta */
      var x, y, r = rnd();
      if (!bad) { x = 3.15 + 0.45 * nrm(); y = -0.07 + 0.09 * nrm(); return [cl(x, 2.5, 5), cl(y, -0.35, 0.25)]; }
      if (r < 0.6) { x = 3.5 + 0.5 * Math.abs(nrm()) + 0.3 * nrm(); y = -0.07 + 0.1 * nrm(); }
      else { do { x = 3.8 + -Math.log(1 - rnd()) * 0.85; } while (x > 7.7); y = -0.08 + 0.11 * nrm() * (0.8 + 0.3 * (x - 3.5)); }
      return [cl(x, 2.5, 7.7), cl(y, -0.43, 0.29)];
    }
    var N = 1404, TOT = 351, d = { N: N, TOT: TOT, s1: [], s2: [], p: [], px: [], py: [], st: [], kx: [], ky: [], ex: [], ey: [], ei: [] }, pl = 0.05, i, m, k, bad, s1, s2, tgt, x, y;
    for (i = 0; i < N; i++) {
      m = i * TOT / N; k = m < 80 ? 0 : m < 89 ? 1 : m < 188 ? 2 : m < 287 ? 3 : 4;   /* 0 fallada, 1 sense dades, 2 correcte, 3 fallada, 4 correcte */
      if (k === 1) { d.s1.push(NaN); d.s2.push(NaN); d.p.push(NaN); d.px.push(NaN); d.py.push(NaN); d.st.push(-1); continue; }
      bad = k === 0 || k === 3;
      if (k === 0) s1 = 4.8 + 1.0 * nrm();
      else if (k === 3) s1 = rnd() < 0.12 ? 2.8 + 0.15 * nrm() : 4.4 + 0.85 * nrm();
      else s1 = 2.8 + 0.13 * nrm() + (rnd() < 0.01 ? 0.8 * rnd() : 0);
      s2 = (bad ? 0.11 : 0.085) * nrm() + (rnd() < 0.012 ? (rnd() - 0.5) * 0.5 : 0);
      tgt = bad ? cl(0.04 + 0.05 * Math.abs(nrm()) + (k === 3 && rnd() < 0.06 ? 0.15 : 0), 0, 0.35) : cl(0.78 + 0.07 * nrm(), 0.55, 0.95);
      pl = 0.6 * pl + 0.4 * tgt;
      var q = pt(bad), j; x = q[0]; y = q[1];
      d.s1.push(cl(s1, 2.3, 8.2)); d.s2.push(cl(s2, -0.43, 0.27)); d.p.push(pl); d.px.push(x); d.py.push(y); d.st.push(bad ? 0 : 1);
      for (j = 0; j < 2; j++) { q = pt(bad); d.ex.push(q[0]); d.ey.push(q[1]); d.ei.push(i); }   /* punts addicionals perquè el núvol sigui dens com el real */
    }
    for (i = 0; i < 2600; i++) { do { x = 3.5 + 0.4 * nrm(); y = -0.05 + 0.065 * nrm(); } while (Math.pow((x - 3.5) / 0.85, 2) + Math.pow((y + 0.05) / 0.19, 2) > 1); d.kx.push(x); d.ky.push(y); }
    dashData.c = d; return d;
  }
  function dashBuild(ex) {
    var D = dashData(), W = DASH[lang] || DASH.ca, N = D.N, TOT = D.TOT, D0 = 16 * 60 + 13.6;
    var B0 = D.real ? Math.min(D.kb[0], D.ub[0]) : 0;                /* primer tram amb dades: la vista comença aquí, sense marge buit */
    var root = el("div", "dash"), bar = el("div", "dash-bar"), grid = el("div", "dash-grid");
    root.addEventListener("click", function (ev) { ev.stopPropagation(); });
    function panel(cls, title) { var p = el("div", "dp " + cls), c = el("canvas"); p.appendChild(c); if (title) p.appendChild(el("h5", null, title)); return { p: p, c: c }; }
    var pa = panel("dp-a", W.t1), pb = panel("dp-b", W.t2), pc = panel("dp-c", W.pct), pd = panel("dp-d", W.st), pe = panel("dp-e", W.pc);
    var colL = el("div", "dash-col"), colR = el("div", "dash-col");
    colL.appendChild(pc.p); colL.appendChild(pd.p);
    var tiles = el("div", "dp-tiles"), tOk = el("div", "tile ok"), tBad = el("div", "tile bad"), vOk = el("b", null, "–"), vBad = el("b", null, "–");
    tOk.appendChild(el("span", null, W.ok)); tOk.appendChild(vOk); tBad.appendChild(el("span", null, W.bad)); tBad.appendChild(vBad);
    tiles.appendChild(tOk); tiles.appendChild(tBad);
    colR.appendChild(pe.p); colR.appendChild(el("div", "dp-avgt", W.avg)); colR.appendChild(tiles);
    grid.appendChild(pa.p); grid.appendChild(pb.p); grid.appendChild(colL); grid.appendChild(colR);
    /* barra de control */
    var bPlay = el("button", "dash-btn dash-play", "▶ " + W.play), bRe = el("button", "dash-btn dash-clr", W.clr), rng = el("input"), clk = el("span", "dash-clk", "16:13:36"), spd = el("select", "dash-spd");
    bPlay.type = "button"; bRe.type = "button"; bRe.insertAdjacentHTML("afterbegin", '<svg class="clr-ic" viewBox="64 15 600 620" width="17" height="18" aria-hidden="true"><g fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round"><path d="M484 206 L568 44 Q578 28 596 32 Q622 42 612 66 L548 230 Z" stroke-width="30"/><path transform="translate(362 266) rotate(23.8)" d="M0 0 L238 0 C238 -38 226 -72 176 -72 L62 -72 C28 -72 -4 -38 0 0 Z" stroke-width="22"/><path d="M366 316 C322 392 240 430 118 434 C166 520 292 586 448 606 C482 552 520 470 546 396" fill="none" stroke-width="68" stroke-linecap="butt"/><path d="M318 470 Q300 520 262 552 L236 526 Q290 506 318 470 Z" stroke-width="22"/></g></svg>'); bRe.title = W.restart; bRe.setAttribute("aria-label", W.restart);
    rng.type = "range"; rng.min = B0; rng.max = N; rng.step = 1; rng.value = 0; rng.className = "dash-rng"; rng.setAttribute("aria-label", "t");
    spd.setAttribute("aria-label", W.speed); [1, 2, 4, 8].forEach(function (v) { var o = el("option", null, "×" + v); o.value = v; spd.appendChild(o); }); spd.value = 2;
    var bLive = el("button", "dash-btn dash-live", "▶ " + W.live); bLive.type = "button"; bLive.title = W.liveT; bLive.setAttribute("aria-label", W.liveT);
    var zsel = el("select", "dash-spd dash-zsel"), ZS = [0, 120, 60, 30, 15, 6];                       /* zoom en llista: Tot + finestres de minuts */
    zsel.title = W.zinT; zsel.setAttribute("aria-label", W.zinT);
    ZS.forEach(function (m) { var o = el("option", null, m ? m + " " + W.mn : W.zout); o.value = m; zsel.appendChild(o); });
    zsel.addEventListener("change", function () { var m = +zsel.value; zW = m ? m * N / TOT : 0; draw(); });
    var zwrap = el("label", "dash-zwrap"), zic = el("span", "zi"); zic.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-linecap="round" aria-hidden="true"><circle cx="10" cy="10" r="6.3" stroke-width="2.6"/><path d="M14.8 14.8L21 21" stroke-width="3"/></svg>'; zwrap.title = W.zinT; zwrap.appendChild(zic); zwrap.appendChild(el("span", null, W.zin)); zwrap.appendChild(zsel);
    var bLive2 = null, fig = ex && ex.querySelector(".dex-fig");
    if (fig) { bLive2 = el("button", "dash-btn dash-live dex-live", "▶ " + W.liveC); bLive2.type = "button"; bLive2.title = W.liveT; fig.parentNode.insertBefore(bLive2, fig.nextSibling); bLive2.addEventListener("click", function () { bLive.click(); }); }
    bar.appendChild(bPlay); bar.appendChild(bRe); bar.appendChild(bLive); bar.appendChild(zwrap); bar.appendChild(rng); bar.appendChild(clk); bar.appendChild(spd);
    var ov = el("button", "dash-ov"), ovi = el("span", "dash-ovi", "▶"), ovt = el("span", "dash-ovt", W.hint); ov.type = "button"; ov.appendChild(ovi); ov.appendChild(ovt);
    root.appendChild(bar); root.appendChild(grid); root.appendChild(el("p", "dash-note", W.note)); root.appendChild(ov);

    function ctxOf(c) {
      var r = c.getBoundingClientRect(), dpr = window.devicePixelRatio || 1, w = Math.max(1, Math.round(r.width)), h = Math.max(1, Math.round(r.height));
      if (c.width !== Math.round(w * dpr) || c.height !== Math.round(h * dpr)) { c.width = Math.round(w * dpr); c.height = Math.round(h * dpr); }
      var x = c.getContext("2d"); x.setTransform(dpr, 0, 0, dpr, 0, 0); x.clearRect(0, 0, w, h);
      return { x: x, w: w, h: h };
    }
    function hm(min) { var h = Math.floor(min / 60), m = Math.round(min % 60); return h + ":" + (m < 10 ? "0" : "") + m; }
    function axes(g, ml, mt, mr, mb, y0, y1, yt, fmt, xt, vt) {
      var x = g.x, pw = g.w - ml - mr, ph = g.h - mt - mb;
      x.font = "10px system-ui, sans-serif"; x.fillStyle = "#9aa3af"; x.strokeStyle = "rgba(255,255,255,.08)"; x.lineWidth = 1;
      x.textAlign = "right"; x.textBaseline = "middle";
      (yt || []).forEach(function (v) { var y = Math.round(mt + ph * (1 - (v - y0) / (y1 - y0))) + .5; x.beginPath(); x.moveTo(ml, y); x.lineTo(ml + pw, y); x.stroke(); x.fillText(fmt ? fmt(v) : String(v), ml - 5, y); });
      if (xt) {
        x.textAlign = "center"; x.textBaseline = "top";
        var spanM = (V1 - V0) * TOT / N, stp = spanM > 150 ? 30 : spanM > 70 ? 15 : spanM > 35 ? 10 : spanM > 15 ? 5 : 2, t0 = D0 + V0 * TOT / N, t1 = D0 + V1 * TOT / N;
        [2, 5, 10, 15, 30, 60, 120, 240].forEach(function (s) { if (s > stp && (t1 - t0) / stp > pw / 44) stp = s; });   /* mòbil: com a màxim una etiqueta cada ~44 px, perquè no se superposin */
        for (var tm = Math.ceil(t0 / stp) * stp; tm <= t1; tm += stp) { var xp = Math.round(ml + pw * (tm - t0) / (t1 - t0)) + .5; if (vt) { x.beginPath(); x.moveTo(xp, mt); x.lineTo(xp, mt + ph); x.stroke(); } x.fillText(hm(tm), xp, mt + ph + 4); }
      }
      return { ml: ml, mt: mt, pw: pw, ph: ph };
    }
    var V0 = B0, V1 = N, zW = 0;
    function zf() { return zW > 0 ? Math.pow(zW / N, 0.75) : 1; }          /* amb zoom, la reproducció va més a poc a poc perquè es vegi bé */                                  /* vista de temps: tros de la sèrie que es veu (zW = 0: tot) */
    function px(a, i) { return a.ml + a.pw * (i - V0) / (V1 - V0); }
    function playhead(g, a, n) { var X = Math.round(px(a, n)) + .5; g.x.strokeStyle = "rgba(255,255,255,.55)"; g.x.lineWidth = 1; g.x.setLineDash([4, 3]); g.x.beginPath(); g.x.moveTo(X, a.mt); g.x.lineTo(X, a.mt + a.ph); g.x.stroke(); g.x.setLineDash([]); }
    function series(g, a, arr, n, y0, y1, col, kd) {
      var x = g.x, pen = false, i, v, PX = 0, PY = 0;
      x.save(); x.beginPath(); x.rect(a.ml, a.mt, a.pw, a.ph); x.clip();
      x.strokeStyle = col; x.lineWidth = 1; x.beginPath();
      /* amb kd, cada tros de línia es pinta segons si la mesura és coneguda (blau) o desconeguda (taronja) */
      for (i = Math.max(0, Math.floor(V0) - 1); i < n; i++) { v = arr[i]; if (v !== v) { pen = false; continue; } var X = px(a, i), Y = a.mt + a.ph * (1 - (v - y0) / (y1 - y0)); if (pen) { if (kd) { x.stroke(); x.strokeStyle = kd[i] ? "#5794f2" : "#ff7f0e"; x.beginPath(); x.moveTo(PX, PY); } x.lineTo(X, Y); } else x.moveTo(X, Y); PX = X; PY = Y; pen = true; }
      x.stroke(); x.restore();
    }
    function legend(g, items, y) { var x = g.x, px = 40; x.font = "10px system-ui, sans-serif"; x.textAlign = "left"; x.textBaseline = "middle"; items.forEach(function (it) { x.fillStyle = it[1]; x.fillRect(px, y - 2, 10, 4); x.fillStyle = "#c7ced8"; x.fillText(it[0], px + 14, y); px += 24 + x.measureText(it[0]).width; }); }
    var n = B0, playing = false, last = 0, raf = 0, speed = 2, RATE = 130;
    var recent = [], froz = false, sk = 0, su = 0, live = false, liveS = 0, lk = -1, lu = -1, hl = null, liveT = 0;   /* mode "en directe": mesures una a una amb la bolla a l'esquema */
    function draw() {
      var cnt = Math.floor(n), g, a, i, x;
      if (zW > 0) { V1 = Math.max(B0 + zW, Math.min(N, cnt + zW * 0.12)); V0 = V1 - zW; } else { V0 = B0; V1 = N; }   /* amb zoom, la finestra segueix el temps actual */
      g = ctxOf(pa.c); a = axes(g, 34, 8, 10, 36, 2, 8.5, [2, 3, 4, 5, 6, 7, 8], null, true, true); series(g, a, D.s1, Math.min(N, cnt + 1), 2, 8.5, "#c4560a", D.kd); legend(g, [[W.known, "#5794f2"], [W.unk, "#ff7f0e"]], g.h - 8); if (cnt > 0) playhead(g, a, cnt);
      g = ctxOf(pb.c); a = axes(g, 34, 8, 10, 36, -0.45, 0.28, [-0.4, -0.2, 0, 0.2], function (v) { return v === 0 ? "0" : v.toFixed(3); }, true, true); series(g, a, D.s2, Math.min(N, cnt + 1), -0.45, 0.28, "#ffb357", D.kd); legend(g, [[W.known, "#5794f2"], [W.unk, "#ff7f0e"]], g.h - 8); if (cnt > 0) playhead(g, a, cnt);
      g = ctxOf(pc.c); a = axes(g, 34, 22, 10, 36, 0, 100, [0, 20, 40, 60, 80, 100], function (v) { return v + "%"; }, true, true); x = g.x;
      x.save(); x.beginPath(); x.rect(a.ml, a.mt, a.pw, a.ph); x.clip();
      for (i = Math.max(0, Math.floor(V0) - 1); i < cnt; i++) { var p = D.p[i]; if (p !== p) continue; var X = Math.floor(px(a, i)), w = Math.ceil(a.pw / (V1 - V0)) + 1, yg = Math.round(a.mt + a.ph * (1 - p)); x.fillStyle = "#8f1d2b"; x.fillRect(X, a.mt, w, yg - a.mt); x.fillStyle = "#2f6a2d"; x.fillRect(X, yg, w, a.mt + a.ph - yg); }
      x.restore();
      legend(g, [[W.ok, "#37a03a"], [W.bad, "#d8283f"]], g.h - 8); if (cnt > 0) playhead(g, a, cnt);
      g = ctxOf(pd.c); a = axes(g, 34, 22, 10, 36, 0, 1, [], null, true, true); x = g.x;
      x.save(); x.beginPath(); x.rect(a.ml, a.mt, a.pw, a.ph); x.clip();
      for (i = Math.max(0, Math.floor(V0) - 1); i < cnt; i++) { var s = D.st[i]; if (s < 0) continue; x.fillStyle = s ? "#2f6a2d" : "#8f1d2b"; x.fillRect(px(a, i), a.mt + 10, a.pw / (V1 - V0) + .7, a.ph - 20); }
      x.restore();
      x.fillStyle = "#9aa3af"; x.font = "10px system-ui, sans-serif"; x.textAlign = "right"; x.textBaseline = "middle"; x.fillText(W.state, 30, a.mt + a.ph / 2);
      legend(g, [[W.ok, "#37a03a"], [W.bad, "#d8283f"]], g.h - 8); if (cnt > 0) playhead(g, a, cnt);
      /* dispersió PC1-PC2 */
      g = ctxOf(pe.c); x = g.x;
      var ml = 38, mt = 24, mr = 104, mb = 34, pw = g.w - ml - mr, ph = g.h - mt - mb, X0 = 2.4, X1 = 8.05, Y0 = -0.45, Y1 = 0.3;
      function sx(v) { return ml + pw * (v - X0) / (X1 - X0); }
      function sy(v) { return mt + ph * (1 - (v - Y0) / (Y1 - Y0)); }
      x.font = "10px system-ui, sans-serif"; x.fillStyle = "#9aa3af"; x.strokeStyle = "rgba(255,255,255,.2)"; x.lineWidth = 1;
      x.textAlign = "right"; x.textBaseline = "middle";
      [-0.4, -0.3, -0.2, -0.1, 0, 0.1, 0.2].forEach(function (v) { var y = Math.round(sy(v)) + .5; x.beginPath(); x.moveTo(ml, y); x.lineTo(ml + pw, y); x.stroke(); x.fillText(v.toFixed(1), ml - 5, y); });
      x.textAlign = "center"; x.textBaseline = "top";
      [2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8].forEach(function (v) { var xx = Math.round(sx(v)) + .5; x.beginPath(); x.moveTo(xx, mt); x.lineTo(xx, mt + ph); x.stroke(); x.fillText(v.toFixed(1), xx, mt + ph + 4); });
      x.strokeRect(ml + .5, mt + .5, pw, ph);
      x.save(); x.beginPath(); x.rect(ml, mt, pw, ph); x.clip();
      x.fillStyle = "#ff7f0e"; x.beginPath();
      if (D.real) {                                                /* dades reals: desconegudes (taronja) i conegudes (blau) fins a l'instant actual */
        var lv = live || froz;                                    /* en directe: historial fins a l'inici + només els punts nous, a mesura que arriben (també en aturar-lo) */
        var nk, nu;
        x.globalAlpha = lv ? 0.6 : 0.8;                              /* punts antics semitransparents: es veu la densitat */
        for (i = 0; i < D.ub.length && (lv ? (D.ub[i] < liveS || i <= lu) : D.ub[i] < cnt); i++) { if (D.ub[i] >= V0) { x.moveTo(sx(D.ux[i]) + 1.8, sy(D.uy[i])); x.arc(sx(D.ux[i]), sy(D.uy[i]), 1.8, 0, 6.2832); } }
        nu = i; x.fill(); x.fillStyle = "#5794f2"; x.beginPath();
        for (i = 0; i < D.kb.length && (lv ? (D.kb[i] < liveS || i <= lk) : D.kb[i] < cnt); i++) { if (D.kb[i] >= V0) { x.moveTo(sx(D.kx[i]) + 1.8, sy(D.ky[i])); x.arc(sx(D.kx[i]), sy(D.ky[i]), 1.8, 0, 6.2832); } }
        nk = i; x.fill();
        if (!lv && playing) {                                      /* reproducció normal: els punts de l'últim ~0,8 s reals es veuen més grans i opacs, i s'esvaeixen amb l'edat (la finestra escala amb la velocitat) */
          var Wn = Math.max(10, RATE * speed * zf() * 0.5), c0 = cnt - Wn, s2;
          var dotAge = function (px, py, b, col) { var t = Math.max(0, Math.min(1, (cnt - b) / Wn)); x.globalAlpha = 1 - 0.7 * t; x.fillStyle = col; x.beginPath(); x.arc(sx(px), sy(py), 1.8 + 1.3 * (1 - t), 0, 6.2832); x.fill(); };
          for (s2 = nu; s2 > 0 && D.ub[s2 - 1] >= c0; s2--); for (i = s2; i < nu; i++) dotAge(D.ux[i], D.uy[i], D.ub[i], "#ff7f0e");
          for (s2 = nk; s2 > 0 && D.kb[s2 - 1] >= c0; s2--); for (i = s2; i < nk; i++) dotAge(D.kx[i], D.ky[i], D.kb[i], "#5794f2");
        }
        var rc = [], ra = nk - 1, rb = nu - 1;                     /* els 3 últims punts, del més nou al més antic */
        if (lv) rc = recent.slice();                               /* en reproducció normal van massa ràpid: sense transparències ni destacats */
        else if (false) while (rc.length < 3 && (ra >= 0 || rb >= 0)) {
          if (rb < 0 || (ra >= 0 && D.kb[ra] >= D.ub[rb])) { rc.push({ k: 1, x: D.kx[ra], y: D.ky[ra] }); ra--; } else { rc.push({ k: 0, x: D.ux[rb], y: D.uy[rb] }); rb--; }
        }
        for (var ri = rc.length - 1; ri >= 0; ri--) {              /* l'últim, opac i més gran; els dos anteriors, a mig camí */
          x.globalAlpha = [1, 0.8, 0.5][ri]; x.fillStyle = rc[ri].k ? "#5794f2" : "#ff7f0e"; x.beginPath(); x.arc(sx(rc[ri].x), sy(rc[ri].y), [5.5, 4, 3][ri], 0, 6.2832); x.fill();
        }
        x.globalAlpha = 1;
      } else {
        for (i = 0; i < cnt; i++) { if (D.px[i] !== D.px[i]) continue; x.moveTo(sx(D.px[i]) + 1.8, sy(D.py[i])); x.arc(sx(D.px[i]), sy(D.py[i]), 1.8, 0, 6.2832); }
        for (i = 0; i < D.ei.length && D.ei[i] < cnt; i++) { x.moveTo(sx(D.ex[i]) + 1.8, sy(D.ey[i])); x.arc(sx(D.ex[i]), sy(D.ey[i]), 1.8, 0, 6.2832); }
        x.fill();
        x.fillStyle = "#5794f2"; x.beginPath(); for (i = 0; i < D.kx.length; i++) { x.moveTo(sx(D.kx[i]) + 1.8, sy(D.ky[i])); x.arc(sx(D.kx[i]), sy(D.ky[i]), 1.8, 0, 6.2832); } x.fill();
      }
      if (!D.real) { for (i = cnt - 1; i >= 0 && D.px[i] !== D.px[i]; i--); if (i >= 0) { x.strokeStyle = "#fff"; x.lineWidth = 1.5; x.beginPath(); x.arc(sx(D.px[i]), sy(D.py[i]), 5, 0, 6.2832); x.stroke(); } }
      x.restore();
      x.font = "10px system-ui, sans-serif"; x.textAlign = "left"; x.textBaseline = "middle";
      x.fillStyle = "#5794f2"; x.fillText(W.known, ml + pw + 8, mt + 8); x.fillStyle = "#ff7f0e"; x.fillText(W.unk, ml + pw + 8, mt + 24);
      x.fillStyle = "#c7ced8"; x.textAlign = "center"; x.fillText("PC1", ml + pw / 2, g.h - 7);
      x.save(); x.translate(10, mt + ph / 2); x.rotate(-Math.PI / 2); x.fillText("PC2", 0, 0); x.restore();
      /* percentatges i rellotge */
      var sum = 0, c2 = 0; for (i = Math.max(0, Math.floor(V0)); i < cnt; i++) if (D.p[i] === D.p[i]) { sum += D.p[i]; c2++; }
      vOk.textContent = c2 ? (sum / c2 * 100).toFixed(1) + "%" : "–"; vBad.textContent = c2 ? (100 - sum / c2 * 100).toFixed(1) + "%" : "–";
      var sec = Math.round(D0 * 60 + cnt * TOT * 60 / N), hh = Math.floor(sec / 3600), mm = Math.floor(sec % 3600 / 60), ss = sec % 60;
      clk.textContent = hh + ":" + (mm < 10 ? "0" : "") + mm + ":" + (ss < 10 ? "0" : "") + ss; rng.value = cnt;
      var over = !playing && !live && (cnt >= N || (cnt <= B0 && !touched)); if (btnK !== live) { btnK = live; bLive.classList.toggle("on", live); bLive.innerHTML = lbl(live ? "■" : "▶", live ? W.stop : W.live); bLive.title = live ? W.stop : W.liveT; if (bLive2) { bLive2.classList.toggle("on", live); bLive2.innerHTML = lbl(live ? "■" : "▶", live ? W.stop : W.liveC); } } ov.style.display = over ? "" : "none"; ovi.textContent = cnt >= N ? "↻" : "▶"; ovt.textContent = cnt >= N ? W.again : W.hint;
      if (btnP !== playing) { btnP = playing; bPlay.classList.toggle("on", playing); bPlay.innerHTML = '<span class="pi">' + ico(playing ? "❚❚" : "▶") + '</span><span>' + (playing ? W.pause : W.play) + '</span>'; bPlay.title = playing ? W.pause : W.play; bPlay.setAttribute("aria-label", bPlay.title); }
    }
    function frame(ts) { if (!playing) return; n = Math.min(N, n + (ts - last) / 1000 * RATE * speed * zf()); last = ts; if (n >= N) playing = false; draw(); if (playing) raf = requestAnimationFrame(frame); }
    var touched = false, btnK = null, btnP = null;
    function lbl(ic, t) { return '<span class="pi">' + ico(ic) + '</span><span>' + t + '</span>'; }
    function ico(k) { var b = '<svg viewBox="0 0 12 12" width="11" height="11" fill="currentColor" aria-hidden="true">'; return b + (k === "■" ? '<rect x="1" y="1" width="10" height="10" rx="1.5"/>' : k === "❚❚" ? '<rect x="1.5" y="0.5" width="3" height="11" rx=".8"/><rect x="7.5" y="0.5" width="3" height="11" rx=".8"/>' : '<path d="M2 .6L11 6 2 11.4z" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/>') + '</svg>'; }
    function liveStop() { live = false; froz = false; hl = null; clearTimeout(liveT); if (ex && ex.ballStop) ex.ballStop(); }
    function liveGo() {                                            /* un tros curt (~24 mesures reals) una a una: la bolla recorre l'esquema i després apareix el punt al gràfic */
      if (!D.real || !ex || !ex.ball) return;
      var cont = froz && !playing, keep = { s: liveS, k: lk, u: lu, h: hl };       /* si l'havies aturat, continua on era: els punts ja escrits es mantenen */
      touched = true; pause(); liveStop(); live = true;
      if (cont) { liveS = keep.s; lk = keep.k; lu = keep.u; hl = keep.h; }
      else {
        liveS = Math.floor(n); if (liveS >= N - 12) liveS = B0; if (liveS < B0) liveS = B0; n = liveS; hl = null; recent = [];
        for (sk = 0; sk < D.kb.length && D.kb[sk] < liveS; sk++); for (su = 0; su < D.ub.length && D.ub[su] < liveS; su++);
        lk = sk - 1; lu = su - 1;
      }
      var ev = [], a = lk + 1, b = lu + 1, KB = D.kb, UB = D.ub, e;
      while (ev.length < 24 && (a < KB.length || b < UB.length)) {
        if (b >= UB.length || (a < KB.length && KB[a] <= UB[b])) { if (KB[a] >= liveS) ev.push({ b: KB[a], k: 1, i: a, x: D.kx[a], y: D.ky[a], ok: D.kp ? true : true }); a++; }
        else { if (UB[b] >= liveS) ev.push({ b: UB[b], k: 0, i: b, x: D.ux[b], y: D.uy[b] }); b++; }
      }
      for (var q = 0; q < ev.length; q++) if (ev[q].k) ev[q].ok = D.pok[ev[q].i] >= 50;
      draw();
      (function step(j) {
        if (!live) return;
        if (j >= ev.length) { live = false; froz = true; clearTimeout(liveT); ex.ballStop(); draw(); return; }
        e = ev[j]; n = Math.max(n, e.b + 1); draw();
        var shown = false;
        function reveal() { if (!live || shown) return; shown = true; if (e.k) lk = e.i; else lu = e.i; hl = [e.x, e.y]; recent.unshift({ k: e.k, x: e.x, y: e.y }); if (recent.length > 3) recent.length = 3; draw(); }
        ex.ball(e.k ? "k" : "u", e.ok, speed, function () {
          if (!live) return;
          reveal();
          liveT = setTimeout(function () { step(j + 1); }, 160 / speed);
        }, e.k ? reveal : null);
      })(0);
    }
    function play() { touched = true; liveStop(); if (n >= N) n = B0; playing = true; last = performance.now(); cancelAnimationFrame(raf); raf = requestAnimationFrame(frame); draw(); }
    function pause() { playing = false; cancelAnimationFrame(raf); draw(); }
    function toggle() { if (playing) pause(); else play(); }
    bPlay.addEventListener("click", toggle); ov.addEventListener("click", toggle);
    [pa, pb, pc, pd, pe].forEach(function (q) { q.p.addEventListener("click", toggle); });
    bRe.addEventListener("click", function () { bRe.classList.add("flash"); setTimeout(function () { bRe.classList.remove("flash"); }, 250); setTimeout(function () { touched = true; liveStop(); pause(); n = B0; recent = []; hl = null; draw(); }, 40); });
    bLive.addEventListener("click", function () { if (live) { live = false; froz = true; clearTimeout(liveT); if (ex && ex.ballPause) ex.ballPause(); draw(); } else liveGo(); });
    rng.addEventListener("input", function () { touched = true; liveStop(); n = +rng.value; if (playing) last = performance.now(); draw(); });
    spd.addEventListener("change", function () { speed = +spd.value; });
    var ro = window.ResizeObserver ? new ResizeObserver(function () { draw(); }) : null; if (ro) ro.observe(grid);
    dashStop = function () { playing = false; liveStop(); cancelAnimationFrame(raf); if (ro) ro.disconnect(); };
    setTimeout(draw, 0);
    return root;
  }
  /* targeta explicativa al costat del quadre: contingut segons els enunciats del projecte (parts 2 i 3 d'IIoT i CPS) */
  var DEX = {
    ca: { h: "Què mostra", p: "Un sensor de vibració d'un motor envia 4 indicadors a un PLC. Node-RED els desa, MATLAB els classifica i Grafana ho dibuixa.",
      f: "Com es classifica cada mesura", a1: "Sensor de vibració → PLC → InfluxDB", a2: "RMS · Skewness · Kurtosis · Mean", b: "PCA: 4 indicadors → PC1 i PC2", nd: "Detecció de novetats", q: "És coneguda?", no: "No", yes: "Sí", u1: "Desconeguda", u2: "no es diagnostica", c1: "Coneguda: diagnosi", c2: "(xarxa neuronal)", ok: "Sa", bad: "Fallada coixinet", sum: "p + (1 − p) = 100 %",
      g: "Llegenda", pc: "PC1 i PC2", pcd: "la vibració resumida en 2 valors.", kn: "Conegudes (blau)", knd: "situació ja vista: es diagnostica.", un: "Desconegudes (taronja)", und: "novetat: no es diagnostica.", av: "Sa / Fallada", avd: "estat del coixinet; p = probabilitat de sa." },
    es: { h: "Qué muestra", p: "Un sensor de vibración de un motor envía 4 indicadores a un PLC. Node-RED los guarda, MATLAB los clasifica y Grafana lo dibuja.",
      f: "Cómo se clasifica cada medida", a1: "Sensor de vibración → PLC → InfluxDB", a2: "RMS · Skewness · Kurtosis · Mean", b: "PCA: 4 indicadores → PC1 y PC2", nd: "Detección de novedades", q: "¿Es conocida?", no: "No", yes: "Sí", u1: "Desconocida", u2: "no se diagnostica", c1: "Conocida: diagnosis", c2: "(red neuronal)", ok: "Sano", bad: "Fallo rodamiento", sum: "p + (1 − p) = 100 %",
      g: "Leyenda", pc: "PC1 y PC2", pcd: "la vibración resumida en 2 valores.", kn: "Conocidas (azul)", knd: "situación ya vista: se diagnostica.", un: "Desconocidas (naranja)", und: "novedad: no se diagnostica.", av: "Sano / Fallo", avd: "estado del rodamiento; p = probabilidad de sano." },
    en: { h: "What it shows", p: "A vibration sensor on a motor sends 4 indicators to a PLC. Node-RED stores them, MATLAB classifies them and Grafana plots them.",
      f: "How each measurement is classified", a1: "Vibration sensor → PLC → InfluxDB", a2: "RMS · Skewness · Kurtosis · Mean", b: "PCA: 4 indicators → PC1 and PC2", nd: "Novelty detection", q: "Known?", no: "No", yes: "Yes", u1: "Unknown", u2: "not diagnosed", c1: "Known: diagnosis", c2: "(neural network)", ok: "Healthy", bad: "Bearing failure", sum: "p + (1 − p) = 100 %",
      g: "Legend", pc: "PC1 and PC2", pcd: "the vibration reduced to 2 values.", kn: "Known (blue)", knd: "already-seen situation: diagnosed.", un: "Unknown (orange)", und: "novelty: not diagnosed.", av: "Healthy / Failure", avd: "bearing state; p = probability of healthy." }
  };
  function dashExplain() {
    var W = DEX[lang] || DEX.ca, a = el("aside", "dash-ex");
    a.addEventListener("click", function (ev) { ev.stopPropagation(); });
    a.appendChild(el("h4", null, W.f));
    /* esquema de la classificació */
    var s = sv("svg", { viewBox: "0 0 330 322", "class": "dex-fig", role: "img" });
    var mk = sv("marker", { id: "dxa", viewBox: "0 0 10 10", refX: "8", refY: "5", markerWidth: "6", markerHeight: "6", orient: "auto" }, sv("defs", {}, s)); sv("path", { d: "M0 0L10 5L0 10z", fill: "#444" }, mk);
    function box(x, y, w, h, fill, stroke, lines) { var r = sv("rect", { x: x, y: y, width: w, height: h, rx: 6, fill: fill, stroke: stroke, "stroke-width": 1.4 }, s); lines.forEach(function (t, i) { sv("text", { x: x + w / 2, y: y + h / 2 + 4 + (i - (lines.length - 1) / 2) * 13, "class": "dex-b" + (i && lines.length > 1 ? " sm" : ""), "text-anchor": "middle" }, s, t); }); return r; }
    function arrow(x1, y1, x2, y2) { sv("line", { x1: x1, y1: y1, x2: x2, y2: y2, stroke: "#444", "stroke-width": 1.3, "marker-end": "url(#dxa)" }, s); }
    box(20, 4, 200, 40, "#eef2fb", "#6b7fb3", [W.a1, W.a2]); arrow(120, 44, 120, 58);
    box(20, 58, 200, 28, "#eef2fb", "#6b7fb3", [W.b]); arrow(120, 86, 120, 100);
    sv("polygon", { points: "120,100 220,136 120,172 20,136", fill: "#fff7e6", stroke: "#d9962b", "stroke-width": 1.4 }, s);
    sv("text", { x: 120, y: 133, "class": "dex-b sm", "text-anchor": "middle" }, s, W.nd); sv("text", { x: 120, y: 147, "class": "dex-b", "text-anchor": "middle" }, s, W.q);
    arrow(220, 136, 238, 136); sv("text", { x: 229, y: 128, "class": "dex-b sm", "text-anchor": "middle" }, s, W.no);
    var bU = box(240, 112, 86, 48, "#ffe9d4", "#e2761b", [W.u1, W.u2]);
    arrow(120, 172, 120, 192); sv("text", { x: 134, y: 185, "class": "dex-b sm" }, s, W.yes);
    var bK = box(20, 192, 200, 36, "#dbe8ff", "#4a7fd4", [W.c1, W.c2]);
    sv("polyline", { points: "120,228 120,238 67,238", stroke: "#444", "stroke-width": 1.3, fill: "none" }, s); sv("polyline", { points: "120,238 172,238", stroke: "#444", "stroke-width": 1.3, fill: "none" }, s);
    arrow(67, 238, 67, 252); arrow(172, 238, 172, 252);
    var bOk = box(20, 252, 94, 40, "#dff3e3", "#2f9a4a", [W.ok, "p"]), bBad = box(125, 252, 94, 40, "#fbdcdf", "#d0303f", [W.bad, "1 − p"]);
    sv("text", { x: 120, y: 311, "class": "dex-b sm", "text-anchor": "middle" }, s, W.sum);
    /* bolla que representa una mesura en temps real recorrent l'esquema */
    var ball = sv("circle", { r: 6.5, cx: 120, cy: 10, fill: "#9b30e8", stroke: "#fff", "stroke-width": 1.6, opacity: 0 }, s), bt = 0, bto = 0;
    var litEl = null, litO = null;
    function unlit() { if (litEl) { litEl.setAttribute("fill", litO.f); litEl.setAttribute("stroke", litO.s); litEl.setAttribute("stroke-width", litO.w); litEl.style.filter = ""; litEl = null; } }
    function lit(r, f, c) { unlit(); litO = { f: r.getAttribute("fill"), s: r.getAttribute("stroke"), w: r.getAttribute("stroke-width") }; litEl = r; r.setAttribute("stroke", c); r.setAttribute("stroke-width", 2.2); r.style.filter = "drop-shadow(0 0 4px " + c + ") drop-shadow(0 0 8px " + c + ")"; }
    a.ballPause = function () { cancelAnimationFrame(bt); clearTimeout(bto); };
    a.ballStop = function () { cancelAnimationFrame(bt); clearTimeout(bto); ball.setAttribute("opacity", 0); unlit(); };
    a.ball = function (kind, ok, spd, done, mid) {
      a.ballStop();
      var pts = [[120, 10], [120, 72], [120, 136]];
      if (kind === "u") pts.push([240, 136]); else { pts.push([120, 192], [120, 228], [120, 238]); pts.push(ok ? [67, 238] : [172, 238]); pts.push(ok ? [67, 252] : [172, 252]); }
      ball.setAttribute("fill", "#9b30e8"); ball.setAttribute("opacity", 1); ball.setAttribute("cx", 120); ball.setAttribute("cy", 10);
      function go(i) {
        if (i >= pts.length - 1) { ball.setAttribute("opacity", 0); if (kind === "u") lit(bU, "#ffc58a", "#e2761b"); else if (ok) lit(bOk, "#a5e3b3", "#2f9a4a"); else lit(bBad, "#f7a9b0", "#d0303f"); bto = setTimeout(function () { if (done) done(); }, 260 / spd); return; }
        var A = pts[i], B = pts[i + 1], dur = Math.hypot(B[0] - A[0], B[1] - A[1]) / (230 * spd) * 1000, st = performance.now();
        (function f() {
          var k = Math.min(1, (performance.now() - st) / dur);
          ball.setAttribute("cx", A[0] + (B[0] - A[0]) * k); ball.setAttribute("cy", A[1] + (B[1] - A[1]) * k);
          if (k < 1) bt = requestAnimationFrame(f);
          else if (i + 1 === 3 && kind !== "u") { lit(bK, "", "#5794f2"); ball.setAttribute("opacity", 0); if (mid) mid(); bto = setTimeout(function () { ball.setAttribute("cx", 120); ball.setAttribute("cy", 228); ball.setAttribute("opacity", 1); go(i + 2); }, 450 / spd); }
          else if (i + 1 === 2) { bto = setTimeout(function () { go(i + 1); }, 260 / spd); }
          else go(i + 1);
        })();
      }
      go(0);
    };
    a.appendChild(s);
    a.appendChild(el("h4", null, W.g));
    var dl = el("dl", "dex-gl"); [["pc", "pcd", "pc"], ["kn", "knd", "kn"], ["un", "und", "un"], ["av", "avd", "av"]].forEach(function (k) { dl.appendChild(el("dt", "dex-" + k[2], W[k[0]])); dl.appendChild(el("dd", null, W[k[1]])); });
    a.appendChild(dl);
    return a;
  }
  $("page-left").addEventListener("click", function (e) {
    var im = e.target.closest ? e.target.closest(".cover-img") : null; if (!im || bookEl.classList.contains("shut")) return;
    closeZoom();
    var zp = order[idx], flow = zp && zp.imgFlow;
    if (zp && zp.imgSim) {                                         /* quadre de comandament simulat */
      zoomEl = el("div", "img-zoom dash-zoom"); var dex = dashExplain(); zoomEl.appendChild(dex); zoomEl.appendChild(dashBuild(dex)); zoomEl.addEventListener("click", closeZoom);
      zoomEl.appendChild(el("p", "rot-hint", U("rotHint")));
      var xd = el("button", "zoom-x", "×"); xd.type = "button"; xd.setAttribute("aria-label", "×"); zoomEl.appendChild(xd);
      bookDlg.appendChild(zoomEl); return;
    }
    zoomEl = el("div", "img-zoom"); var big = el("img"); big.src = im.src || ""; big.alt = "";
    if (flow) zoomEl.appendChild(el("p", "rot-hint", U("rotHint")));
    var gx = null;
    var gxFull = null;
    if (flow) {
      gx = buildGrafcet(false); gxFull = buildGrafcet(true);
      gxFull.wrap = el("div", "gx-fullwrap"); gxFull.wrap.appendChild(gxFull.svg);
      zoomEl.appendChild(gx.svg); zoomEl.appendChild(gxFull.wrap);
      [gx.svg, gxFull.wrap].forEach(function (n) { n.addEventListener("click", function (ev) { ev.stopPropagation(); }); });
      gxFull.wrap.style.display = "none"; big.hidden = true;
    }
    zoomEl.appendChild(big);
    zoomEl.addEventListener("click", closeZoom);
    var xb = el("button", "zoom-x", "×"); xb.type = "button"; xb.setAttribute("aria-label", "×"); zoomEl.appendChild(xb);
    if (flow) {
      var side = el("aside", "zoom-legend"), fl = flow, rows = [];
      /* mini semàfors: el dels vianants és el polsador */
      var scene = el("div", "gx-scene");
      function makeCar() {                                                         /* semàfor de cotxes */
        var n = el("div", "sem"), o = { node: n, b: {} };
        ["r", "a", "g"].forEach(function (c) { o.b[c] = el("span", "bulb " + c); n.appendChild(o.b[c]); }); n.appendChild(el("span", "sem-tag", "SD"));
        return o;
      }
      function makePed() {                                                         /* polsador de vianants, com els reals: placa, pantalla amb el vianant i botó gran */
        var n = el("button", "ped-box"), o = { node: n }; n.type = "button"; n.title = U("pressHint"); n.setAttribute("aria-label", U("pressHint"));
        n.appendChild(el("span", "pb-plate", U("plate")));
        o.screen = el("span", "pb-screen");
        var fig = sv("svg", { viewBox: "0 0 24 40", "class": "pb-fig" }, o.screen);
        sv("circle", { cx: 12, cy: 6, r: 4.5, fill: "currentColor" }, fig);
        sv("path", { d: "M6 14h12l2 13h-3.5l-.5 12h-3.5l-1-9-1 9H7l-.5-12H3z", fill: "currentColor" }, fig);
        n.appendChild(o.screen);
        var pb = el("span", "pb-btn"); pb.appendChild(el("span", "pb-dome")); n.appendChild(pb);
        n.appendChild(el("span", "pb-tag", U("pressShort")));
        return o;
      }
      var carL = makeCar(), pedL = makePed();
      scene.appendChild(carL.node); scene.appendChild(pedL.node);
      var sh = el("div", "gx-hint"); sh.appendChild(el("b", null, U("pressHint"))); sh.appendChild(el("span", null, U("fast"))); scene.appendChild(sh);
      side.appendChild(scene);
      var fullNote = el("div", "gx-hint gx-fullnote"); fullNote.appendChild(el("b", null, U("pressHint"))); fullNote.appendChild(el("span", null, U("fullHint"))); fullNote.style.display = "none"; side.appendChild(fullNote);
      var fullUI = function () {};
      side.appendChild(el("h4", null, U("sequence")));
      function lamp(kind, tag) { return el("span", "lg-tag " + (tag === "SD" ? "cars" : "ped") + " c-" + kind, tag); }
      var ttl = { g: U("lg_g"), a: U("lg_a"), r: U("lg_r"), f: U("lg_f") };
      var ol = el("ol", "flow");
      fl.steps.forEach(function (s, i) {
        var li = el("li", "fs"), row = el("div", "fs-row");
        row.appendChild(el("span", "fs-id", s.id));
        var a = lamp(s.cars, "SD"), b = lamp(s.ped, "SC"); a.title = ttl[s.cars]; b.title = ttl[s.ped];
        var lamps = el("span", "fs-lamps"); lamps.appendChild(a); lamps.appendChild(b); row.appendChild(lamps);
        row.appendChild(el("span", "fs-t", T(s.t)));
        li.appendChild(row); li.appendChild(el("div", "fs-after", "↓ " + s.after + (i === fl.steps.length - 1 ? " → 01" : "")));
        ol.appendChild(li); rows.push(li);
      });
      side.appendChild(ol);
      if (fl.aux) {
        side.appendChild(el("h4", null, U("aux")));
        var ax = el("ol", "flow aux");
        fl.aux.forEach(function (s) { var li = el("li", "fs"), row = el("div", "fs-row"); row.appendChild(el("span", "fs-id", s.id)); row.appendChild(el("span", "fs-t", T(s.t) + " · " + s.after)); li.appendChild(row); ax.appendChild(li); });
        side.appendChild(ax);
      }
      {                                                           /* botó: GRAFCET interactiu ↔ sistema complet (tots dos en SVG, traduïts) */
        var full = false, tg = el("button", "zoom-toggle", U("showFull")); tg.type = "button";
        tg.addEventListener("click", function (ev) {
          ev.stopPropagation(); full = !full; gx.svg.style.display = full ? "none" : ""; gxFull.wrap.style.display = full ? "" : "none"; scene.style.display = full ? "none" : ""; fullNote.style.display = full ? "" : "none"; fullUI(full);
          tg.textContent = full ? U("showGeneric") : U("showFull");
        });
        side.appendChild(tg);
      }
      side.addEventListener("click", function (ev) { ev.stopPropagation(); });
      zoomEl.appendChild(side);
      /* ---- animació: estats actius = quadres de color ---- */
      var K = 0.2, phase = 0, running = false, aux = 0;           /* 5× més ràpid que el temps real; la intermitència va a temps real */
      var PH = [{ on: ["01"], c: "g", p: "r" }, { on: ["1", "101"], c: "g", p: "r", d: 5 }, { on: ["2", "101"], c: "a", p: "r", d: 8 }, { on: ["3", "102"], c: "r", p: "g", d: 25 }, { on: ["4", "102"], c: "r", p: "f", d: 9 }];
      var COL = { "01": "c-01", "1": "c-g", "2": "c-a", "3": "c-g", "4": "c-g", "101": "c-r", "102": "c-r" };
      function paint() {
        var P = PH[phase];
        Object.keys(gx.boxes).forEach(function (id) { gx.boxes[id].setAttribute("class", "gx-s"); });
        P.on.forEach(function (id) { gx.boxes[id].setAttribute("class", "gx-s " + (id === "4" && aux !== 1 ? "c-gd" : COL[id])); });
        gx.boxes[aux === 0 ? "120" : "121"].setAttribute("class", "gx-s c-b");
        ["r", "a", "g"].forEach(function (k) { carL.b[k].classList.toggle("on", P.c === k); });
        var pg = P.p === "g" || (P.p === "f" && aux === 1);
        pedL.screen.className = "pb-screen" + (pg ? " g" : P.p === "r" ? " r" : "");
        rows.forEach(function (r, i) { r.classList.toggle("on", i === phase); });
        pedL.node.classList.toggle("running", running);
      }
      function later(f, ms) { zoomTimers.push(setTimeout(f, ms)); }
      function go(i) { phase = i; paint(); if (i < 4) later(function () { go(i + 1); }, PH[i + 1].d * K * 1000); else later(function () { phase = 0; running = false; paint(); }, PH[4].d * K * 1000); }
      function press() { if (running) return; running = true; go(1); }
      pedL.node.addEventListener("click", function (ev) { ev.stopPropagation(); press(); });
      /* ---- sistema complet (normes de l'informe): C1 → creuament 1; C2 → 1 i 2 alhora; C3 → 1, 2 i 3 alhora.
         Un creuament només arrenca si cap dels anteriors està en seqüència (E101/E102, E201/E202) ---- */
      var IDS = [{ s: ["01", "1", "2", "3", "4"], r: ["101", "102"], a: ["120", "121"] }, { s: ["02", "5", "6", "7", "8"], r: ["201", "202"], a: ["220", "221"] }, { s: ["03", "9", "10", "11", "12"], r: ["301", "302"], a: ["320", "321"] }];
      var fx = [0, 0, 0], fRun = [false, false, false], fWant = -1, fCar = [], fPed = [], fShown = false, crow = el("div", "gx-ctl-row");
      [145, 425, 705].forEach(function (cx, n) {
        var cell = el("div", "gx-ctl"); cell.style.left = (cx / 9) + "%";
        fCar[n] = makeCar(); fPed[n] = makePed(); fCar[n].node.querySelector(".sem-tag").textContent = "SD" + (n + 1);
        fPed[n].node.querySelector(".pb-tag").textContent = "C" + (n + 1);
        cell.appendChild(fCar[n].node); cell.appendChild(fPed[n].node); crow.appendChild(cell);
        fPed[n].node.addEventListener("click", function (ev) {
          ev.stopPropagation();
          for (var q = 0, all = true; q <= n; q++) if (!fRun[q]) all = false;
          if (all) return;                                         /* ja s'està atenent aquest botó */
          fWant = Math.max(fWant, n);                              /* el clic queda registrat: el botó Cn mou els creuaments 1..n alhora, i només quan cap no és en seqüència */
          fKick(); fPaint();
        });
      });
      gxFull.wrap.appendChild(crow);
      function fPaint() {
        IDS.forEach(function (d, n) {
          var ph = fx[n], P = PH[ph], B = gxFull.boxes;
          d.s.concat(d.r, d.a).forEach(function (id) { B[id].setAttribute("class", "gx-s"); });
          if (ph === 0) B[d.s[0]].setAttribute("class", "gx-s c-01");
          else {
            B[d.s[ph]].setAttribute("class", "gx-s " + (ph === 1 ? "c-g" : ph === 2 ? "c-a" : ph === 3 ? "c-g" : (aux === 1 ? "c-g" : "c-gd")));
            B[d.r[ph < 3 ? 0 : 1]].setAttribute("class", "gx-s c-r");
          }
          B[d.a[aux]].setAttribute("class", "gx-s c-b");
          ["r", "a", "g"].forEach(function (k) { fCar[n].b[k].classList.toggle("on", P.c === k); });
          var pg = P.p === "g" || (P.p === "f" && aux === 1);
          fPed[n].screen.className = "pb-screen" + (pg ? " g" : P.p === "r" ? " r" : "");
          fPed[n].node.classList.toggle("running", fRun[n] || fWant === n);
        });
        if (fShown) { var f0 = fRun.indexOf(true); rows.forEach(function (r, i) { r.classList.toggle("on", f0 >= 0 && i === fx[f0]); }); }
      }
      function fKick() {                                          /* si hi ha una petició (Cn) i cap creuament és en seqüència, arrenquen alhora els creuaments 1..n */
        if (fWant < 0 || fRun.some(Boolean)) return;
        var m = fWant; fWant = -1;
        for (var k = 0; k <= m; k++) { fRun[k] = true; fGo(k, 1); }
      }
      function fGo(n, i) { fx[n] = i; fPaint(); if (i < 4) later(function () { fGo(n, i + 1); }, PH[i + 1].d * K * 1000); else later(function () { fx[n] = 0; fRun[n] = false; fKick(); fPaint(); }, PH[4].d * K * 1000); }
      fullUI = function (f) { fShown = f; if (f) fPaint(); else paint(); };
      fPaint();
      (function flash() { later(function () { aux = 1 - aux; paint(); fPaint(); flash(); }, aux === 0 ? 800 : 500); })();
      paint();
    }
    bookDlg.appendChild(zoomEl);
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && zoomEl) { e.preventDefault(); e.stopPropagation(); closeZoom(); } }, true);
  bookDlg.addEventListener("close", closeZoom);
  bookEl.addEventListener("keydown", function (e) { if ((e.key === "Enter" || e.key === " ") && bookEl.classList.contains("shut")) { openShut(); e.preventDefault(); } });
  $("book-prev").addEventListener("click", function () { turn(-1); });
  $("book-next").addEventListener("click", function () { turn(1); });
  $("book-close").addEventListener("click", function () { bookDlg.close(); });
  bookDlg.addEventListener("click", function (e) { if (e.target === bookDlg) bookDlg.close(); });
  bookDlg.addEventListener("keydown", function (e) {
    if (e.target.tagName === "VIDEO") return;
    if (e.key === "ArrowRight") { turn(1); e.preventDefault(); }
    if (e.key === "ArrowLeft") { turn(-1); e.preventDefault(); }
  });
  bookDlg.addEventListener("close", function () { document.querySelectorAll(".bk.pulled").forEach(function (x) { x.classList.remove("pulled"); }); bookEl.classList.remove("shut", "shut-in", "mir"); bookEl.style.marginBottom = ""; bookEl.style.top = ""; turning = false; document.querySelectorAll(".book-ghost").forEach(function (g) { g.parentNode && g.parentNode.removeChild(g); }); bookEl.querySelectorAll("video").forEach(function (v) { v.pause(); }); });

  /* ============ COMPETÈNCIES I IDIOMES ============ */
  var SKL = {
    ca: ["Bàsic", "Mitjà", "Mitjà-alt", "Avançat"],
    es: ["Básico", "Medio", "Medio-alto", "Avanzado"],
    en: ["Basic", "Intermediate", "Upper-intermediate", "Advanced"]
  };
  function renderSkills() {
    var box = clear($("skills-list"));
    D.skills.forEach(function (g, i) {
      var d = el("div", "skill-group" + (i === D.skills.length - 1 ? " tools-group" : ""));
      d.appendChild(el("h3", null, T(g.group)));
      var ul = el("ul");
      g.items.forEach(function (it) {
        if (it.lvl) {
          var li = el("li", "sk-tool");
          var ic = el("span", "sk-ic", it.ic || it.n.charAt(0)); ic.style.background = it.c || "var(--accent)"; ic.setAttribute("aria-hidden", "true");
          li.appendChild(ic);
          li.appendChild(el("b", null, it.n));
          li.appendChild(el("span", "lv", SKL[lang][it.lvl - 2]));
          var m = el("div", "meter"); m.setAttribute("aria-hidden", "true");
          for (var k = 1; k <= 5; k++) m.appendChild(el("i", k <= it.lvl ? "on" : ""));
          li.appendChild(m); ul.appendChild(li);
        } else ul.appendChild(el("li", null, T(it)));
      });
      d.appendChild(ul); box.appendChild(d);
    });
    var lb = clear($("lang-list"));
    D.languages.forEach(function (x) {
      var d = el("div", "lang-card");
      d.appendChild(el("span", "lvl", x.level >= 7 ? U("native") : CEFR[x.level - 1]));
      d.appendChild(el("b", null, T(x.name)));
      var bar = el("div", "bar"); bar.setAttribute("aria-hidden", "true");
      for (var i = 1; i <= 6; i++) bar.appendChild(el("i", i <= Math.min(x.level, 6) ? "on" : ""));
      d.appendChild(bar);
      var sc = el("div", "scale"); sc.setAttribute("aria-hidden", "true");
      CEFR.forEach(function (c) { sc.appendChild(el("span", null, c)); });
      d.appendChild(sc);
      lb.appendChild(d);
    });
  }

  /* ============ TEXTOS FIXOS ============ */
  function renderStatic() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (n) { n.textContent = U(n.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (n) { n.setAttribute("aria-label", U(n.getAttribute("data-i18n-aria"))); });
    press(langBox, lang); moveLangPill(!langFirst); langFirst = false;
  }
  /* fletxa per tornar a dalt: només a la llista de projectes quan hi ha més de 3 targetes */
  var topBtn = el("button", "to-top"); topBtn.type = "button"; topBtn.setAttribute("aria-label", "↑");
  topBtn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  topBtn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  document.body.appendChild(topBtn);
  function updateTop() {
    var homeTop = !$("inici").hidden && (window.innerWidth > 700 ? $("hero").getBoundingClientRect().bottom > window.innerHeight * 0.75 : window.scrollY < 30);
    /* el menú només és transparent mentre res de la portada li passa per sota: quan l'etiqueta de dalt el toca, recupera el fons i la línia */
    if (homeTop && $("hero-tag").getBoundingClientRect().top < $("topbar").getBoundingClientRect().bottom + 6) homeTop = false;
    document.body.classList.toggle("hero-top", homeTop);
    var cards = document.querySelectorAll("#projects .card").length;
    var on = viewMode === "list" && !$("projects").hidden && $("projectes").offsetParent !== null && cards > 3 && window.scrollY > 200;
    topBtn.classList.toggle("on", on);
  }
  window.addEventListener("scroll", updateTop, { passive: true });
  window.addEventListener("resize", updateTop);
  window.addEventListener("hashchange", updateTop);
  var started = false;
  function renderAll() {
    renderStatic(); buildTabs(); renderHome(); renderTrajectory();
    buildFilters(); renderProjects(); renderSkills();
    measure(); route(started);
    if (bookDlg.open) fillBook(order[idx]);
    started = true; updateTop();
  }
  if (hero === "b") { document.body.classList.add("intro"); setTimeout(function () { document.body.classList.remove("intro"); }, 2200); }
  renderAll();
})();
