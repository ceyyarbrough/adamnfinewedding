import System.IO;

var customerName = prompt("Who killed Laura Palmer? ", "");
if (customerName!= null) {
    document.getElementById("welcome").innerHTML = "<h1>Hello " + customerName + "!</h1>"
    document.getElementById("welcome").innerHTML += "<h1>Christopher and Nicole are pleased to invite you to attend their damn fine wedding.</h1>"
}




function getInputs() {
	var firstname = document.getElementByID('firstname').value;
	var lastname = document.getElementByID('lastname').value;
	var numparty = document.getElementByID('numparty').value;


	function sendInput(firstname, lastname, numparty){
		var Scr = new ActiveXObject("Scripting.FileSystemObject");
		var CTF = Scr.CreateTextFile("userInput.txt");
		CTF.WriteLine(firstname, lastname, numparty);
		CTF.Close();
	}

}


 
