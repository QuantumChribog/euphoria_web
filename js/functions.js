//formulario autorellenado chip neural
function login() {
	//creamos lista de correos y llenamos input de email y contraseña
	const email = ["asher_blake@euphoria.neuro", "lyannon@euphoria.neuro", "supervisor@euphoria.neuro", "katrina@euphoria.neuro", "klaus@euphoria.neuro"];
	document.getElementById('formEmail').value = email[Math.floor(Math.random() * 5)];
	document.getElementById('formPassword').value = "bringHappiness"
}