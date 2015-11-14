//overlay javascript
var overlay=0;
function draw_opacity()
{
	var score = document.getElementById("opacity").value;
	document.getElementById("idScore").innerHTML = score.toString();
	
	subPatches=document.getElementsByClassName('pic')[0].children
	for (i=0;i<subPatches.length;i++){
		if(i==overlay)
			subPatches[i].style.opacity=score/100;	
		else
			subPatches[i].style.opacity=0;				
	}
}

function overlay_select()
{	
	overlay=1-overlay;
	draw_opacity();
}