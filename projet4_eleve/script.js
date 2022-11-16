let noteFinale = 0;

function reponse1(qst1) {
	if ((qst1.choix1.checked) === false &&
		(qst1.choix2.checked) === false &&
		(qst1.choix3.checked) === true && // Right Answer
		(qst1.choix4.checked) === false) {
		alert("Bonne réponse");
		noteFinale += 2;
	} else
		alert("Mauvaise réponse");
}

function validQCM() {
	reponse1(qst1);
	alert("Votre score est de " + noteFinale + "/20");
}
