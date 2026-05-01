const urlAPI = "https://fakestoreapi.com/products";

function esResValido(response, idNum) {
    if (!response.ok) {
        console.log(`❌ Error con ID ${idNum} - Código: ${response.status}`);
        return false;
    }
    return true;
}

export async function obtenerProductos() {
    try {
        const res = await fetch(urlAPI);
        return await res.json();
    } catch (error) {
        console.error("Error al obtener productos:", error);
    }
}

export async function obtenerProductoPorId(id) {
    try {
        const res = await fetch(`${urlAPI}/${id}`);
        if (!esResValido(res, id)) return null;
        return await res.json();
    } catch (error) {
        console.error("Error al obtener producto:", error);
    }
}

export async function agregarProducto(producto) {
    try {
        const res = await fetch(urlAPI, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });

        return await res.json();
    } catch (error) {
        console.error("Error al agregar producto:", error);
    }
}

export async function eliminarProducto(id) {
    try {
        const res = await fetch(`${urlAPI}/${id}`, {
            method: "DELETE"
        });

        if (!esResValido(res, id)) return null;
        return await res.json();
    } catch (error) {
        console.error("Error al eliminar producto:", error);
    }
}

export async function actualizarProducto(id, producto) {
    try {
        const res = await fetch(`${urlAPI}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });

        if (!esResValido(res, id)) return null;
        return await res.json();
    } catch (error) {
        console.error("Error al actualizar producto:", error);
    }
}