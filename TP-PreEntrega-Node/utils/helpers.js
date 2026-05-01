export function esIdValido(id) {
    if (!id) {
        console.log("❌ Falta ID");
        return false;
    }
    if (isNaN(id) || id < 1) {
        console.log("❌ ID inválido");
        return false;
    }
    return true;
}