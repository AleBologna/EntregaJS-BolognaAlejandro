let carrito = JSON.parse(sessionStorage.getItem(`MyCart`)) || [];
let carritoHeader = document.querySelector(`.carritoHeader`);
const cart = document.querySelector(`#cart`);
totalCarrito();
function mostrarCarrito(){
  
    cart.innerHTML = ``;
    
    carrito.forEach((prod)=>{
        cart.innerHTML += `
        <div class="box-tabla">
            <table class="tabla">
            <tr>
                <th rowspan="2" width="50px" class="centrado"><img src="${"." + prod.img}" class="img-tabla" ></th>
                <th width="50%" class="izquierda"><strong>Nombre: </strong> ${prod.nombre}</th>
                <th width="20%" class="centrado">Cantidad: ${prod.cantidad}</th>
                <th width="10%" class="centrado"><button class="btn-tabla" id="btnAgregar2-${prod.id}">+</button></th>
                <th width="10%" rowspan="2"  class="centrado"><button class="btnBorrar-tabla" id="borrarTodo-${prod.id}"><i class='bx bx-trash'></i></button></th>
            </tr>
            <tr>
                
                <td width="50%"><strong>Descripcion:</strong></td>
                <td width="20%" class="centrado">Precio: $${prod.precio * prod.cantidad} </td>
                <td width="10%" class="centrado"><button class="btn-tabla" id="btnEliminar2-${prod.id}">-</button></td>
            </tr>
            </table>
        </div>    
        `
    })
    
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
            mostrarCarrito();
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
            mostrarCarrito();
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
             mostrarCarrito();
         });
     });
 }

function totalCarrito(){
    let total = carrito.reduce ((acc,ite)=> acc+ ite.cantidad,0);
    carritoHeader.innerText = `${total}`
}

mostrarCarrito();
