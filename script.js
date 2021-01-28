//source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_overlay_text
function on(a){
	document.getElementById("overlay").style.display = "block";
	document.getElementById("obj").src = a.src;
	var tar = document.getElementById("overlay");
	tar.addEventListener("click", function(event) {
      if(event.target==this) document.getElementById("overlay").style.display = "none";
    });
}

//source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
var topb = document.getElementById("topbutton");
window.onscroll = function() {scroll()};
function scroll() {
	var h =document.body.scrollHeight/4.0;
	if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
		topb.style.display = "block";
	} else {
		topb.style.display = "none";
	}
}

function scrolltotop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function emailvalidation() {
	var text = document.getElementById("email");
	if((text.value.endsWith(".com")||text.value.endsWith(".edu"))&&text.value.includes("@")){
		document.getElementById("feedback").innerHTML = "Email successfully recorded";
	}else{
		document.getElementById("feedback").innerHTML = "Invalid email address.";
	}
}