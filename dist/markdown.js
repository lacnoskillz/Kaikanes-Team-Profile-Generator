function generate(Manager1, engineerarray, internarray) {
  console.log("this the manager", Manager1);
  console.log("engineers", engineerarray);
  console.log("interns", internarray);


  function internsection(data) {
    if (data == null) {
      return ""
    } else {

      return `<div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">Occupation: Intern</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" id="id">ID: ${data.id}</li>
            <li class="list-group-item" id="email">Email: <a href="mailto:${data.email}">${data.email}</a></li>
            <li class="list-group-item" id="office">School: ${data.school}</li>
          </ul>
        </div>`
    }
  }

  function engineersection(data) {
    if (data == null) {
      return ""
    } else {
      return `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <p class="card-text">Occupation: Engineer</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" id="id">ID: ${data.id}</li>
              <li class="list-group-item" id="email">Email:<a href="mailto:${data.email}">${data.email}</a></li>
              <li class="list-group-item" id="office">Github: <a href="https://www.github.com/${data.github}" target="_blank">${data.github}</a></li>
            </ul>
          </div>`
    }
  }
  function managersection(data) {
    return `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <p class="card-text">Occupation: Manager</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" id="id">ID: ${data.id}</li>
              <li class="list-group-item" id="email">Email: <a href="mailto:${data.email}">${data.email}</a></li>
              <li class="list-group-item" id="office">Office number: ${data.office}</li>
            </ul>
          </div>`
  }

  function generateMarkdown(Manager1, engineerarray, internarray) {

    // Potential way to go about it, have one single members array and loop through
    // for (let i = 0; i < members.length; i++) {
    //   let member = members[i];
    //   if (member.getRole() === 'Engineer') {
    //     engineersection(member)
    //   }
    // }
    var x = '';
    var y = '';
    var z = managersection(Manager1);
    for (var i = 0; i < engineerarray.length; i++) {
      x += engineersection(engineerarray[i]);
    }
    for (var b = 0; b < internarray.length; b++) {
      y += internsection(internarray[b]);
    }
  
    return `
           <!DOCTYPE html>
   <html lang="en">
   
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="stylesheet" href="./dist/style.css">
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
       <title>Document</title>
   </head>
   
   <body>
       <h1>My Team</h1>
       <div class="container">
       ${z}
       ${x}
       ${y}
   
       </div>
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
   </body>
   
   </html>`;
  }

  const ThelastMarkdown = generateMarkdown(Manager1, engineerarray, internarray)
  return ThelastMarkdown;
}


module.exports = generate;
