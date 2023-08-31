let saldo = 1000; // Saldo inicial en la cuenta del cliente

function mostrarMenu() {
    alert("¡Bienvenido a la tienda de ropa!\n" +
        "Tu saldo actual es: $" + saldo.toFixed(2) +
        "\nOpciones:\n" +
        "1. Ver productos\n" +
        "2. Comprar producto\n" +
        "3. Salir");
}

function verProductos() {
    alert("Productos disponibles:\n" +
        "1. Camiseta - $20.00\n" +
        "2. Pantalón - $40.00\n" +
        "3. Zapatos - $60.00");
}

function comprarProducto(producto, precio) {
    if (saldo >= precio) {
        saldo -= precio;
        alert("¡Compra exitosa!\nHas comprado un " + producto + ".\nSaldo restante: $" + saldo.toFixed(2));
    } else {
        alert("Saldo insuficiente para comprar este producto.");
    }
}

function tiendaRopa() {
    alert("¡Bienvenido a la tienda de ropa!");

    while (true) {
        mostrarMenu();
        let opcion = parseInt(prompt("Selecciona una opción:"));

        switch (opcion) {
            case 1:
                verProductos();
                break;
            case 2:
                let producto = prompt("¿Qué producto deseas comprar? (Camiseta/Pantalón/Zapatos)").toLowerCase();
                switch (producto) {
                    case "camiseta":
                        comprarProducto("camiseta", 20);
                        break;
                    case "pantalón":
                        comprarProducto("pantalón", 40);
                        break;
                    case "zapatos":
                        comprarProducto("zapatos", 60);
                        break;
                    default:
                        alert("Producto no válido.");
                }
                break;
            case 3:
                alert("Gracias por visitar la tienda de ropa. ¡Vuelve pronto!");
                return;
            default:
                alert("Opción no válida.");
        }
    }
}

tiendaRopa();


