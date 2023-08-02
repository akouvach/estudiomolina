function servicios(){
    let rta = "";
    let destino = document.getElementById("principal");
    destino.innerHTML = `<div class="spinner-border"></div>`;

    setTimeout(()=>{
        rta =  `<h1>Servicios</h1>
        <div class="row">
          <div class="col-md-4">
            <div class="card" >
              <img class="card-img-top" src="images/previsional.jpg" alt="Previsional">
              <div class="card-body">
                <h4 class="card-title">Previsional</h4>
                <p class="card-text">de qué se trata ?</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <img class="card-img-top" src="images/laboral.jpg" alt="Laboral">
              <div class="card-body">
                <h4 class="card-title">Laboral</h4>
                <p class="card-text">Que hacemos.</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <img class="card-img-top" src="images/danios.jpg" alt="Daños y perjuicios">
              <div class="card-body">
                <h4 class="card-title">Daños y perjuicios</h4>
                <p class="card-text">Complicado</p>
              </div>
            </div>
          </div>


        </div>
      </div>
`;
        destino.innerHTML=rta;
    },1000);   

}

