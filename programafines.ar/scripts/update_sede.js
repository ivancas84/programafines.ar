
let example = [
    {
      "id":"690",
      "nombre_institucion": "prueba3",
      "tipo_establecimiento": "Otros",
      "direccion_institucion": "Calle 1",
      "nro_direccion": "S/N",
      "calle1": "Calle e1",
      "calle2": "",
      "localidad_institucion": "La Plata Los Hornos"
    },
    {
      "id":"684",
      "nombre_institucion": "prueba2",
      "tipo_establecimiento": "Otros",
      "direccion_institucion": "Calle 2",
      "nro_direccion": "S/N",
      "calle1": "Calle e2",
      "calle2": "",
      "localidad_institucion": "La Plata City Bell"
    },
  
  ];
  
  var uri_source = "index4.php?a=32&b=1&c="; //concat id
  var uri_target = "index4.php?a=32&b=2";
  for (let i = 0; i < sedes.length; i++) {
    console.log("iterate " + i);
      const formData = new FormData();
  
      for(var key in sedes[i]){
        if(key != "id") formData.append(key, sedes[i][key]);
      }
      
      window.location.replace(uri_source + sedes[i]["id"])
      fetch(uri_target, {
        method : "POST",
        body: formData,
    }).then(
        response => response.text()
    ).then(
        html => {
          if(html.includes("Ya existe una Sede con este nombre")){
            console.log("Ya existe" + sedes[i]["nombre_institucion"])
          }
        }
    );
  
  
  }
  