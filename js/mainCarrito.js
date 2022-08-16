function compraExitosa() {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Compra Exitosa',
    showConfirmButton: false,
    timer: 1500
  })
}

function Pago() {
  let contenedorPrincipal = document.createElement ("div");
  contenedorPrincipal.className = "contenedosPrincipalPagos";
  let contenedor = document.createElement("div");
  contenedor.className = "contenedorDivPagos";

  let DatosPersonales = document.createElement("div");
  DatosPersonales.className = "DivDatos";
  let nombre = document.createElement("input");
  nombre.className = "input";
  nombre.placeholder = "Ingrese su Nombre ";
  let mail = document.createElement("input");
  mail.className = "input";
  mail.placeholder = "Ingrese su Mail ";
  let direccion = document.createElement("input");
  direccion.className = "input";
  direccion.placeholder = "Ingrese su Dirección ";
  let barrio = document.createElement("input");
  barrio.className = "input";
  barrio.placeholder = "Ingrese su Barrio ";

  let DatosTarjeta = document.createElement("div");
  DatosTarjeta.className = "DivDatos";
  let datosTarjTitulo = document.createElement ("p");
  datosTarjTitulo.className ="tituloDatos";
  datosTarjTitulo.textContent = "Datos Tarjeta";
  let nTarjeta = document.createElement("input");
  nTarjeta.className = "input";
  nTarjeta.placeholder = "Ingrese N° Tarjeta ";
  let codSeguridad = document.createElement("input");
  codSeguridad.className = "input";
  codSeguridad.placeholder = "Ingrese Cod de Seguridad ";
  let fechaVencimiento = document.createElement("input");
  fechaVencimiento.className = "input";
  fechaVencimiento.placeholder = "Ingrese Fecha Vencimiento ";

  DatosPersonales.appendChild(nombre);
  DatosPersonales.appendChild(mail);
  DatosPersonales.appendChild(direccion);
  DatosPersonales.appendChild(barrio);
  DatosTarjeta.appendChild(datosTarjTitulo);
  DatosTarjeta.appendChild(nTarjeta);
  DatosTarjeta.appendChild(codSeguridad);
  DatosTarjeta.appendChild(fechaVencimiento);
  contenedor.appendChild(DatosPersonales);
  contenedor.appendChild(DatosTarjeta);
  contenedorPrincipal.appendChild(contenedor);
  document.getElementById("pagos").appendChild(contenedorPrincipal);
}

function renderProductosCarrito() {
  let productos = obtenerProductosCarrito();
  let contenido = `<p class="alert alert_purple text-center" role="alert">No se encontraron productos en el carrito.</p>`

  if (productos.length > 0) {
    contenido = `<p class="text-end"><a href="#" class="btn btn_purple button text-black botonVaciar" onclick="vaciarCarrito()" title="Vaciar Carrito">Vaciar Carrito <img src= "assets/imagenes/delete.png" width="24"></a></p>
        <table class="table">`;
    let total = 0;

    contenido += `<tr>
        <td>&nbsp;</td>
        <td>Producto</td>
        <td>Cantidad</td>
        <td class="align-middle">$ unitario</td>
        <td class="align-middle"><b>$ total</b></td>
        <td>&nbsp;</td>
        </tr>`;

    for (let producto of productos) {
      let valor = producto.precio * producto.cantidad;

      contenido += ` <tr>
          <td><img src=" assets/imagenes/${producto.imageURL}" alt="${producto.nombre}" width="64"></td>
          <td class="align-middle ">${producto.nombre}</td>
          <td class="align-middle justify-center"><b>${producto.cantidad}</b></td>
          <td class="align-middle justifycontent-center">$${producto.precio}</td>
          <td class="align-middle justify-center"><b>$${valor}</b></td>
          <td class="align-end text-end"><a href="#" class="btn btn button" onclick="eliminarCarrito(${producto.id})" ><img src="assets/imagenes/delete.png" width="24"></a> </td>
          </tr>`;
      total += valor;

    }

    contenido += `<tr>
      <td>&nbsp;</td>
      <td class="align-middle">Total a Pagar</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td class="align-middle"><b>$${total}</b></td>
      <td class="text-end"><a href="#" class="btn btn_purple botonFinalizar" onclick="Pago()">Realizar Pago</a></td>
      </tr>`;

    contenido += `</table>`;
  }

  // onclick="compraExitosa(vaciarCarrito())

  document.getElementById("productos_carrito").innerHTML = contenido;
}

actualizarBotonCarrito();
renderProductosCarrito();

