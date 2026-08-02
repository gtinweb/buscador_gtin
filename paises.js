"use strict";
/*
 * =========================================================
 * PAÍSES
 * =========================================================
 *
 * code = ISO 3166-1 alpha-2
 *
 * name = nombre mostrado en la aplicación
 *
 * La clave es la forma normalizada que utilizamos
 * internamente para comparar los nombres recibidos
 * de Open Food Facts.
 *
 * =========================================================
 */
const COUNTRIES = {
  /* Europa */
  spain: {
    name: "España",
    code: "es"
    },
  france: {
    name: "Francia",
    code: "fr"
    },
  germany: {
    name: "Alemania",
    code: "de"
    },
  italy: {
    name: "Italia",
    code: "it"
    },
  portugal: {
    name: "Portugal",
    code: "pt"
    },
  belgium: {
    name: "Bélgica",
    code: "be"
    },
  netherlands: {
    name: "Países Bajos",
    code: "nl"
    },
  luxembourg: {
    name: "Luxemburgo",
    code: "lu"
    },
  andorra: {
    name: "Andorra",
    code: "ad"
    },
  switzerland: {
    name: "Suiza",
    code: "ch"
    },
  austria: {
    name: "Austria",
    code: "at"
    },
  unitedkingdom: {
    name: "Reino Unido",
    code: "gb"
    },
  greatbritain: {
    name: "Reino Unido",
    code: "gb"
    },
  ireland: {
    name: "Irlanda",
    code: "ie"
    },
  denmark: {
    name: "Dinamarca",
    code: "dk"
    },
  sweden: {
    name: "Suecia",
    code: "se"
    },
  norway: {
    name: "Noruega",
    code: "no"
    },
  finland: {
    name: "Finlandia",
    code: "fi"
    },
  iceland: {
    name: "Islandia",
    code: "is"
    },
  poland: {
    name: "Polonia",
    code: "pl"
    },
  czechrepublic: {
    name: "Chequia",
    code: "cz"
    },
  czechia: {
    name: "Chequia",
    code: "cz"
    },
  slovakia: {
    name: "Eslovaquia",
    code: "sk"
    },
  hungary: {
    name: "Hungría",
    code: "hu"
    },
  romania: {
    name: "Rumanía",
    code: "ro"
    },
  bulgaria: {
    name: "Bulgaria",
    code: "bg"
    },
  croatia: {
    name: "Croacia",
    code: "hr"
    },
  slovenia: {
    name: "Eslovenia",
    code: "si"
    },
  bosniaherzegovina: {
    name: "Bosnia-Herzegovina",
    code: "ba"
    },
  montenegro: {
    name: "Montenegro",
    code: "me"
    },
  serbia: {
    name: "Serbia",
    code: "rs"
    },
  greece: {
    name: "Grecia",
    code: "gr"
    },
  malta: {
    name: "Malta",
    code: "mt"
    },
  cyprus: {
    name: "Chipre",
    code: "cy"
    },
  estonia: {
    name: "Estonia",
    code: "ee"
    },
  latvia: {
    name: "Letonia",
    code: "lv"
    },
  lithuania: {
    name: "Lituania",
    code: "lt"
    },
  ukraine: {
    name: "Ucrania",
    code: "ua"
    },
  moldova: {
    name: "Moldavia",
    code: "md"
    },
  russia: {
    name: "Rusia",
    code: "ru"
    },
  belarus: {
    name: "Bielorrusia",
    code: "by"
    },
  turkey: {
    name: "Turquía",
    code: "tr"
    },
  /* Asia */
  china: {
    name: "China",
    code: "cn"
    },
  japan: {
    name: "Japón",
    code: "jp"
    },
  southkorea: {
    name: "Corea del Sur",
    code: "kr"
    },
  korea: {
    name: "Corea del Sur",
    code: "kr"
    },
  northkorea: {
    name: "Corea del Norte",
    code: "kp"
    },
  india: {
    name: "India",
    code: "in"
    },
  pakistan: {
    name: "Pakistán",
    code: "pk"
    },
  vietnam: {
    name: "Vietnam",
    code: "vn"
    },
  thailand: {
    name: "Tailandia",
    code: "th"
    },
  indonesia: {
    name: "Indonesia",
    code: "id"
    },
  malaysia: {
    name: "Malasia",
    code: "my"
    },
  singapore: {
    name: "Singapur",
    code: "sg"
    },
  philippines: {
    name: "Filipinas",
    code: "ph"
    },
  hongkong: {
    name: "Hong Kong",
    code: "hk"
    },
  macao: {
    name: "Macao",
    code: "mo"
    },
  israel: {
    name: "Israel",
    code: "il"
    },
  /* América */
  unitedstates: {
    name: "Estados Unidos",
    code: "us"
    },
  usa: {
    name: "Estados Unidos",
    code: "us"
    },
  canada: {
    name: "Canadá",
    code: "ca"
    },
  mexico: {
    name: "México",
    code: "mx"
    },
  cuba: {
    name: "Cuba",
    code: "cu"
    },
  colombia: {
    name: "Colombia",
    code: "co"
    },
  venezuela: {
    name: "Venezuela",
    code: "ve"
    },
  ecuador: {
    name: "Ecuador",
    code: "ec"
    },
  peru: {
    name: "Perú",
    code: "pe"
    },
  bolivia: {
    name: "Bolivia",
    code: "bo"
    },
  chile: {
    name: "Chile",
    code: "cl"
    },
  argentina: {
    name: "Argentina",
    code: "ar"
    },
  uruguay: {
    name: "Uruguay",
    code: "uy"
    },
  paraguay: {
    name: "Paraguay",
    code: "py"
    },
  brazil: {
    name: "Brasil",
    code: "br"
    },
  /* Oceanía */
  australia: {
    name: "Australia",
    code: "au"
    },
  newzealand: {
    name: "Nueva Zelanda",
    code: "nz"
    }
  };