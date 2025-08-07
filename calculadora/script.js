// Función para robos
function calcularRobos() {
  const casos = parseFloat(document.getElementById("casosRobos").value);
  const camaras = parseFloat(document.getElementById("camarasRobos").value);
  const porcentajeBase = 31.67;
  const camarasBase = 638;

  const reduccion = (camaras / camarasBase) * porcentajeBase;
  const casosReducidos = casos * (1 - (reduccion / 100));

  document.getElementById("resultadoRobos").textContent =
    `Proyección: aproximadamente ${casosReducidos.toFixed(0)} casos con una reducción del ${reduccion.toFixed(2)}%.`;
}

// Función para homicidios
function calcularHomicidios() {
  const casos = parseFloat(document.getElementById("casosHomicidios").value);
  const camaras = parseFloat(document.getElementById("camarasHomicidios").value);
  const porcentajeBase = 40.66;
  const camarasBase = 638;

  const reduccion = (camaras / camarasBase) * porcentajeBase;
  const casosReducidos = casos * (1 - (reduccion / 100));

  document.getElementById("resultadoHomicidios").textContent =
    `Proyección: aproximadamente ${casosReducidos.toFixed(0)} casos con una reducción del ${reduccion.toFixed(2)}%.`;
}

// Función para accidentes de tránsito
function calcularAccidentes() {
  const casos = parseFloat(document.getElementById("casosAccidentes").value);
  const camaras = parseFloat(document.getElementById("camarasAccidentes").value);
  const porcentajeBase = 18.86;
  const camarasBase = 558;

  const reduccion = (camaras / camarasBase) * porcentajeBase;
  const casosReducidos = casos * (1 - (reduccion / 100));

  document.getElementById("resultadoAccidentes").textContent =
    `Proyección: aproximadamente ${casosReducidos.toFixed(0)} casos con una reducción del ${reduccion.toFixed(2)}%.`;
}