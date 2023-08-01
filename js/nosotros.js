function nosotros(){
    let rta = "";
    let destino = document.getElementById("principal");
    destino.innerHTML = `<div class="spinner-border"></div>`;

    setTimeout(()=>{
        rta =  `<img src="images/dramolina.png" class="rounded-circle" alt="Dra. Molina" width="100">`;
        destino.innerHTML=rta;
    },1000);   

}