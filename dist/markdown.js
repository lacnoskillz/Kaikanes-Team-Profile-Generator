function generate(team){


function engineersection(engineer){
      if(engineer == null){
            return ""
    }else{
            return `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${data.engineer}</h5>
              <p class="card-text">Ocupation</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" id="id">ID: ${data.id}</li>
              <li class="list-group-item" id="email">Email: ${data.email}</li>
              <li class="list-group-item" id="office">Office number: ${data.github}</li>
            </ul>
          </div>`
    }
}

function generateMarkdown(data) {
  for(var i=0; i<data.length; i++){


  }
      const engineersection = engineersection();
        return `
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>
    <h1>My Team</h1>
    <div class="container">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${data.manager}</h5>
              <p class="card-text">Ocupation</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" id="id">ID: ${data.id}</li>
              <li class="list-group-item" id="email">Email: ${data.email}</li>
              <li class="list-group-item" id="office">Office number: ${data.office}</li>
            </ul>
          </div>
      ${engineersection}   

    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>

</html>`;
}
}
module.exports = generate;
