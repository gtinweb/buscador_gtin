"use strict";


/*
 * =========================================================
 * PREFIJOS GS1
 * =========================================================
 *
 * Fuente:
 * GS1 Company Prefix
 *
 * https://www.gs1.org/standards/id-keys/company-prefix
 *
 * IMPORTANTE:
 *
 * El prefijo GS1 indica la organización GS1 que asignó
 * el prefijo a la empresa.
 *
 * NO indica el país de fabricación del producto.
 *
 * =========================================================
 *
 * min / max:
 *
 *     rango numérico incluido
 *
 * Ejemplo:
 *
 *     840 - 849 → GS1 España
 *
 * Un prefijo único:
 *
 *     560 → GS1 Portugal
 *
 * =========================================================
 */


const GS1_PREFIXES = [

    /* -----------------------------------------------------
       Estados Unidos
       ----------------------------------------------------- */

    {
        min: 0,
        max: 19,
        name: "GS1 Estados Unidos",
        country: "us"
    },


    {
        min: 30,
        max: 39,
        name: "GS1 Estados Unidos",
        country: "us"
    },


    {
        min: 60,
        max: 139,
        name: "GS1 Estados Unidos",
        country: "us"
    },


    /* -----------------------------------------------------
       Europa
       ----------------------------------------------------- */

    {
        min: 300,
        max: 379,
        name: "GS1 Francia",
        country: "fr"
    },


    {
        min: 380,
        max: 380,
        name: "GS1 Bulgaria",
        country: "bg"
    },


    {
        min: 383,
        max: 383,
        name: "GS1 Eslovenia",
        country: "si"
    },


    {
        min: 385,
        max: 385,
        name: "GS1 Croacia",
        country: "hr"
    },


    {
        min: 387,
        max: 387,
        name: "GS1 Bosnia-Herzegovina",
        country: "ba"
    },


    {
        min: 389,
        max: 389,
        name: "GS1 Montenegro",
        country: "me"
    },


    {
        min: 400,
        max: 440,
        name: "GS1 Alemania",
        country: "de"
    },


    {
        min: 450,
        max: 459,
        name: "GS1 Japón",
        country: "jp"
    },


    {
        min: 490,
        max: 499,
        name: "GS1 Japón",
        country: "jp"
    },


    {
        min: 460,
        max: 469,
        name: "GS1 Rusia",
        country: "ru"
    },


    {
        min: 474,
        max: 474,
        name: "GS1 Estonia",
        country: "ee"
    },


    {
        min: 475,
        max: 475,
        name: "GS1 Letonia",
        country: "lv"
    },


    {
        min: 477,
        max: 477,
        name: "GS1 Lituania",
        country: "lt"
    },


    {
        min: 478,
        max: 478,
        name: "GS1 Uzbekistán",
        country: "uz"
    },


    {
        min: 479,
        max: 479,
        name: "GS1 Sri Lanka",
        country: "lk"
    },


    {
        min: 480,
        max: 480,
        name: "GS1 Filipinas",
        country: "ph"
    },


    {
        min: 481,
        max: 481,
        name: "GS1 Bielorrusia",
        country: "by"
    },


    {
        min: 482,
        max: 482,
        name: "GS1 Ucrania",
        country: "ua"
    },


    {
        min: 484,
        max: 484,
        name: "GS1 Moldavia",
        country: "md"
    },


    {
        min: 485,
        max: 485,
        name: "GS1 Armenia",
        country: "am"
    },


    {
        min: 486,
        max: 486,
        name: "GS1 Georgia",
        country: "ge"
    },


    {
        min: 487,
        max: 487,
        name: "GS1 Kazajistán",
        country: "kz"
    },


    {
        min: 488,
        max: 488,
        name: "GS1 Tayikistán",
        country: "tj"
    },


    {
        min: 489,
        max: 489,
        name: "GS1 Hong Kong",
        country: "hk"
    },


    {
        min: 500,
        max: 509,
        name: "GS1 Reino Unido",
        country: "gb"
    },


    {
        min: 520,
        max: 521,
        name: "GS1 Grecia",
        country: "gr"
    },


    {
        min: 528,
        max: 528,
        name: "GS1 Líbano",
        country: "lb"
    },


    {
        min: 529,
        max: 529,
        name: "GS1 Chipre",
        country: "cy"
    },


    {
        min: 530,
        max: 530,
        name: "GS1 Albania",
        country: "al"
    },


    {
        min: 531,
        max: 531,
        name: "GS1 Macedonia del Norte",
        country: "mk"
    },


    {
        min: 535,
        max: 535,
        name: "GS1 Malta",
        country: "mt"
    },


    {
        min: 539,
        max: 539,
        name: "GS1 Irlanda",
        country: "ie"
    },


    {
        min: 540,
        max: 549,
        name: "GS1 Bélgica / Luxemburgo",
        country: "be"
    },


    {
        min: 560,
        max: 560,
        name: "GS1 Portugal",
        country: "pt"
    },


    {
        min: 569,
        max: 569,
        name: "GS1 Islandia",
        country: "is"
    },


    {
        min: 570,
        max: 579,
        name: "GS1 Dinamarca",
        country: "dk"
    },


    {
        min: 590,
        max: 590,
        name: "GS1 Polonia",
        country: "pl"
    },


    {
        min: 594,
        max: 594,
        name: "GS1 Rumanía",
        country: "ro"
    },


    {
        min: 599,
        max: 599,
        name: "GS1 Hungría",
        country: "hu"
    },


    {
        min: 640,
        max: 649,
        name: "GS1 Finlandia",
        country: "fi"
    },


    /* -----------------------------------------------------
       Asia
       ----------------------------------------------------- */

    {
        min: 680,
        max: 681,
        name: "GS1 China",
        country: "cn"
    },


    {
        min: 690,
        max: 699,
        name: "GS1 China",
        country: "cn"
    },


    {
        min: 700,
        max: 709,
        name: "GS1 Noruega",
        country: "no"
    },


    {
        min: 729,
        max: 729,
        name: "GS1 Israel",
        country: "il"
    },


    {
        min: 730,
        max: 739,
        name: "GS1 Suecia",
        country: "se"
    },


    {
        min: 750,
        max: 750,
        name: "GS1 México",
        country: "mx"
    },


    {
        min: 754,
        max: 755,
        name: "GS1 Canadá",
        country: "ca"
    },


    {
        min: 760,
        max: 769,
        name: "GS1 Suiza",
        country: "ch"
    },


    /* -----------------------------------------------------
       América Latina
       ----------------------------------------------------- */

    {
        min: 759,
        max: 759,
        name: "GS1 Venezuela",
        country: "ve"
    },


    {
        min: 770,
        max: 771,
        name: "GS1 Colombia",
        country: "co"
    },


    {
        min: 773,
        max: 773,
        name: "GS1 Uruguay",
        country: "uy"
    },


    {
        min: 775,
        max: 775,
        name: "GS1 Perú",
        country: "pe"
    },


    {
        min: 777,
        max: 777,
        name: "GS1 Bolivia",
        country: "bo"
    },


    {
        min: 778,
        max: 779,
        name: "GS1 Argentina",
        country: "ar"
    },


    {
        min: 780,
        max: 780,
        name: "GS1 Chile",
        country: "cl"
    },


    {
        min: 784,
        max: 784,
        name: "GS1 Paraguay",
        country: "py"
    },


    {
        min: 786,
        max: 786,
        name: "GS1 Ecuador",
        country: "ec"
    },


    {
        min: 789,
        max: 790,
        name: "GS1 Brasil",
        country: "br"
    },


    /* -----------------------------------------------------
       Italia / España
       ----------------------------------------------------- */

    {
        min: 800,
        max: 839,
        name: "GS1 Italia",
        country: "it"
    },


    {
        min: 840,
        max: 849,
        name: "GS1 España",
        country: "es"
    },


    /* -----------------------------------------------------
       Europa central y oriental
       ----------------------------------------------------- */

    {
        min: 850,
        max: 850,
        name: "GS1 Cuba",
        country: "cu"
    },


    {
        min: 858,
        max: 858,
        name: "GS1 Eslovaquia",
        country: "sk"
    },


    {
        min: 859,
        max: 859,
        name: "GS1 Chequia",
        country: "cz"
    },


    {
        min: 860,
        max: 860,
        name: "GS1 Serbia",
        country: "rs"
    },


    {
        min: 865,
        max: 865,
        name: "GS1 Mongolia",
        country: "mn"
    },


    {
        min: 867,
        max: 867,
        name: "GS1 Corea del Norte",
        country: "kp"
    },


    {
        min: 868,
        max: 869,
        name: "GS1 Turquía",
        country: "tr"
    },


    {
        min: 870,
        max: 879,
        name: "GS1 Países Bajos",
        country: "nl"
    },


    {
        min: 880,
        max: 881,
        name: "GS1 Corea del Sur",
        country: "kr"
    },


    {
        min: 883,
        max: 883,
        name: "GS1 Myanmar",
        country: "mm"
    },


    {
        min: 884,
        max: 884,
        name: "GS1 Camboya",
        country: "kh"
    },


    {
        min: 885,
        max: 885,
        name: "GS1 Tailandia",
        country: "th"
    },


    {
        min: 888,
        max: 888,
        name: "GS1 Singapur",
        country: "sg"
    },


    {
        min: 890,
        max: 890,
        name: "GS1 India",
        country: "in"
    },


    {
        min: 893,
        max: 893,
        name: "GS1 Vietnam",
        country: "vn"
    },


    {
        min: 896,
        max: 896,
        name: "GS1 Pakistán",
        country: "pk"
    },


    {
        min: 899,
        max: 899,
        name: "GS1 Indonesia",
        country: "id"
    },


    /* -----------------------------------------------------
       Oceanía
       ----------------------------------------------------- */

    {
        min: 900,
        max: 919,
        name: "GS1 Austria",
        country: "at"
    },


    {
        min: 930,
        max: 939,
        name: "GS1 Australia",
        country: "au"
    },


    {
        min: 940,
        max: 949,
        name: "GS1 Nueva Zelanda",
        country: "nz"
    },


    /* -----------------------------------------------------
       Otros
       ----------------------------------------------------- */

    {
        min: 950,
        max: 950,
        name: "GS1 Global Office",
        country: "00"
    },


    {
        min: 955,
        max: 955,
        name: "GS1 Malasia",
        country: "my"
    },


    {
        min: 958,
        max: 958,
        name: "GS1 Macao",
        country: "mo"
    },


    /*
     * Publicaciones
     */

    {
        min: 977,
        max: 977,
        name: "Publicaciones periódicas (ISSN)",
        country: "00"
    },


    /*
     * Libros
     */

    {
        min: 978,
        max: 979,
        name: "Libros (ISBN)",
        country: "00"
    },


    /*
     * Recibos de devolución
     */

    {
        min: 980,
        max: 980,
        name: "Recibos de devolución GS1",
        country: "00"
    },


    /*
     * Cupones
     */

    {
        min: 981,
        max: 983,
        name: "Cupones GS1",
        country: "00"
    }
];
