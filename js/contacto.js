function contacto(){
    let rta = "";
    let destino = document.getElementById("principal");
    destino.innerHTML = `<div class="spinner-border"></div>`;

    setTimeout(()=>{
        rta =  `<h1>Contacto</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <img src="images/contacto.png" class="img-fluid rounded-circle" alt="Dra. Molina" style="width: 200px;">
                </div>
                <div class="col-md-8">
                    <form>

                      <div class="row">

                        <div class="col">

                          <div class="input-group">
                            <span class="input-group-text">@</span>
                            <input type="text" class="form-control" placeholder="Nombre">
                          </div>
                          <br>

                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="Email">
                            <span class="input-group-text">@ejemplo.com</span>
                          </div>
                          <br>
        
                          <div class="input-group">
                            <textarea class="form-control" rows=3 aria-label="...">Su consulta... </textarea>
                            <span class="input-group-text">...</span>
                          </div>
                          <br>                      
                          
                          <button type="submit" class="btn btn-primary">Enviar consulta</button>

                        </div>
                      </div>
                    </form>
                </div>
            </div>
        </div>`;
        destino.innerHTML=rta;
    },1000);   

}