"use strict";


/*
 * =========================================================
 * Elementos de la interfaz
 * =========================================================
 */

const form =
    document.getElementById("barcode-form");

const barcodeInput =
    document.getElementById("barcode");

const scanButton =
    document.getElementById("scan-button");

const result =
    document.getElementById("result");

const productName =
    document.getElementById("product-name");

const productCode =
    document.getElementById("product-code");

const productBrand =
    document.getElementById("product-brand");

const productCountries =
    document.getElementById("product-countries");

const productOrigins =
    document.getElementById("product-origins");

const productManufacturing =
    document.getElementById("product-manufacturing");

const productGs1 =
    document.getElementById("product-gs1");


/*
 * =========================================================
 * Países
 * =========================================================
 */

function countryCode(tag) {

    if (!tag) {
        return "00";
    }

    const value =
        tag
            .toLowerCase()
            .replace(/^.*:/, "")
            .replaceAll("-", "");

    return COUNTRIES[value]?.code || "00";
}


function countryName(tag) {

    if (!tag) {
        return "Desconocido";
    }

    const value =
        tag
            .toLowerCase()
            .replace(/^.*:/, "")
            .replaceAll("-", "");

    return COUNTRIES[value]?.name || value;
}


/*
 * =========================================================
 * Bandera
 * =========================================================
 */

function countryFlag(code) {

    if (!code) {
        code = "00";
    }

    return `<i class="ico-${code}" aria-hidden="true"></i>`;
}


function countryLabel(tag) {

    const code =
        countryCode(tag);

    const name =
        countryName(tag);

    return `
        ${countryFlag(code)}
        <span>${name}</span>
    `;
}


/*
 * =========================================================
 * GS1
 * =========================================================
 */

function getGs1Organisation(gtin) {

    const prefix =
        gtin.substring(0, 3);

    return GS1_PREFIXES[prefix] || {

        /*
         * No identificado.
         */

        name: "(GS1 desconocido)",
        country: "00"
    };
}


function showGs1(gs1) {

    if (!productGs1) {
        return;
    }

    productGs1.innerHTML = `
        ${countryFlag(gs1.country)}
        <span>${gs1.name}</span>
    `;
}


/*
 * =========================================================
 * Open Food Facts
 * =========================================================
 */

async function getProduct(gtin) {

    const url =
        "https://world.openfoodfacts.org/api/v2/product/" +
        encodeURIComponent(gtin) +
        ".json";

    const response =
        await fetch(url);

    if (!response.ok) {
        throw new Error(
            `HTTP ${response.status}`
        );
    }

    return response.json();
}


/*
 * =========================================================
 * Limpiar resultado
 * =========================================================
 */

function clearResult() {

    productName.textContent = "—";
    productCode.textContent = "—";
    productBrand.textContent = "—";
    productCountries.innerHTML = "—";
    productOrigins.innerHTML = "—";
    productManufacturing.innerHTML = "—";

    if (productGs1) {
        productGs1.innerHTML = "—";
    }
}


/*
 * =========================================================
 * Mostrar producto
 * =========================================================
 */

function showProduct(data, gs1) {

    const product =
        data.product;


    productName.textContent =
        product.product_name ||
        "Sin nombre";


    productBrand.textContent =
        product.brands ||
        "—";


    /*
     * Países de venta
     */

    if (
        product.countries_tags &&
        product.countries_tags.length
    ) {

        productCountries.innerHTML =
            product.countries_tags
                .map(countryLabel)
                .join("<br>");

    } else {

        productCountries.innerHTML =
            "—";
    }


    /*
     * Origen
     */

    if (
        product.origins_tags &&
        product.origins_tags.length
    ) {

        productOrigins.innerHTML =
            product.origins_tags
                .map(countryLabel)
                .join("<br>");

    } else if (
        product.origins
    ) {

        productOrigins.textContent =
            product.origins;

    } else {

        productOrigins.innerHTML =
            "—";
    }


    /*
     * Fabricación
     */

    productManufacturing.textContent =
        product.manufacturing_places ||
        "—";


    /*
     * GS1
     */

    showGs1(gs1);
}


/*
 * =========================================================
 * Consulta
 * =========================================================
 */

async function lookupBarcode(gtin) {

    /*
     * Información GS1 local.
     *
     * Esto funciona aunque Internet esté caído.
     */

    const gs1 =
        getGs1Organisation(gtin);


    result.hidden = false;

    clearResult();

    productCode.textContent =
        gtin;

    showGs1(gs1);


    /*
     * Consulta Open Food Facts.
     */

    try {

        const data =
            await getProduct(gtin);


        /*
         * Producto encontrado.
         */

        if (
            data &&
            data.status === 1 &&
            data.product
        ) {

            showProduct(
                data,
                gs1
            );

            return;
        }


        /*
         * OFF responde correctamente,
         * pero no conoce el producto.
         */

        productName.textContent =
            "Producto no encontrado";

    } catch (error) {

        console.error(
            "Open Food Facts:",
            error
        );


        /*
         * La información GS1 se conserva.
         */

        productName.textContent =
            "Producto no disponible en Open Food Facts";
    }
}


/*
 * =========================================================
 * Formulario
 * =========================================================
 */

form.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        /*
         * type="number" puede devolver el valor
         * como cadena igualmente, pero nos aseguramos
         * de eliminar cualquier espacio.
         */

        const gtin =
            barcodeInput.value.trim();


        if (!gtin) {

            result.hidden = false;

            clearResult();

            productName.textContent =
                "Introduce un código de barras.";

            barcodeInput.focus();

            return;
        }


        lookupBarcode(gtin);
    }
);


/*
 * =========================================================
 * Escáner nativo del navegador
 * =========================================================
 *
 * NO utilizamos ninguna librería.
 *
 * Si BarcodeDetector no existe, simplemente no
 * ofrecemos el botón de escaneo.
 * =========================================================
 */

if (
    "BarcodeDetector" in window
) {

    scanButton.hidden = false;


    scanButton.addEventListener(
        "click",
        async () => {

            /*
             * Comprobamos qué formatos soporta
             * el navegador.
             */

            let formats;

            try {

                formats =
                    await BarcodeDetector.getSupportedFormats();

            } catch (error) {

                console.error(
                    "No se pueden obtener los formatos:",
                    error
                );

                return;
            }


            /*
             * Sólo nos interesan códigos de productos.
             */

            const wantedFormats = [
                "ean_13",
                "ean_8",
                "upc_a",
                "upc_e"
            ];


            const supported =
                wantedFormats.filter(
                    format =>
                        formats.includes(format)
                );


            if (!supported.length) {

                return;
            }


            const detector =
                new BarcodeDetector({
                    formats: supported
                });


            /*
             * Pedimos acceso a la cámara.
             */

            let stream;

            try {

                stream =
                    await navigator.mediaDevices.getUserMedia({
                        video: {
                            facingMode: {
                                ideal: "environment"
                            }
                        }
                    });

            } catch (error) {

                console.error(
                    "No se pudo acceder a la cámara:",
                    error
                );

                return;
            }


            /*
             * Creamos temporalmente un vídeo.
             *
             * No necesitamos añadirlo permanentemente
             * al DOM.
             */

            const video =
                document.createElement("video");

            video.setAttribute(
                "playsinline",
                ""
            );

            video.srcObject =
                stream;


            try {

                await video.play();

            } catch (error) {

                stream
                    .getTracks()
                    .forEach(
                        track =>
                            track.stop()
                    );

                return;
            }


            /*
             * Buscamos el código periódicamente.
             */

            const scan =
                async () => {

                    if (
                        video.readyState <
                        HTMLMediaElement.HAVE_ENOUGH_DATA
                    ) {

                        requestAnimationFrame(scan);

                        return;
                    }


                    try {

                        const detected =
                            await detector.detect(video);


                        if (
                            detected.length
                        ) {

                            const value =
                                detected[0].rawValue;


                            /*
                             * Detenemos la cámara.
                             */

                            stream
                                .getTracks()
                                .forEach(
                                    track =>
                                        track.stop()
                                );


                            /*
                             * Rellenamos el campo.
                             */

                            barcodeInput.value =
                                value;


                            /*
                             * Ejecutamos la misma
                             * consulta que si lo
                             * hubiese escrito.
                             */

                            lookupBarcode(value);

                            return;
                        }

                    } catch (error) {

                        console.error(
                            "Error leyendo código:",
                            error
                        );
                    }


                    requestAnimationFrame(scan);
                };


            requestAnimationFrame(scan);
        }
    );

}
