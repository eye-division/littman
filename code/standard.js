// validate the form - and simple security check, most checking done by perl script
function CheckForm() {
	var InputText = document.littmansearch.termsearch.value;
	// if nothing put in search box when submitting then alert
	if (InputText =="") {
	alert("Please enter a search term");
	return false;
	} else {
	if (InputText.length <= 2)
		{	alert("Please type more than 2 letters of the word\n and try again");
	return false;
		}
	}
}

// open browser pop up window

function GoUrl(s){

window.open(s,'bookdetails','toolbar=yes,location=no,directories=no,status=no,menubar=no,resizable=yes,copyhistory=no,scrollbars=yes,width=500,height=400'); s.selectedIndex=0; window.blur(); 

} 

function closew() {window.close();}


