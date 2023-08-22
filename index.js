

<script>
    // Crear un array de objetos con información de productos
    let productos = [
        { id: 1, nombre: "Camiseta", precio: 20 },
        { id: 2, nombre: "Pantalón", precio: 40 } ,
        { id: 3, nombre: "Zapatos", precio: 60 } ,
        { id: 4, nombre: "Sombrero", precio: 15 } ,
        { id: 5, nombre: "Bufanda", precio: 10 } ,
    ];

    // Función para mostrar la información de los productos
    function mostrarProductos(array) {
        console.log("Información de productos:");
        array.forEach(function(producto) {
            console.log("ID:", producto.id, "- Nombre:", producto.nombre, "- Precio:", producto.precio);
        });
    }

    // Pedir un precio máximo y mostrar los productos por debajo de ese precio
    let precioMaximo = parseFloat(prompt("Ingresa un precio máximo para filtrar los productos:"));
    let productosFiltrados = productos.filter(function(producto) {
        return producto.precio <= precioMaximo;
    });

    // Mostrar los productos filtrados
    if (productosFiltrados.length > 0) {
        mostrarProductos(productosFiltrados);
    } else {
        console.log("No se encontraron productos por debajo de ese precio.");
    }

    // Función de orden superior para buscar un producto por nombre
    function buscarProductoPorNombre(array, nombre) {
        return array.find(function(producto) {
            return producto.nombre.toLowerCase() === nombre.toLowerCase();
        });
    }

    // Pedir un nombre de producto y buscar el producto
    let nombreBusqueda = prompt("Ingresa un nombre de producto para buscar:");
    let productoEncontrado = buscarProductoPorNombre(productos, nombreBusqueda);

    // Mostrar el producto encontrado o un mensaje si no se encontró
    if (productoEncontrado) {
        alert("Producto encontrado:\nID: " + productoEncontrado.id + "\nNombre: " + productoEncontrado.nombre + "\nPrecio: $" + productoEncontrado.precio);
    } else {
        alert("Producto no encontrado.");
    }
</script>

