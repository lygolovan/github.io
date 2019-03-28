var arr=null;
function load(){
	httpRequest=new XMLHttpRequest();
	httpRequest.onreadystatechange=processD;
	httpRequest.open('GET','https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',true);
	httpRequest.send(null);
}
function processD(){
	if (this.readyState == 4) {
	if (httpRequest.status == 200) {
		var result = JSON.parse (httpRequest. responseText);
		arr = result;
	} else {

	}
}
}
function get(){
	var grivna=document.getElementById("amount").value;
	var valyta=document.getElementById("currencyCode").options.selectedIndex;
	 var txt= document.getElementById("currencyCode").options[valyta].text;
	 for (var i = 0; i < arr.length; i++) {
	 	var obj=arr[i];
	 	if (obj.cc==="USD"){
	 		var coeficient=obj.rate};
	 	 if (obj.cc==="EUR") {
	 		var coeficient=obj.rate};
	 }
	 var znach=grivna/coeficient;
	 document.getElementById('convertedAmount').value = znach;

	 }
	
function clear1(){
	document.getElementById("amount").value='';
	document.getElementById('convertedAmount').value = '';

}


//https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json