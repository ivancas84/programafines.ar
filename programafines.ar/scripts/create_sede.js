
let example = [
    {
      "nombre_institucion": "prueba3",
      "tipo_establecimiento": "Otros",
      "direccion_institucion": "Calle 1",
      "nro_direccion": "S/N",
      "calle1": "Calle e1",
      "calle2": "",
      "localidad_institucion": "La Plata Los Hornos"
    }, 
  ];

var sedes = [];

var uri_target = "index4.php?a=31&b=1";
for (let i = 0; i < sedes.length; i++) {
    console.log("create sede " + i);
    const formData = new FormData();
    for (var key in sedes[i])
        formData.append(key, sedes[i][key]);
    fetch(uri_target, {
    method : "POST",
    body: formData,
}).then(
    response => response.text()
).then(
    html => {
        if(html.includes("Ya existe una Sede con este nombre"))
            console.log("Ya existe" + sedes[i]["nombre_institucion"])     
    }
);
  
  
}
  