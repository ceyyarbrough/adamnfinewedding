var customerName = prompt("Who killed Laura Palmer? ", "");
if (customerName!= null) {
    document.getElementById("welcome").innerHTML = "<h1>Hello " + customerName + "!</h1>"
    document.getElementById("welcome").innerHTML += "<h1>Christopher and Nicole are pleased to invite you to attend their damn fine wedding.</h1>"
}




function getInputs() {
	var firstname = document.getElementByID('firstname').value;
	var lastname = document.getElementByID('lastname').value;
	var numparty = document.getElementByID('numparty').value;

	var txtFile = "userInput.txt";
	var file = new File(txtFile);

	file.open("w"); // open file with write access
	file.writeln("First line of text");
	file.writeln("Second line of text " + firstname);
	file.close();

	

}


 
