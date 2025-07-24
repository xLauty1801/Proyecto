const carrito = [];

function actualizarCarrito() {
    const lista = document.getElementById('lista-carrito');
    const totalSpan = document.getElementById('total');
    lista.innerHTML = ''; // Por las dudas me aseguro de dejarlo vacio
    let total = 0;

    carrito.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.nombre} - $${item.precio} USD x ${item.cantidad}`;
      lista.appendChild(li);
      total += item.precio * item.cantidad;
    });

    totalSpan.textContent = total.toFixed(2); // convierto a dos decimales el precio final 
}

function agregarAlCarrito(nombre, precio) {
    const productoExistente = carrito.find(item => item.nombre === nombre);  
    if (productoExistente) {
      productoExistente.cantidad++;
      // si el producto ya esta en el carrito, le sumo uno a la cantidad
    } else {
      carrito.push({ nombre, precio: Number(precio), cantidad: 1 });
    }
    actualizarCarrito();
  }

document.querySelectorAll('.agregar-carrito').forEach(boton => {
    boton.addEventListener('click', () => {
      const nombre = boton.getAttribute('data-nombre');
      // console.log(nombre)
      const precio = boton.getAttribute('data-precio');
      // console.log(precio)
      agregarAlCarrito(nombre, precio);
    });
  });