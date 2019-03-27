
var arr = [
	{
		"title": "First Block",
		"imageURL": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/android_ambassador_v1_cmyk_200px.max-200x200.png",
		"border": "7px dotted yellow"
	},
	{
		"title": "Second Block",
		"imageURL": "https://www.cmcgroups.com/wp-content/uploads/2018/02/logo-att-color-trans-200x200.png",
		"border": "7px dashed yellow"
	},
	{
		"title": "Third Block",
		"imageURL": "https://21clradio.com/wp-content/uploads/2015/09/Blend-Space-Logo-1.png",
		"border": "7px solid yellow"
	},
	{
		"title": "Fourth Block",
		"imageURL": "http://iluhin.com/artwork/logo/img/litsa_mira-logo-portfolio.jpg",
		"border": "7px dotted yellow"
	},
	{
		"title": "Fifth Block",
		"imageURL": "http://www.travelsmart.com.ua/images/ua-logos/10-logo-kiev.jpg",
		"border": "7px dotted yellow"
	},
	{
		"title": "Sixth Block",
		"imageURL": "http://www.artdesigner.ru/portfolio/logotypes/200.png",
		"border": "7px dotted yellow"
	}
];
var nambe = prompt("How many pictures? (1-6)", "");
function createNewBlocks() {
	var parentEl=document.getElementById("blocks");
	
	for (var i = 0;i <(+nambe);i++) {
		var obj=arr[i];
		var newEl=document.createElement ("div");
		newEl.style.border=obj.border;
		newEl.innerHTML=obj.title;
		newEl.style.backgroundImage="url("+obj.imageURL+")";
		parentEl.append(newEl);
	}
}

function clearBox(){
	var nambeDel = prompt(" pictures? (1-6)", "");
	document.getElementById("blocks").innerHTML = "";
    var parentEl=document.getElementById("blocks");
  		for (var i = 0;i <(+nambe);i++) {
  			if (i!=+nambeDel-1) {
		var obj=arr[i];
		var newEl=document.createElement ("div");
		newEl.style.border=obj.border;
		newEl.innerHTML=obj.title;
		newEl.style.backgroundImage="url("+obj.imageURL+")";
		parentEl.append(newEl);
		}
	}
		
}


