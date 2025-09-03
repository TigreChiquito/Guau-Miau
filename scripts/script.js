
// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    
    // Obtener referencias a los elementos
    const formElement = document.getElementById("form_1");
    const btnAgregarMascota = document.getElementById("registro_mascota");
    const contenedorMascota = document.getElementById("form_mascota");
    
    let contadorMascotas = 0;
    
    // Verificar que los elementos existen
    if (formElement && btnAgregarMascota && contenedorMascota) {
        
        // Listener para el formulario principal (submit)
        formElement.addEventListener("submit", function (e) {
            e.preventDefault();
            getData(e.target);
        });
        
        // Listener para agregar registro de mascota
        btnAgregarMascota.addEventListener("click", function(e) {
            e.preventDefault();
            agregarRegistroMascota();
        });
        
    } else {
        console.error("No se encontraron todos los elementos necesarios");
    }
    
    // Función para agregar un nuevo registro de mascota
    function agregarRegistroMascota() {
        contadorMascotas++;
        
        const nuevoRegistro = document.createElement("div");
        nuevoRegistro.className = "mascota-registro mb-4 p-3 border rounded";
        nuevoRegistro.id = `mascota_${contadorMascotas}`;
        nuevoRegistro.style.backgroundColor = "#668aadff"; 
        
        nuevoRegistro.innerHTML = `
            <h4>Mascota ${contadorMascotas}</h4>
            <div class="mb-3">
                <label for="nombre_mascota_${contadorMascotas}" class="form-label">Nombre de la Mascota</label>
                <input type="text" class="form-control" id="nombre_mascota_${contadorMascotas}" name="nombre_mascota_${contadorMascotas}" required>
            </div>
            <div class="mb-3">
                <label for="especie_${contadorMascotas}" class="form-label">Especie</label>
                <select class="form-control" id="especie_${contadorMascotas}" name="especie_${contadorMascotas}" required>
                    <option value="">Seleccionar especie</option>
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option>
                    <option value="pajaro">Pajaro</option>
                    <option value="otro">Otro</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="edad_${contadorMascotas}" class="form-label">Edad (años)</label>
                <input type="number" class="form-control" id="edad_${contadorMascotas}" name="edad_${contadorMascotas}" min="0">
            </div>
            <button type="button" class="btn btn-danger btn-sm" onclick="eliminarMascota(${contadorMascotas})">
                Eliminar Mascota
            </button>
        `;
        
        contenedorMascota.appendChild(nuevoRegistro);
    }
    
    // Función para obtener datos del formulario
    function getData(form) {
        // Corregir el nombre de la variable - debe ser consistente
        const formData = new FormData(form);
        
        console.log("Datos del formulario:");
        
        // Mostrar cada par clave-valor
        for(let pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }
        
        // Convertir a objeto y mostrar
        const dataObject = Object.fromEntries(formData);
        console.log("Objeto completo:", dataObject);
        console.log("JSON:", JSON.stringify(dataObject, null, 4));
        
        // Aquí puedes agregar la lógica para enviar los datos al servidor
        // Por ejemplo: enviarDatos(dataObject);
    }
    
    // Función global para eliminar mascota (debe estar fuera del DOMContentLoaded)
    window.eliminarMascota = function(numero) {
        const elemento = document.getElementById(`mascota_${numero}`);
        if (elemento) {
            elemento.remove();
        }
    }
    
});