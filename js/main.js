"use strict";

// ---------- CHAMPS ----------

let DOMSelect, DOMButton;
let scriptTagID = 'scriptTag';
let path = 'js/';

let testObject;

let classFileNames = 
[
	"Matrice",
	"Test",
	"Test2"
];

let currentName;

// ---------- METHODES ----------

function DOMSelectChange(e)
{
	currentName = e.target.value;
}

function DOMButtonClick()
{
	if(currentName == undefined)
	{
		console.log('Je t\'ai dit de choisir une option.');
		return;
	}

	let name = currentName;
	let fileName = `${name}.js`;
	let file = path + fileName;

	console.log("-------");
	let targetDiv = document.getElementById(name);
	if(targetDiv == undefined)
	{
		let tag = document.createElement('script');
		tag.src = file;
		tag.id = name;
		document.body.appendChild(tag);
		tag.onload = function() // si fichier chargé
		{
			// console.log("fichier js chargé");
			// console.log(typeof Test === 'function');

			// if(testObject != null || testObject != undefined)
			// {
			// 	testObject = null;
			// }

			Instantiate(name);
		}
	}
	else
	{
		// console.log(typeof Test === 'function');	
		// console.log(typeof(eval(name)));

		console.log('old object name : ' + testObject.constructor.name);

		// if(testObject != null && testObject.constructor.name != name)
		// {
			// Créer un objet dynamiquement avec le nom du type (= nom de fichier)
			Instantiate(name);
		// }

		console.log('new object name : ' + testObject.constructor.name);
	}
}

function Instantiate(className /*, ...args*/)
{
	testObject = eval(`new ${className}()`);
	
	// testObject = eval(`new ${className}(${args})`); // avec des arguments à loisir
}


// ---------- PROGRAMME ----------

window.addEventListener('DOMContentLoaded',(event)=>
{
    // console.log("DOM entièrement chargé et analysé");

	DOMSelect = document.getElementById('selectJS');
	DOMButton = document.getElementById('buttonJS');

	// La liste des <option>
	for (let i = 0; i < classFileNames.length; i++) {
		const element = classFileNames[i];
		let tag = document.createElement('option');
		tag.value = element;
		tag.text = element;
		DOMSelect.appendChild(tag);
	}

	// Comportements
	DOMSelect.addEventListener('change', DOMSelectChange);
	DOMButton.addEventListener('click', DOMButtonClick);
});
