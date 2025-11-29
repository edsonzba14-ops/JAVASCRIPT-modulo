const transporte = () => {
    const listaTransporte = ["🚗", "🚙", "🚘", "🚕", "🚓"];

    const top = (item) => "top" + item;
    const listaMap = listaTransporte.map(top);

    console.log(listaMap);
    
};

transporte();