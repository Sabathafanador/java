


let carrito = []

let seleccion = prompt("Bienvenido,te gustaria comprar alguna prenda si o no ")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa si o no")
    seleccion = prompt("deseas realizar una compra")
}

if(seleccion == "si"){
    alert("genial, selecciona las prendas que quieres comprar y guardalas en el carrito de compras")
    
}else if (seleccion == "no"){
    alert("Gracias! por tu visita Te esperamos")
}
