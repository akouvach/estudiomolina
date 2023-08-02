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
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">Some example text.</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <img class="card-img-top" src="images/laboral.jpg" alt="Laboral">
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">Some example text.</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <img class="card-img-top" src="images/danios.jpg" alt="Daños y perjuicios">
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">Some example text.</p>
              </div>
            </div>
          </div>


        </div>
      </div>
`;
        destino.innerHTML=rta;
    },1000);   

}


{/* <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
<div class="col">
  <div class="card mb-4 rounded-3 shadow-sm">
    <div class="card-header py-3">
      <h4 class="my-0 fw-normal">Free</h4>
    </div>
    <div class="card-body">
      <h1 class="card-title pricing-card-title">$0<small class="text-body-secondary fw-light">/mo</small></h1>
      <ul class="list-unstyled mt-3 mb-4">
        <li>10 users included</li>
        <li>2 GB of storage</li>
        <li>Email support</li>
        <li>Help center access</li>
      </ul>
      <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
    </div>
  </div>
</div>
<div class="col">
  <div class="card mb-4 rounded-3 shadow-sm">
    <div class="card-header py-3">
      <h4 class="my-0 fw-normal">Pro</h4>
    </div>
    <div class="card-body">
      <h1 class="card-title pricing-card-title">$15<small class="text-body-secondary fw-light">/mo</small></h1>
      <ul class="list-unstyled mt-3 mb-4">
        <li>20 users included</li>
        <li>10 GB of storage</li>
        <li>Priority email support</li>
        <li>Help center access</li>
      </ul>
      <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
    </div>
  </div>
</div>
<div class="col">
  <div class="card mb-4 rounded-3 shadow-sm border-primary">
    <div class="card-header py-3 text-bg-primary border-primary">
      <h4 class="my-0 fw-normal">Enterprise</h4>
    </div>
    <div class="card-body">
      <h1 class="card-title pricing-card-title">$29<small class="text-body-secondary fw-light">/mo</small></h1>
      <ul class="list-unstyled mt-3 mb-4">
        <li>30 users included</li>
        <li>15 GB of storage</li>
        <li>Phone and email support</li>
        <li>Help center access</li>
      </ul>
      <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button>
    </div>
  </div>
</div>
</div> */}
