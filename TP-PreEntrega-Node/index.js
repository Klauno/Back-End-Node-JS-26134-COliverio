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

function mostrarUso() {
  console.log("❌ Uso correcto:");
  console.log("npm run start GET products");
  console.log("npm run start GET products/<id>");
  console.log('npm run start POST products "title" price category');
  console.log("npm run start DELETE products/<id>");
}

async function main() {
  if (!method || !endpoint) {
    mostrarUso();
    return;
  }

  try {
    switch (method.toUpperCase()) {
      case "GET":
        if (endpoint === "products") {
          const response = await fetch(urlAPI);

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }

          const productos = await response.json();
          console.log(productos);

        } else if (endpoint.startsWith("products/")) {

          const id = endpoint.split("/")[1];

          if (!esIdValido(id)) return;

          const response = await fetch(`${urlAPI}/${id}`);

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }

          const producto = await response.json();
          console.log(producto);

        } else {
          console.log("❌ Endpoint no reconocido");
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

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }

          const data = await response.json();
          console.log(data);

        } else {
          console.log("❌ Endpoint no reconocido para POST");
        }

        break;

      case "DELETE":
        if (endpoint.startsWith("products/")) {

          const id = endpoint.split("/")[1];

          if (!esIdValido(id)) return;

          const response = await fetch(`${urlAPI}/${id}`, {
            method: "DELETE"
          });

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }

          const data = await response.json();
          console.log(data);

        } else {
          console.log("❌ Endpoint no reconocido para DELETE");
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