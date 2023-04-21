let carrito = JSON.parse(sessionStorage.getItem(`MyCart`)) || [];
let carritoHeader = document.querySelector(`.carritoHeader`);
const cart = document.querySelector(`#cart`);
const cartPago = document.querySelector(`#cartPago`);

totalCarrito();
function mostrarCarrito(){
  
    cart.innerHTML = ``;
    
    carrito.forEach((prod)=>{
        cart.innerHTML += `
        <div class="box-tabla">
            <table class="tabla">
            <tr>
                <th rowspan="2" width="50px" class="centrado"><img src="${"." + prod.img}" class="img-tabla" ></th>
                <th rowspan="2" width="50%" class="izquierda"><strong>Nombre: </strong> ${prod.nombre}</th>
                <th width="20%" class="centrado">Cantidad: ${prod.cantidad}</th>
                <th width="10%" class="centrado"><button class="btn-tabla" id="btnAgregar2-${prod.id}">+</button></th>
                <th width="10%" rowspan="2"  class="centrado"><button class="btnBorrar-tabla" id="borrarTodo-${prod.id}"><i class='bx bx-trash'></i></button></th>
            </tr>
            <tr>
                <td width="20%" class="centrado">Precio: $${prod.precio * prod.cantidad} </td>
                <td width="10%" class="centrado"><button class="btn-tabla" id="btnEliminar2-${prod.id}">-</button></td>
            </tr>
            </table>
        </div>    
        `
    })
    totalPagar();
    btnAgregar();
    btnEliminar();
    btnBorrarTodo();
}

function btnAgregar(){
    carrito.forEach((prod)=>{
        document.getElementById(`btnAgregar2-${prod.id}`).addEventListener(`click`,() => {
            let cant = carrito.some((el)=> el.id == prod.id);
            if(cant===false){
                prod.cantidad=1;
                carrito.push(prod);
            }else{
                let miProd = carrito.find((el) => el.id == prod.id);
                miProd.cantidad++
            }
            sessionStorage.setItem(`MyCart`, JSON.stringify(carrito));
            totalCarrito();
            if(carrito.length===0){
                carritoVacio();
            }else{
                mostrarCarrito();
            }
        });
    });
}
function btnEliminar(){
    carrito.forEach((prod)=>{
       (document.getElementById(`btnEliminar2-${prod.id}`)).addEventListener(`click`,() => {
            let cant = carrito.some((el)=> el.id == prod.id);
            if(cant===true){
                let miProd = carrito.find((el) => el.id == prod.id);
                if(miProd.cantidad>0){
                miProd.cantidad--;
            }
            if(miProd.cantidad == 0){
                carrito = carrito.filter (el => el.cantidad != 0)
            }
            }
            sessionStorage.setItem(`MyCart`, JSON.stringify(carrito));
            totalCarrito();
            if(carrito.length===0){
                carritoVacio();
            }else{
                mostrarCarrito();
            }
        });
    });
}
function btnBorrarTodo(){
    carrito.forEach((prod)=>{
        (document.getElementById(`borrarTodo-${prod.id}`)).addEventListener(`click`,() => {
             let cant = carrito.some((el)=> el.id == prod.id);
             if(cant===true){
                 let miProd = carrito.find((el) => el.id == prod.id);
                 miProd.cantidad=0;
                 carrito = carrito.filter (el => el.cantidad != 0)
             }
             sessionStorage.setItem(`MyCart`, JSON.stringify(carrito));
             totalCarrito();
             if(carrito.length===0){
                carritoVacio();
            }else{
                mostrarCarrito();  
            }
         });
     });
 }

function totalCarrito(){
    let total = carrito.reduce ((acc,ite)=> acc+ ite.cantidad,0);
    carritoHeader.innerText = `${total}`
}
function carritoVacio(){
    cartPago.innerHTML = ``;
    cart.innerHTML = `<div class="box-vacio">
    <p>¡Tu carrito está vacio!</p>
    </div>
    `;
}
function totalPagar(){
    let pagoTotal = carrito.reduce ((acc,ite) => acc + ite.precio * ite.cantidad,0);
    cartPago.innerHTML = ` 
    <div class="box-pago"> 
    <h2 class="titulo-total">TOTAL A PAGAR:</h2>
    <h2 class="cant-pago">$${pagoTotal}</h2>
    </div> 
  
    <div class="box-btns">
    <a href="../pages/formPago.html" class="btns-compra">INICIAR COMPRA</a>
    <a href="../index.html" class="btns-compra">VER MAS PRODUCTOS</a>
    </div>
    `
}

if(carrito.length===0){
    carritoVacio();
}else{
    mostrarCarrito();
}
