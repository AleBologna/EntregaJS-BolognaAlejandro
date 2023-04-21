const form = document.querySelector (".formPago");
const input =document.querySelectorAll(".input");

form.addEventListener("submit",(e) =>{
    e.preventDefault();

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger',
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Desea terminar su compra',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          sessionStorage.setItem(`MyCart`, JSON.stringify(carrito = []));
          form.reset();

          swalWithBootstrapButtons.fire(
            'Compra finalizada',
            'Gracias por su compra. Espere nuestro contacto para coordinar la entrega.',
            'success'
          )
          btnOk = document.querySelector (".swal2-icon-success .swal2-actions .swal2-confirm, btn, btn-success")
          btnOk.addEventListener("click",()=>{
            window.location.pathname = "./index.html";
          })
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Compra cancelada',
            'Puede seguir con el cuestionario o volver al carrito',
            'error'
          )
        }
      })

    

    
})

 

