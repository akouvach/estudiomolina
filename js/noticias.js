function noticias(){
    let rta = "";
    let destino = document.getElementById("principal");
    destino.innerHTML = `<div class="spinner-border"></div>`;

    setTimeout(()=>{
        rta =  `<!-- Carousel -->
<div id="demo" class="carousel slide container-fluid" data-bs-ride="carousel">
    <!-- Indicators/dots -->
    <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    </div>

    <!-- The slideshow/carousel -->
    <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="images/previsional.jpg" style=" background-color: rgba(0, 0, 0, 0.5);" alt="Previsional" class="d-block w-100">
        <div class="carousel-caption">
            <h3>Previsional</h3>
            <p>Tenemos la experiencia los distintos convenios</p>
        </div>
    </div>
    <div class="carousel-item">
        <img src="images/laboral.jpg" style="background-color: rgba(0, 0, 0, 0.5);" alt="Laboral" class="d-block w-100">
        <div class="carousel-caption">
            <h3>Laboral</h3>
            <p>Atendemos despidos y reclamos !</p>
        </div>
    </div>
    <div class="carousel-item">
        <img src="images/danios.jpg"  style="background-color: rgba(0, 0, 0, 0.5);" alt="Daños y perjuicios" class="d-block w-100">
        <div class="carousel-caption">
            <h3>Daños y Perjuicios</h3>
            <p>Reclamo por daños</p>
        </div>
    </div>
    </div>

    <!-- Left and right controls/icons -->
    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
    </button>
</div>`;

/* Cargo todos los articulos */ 

for(let i=0;i<articulos.length;i++){
    rta = rta.concat(`
    <div class="container-fluid">
        <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
            <div class="col-lg-6 px-0">
                <h1 class="display-4 fst-italic">${articulos[i].titulo}</h1>
                <p class="lead my-3">${articulos[i].contenido}</p>
                <p class="lead mb-0"><a href="${articulos[i].fuente}" target="detalle" class="text-body-emphasis fw-bold">Ver mas...</a></p>
            </div>
        </div>
    </div>
    `);

}
            destino.innerHTML=rta;
    },1000);   

}

