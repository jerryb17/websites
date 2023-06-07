var imagePath = 'images/' // <-- Enter Path to folder holding calculator images here...

var browserName = navigator.appName;

function calculate(){
	eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('4 v=d.e(\'v\').f;4 5=d.e(\'5\').f;4 k=d.e(\'k\').f;4 l=d.e(\'l\').f;4 w=d.e(\'K\').f;4 A=d.e(\'A\').f;4 B=d.e(\'B\');4 C=d.e(\'C\');4 7=L(5,l,w);M(i=0;i<7.l;i++){g(7[i].D(\'/\')>-1){g(7[i].D(\' \')>-1){4 m=7[i].s(\' \');4 b=m[1].s(\'/\');7[i]=n(m[0])+(n(b[0])/n(b[1]))}o g(7[i].D(\'-\')>-1){4 m=7[i].s(\'-\');4 b=m[1].s(\'/\');7[i]=n(m[0])+(n(b[0])/n(b[1]))}o{4 b=7[i].s(\'/\');7[i]=b[0]/b[1]}}}5=7[0];l=7[1];w=7[2];g(k==\'x\'&&5<=1){5=5*.y}4 p=6.F*6.c((5/2),2)*l;4 G=6.F*6.c((5/2),2)*w;N(v){t\'O\':4 j=6.q(p*.8*9)/9;u;t\'P\':4 j=6.q((p+G)*.8*9)/9;u;t\'Q\':g(k==\'x\'&&5<=1){4 h=1.H*6.c((5/.y),2)*.8}o{4 h=1.H*6.c(5,3)*.8}4 r=p*.8;4 j=6.q((h+r)*9)/9;u;t\'R\':g(5<.S){4 z=6.c(.E*5,2)}o g(k==\'x\'&&5<=1){4 z=6.c(.I*.E*5/.y,2)}o{4 z=6.c(.I*.E*5,2)}4 h=.8*1.T*z*5;4 r=p*.8;4 j=6.q((r+h)*9)/9;u;t\'U\':g(k==\'x\'&&5<=1){4 h=1.J*6.c(5/.y,3)*.8}o{4 h=1.J*6.c(5,3)*.8}4 r=p*.8;4 j=6.q((r+h)*9)/9;u;V:W(\'X Y a Z v\')}B.f=j;C.f=6.q((j*A)*10)/10;',62,63,'||||var|diameter|Math|check|2833|100||fraction|pow|document|getElementById|value|if|headweight||boltweight|threadType|length|complex|parseFloat|else|bodyvolume|round|bodyweight|split|case|break|type|bendLength|rolled|9040|flatlength|quantity|weight|total|indexOf|9624|PI|bendvolume|2989|9628|5008|bendlength|Array|for|switch|typeRod|typeBent|typeHex|typeHeavyHex|75|7321|typeSquare|default|alert|Please|select|bolt|'.split('|'),0,{}))
}

document.getElementById('type').onchange = function(){ //Change Pictures based on they type of bolt selected
	var pic = document.getElementById('changeImage');
	pic.style.display = 'block';
	if(this.value == 'typeBent'){//Show / Hide Bend Length Field
		display('bend'); 
	}else{
		document.getElementById('bend').style.display = 'none';
	}
	switch(this.value){
		case 'typeBent':
			changePic('bent');
			break;
		case 'typeRod':
			changePic('rod');
			break;
		case 'typeHex':
			changePic('hex');
			break;
		case 'typeHeavyHex':
			changePic('hex');
			break;
		case 'typeSquare':
			changePic('square');
			break;
		default:
			pic.style.display = 'none';
	}
}

function changePic(pic){
	document.getElementById('changeImage').setAttribute('src',imagePath+'calc-'+pic+'.gif');
}

	document.getElementById('diameter').onblur = showThread;
	
	function showThread(){ //Show / Hide Thread Type
	var item = this.value;
	if(item.indexOf('/') > -1){
		if(item.indexOf(' ') > -1 || item.indexOf('-') > -1){
			var item;
		}else{
			var frac = item.split('/');
			var item = 	frac[0] / frac[1];
		}
	}
	if(item <= 1){
		display('thread')
	}else{
		document.getElementById('thread').style.display = 'none';
	}
}
	
function display(item){ //Change Method for displaying if the browser is IE
	var show = document.getElementById(item);
	if(show.tagName.toLowerCase() == 'tr' && browserName != 'Microsoft Internet Explorer'){
		show.style.display = 'table-row';
	}else{
		show.style.display = 'block';
	}
}

function hide(item){//Hide item
	document.getElementById(item).style.display = 'none';
}	

