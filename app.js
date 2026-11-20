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
      languages: "Idiomes", others: "Altres experiències", interests: "Interessos", slides: "Diapositives", slide: "Diapositiva", dbl: "doble clic en un projecte per obrir-lo",
      viewFor: "Veure el portfoli per a:", fLevel: "Nivell", fYear: "Any", fType: "Tipus",
      all: "Tots", master: "Màster", grau: "Grau", course: "Curs d'estiu", solo: "Individual", group: "Equip", groupOf: "Equip de ",
      clear: "✕ Esborrar filtres", nProjects: " projectes", showing: function (a, b) { return "Es mostren " + a + " de " + b + " projectes"; },
      empty: "Cap projecte amb aquests filtres.", did: "Què vaig fer", tools: "Eines", role: "Rol: ",
      shelf: "Prestatgeria", list: "Llista", open: "Obrir el llibre", hint: "Clica per obrir-lo",
      lgLevel: "Color", lgType: "Dibuix del llom", lgThick: "Gruix", thin: "individual", thick: "equip",
      prevBook: "Projecte anterior", nextBook: "Projecte següent",
      greeting: "Selecció pensada per a ", portfolio: "Portfoli", native: "Llengua materna",
      mapShow: "Veure on és al mapa", mapOpen: "Obrir a Google Maps ↗", mapTitle: "Mapa de ",
      mailSubject: "Contacte des del teu portfoli", copy: "Copiar l'adreça de correu", copied: "Correu copiat al porta-retalls",
      ainote: "Aquest portfoli l'he dissenyat i dirigit jo (contingut, decisions i revisió), amb Claude com a assistent de programació.",
      footer: "Projectes acadèmics i de pràctiques (ESEIAAT-UPC). Les dades d'empreses s'han omès o generalitzat per confidencialitat."
    },
    es: {
      skip: "Ir a los proyectos", toAbout: "Bajar a Sobre mí", close: "Cerrar",
      tabs: { inici: "Inicio", experiencia: "Experiencia", projectes: "Proyectos", formacio: "Formación", competencies: "Competencias" },
      tabDesc: { experiencia: "Relats · 2 roles", projectes: "%n proyectos", formacio: "Máster, grado y NUAA", competencies: "Herramientas e idiomas" },
      heroTag: "Portfolio de ingeniería", about: "Sobre mí", featured: "Proyectos destacados", explore: "Explora",
      experience: "Experiencia", projects: "Proyectos", skills: "Competencias", education: "Formación", complementary: "Formación complementaria",
      languages: "Idiomas", others: "Otras experiencias", interests: "Intereses", slides: "Diapositivas", slide: "Diapositiva", dbl: "doble clic en un proyecto para abrirlo",
      viewFor: "Ver el portfolio para:", fLevel: "Nivel", fYear: "Año", fType: "Tipo",
      all: "Todos", master: "Máster", grau: "Grado", course: "Curso de verano", solo: "Individual", group: "Equipo", groupOf: "Equipo de ",
      clear: "✕ Borrar filtros", nProjects: " proyectos", showing: function (a, b) { return "Se muestran " + a + " de " + b + " proyectos"; },
      empty: "Ningún proyecto con estos filtros.", did: "Qué hice", tools: "Herramientas", role: "Rol: ",
      shelf: "Estantería", list: "Lista", open: "Abrir el libro", hint: "Haz clic para abrirlo",
      lgLevel: "Color", lgType: "Dibujo del lomo", lgThick: "Grosor", thin: "individual", thick: "equipo",
      prevBook: "Proyecto anterior", nextBook: "Proyecto siguiente",
      greeting: "Selección pensada para ", portfolio: "Portfolio", native: "Lengua materna",
      mapShow: "Ver dónde está en el mapa", mapOpen: "Abrir en Google Maps ↗", mapTitle: "Mapa de ",
      mailSubject: "Contacto desde tu portfolio", copy: "Copiar la dirección de correo", copied: "Correo copiado al portapapeles",
      ainote: "Este portafolio lo he diseñado y dirigido yo (contenido, decisiones y revisión), con Claude como asistente de programación.",
      footer: "Proyectos académicos y de prácticas (ESEIAAT-UPC). Los datos de empresas se han omitido o generalizado por confidencialidad."
    },
    en: {
      skip: "Skip to projects", toAbout: "Scroll to About", close: "Close",
      tabs: { inici: "Home", experiencia: "Experience", projectes: "Projects", formacio: "Education", competencies: "Skills" },
      tabDesc: { experiencia: "Relats · 2 roles", projectes: "%n projects", formacio: "Master's, Bachelor's, NUAA", competencies: "Tools and languages" },
      heroTag: "Engineering portfolio", about: "About", featured: "Featured projects", explore: "Explore",
      experience: "Experience", projects: "Projects", skills: "Skills", education: "Education", complementary: "Additional training",
      languages: "Languages", others: "Other experience", interests: "Interests", slides: "Slides", slide: "Slide", dbl: "double-click a project to open it",
      viewFor: "View the portfolio for:", fLevel: "Level", fYear: "Year", fType: "Type",
      all: "All", master: "Master's", grau: "Bachelor's", course: "Summer school", solo: "Individual", group: "Team", groupOf: "Team of ",
      clear: "✕ Clear filters", nProjects: " projects", showing: function (a, b) { return "Showing " + a + " of " + b + " projects"; },
      empty: "No projects match these filters.", did: "What I did", tools: "Tools", role: "Role: ",
      shelf: "Bookshelf", list: "List", open: "Open the book", hint: "Click to open",
      lgLevel: "Colour", lgType: "Spine pattern", lgThick: "Thickness", thin: "individual", thick: "team",
      prevBook: "Previous project", nextBook: "Next project",
      greeting: "Curated for ", portfolio: "Portfolio", native: "Native",
      mapShow: "Show on the map", mapOpen: "Open in Google Maps ↗", mapTitle: "Map of ",
      mailSubject: "Contact from your portfolio", copy: "Copy email address", copied: "Email copied to clipboard",
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
  var viewMode = stored("portfoli-view") === "list" ? "list" : "shelf";
  var F = { level: "all", year: "all", team: "all" };
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
  var NS = "http://www.w3.org/2000/svg";
  var STROKE = {
    pin: [["path", { d: "M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" }], ["circle", { cx: 12, cy: 10, r: 2.5 }]],
    mail: [["rect", { x: 3, y: 5, width: 18, height: 14, rx: 2 }], ["path", { d: "M3 7l9 6 9-6" }]],
    copy: [["rect", { x: 9, y: 9, width: 11, height: 11, rx: 2 }], ["path", { d: "M5 15V5a2 2 0 0 1 2-2h10" }]],
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
  var toastTimer;
  function toast(msg) {
    var t = $("toast"); t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.hidden = true; }, 1800);
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
    $("ct").className = "ct mode-" + m;
    document.querySelectorAll(".ct-tab").forEach(function (a) { a.setAttribute("aria-current", String(a.dataset.m === m)); });
    $("ct-intro").textContent = T(CT_INTRO[m]);
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
      var range = Math.max(1, h.offsetHeight - st.offsetHeight);
      var p = tab === "inici" ? Math.min(1, Math.max(0, window.scrollY / range)) : 1;
      root.style.setProperty("--p", p.toFixed(3));
      var rev = p > 0.28;
      document.body.classList.toggle("revealed", rev);
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
    renderContact();
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
      var im = el("img"); im.src = f.img; im.alt = ""; im.loading = "lazy"; b.appendChild(im);
      var ft = el("span", "ft"), m = el("span", "meta");
      m.appendChild(levelTag(p.level)); m.appendChild(yearTag(p.year));
      ft.appendChild(m); ft.appendChild(el("b", null, T(p.title)));
      b.appendChild(ft);
      b.addEventListener("click", function () {
        F.level = F.year = F.team = "all"; setProfile("all"); go("projectes"); openBook(p.id);
      });
      fe.appendChild(b);
    });
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
      if (o.period) li.appendChild(el("span", "when", o.period));
      li.appendChild(el("p", null, T(o.text)));
      ul.appendChild(li);
    });
  }
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
  function renderContact() {
    var c = clear($("contact")), ct = D.person.contact;
    if (D.person.location) {
      var li = el("li"), btn = el("button", "cbtn");
      btn.appendChild(sicon("pin")); btn.appendChild(document.createTextNode(D.person.location));
      mapPopup(li, btn, D.person.location, D.person.mapQuery || D.person.location);
      c.appendChild(li);
    }
    if (ct.email) {
      // en fer clic, el correu es copia directament i apareix un avís en l'idioma actiu
      var li2 = el("li"), a = el("button", "cbtn");
      a.type = "button"; a.title = U("copy"); a.setAttribute("aria-label", U("copy") + ": " + ct.email);
      a.appendChild(sicon("mail")); a.appendChild(document.createTextNode(ct.email));
      a.addEventListener("click", function () {
        var done = function () { toast(U("copied")); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(ct.email).then(done, function () { fallbackCopy(ct.email); done(); });
        else { fallbackCopy(ct.email); done(); }
      });
      li2.appendChild(a); c.appendChild(li2);
    }
    if (ct.linkedin) {
      var li3 = el("li"), a3 = el("a", "cbtn");
      a3.href = ct.linkedin; a3.target = "_blank"; a3.rel = "noopener";
      a3.appendChild(sicon("linkedin"));
      a3.appendChild(document.createTextNode(ct.linkedin.replace(/^https?:\/\/(www\.)?/, "")));
      li3.appendChild(a3); c.appendChild(li3);
    }
    if (ct.cv) {
      var li4 = el("li"), a4 = el("a", "cbtn", "CV (PDF)");
      a4.href = ct.cv; a4.target = "_blank"; a4.rel = "noopener";
      li4.appendChild(a4); c.appendChild(li4);
    }
  }
  function fallbackCopy(text) {
    var t = el("textarea"); t.value = text; t.setAttribute("readonly", ""); t.style.position = "fixed"; t.style.opacity = "0";
    document.body.appendChild(t); t.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(t);
  }

  /* ============ LÍNIA TEMPORAL ÚNICA: EXPERIÈNCIA I FORMACIÓ ============ */
  // Cada fila: [costat esquerre | eix | costat dret]. L'experiència va a l'esquerra i la formació a la dreta.
  // El costat actiu mostra la fitxa completa; l'altre, només una etiqueta curta apagada.
  function renderTrajectory() {
    var X = D.experience, org = X.org + " · " + X.place + " · " + T(X.role);
    var items = X.roles.map(function (r) {
      return { side: "exp", kind: "exp", end: r.end || "", title: T(r.title), period: T(r.period), org: X.org + " · " + X.place, orgTail: T(X.role), mapQuery: X.mapQuery, points: r.did, tags: r.tags, label: T(X.role) };
    }).concat(D.education.map(function (e) {
      var k = e.kind || "master";
      return { side: "edu", kind: k, end: e.end || "", title: T(e.title), period: T(e.period), org: T(e.school), mapQuery: e.mapQuery, note: T(e.note), points: e.points, label: U(k === "course" ? "course" : k) };
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
      if (it.org) { var op = el("p", "org"); if (it.mapQuery) { var ow = el("span", "mapw"), ob = el("button", "orgmap"); ob.appendChild(sicon("pin")); ob.appendChild(document.createTextNode(it.org)); mapPopup(ow, ob, it.org, it.mapQuery); op.appendChild(ow); if (it.orgTail) op.appendChild(document.createTextNode(" · " + it.orgTail)); } else op.textContent = it.org + (it.orgTail ? " · " + it.orgTail : ""); full.appendChild(op); }
      if (it.note) full.appendChild(el("p", "note", it.note));
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
    var vm = clear($("view-mode"));
    [["shelf", U("shelf")], ["list", U("list")]].forEach(function (m) {
      var b = el("button", null, m[1]); b.type = "button"; b.dataset.v = m[0];
      b.addEventListener("click", function () { viewMode = m[0]; store("portfoli-view", viewMode); renderProjects(); });
      vm.appendChild(b);
    });

  }
  $("clear").addEventListener("click", function () { F.level = F.year = F.team = "all"; setProfile("all"); });

  function renderLegend() {
    var lg = clear($("legend"));
    function group(title, items) {
      var g = el("span", "lg"); g.appendChild(el("span", "ttl", title));
      items.forEach(function (i) { g.appendChild(i); });
      lg.appendChild(g);
    }
    function mini(cls, inner) { var m = el("span", "mini " + cls); if (inner) m.appendChild(inner); return m; }
    function pair(m, label) { var s = el("span", "lg"); s.appendChild(m); s.appendChild(document.createTextNode(label)); return s; }
    group(U("lgLevel"), [pair(mini("master"), U("master")), pair(mini("grau"), U("grau"))]);
    group(U("lgType"), TYPES.map(function (t) { return pair(mini("master", el("span", "deco " + t)), T(D.profiles[t].label)); }));
    group(U("lgThick"), [pair(mini("master thin"), U("thin")), pair(mini("master thick"), U("thick"))]);
  }

  /* ----- prestatgeria ----- */
  var preview = $("preview"), wrap = $("shelf-wrap");
  function bookWidth(team) { return team === 1 ? 44 : (typeof team === "number" ? 48 + team * 4 : 60); }
  function showPreview(p, btn) {
    clear(preview);
    var m = el("p", "meta"); m.appendChild(levelTag(p.level)); m.appendChild(yearTag(p.year)); m.appendChild(teamTag(p.team));
    preview.appendChild(m);
    preview.appendChild(el("b", null, T(p.title)));
    preview.appendChild(el("p", null, T(p.summary)));
    preview.appendChild(el("p", "hint", "↗ " + U("hint")));
    preview.hidden = false;
    var wr = wrap.getBoundingClientRect(), br = btn.getBoundingClientRect();
    var pw = preview.offsetWidth, ph = preview.offsetHeight;
    var left = Math.min(Math.max(0, br.left - wr.left + br.width / 2 - pw / 2), wr.width - pw);
    var top = br.top - wr.top - ph - 22;
    if (top < 0) top = br.bottom - wr.top + 8;
    preview.style.left = left + "px"; preview.style.top = top + "px";
  }
  function hidePreview() { preview.hidden = true; }
  function renderShelf() {
    var sh = clear($("shelf"));
    current.forEach(function (p) {
      var slot = el("div", "slot");
      var b = el("button", "bk " + lv(p) + (seen[p.id] ? " seen" : ""));
      b.type = "button";
      b.style.setProperty("--w", bookWidth(p.team) + "px");
      // alçada segons el nivell (Màster més alt que Grau) + una petita variació perquè no semblin clonats
      b.style.setProperty("--h", ((p.level === "Grau" ? 212 : 252) + hash(p.id) % 9) + "px");
      b.setAttribute("aria-label", T(p.title) + " · " + p.year + " · " + U("open"));
      var types = p.types || [];
      b.appendChild(decos(types.slice(0, 1)));
      b.appendChild(el("span", "bk-title", T(p.spine || p.title)));
      if (types.length > 1) b.appendChild(decos(types.slice(1)));
      b.appendChild(el("span", "bk-year", p.year));
      b.addEventListener("pointerenter", function (e) { if (e.pointerType === "mouse") showPreview(p, b); });
      b.addEventListener("pointerleave", hidePreview);
      b.addEventListener("focus", function () { showPreview(p, b); });
      b.addEventListener("blur", hidePreview);
      b.addEventListener("click", function () { hidePreview(); openBook(p.id); });
      slot.appendChild(b); sh.appendChild(slot);
    });
  }

  /* ----- vista de llista ----- */
  function card(item) {
    var c = el("article", "card " + (item.level === "Grau" ? "lvl-grau" : "lvl-master") + (isSolo(item.team) ? " team-solo" : " team-group"));
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
    c.addEventListener(touch ? "click" : "dblclick", function () { var s = window.getSelection && window.getSelection(); if (s) s.removeAllRanges(); openBook(item.id); });
    c.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openBook(item.id); } });
    return c;
  }
  function press(box, val) {
    Array.prototype.forEach.call(box.children, function (b) { b.setAttribute("aria-pressed", String(b.dataset.v === val)); });
  }
  function renderProjects() {
    var P = D.profiles[profile];
    press(pc, profile); press($("f-level"), F.level); press($("f-year"), F.year); press($("f-team"), F.team); press($("view-mode"), viewMode);
    $("headline").textContent = profile === "all" ? "" : T(P.headline);   // amb «Tots» el panell es queda més baix
    var kw = clear($("keywords"));
    if (profile !== "all") P.keywords.forEach(function (k) { kw.appendChild(el("li", null, T(k))); });
    current = visible.filter(function (p) {
      return (profile === "all" || (p.types || []).indexOf(profile) >= 0) &&   // el perfil també filtra
             (F.level === "all" || p.level === F.level) &&
             (F.year === "all" || p.year === F.year) &&
             (F.team === "all" || (F.team === "solo") === isSolo(p.team));
    }).map(function (p, i) { return { p: p, i: i }; })
      .sort(function (a, b) { return (b.p.year - a.p.year) || (score(b.p) - score(a.p)) || (a.i - b.i); })
      .map(function (x) { return x.p; });
    var shelfOn = viewMode === "shelf";
    $("shelf-wrap").hidden = !shelfOn || !current.length;
    $("projects").hidden = shelfOn;
    if (shelfOn) renderShelf();
    else { var box = clear($("projects")); current.forEach(function (p) { box.appendChild(card(p)); }); }
    $("empty").hidden = current.length > 0;
    var active = profile !== "all" || F.level !== "all" || F.year !== "all" || F.team !== "all";
    $("clear").disabled = !active;
    $("count").textContent = (active ? U("showing")(current.length, visible.length) : visible.length + U("nProjects")) +
      (shelfOn ? "" : " · " + U("dbl"));
    if (typeof topBtn !== "undefined") updateTop();
  }

  /* ============ LLIBRE OBERT ============ */
  var bookDlg = $("book"), bookEl = $("book-el"), order = [], idx = 0, turning = false;
  var seen = {};   // llibres que ja s'han obert (es veuen més apagats a la prestatgeria i a la llista)
  bookDlg.addEventListener("close", function () { renderProjects(); });
  function fillBook(p) {
    seen[p.id] = true;
    bookEl.classList.remove("master", "grau"); bookEl.classList.add(lv(p));
    var L = clear($("page-left")), R = clear($("page-right"));
    if (p.deck) {
      var v = el("video"); v.controls = true; v.preload = "none"; v.setAttribute("playsinline", "");
      v.src = p.deck.video; if (p.deck.poster) v.poster = p.deck.poster; L.appendChild(v);
      var chs = p.deck.chapters;
      if (chs && chs.length && p.deck.thumbs) {   // tira de diapositives: un clic salta a aquell punt del vídeo
        var strip = el("div", "chapters"); strip.setAttribute("role", "group"); strip.setAttribute("aria-label", U("slides"));
        var btns = chs.map(function (t, i) {
          var b = el("button", "chap"); b.type = "button"; b.setAttribute("aria-label", U("slide") + " " + (i + 1));
          var im = el("img"); im.src = p.deck.thumbs + String(i + 1).padStart(2, "0") + ".jpg"; im.alt = ""; im.loading = "lazy";
          b.appendChild(im); b.appendChild(el("span", null, String(i + 1)));
          b.addEventListener("click", function () { v.currentTime = t + 0.05; var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); });
          strip.appendChild(b); return b;
        });
        v.addEventListener("timeupdate", function () {
          var cur = 0; chs.forEach(function (t, i) { if (v.currentTime >= t) cur = i; });
          btns.forEach(function (b, i) { b.classList.toggle("on", i === cur); });
        });
        L.appendChild(strip);
      }
    } else if (p.img) {
      var im = el("img", "cover-img"); im.src = p.img; im.alt = ""; L.appendChild(im);
    } else {
      var cv = el("div", "cover"); cv.appendChild(decos(p.types));
      cv.appendChild(el("b", null, T(p.spine || p.title)));
      cv.appendChild(el("span", null, (p.level === "Grau" ? U("grau") : U("master")) + " · " + p.year));
      L.appendChild(cv);
    }
    var h = el("h2", null, T(p.title)); h.id = "book-title"; L.appendChild(h);
    var m = el("p", "meta"); m.appendChild(levelTag(p.level)); m.appendChild(yearTag(p.year)); m.appendChild(teamTag(p.team));
    L.appendChild(m);
    if (p.context) L.appendChild(el("p", "context", T(p.context)));
    if (p.role) L.appendChild(el("p", "role", U("role") + T(p.role)));

    R.appendChild(el("p", "summary", T(p.summary)));
    if (p.did && p.did.length) {
      R.appendChild(el("h3", null, U("did")));
      var ul = el("ul", "pts"); p.did.forEach(function (t) { ul.appendChild(el("li", null, T(t))); }); R.appendChild(ul);
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
    L.scrollTop = 0; R.scrollTop = 0;
    $("book-count").textContent = (idx + 1) + " / " + order.length;
    $("book-pos").textContent = profile === "all" ? U("projects") : T(D.profiles[profile].label);
    $("book-prev").disabled = idx === 0;
    $("book-next").disabled = idx === order.length - 1;
  }
  function openBook(id) {
    order = current.length ? current.slice() : visible.slice();
    idx = Math.max(0, order.map(function (p) { return p.id; }).indexOf(id));
    if (order[idx].id !== id) { var p0 = byId(id); if (p0) { order.unshift(p0); idx = 0; } }
    fillBook(order[idx]);
    if (!bookDlg.open) { if (bookDlg.showModal) bookDlg.showModal(); else bookDlg.setAttribute("open", ""); }
  }
  function turn(dir) {
    var n = idx + dir;
    if (turning || n < 0 || n >= order.length) return;
    var vids = bookEl.querySelectorAll("video"); vids.forEach(function (v) { v.pause(); });
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { idx = n; fillBook(order[idx]); return; }
    turning = true;
    var cls = dir > 0 ? "flip-next" : "flip-prev";
    bookEl.classList.remove("flip-next", "flip-prev"); void bookEl.offsetWidth; bookEl.classList.add(cls);
    setTimeout(function () { idx = n; fillBook(order[idx]); }, 280);
    setTimeout(function () { bookEl.classList.remove(cls); turning = false; }, 620);
  }
  $("book-prev").addEventListener("click", function () { turn(-1); });
  $("book-next").addEventListener("click", function () { turn(1); });
  $("book-close").addEventListener("click", function () { bookDlg.close(); });
  bookDlg.addEventListener("click", function (e) { if (e.target === bookDlg) bookDlg.close(); });
  bookDlg.addEventListener("keydown", function (e) {
    if (e.target.tagName === "VIDEO") return;
    if (e.key === "ArrowRight") { turn(1); e.preventDefault(); }
    if (e.key === "ArrowLeft") { turn(-1); e.preventDefault(); }
  });
  bookDlg.addEventListener("close", function () { bookEl.querySelectorAll("video").forEach(function (v) { v.pause(); }); });

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
    press(langBox, lang);
  }
  /* fletxa per tornar a dalt: només a la llista de projectes quan hi ha més de 3 targetes */
  var topBtn = el("button", "to-top"); topBtn.type = "button"; topBtn.setAttribute("aria-label", "↑");
  topBtn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  topBtn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  document.body.appendChild(topBtn);
  function updateTop() {
    var homeTop = !$("inici").hidden && (window.innerWidth > 700 ? $("hero").getBoundingClientRect().bottom > window.innerHeight * 0.75 : window.scrollY < 30);
    document.body.classList.toggle("hero-top", homeTop);
    var cards = document.querySelectorAll("#projects .card").length;
    var on = viewMode === "list" && !$("projects").hidden && $("projectes").offsetParent !== null && cards > 3 && window.scrollY > 200;
    topBtn.classList.toggle("on", on);
  }
  window.addEventListener("scroll", updateTop, { passive: true });
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
