const vehiculo = {
  marca: "Peakauto",
  modelo: "Goenx",
  motor: {
    tipoMotor: "4 CILINDROS EN LINEA",
    presionSobrealimentacion: undefined,
    bloqueMotor: "ALEACION",
    desplazamiento: "1.99/1996",
    caballosFuerzaRPM: "155 @ 6500",
    lineaRojaRPM: "6700",
    sistemaSmartAssist: undefined,
    inyeccionCombustible: "Directa",
    encendidoRemotoMotor: undefined
  }
};

console.log(`${vehiculo.marca}`);
console.log(`${vehiculo.modelo}`);
console.log(`${vehiculo.motor?.tipoMotor}`);
console.log(`${vehiculo.motor?.presionSobrealimentacion}`);
console.log(`${vehiculo.motor?.bloqueMotor}`);
console.log(`${vehiculo.motor?.desplazamiento}`);
console.log(`${vehiculo.motor?.caballosFuerzaRPM}`);
console.log(`${vehiculo.motor?.lineaRojaRPM}`);
console.log(`${vehiculo.motor?.sistemaSmartAssist}`);
console.log(`${vehiculo.motor?.inyeccionCombustible}`);
console.log(`${vehiculo.motor?.encendidoRemotoMotor}`);


document.getElementById("marca").textContent = vehiculo.marca;
document.getElementById("modelo").textContent = vehiculo.modelo;
document.getElementById("TM").textContent = vehiculo.motor.tipoMotor;
document.getElementById("PS").textContent = vehiculo.motor.presionSobrealimentacion;
document.getElementById("BM").textContent = vehiculo.motor.bloqueMotor;
document.getElementById("D").textContent = vehiculo.motor.desplazamiento;
document.getElementById("CDF").textContent = vehiculo.motor.caballosFuerzaRPM;
document.getElementById("LR").textContent = vehiculo.motor.lineaRojaRPM;
document.getElementById("SSA").textContent = vehiculo.motor.sistemaSmartAssist;
document.getElementById("IDC").textContent = vehiculo.motor.inyeccionCombustible;
document.getElementById("ERM").textContent = vehiculo.motor.encendidoRemotoMotor;

