var arregloProductos = [];

$(document).ready(()=>{

  $("#producto").select2({
    placeholder: "Elija una opción"
    ,width:"100%"
  })

});


function cambiarVista() {
  if($("#_1").is(":visible")){
    $("#_1").hide(100)        
    $("#_2").show(100)
  }else{
    $("#_2").hide(100)        
    $("#_1").show(100)
  }      
}

function agregarDetalle(){


}

function crearTabla(){
  var tabla;

  for(var k in arregloProductos){
    tabla += crearFila(arregloProductos[k].id,arregloProductos[k].cantidad,arregloProductos[k].descripcion,arregloProductos[k].precio);
  }

  var elem = $(document.createElement('tbody'))
  .attr('id','detalle')
  .html(html)
  .replaceWith('#detalle');
}

function crearFila(id,cantidad,descripcion,precio){
  var html = '<tr><td>'+cantidad+'</td>';
  html += '<td>'+descripcion+'</td>';
  html += '<td>'+precio+'</td>';
  html += '<td class="text-center"><i class="fa fa-trash text-danger" style="font-size: 2rem;" onclick="eliminar(\''+id+'\')"></i></td></tr>';
  return html;
}
