import {
    obtenerProductos,
    obtenerProductoPorId,
    agregarProducto,
    eliminarProducto,
    actualizarProducto
} from "./API/apiFakeStore.js";

import { esIdValido } from "./utils/helpers.js";

const args = process.argv.slice(2);
const metodo = args[0]?.toUpperCase();
const endpoint = args[1];
const params = args.slice(2);

function validarProducto(title, price, category) {
    if (!title || !price || !category) {
        console.log("❌ Faltan datos → uso: title price category");
        return false;
    }

    if (isNaN(price) || price <= 0) {
        console.log("❌ Precio inválido");
        return false;
    }

    return true;
}

function mostrarProducto(p) {
    console.log("=================================");
    console.log(`ID: ${p.id}`);
    console.log(`Nombre: ${p.title}`);
    console.log(`Precio: $${p.price}`);
    console.log(`Categoría: ${p.category}`);
    console.log("=================================");
}

async function main() {

    if (!metodo || !endpoint) {
        console.log("❌ Uso correcto:");
        console.log("npm run start GET products");
        return;
    }

    try {

        switch (metodo) {

            case "GET":

                if (endpoint === "products") {
                    const productos = await obtenerProductos();

                    if (!productos?.length) {
                        console.log("⚠️ No hay productos");
                        return;
                    }

                    console.log("\n📦 LISTA DE PRODUCTOS\n");

                    productos.forEach(p => {
                        console.log(`${p.id} | ${p.title} | $${p.price}`);
                    });

                    console.log("\n✅ Total:", productos.length);
                }

                else if (endpoint.startsWith("products/")) {
                    const id = endpoint.split("/")[1];
                    if (!esIdValido(id)) return;

                    const producto = await obtenerProductoPorId(id);

                    if (!producto) {
                        console.log("❌ Producto no encontrado");
                        return;
                    }

                    mostrarProducto(producto);
                }

                break;

            case "POST":

                if (endpoint === "products") {

                    const [title, price, category] = params;

                    if (!validarProducto(title, price, category)) return;

                    const nuevo = {
                        title,
                        price: Number(price),
                        category
                    };

                    const res = await agregarProducto(nuevo);

                    console.log("\n✅ Producto creado correctamente");
                    mostrarProducto(res);
                }

                break;

            case "DELETE":

                if (endpoint.startsWith("products/")) {

                    const id = endpoint.split("/")[1];
                    if (!esIdValido(id)) return;

                    const res = await eliminarProducto(id);

                    if (!res) {
                        console.log("❌ No se pudo eliminar");
                        return;
                    }

                    console.log("\n🗑️ Producto eliminado:");
                    mostrarProducto(res);
                }

                break;

            case "PUT":

                if (endpoint.startsWith("products/")) {

                    const id = endpoint.split("/")[1];
                    if (!esIdValido(id)) return;

                    const [title, price, category] = params;

                    if (!validarProducto(title, price, category)) return;

                    const actualizado = {
                        title,
                        price: Number(price),
                        category
                    };

                    const res = await actualizarProducto(id, actualizado);

                    if (!res) {
                        console.log("❌ No se pudo actualizar");
                        return;
                    }

                    console.log("\n✏️ Producto actualizado:");
                    mostrarProducto(res);
                }

                break;

            default:
                console.log("❌ Método inválido (GET, POST, PUT, DELETE)");
        }

    } catch (error) {
        console.error("🔥 Error inesperado:", error.message);
    }
}

main();