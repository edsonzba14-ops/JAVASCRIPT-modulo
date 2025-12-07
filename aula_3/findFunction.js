const transporte = () => {
    const listaTransporte = ["🚗", "🚙", "🚘", "🚕", "🚓"];

    const encontrado = listaTransporte.find((valor) => {
        return valor === "🚕"; // condição pra achar o táxi
    });

    console.log("Resultado do find:", encontrado);
};