function nosotros(){
    let rta = "";
    let destino = document.getElementById("principal");
    destino.innerHTML = `<div class="spinner-border"></div>`;

    setTimeout(()=>{
        rta =  `<h1>Nosotros</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <img src="images/dramolina.png" class="img-fluid rounded-circle" alt="Dra. Molina" style="width: 200px;">
                </div>
                <div class="col-md-8">
                    <div class="container">
                        <h2>No tengo idea de qué poner </h2>
                        <p>
                            Loremp ipsum Loremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsum
                        </p>
                        <h2>No tengo idea de qué poner </h2>
                        <p>
                            Loremp ipsum Loremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsum
                        </p>
                        <h2>No tengo idea de qué poner </h2>
                        <p>
                            Loremp ipsum Loremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsum
                        </p>
                        <h2>No tengo idea de qué poner </h2>
                        <p>
                            Loremp ipsum Loremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsumLoremp ipsum
                        </p>                                                

                    </div>
                </div>
            </div>
        </div>`;
        destino.innerHTML=rta;
    },1000);   

}