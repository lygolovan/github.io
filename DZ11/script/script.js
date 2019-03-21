function makediv(){
			for (var i=1; i<=20;i++) {
				var div=document.createElement('div');
				document.body.appendChild(div);
				if(i%2==0){
					div.style.border='4px solid blue';
				}else{
					div.style.border='4px solid red';
				}
			}
		}

function displayEvenNumbers(x, y){
	for (var i=x;i<=y;i++) {
		if (i%2==0) {
			console.log(i);
		}
	}
}


			