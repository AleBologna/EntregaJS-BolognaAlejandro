let boxComida = document.querySelector(`.box-comida`);
let boxJuguetes = document.querySelector(`.box-juguetes`);
let boxComida2 = document.querySelector(`.box-comida2`);
let boxAccesorios = document.querySelector(`.box-accesorios`);
let cart = document.querySelector(`#cart`);
let carrito = JSON.parse(sessionStorage.getItem(`MyCart`)) || [];
let carritoHeader = document.querySelector(`.carritoHeader`);

totalCarrito();

function crearCards(productos){
    productos.forEach((prod) => {
        if(prod.id<=4){
            boxComida.innerHTML += `
                                <div class="card">
                                    <div class="img-box">
                                        <img src="${prod.img}" class="img-tamaño"></img>
                                    </div>
                                    <span class="card-detalles">${prod.nombre}</span>
                                    <span class="card-precio">Precio: $${prod.precio}</span>
                                    <div class="detalles">
                                    <button class="btn2" id="btnAgregar-${prod.id}"><i class='bx bxbtn bx-cart-add bx-flip-horizontal' style='color:#693535' ></i></button>
                                    <button class="btn2 btn-info" id="btnInfo-${prod.id}"><i class='bx bx-info-circle' style='color:#693535'  ></i></button>
                                    <button class="btn2" id="btnEliminar-${prod.id}"><i class='bx bx-trash'></i></button>
                                    </div>
                                </div>`;
            }else if(prod.id<=8){
                boxJuguetes.innerHTML += `
                                <div class="card">
                                    <div class="img-box">
                                        <img src="${prod.img}" class="img-tamaño"></img>
                                    </div>
                                    <span class="card-detalles">${prod.nombre}</span>
                                    <span class="card-precio">Precio: $${prod.precio}</span>
                                    <div class="detalles">
                                    <button class="btn2" id="btnAgregar-${prod.id}"><i class='bx  bx-cart-add bx-flip-horizontal' style='color:#693535' ></i></button>
                                    <button class="btn2 btn-info" id="btnInfo-${prod.id}"><i class='bx bx-info-circle' style='color:#693535'  ></i></button>
                                    <button class="btn2" id="btnEliminar-${prod.id}"><i class='bx bx-trash'></i></button>
                                    </div>
                                </div>`;
                 }else if(prod.id<=12){
                    boxComida2.innerHTML += `
                                <div class="card">
                                    <div class="img-box">
                                        <img src="${prod.img}" class="img-tamaño"></img>
                                    </div>
                                    <span class="card-detalles">${prod.nombre}</span>
                                    <span class="card-precio">Precio: $${prod.precio}</span>
                                    <div class="detalles">
                                    <button class="btn2" id="btnAgregar-${prod.id}"><i class='bx  bx-cart-add bx-flip-horizontal' style='color:#693535' ></i></button>
                                    <button class="btn2 btn-info" id="btnInfo-${prod.id}"><i class='bx bx-info-circle' style='color:#693535'  ></i></button>
                                    <button class="btn2" id="btnEliminar-${prod.id}"><i class='bx bx-trash'></i></button>
                                    </div>
                                </div>`;
                 }else if(prod.id<=16){
                    boxAccesorios.innerHTML += `
                    <div class="card">
                        <div class="img-box">
                            <img src="${prod.img}" class="img-tamaño"></img>
                        </div>
                        <span class="card-detalles">${prod.nombre}</span>
                        <span class="card-precio">Precio: $${prod.precio}</span>
                        <div class="detalles">
                        <button class="btn2" id="btnAgregar-${prod.id}"><i class='bx  bx-cart-add bx-flip-horizontal' style='color:#693535' ></i></button>
                        <button class="btn2 btn-info" id="btnInfo-${prod.id}"><i class='bx bx-info-circle' style='color:#693535'  ></i></button>
                        <button class="btn2" id="btnEliminar-${prod.id}"><i class='bx bx-trash'></i></button>
                        </div>
                    </div>`;
                 }
      });
     
        document.querySelectorAll(".detalles .btn-info").forEach( (element) => {
            element.addEventListener("click", () => {
                let position = element.id.split('-')[1];
                document.querySelector(".desContainer").classList.toggle("desContainer1");
                document.querySelector(".desContainer p").innerText = `${productos[position-1].descripcion}`
            });
          });
   
 
    document.querySelector(".desContainer i").addEventListener("click", () => {
        document.querySelector(".desContainer").classList.toggle("desContainer1");
    })
      
    btnAgregar(productos);
      btnEliminar(productos);
    }

    function btnAgregar(productos){
        productos.forEach((prod)=>{
            document.getElementById(`btnAgregar-${prod.id}`).addEventListener(`click`,() => {
                
                let cant = carrito.some((el)=> el.id == prod.id);
                if(cant===false){
                    prod.cantidad=1;
                    carrito.push(prod);
                    Toastify({

                        text: `Se agrego (1) ${prod.nombre} al carrito`,
                        offset:{
                            y:50,
                        },
                        duration: 1000,
                        style:{
                            background: "#fadd91",
                            color:"#693535",
                        }
                        }).showToast();
                }else{
                    let miProd = carrito.find((el) => el.id == prod.id);
                    miProd.cantidad++
                    Toastify({

                        text: `Se agrego (${(miProd.cantidad)}) ${prod.nombre} al carrito`,
                        offset:{
                            y:50,
                        },
                        duration: 1000,
                        style:{
                            background: "#fadd91",
                            color:"#693535",
                        }
                        }).showToast();
                }
                sessionStorage.setItem(`MyCart`, JSON.stringify(carrito));
                totalCarrito();
            });
        });
    }
    function btnEliminar(productos){
        productos.forEach((prod)=>{
            document.getElementById(`btnEliminar-${prod.id}`).addEventListener(`click`,() => {
                let cant = carrito.some((el)=> el.id == prod.id);
                if(cant===true){
                    let miProd = carrito.find((el) => el.id == prod.id);
                    if(miProd.cantidad>0){
                    miProd.cantidad--;
                    if(miProd.cantidad>=1){
                    Toastify({
                        text: `Se elimino (${(miProd.cantidad)}) ${prod.nombre} al carrito`,
                        offset:{
                            y:50,
                        },
                        duration: 1000,
                        style:{
                            background: "#fadd91",
                            color:"#693535",
                        }
                        }).showToast();
                }else if(miProd.cantidad==0){
                    Toastify({
                        text: `Se elimino ${prod.nombre} del carrito`,
                        offset:{
                            y:50,
                        },
                        duration: 1000,
                        style:{
                            background: "#fadd91",
                            color:"#693535",
                        }
                        }).showToast();
                }}
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

fetch(`./productos.json`)
.then(res => res.json())
.then (data=> crearCards(data)); 

// setTimeout(() => {
//     document.querySelectorAll(".detalles .btn-info").forEach( (element) => {
//         element.addEventListener("click", () => {
//             let position = element.id.split('-')[1];
//             document.querySelector(".desContainer").classList.toggle("desContainer1");
//             document.querySelector(".desContainer p").innerText = `${productos[position-1].descripcion}`
//         });
//       });
// },1000)



// document.querySelector(".desContainer i").addEventListener("click", () => {
//     document.querySelector(".desContainer").classList.toggle("desContainer1");
// })


