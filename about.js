console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Your form has been successfully submitted. We will notify Zazu!");
}

function roar(event) {
	alert("Don't touch me! I'm the King!")
}


let form = document.querySelector('#contact');

let img = document.querySelector('#Simba');

form.addEventListener('submit', handleSubmit);

img.addEventListener('mouseover',roar)