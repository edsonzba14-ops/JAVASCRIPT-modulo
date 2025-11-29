const transporte = () => {
    const listaTransporte = ["🚗", "🚙", "🚘", "🚕", "🚓"];

    const fn = (item) => item === "🚓";

    const amiguinhos = listaTransporte.filter(fn);
    
    console.log(amiguinhos);
    
};

transporte();