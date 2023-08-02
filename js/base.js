console.log(articulos);
console.log(temas);

function buscar(){
    let valor = document.getElementById("txt_buscar").value;
    let destino = document.getElementById("buscar_resultados");
    let tabla = "";
    let rdo = [];
    

    /* Muestro la ventana modal que estaba oculta */
    let myModal = new bootstrap.Modal(document.getElementById('modal_resultados'));
    let btnCerrrar = document.getElementById('btn_cerrar');

    btnCerrrar.addEventListener('click', ()=>{
        myModal.hide();
    });
    
    myModal.show();

    /* voy a buscar lo que encuentre y armo el resultado */

    timeoutID = setTimeout(()=>{
        /* busco los resultados en articulos */
        for(let i=0;i<articulos.length;i++){
            let pos = -1;
            pos = articulos[i].titulo.toLowerCase().search(valor.toLowerCase());
            if(pos>=0){
                /* encontró algo */
                rdo.push(articulos[i]);
            } else {
                pos = articulos[i].tema.toLowerCase().search(valor.toLowerCase());
                if(pos>=0){
                    /* encontró algo */
                    rdo.push(articulos[i]);
                } else {
                    pos = articulos[i].contenido.toLowerCase().search(valor.toLowerCase());
                    if(pos>=0){
                        /* encontró algo */
                        rdo.push(articulos[i]);
                    }        
                }
            }
        }

        if(rdo.length>0){
            /* Encontro algo.. voy a armar la tabla */
            tabla = `<table class="table">
            <thead class="thead-dark">
              <tr>
              <th scope="col">Fecha</th>
              <th scope="col">Tema</th>
              <th scope="col">Documento</th>
                <th scope="col"> >> </th>
              </tr>
            </thead>
            <tbody>`;

            for(let index=0;index<rdo.length;index++){
                tabla = tabla.concat(`
                <tr>
                    <td>${rdo[index].fecha}</td>
                    <td>${rdo[index].tema}</td>
                    <td>${rdo[index].titulo}-${rdo[index].contenido}</td>
                    <td><a href="${rdo[index].fuente}" target="detallefuente"> ver </a></td>
                </tr>
                `)
            }
            tabla = tabla.concat(`
                </tbody>
            </table>`);
            destino.innerHTML = tabla;
        } else {
            /* no se encontraron resultados */
            destino.innerHTML = `<p class="container"> no se encontraron resultados </p>`;
        }
      
    }, 1000 );

}

document.getElementById("form_buscar").addEventListener("submit", buscar, false);

function cargar(nro){
    console.log("cargar", nro);
    switch (nro){
        case 1:
            nosotros();
            break;
        case 2:
            servicios(); 
            break;
        case 3:
            contacto(); 
            break;
        default:
            noticias();
    }
}

