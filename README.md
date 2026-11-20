# Portfoli — Ona Jie Bonet Garcia

Web estàtica (HTML + CSS + JS, sense dependències ni compilació).

## Com funcionen els enllaços per oferta

| Enllaç | Què mostra |
|---|---|
| `…/` | Tots els projectes, ordre general |
| `…/?p=scm` | Supply chain i anàlisi de dades |
| `…/?p=ops` | Operacions i millora contínua |
| `…/?p=qual` | Qualitat i estadística |
| `…/?p=iiot` | Automatització i IIoT |
| `…/?p=pm` | Gestió de projectes |
| `…/?p=scm&e=Eurofirms` | El mateix, amb la salutació «Selecció pensada per a Eurofirms» |
| `…/?l=es` / `…/?l=en` | Castellà / anglès (sense `l` = català). Es combina: `?l=es&p=scm&e=Eurofirms` |

| `…/?hero=b` | Portada B (plànol que es dibuixa). Sense `hero` = portada A. Compara-les a `compare.html` |
| `…/?p=scm#projectes` | Obre directament la pestanya Projectes (també `#experiencia`, `#formacio`, `#competencies`) |

Pestanyes: Inici (portada, sobre mi, projectes destacats, altres) · Experiència · Projectes · Formació · Competències (amb idiomes). Tots els textos són a `data.js` en tres idiomes (`{ ca, es, en }`); els textos fixos de la interfície són a l'inici d'`app.js` (`UI`).

Els botons de la pàgina també canvien de perfil i actualitzen l'URL.

## Com editar el contingut

Tot és a `data.js`:

- **Afegir un projecte**: copia un bloc de `projects` i canvia'l.
- **Canviar l'ordre per perfil**: ajusta `scores` (0–10) del projecte.
- **Crear un perfil nou**: afegeix-lo a `profiles` i una clau nova a `scores` dels projectes.
- **Mostrar el TFM quan l'acabis**: al bloc `tfm`, posa `hidden: false` i omple el resum i el «què vaig fer».
- **Publicar una presentació o un informe**: posa l'URL a `links.slides` / `links.report`.
- **Presentació visible dins la web** (com la de Marset): a PowerPoint, Fitxer → Exporta → Crea un vídeo (així es conserven les animacions i els vídeos), desa-la a `assets/<nom>/presentacio.mp4` amb una imatge de portada `poster.jpg`, i afegeix `deck: { video, poster }` al projecte. Treu abans els noms d'altres persones de la portada. GitHub Pages admet fitxers de fins a 100 MB.
- **Colors**: Màster = blau, Grau = taronja (barra lateral i etiqueta); any = violeta (2024), cian (2025), rosa (2026); els projectes d'equip tenen el fons gris clar i l'etiqueta fosca, els individuals fons blanc i etiqueta de contorn. Es canvien a l'inici de `style.css`.
- **Contacte**: omple `person.contact` (correu, LinkedIn, CV). Només es mostra el que no és buit.

## Publicar-la (gratis, GitHub Pages)

1. Crea un repositori públic a GitHub (per exemple `portfoli`) i puja-hi aquests fitxers.
2. Settings → Pages → Branch `main`, carpeta `/ (root)`.
3. L'enllaç serà `https://<usuari>.github.io/portfoli/`.

Per provar-la en local n'hi ha prou amb obrir `index.html` al navegador (doble clic); els paràmetres `?p=` es proven millor un cop publicada.

## Per revisar abans de publicar

- **Rols**: confirma el teu paper als projectes de grup (Marset, VRP, implantació, PLC). Ara hi surt només «equip de N».
- **Digitalització de cultius** i **Projecte d'innovació** (Creativitat) surten només amb informació general: sense dades concretes, noms ni xifres. Mantén-ho així si els amplies.
- **Confidencialitat**: Relats surt amb el seu nom, sense xifres, proveïdors ni màquines. El TFG surt sense el nom de l'empresa ni del producte.
- **No publicis** PDFs d'informes de grup sense el vistiplau dels companys.
- Les URLs amb `?e=` porten `noindex`; si vols que Google indexi el portfoli, treu la línia `robots` de `index.html`.
- **Pendent**: quadre de comandament de demostració (KPIs) per a ofertes de supply chain.
