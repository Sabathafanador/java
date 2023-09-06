document.addEventListener('DOMContentLoaded', () => {
    const productos = [
        { id: 1, nombre: 'Producto 1', precio: 19.99 },
        { id: 2, nombre: 'Producto 2', precio: 29.99 },
        { id: 3, nombre: 'Producto 3', precio: 9.99 },
        { id: 4, nombre: 'Producto 4', precio: 39.99 },
        { id: 5, nombre: 'Producto 5', precio: 14.99 },
        { id: 6, nombre: 'Producto 6', precio: 24.99 },
        { id: 7, nombre: 'Producto 7', precio: 49.99 },
        { id: 8, nombre: 'Producto 8', precio: 7.99 },
        { id: 9, nombre: 'Producto 9', precio: 29.99 },
        { id: 10, nombre: 'Producto 10', precio: 34.99 },
    ];

    const carrito = [];

    // Función para mostrar los productos en la página
    function mostrarProductos() {
        const productosContainer = document.getElementById('productos');
        productosContainer.innerHTML = '';

        productos.forEach((producto) => {
            const productoElement = document.createElement('div');
            productoElement.className = 'producto';
            productoElement.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio.toFixed(2)}</p>
                <button data-id="${producto.id}">Agregar al Carrito</button>
            `;

            productoElement.querySelector('button').addEventListener('click', agregarAlCarrito);
            productosContainer.appendChild(productoElement);
        });
    }

    // Función para agregar un producto al carrito
    function agregarAlCarrito(event) {
        const id = parseInt(event.target.getAttribute('data-id'));
        const producto = productos.find((p) => p.id === id);

        if (producto) {
            carrito.push(producto);
            actualizarCarrito();
        }
    }

    // Función para actualizar la lista de productos en el carrito
    function actualizarCarrito() {
        const carritoLista = document.getElementById('carrito-lista');
        const totalElement = document.getElementById('total');

        carritoLista.innerHTML = '';
        let total = 0;

        carrito.forEach((producto) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
            carritoLista.appendChild(listItem);
            total += producto.precio;
        });

        totalElement.textContent = total.toFixed(2);
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    // Función para vaciar el carrito
    document.getElementById('vaciar-carrito').addEventListener('click', () => {
        carrito.length = 0;
        actualizarCarrito();
    });

    // Cargar carrito desde localStorage si existe
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito.push(...JSON.parse(carritoGuardado));
        actualizarCarrito();
    }

    // Mostrar productos en la página
    mostrarProductos();
});
