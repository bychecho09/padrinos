// Lista de nombres
const nombres = ["Marina", "Belu", "Paola", "Fer", "Mabel", "Camila", "Dai"];

// Objeto para contar las apariciones de cada nombre
const conteo = {};

// Recorrer la lista 10 veces
for (let i = 0; i < 100; i++) {
    // Seleccionar un nombre aleatorio de la lista
    const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    
    // Incrementar el conteo para ese nombre
    conteo[nombreAleatorio] = (conteo[nombreAleatorio] || 0) + 1;
}

// Encontrar el nombre con más apariciones
let nombreMasRepetido = "";
let maxRepeticiones = 0;

for (const nombre in conteo) {
    if (conteo[nombre] > maxRepeticiones) {
        nombreMasRepetido = nombre;
        maxRepeticiones = conteo[nombre];
    }
}

// Mostrar el resultado en el HTML
document.getElementById("resultado").textContent = `${nombreMasRepetido} con ${maxRepeticiones} Botos.`;
