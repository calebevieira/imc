function validaEntrada(args) {
	for (let i = 0; i < arguments.length; i++) {
		if (!!arguments[i] == false || arguments[i] < 0) {
			return false;
		}
	}
	return true;
}

function calcularIMC(kilos, altura) {
	altura = altura / 100;
	return (kilos / (altura * altura));
}

const formCalcularIMC = document.getElementById('form');

formCalcularIMC.addEventListener('submit', function(event) {
	event.preventDefault();

	const kilos = parseFloat(document.getElementById('kilos').value);
	const altura = parseFloat(document.getElementById('altura').value);

	if (validaEntrada(kilos, altura)) {
		const imc = calcularIMC(kilos, altura);
		document.getElementById('imc').value = parseInt(imc).toFixed(2);
	} else {
		document.getElementById('imc').value = "## ERRO ##";
	}
});