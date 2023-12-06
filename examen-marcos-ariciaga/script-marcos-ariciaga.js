function enviarEncuesta() {
   
    const edad = document.getElementById('edad').value;
    const sexo = document.getElementById('sexo').value;
    const educacion = document.getElementById('educacion').value;
    const ocupacion = document.getElementById('ocupacion').value;

    const datos = {
        edad: edad,
        sexo: sexo,
        educacion: educacion,
        ocupacion: ocupacion
    };

    console.log(datos);

    window.location.href = 'resultado-marcos-ariciaga.html';
}
