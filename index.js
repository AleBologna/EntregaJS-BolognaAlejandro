let boxComida = document.querySelector(`.box-comida`);
let cart = document.querySelector(`#cart`);
let carrito = JSON.parse(sessionStorage.getItem(`MyCart`)) || [];
let carritoHeader = document.querySelector(`.carritoHeader`);

totalCarrito();

function crearCards(){
    productos.forEach((prod) => {
        boxComida.innerHTML += `<div class="card">
                                    <div class="img-box">
                                        <img src="${prod.img}" class="img-tamaño"></img>
                                    </div>
                                    <span class="card-detalles">${prod.nombre}</span>
                                    <div class="detalles">
                                    <button class="btn" id="btnAgregar-${prod.id}">Agregar <i class='bx bxbtn bx-cart-add bx-flip-horizontal' style='color:#693535' ></i></button>
                                    <button class="btn" id="btnEliminar-${prod.id}">Eliminar <i class='bx bxbtn bx-trash bx-flip-horizontal' style='color:#693535' ></i></button>
                                    </div>
                                </div>`;
      });
      btnAgregar();
      btnEliminar();
    }

    function btnAgregar(){
        productos.forEach((prod)=>{
            document.getElementById(`btnAgregar-${prod.id}`).addEventListener(`click`,() => {
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
            });
        });
    }
    function btnEliminar(){
        productos.forEach((prod)=>{
            document.getElementById(`btnEliminar-${prod.id}`).addEventListener(`click`,() => {
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
            });
        });
    }
    

    function totalCarrito(){
        let total = carrito.reduce ((acc,ite)=> acc+ ite.cantidad,0);
        carritoHeader.innerText = `${total}`
    }

crearCards();