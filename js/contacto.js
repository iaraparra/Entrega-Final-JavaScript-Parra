const enviarForm = document.getElementById("buttonSend");


enviarForm.onclick = function () {
  consultaExitosa();
};

/* enviarForm.addEventListener('submit', consultaExitosa()); */

function consultaExitosa() {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Su consulta ha sido enviada',
    text: 'Nos comunicaremos en breve',
    showConfirmButton: false,
    // timer: 1500
  })
};