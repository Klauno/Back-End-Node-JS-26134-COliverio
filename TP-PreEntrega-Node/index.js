const [, , method, endpoint, ...args] = process.argv;

const urlAPI = "https://fakestoreapi.com/products";

function esIdValido(id) {

    if (!id || isNaN(id) || Number(id) < 1) {
        console.log("❌ ID inválido");
        return false;
    }

    return true;
}

function validarProducto(title, price, category) {

    if (!title || !price || !category) {
        console.log("❌ Faltan datos");
        return false;
    }

    if (isNaN(price) || Number(price) <= 0) {
        console.log("❌ Precio inválido");
        return false;
    }

    return true;
}

function mostrarProducto(producto) {

    console.log("\n=======================");
    console.log(`ID: ${producto.id}`);
    console.log(`Producto: ${producto.title}`);
    console.log(`Precio: $${producto.price}`);
    console.log(`Categoría: ${producto.category}`);
    console.log("=======================\n");

}

async function main() {

    if (!method || !endpoint) {

        console.log("❌ Uso correcto:");
        console.log("npm run start GET products");
        return;
    }

    try {

        switch (method.toUpperCase()) {

            case "GET":

                if (endpoint === "products") {

                    const response = await fetch(urlAPI);
                    const productos = await response.json();

                    console.log("\n📦 LISTA DE PRODUCTOS\n");

                    productos.forEach(producto => {

                        console.log(
                            `${producto.id} | ${producto.title} | $${producto.price}`
                        );

                    });

                }

                else if (endpoint.startsWith("products/")) {

                    const id = endpoint.split("/")[1];

                    if (!esIdValido(id)) return;

                    const response = await fetch(`${urlAPI}/${id}`);
                    const producto = await response.json();

                    mostrarProducto(producto);

                }

                break;

            case "POST":

                if (endpoint === "products") {

                    const [title, price, category] = args;

                    if (!validarProducto(title, price, category)) return;

                    const nuevoProducto = {
                        title,
                        price: Number(price),
                        category
                    };

                    const response = await fetch(urlAPI, {

                        method: "POST",

                        headers: {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify(nuevoProducto)

                    });

                    const data = await response.json();

                    console.log("\n✅ Producto creado");

                    mostrarProducto(data);
                }

                break;

            case "DELETE":

                if (endpoint.startsWith("products/")) {

                    const id = endpoint.split("/")[1];

                    if (!esIdValido(id)) return;

                    const response = await fetch(`${urlAPI}/${id}`, {
                        method: "DELETE"
                    });

                    const data = await response.json();

                    console.log("\n🗑️ Producto eliminado");

                    mostrarProducto(data);
                }

                break;

            default:

                console.log("❌ Método inválido");

        }

    } catch (error) {

        console.error("🔥 Error:", error.message);

    }

}

main();