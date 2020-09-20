document.body.innerHTML = "";
var dv = document.createElement('div');
	dv.setAttribute('id', 'walk');
	dv.innerHTML = "<img src='https://1.bp.blogspot.com/-H34hn5Fjf5w/X2Qu5dmn7oI/AAAAAAAAFOU/O_iAWrpIzMMn0T8zWZEZ0M7dhufadY6rgCLcBGAsYHQ/s16000/bigwalk.gif'>";
document.body.appendChild(dv);

var ifrm = document.createElement('iframe');
	ifrm.setAttribute('id', 'ifrm');
	ifrm.setAttribute('src', window.location.origin);
document.body.appendChild(ifrm);

var styl = document.createElement('style');
	styl.innerHTML = "#walk{bottom:-5px; position:fixed;-webkit-animation:linear infinite;-webkit-animation-name: walk;-webkit-animation-duration: 50s;}"+
	"@-webkit-keyframes walk {0% { right: 0;} 50%{ right : 100%;} 100%{ right: 100%;}}"+
	"#ifrm{width: 100vw;height: 100vh;border:0;position: fixed;top: 0;left: 0; z-index: 1;}";
document.body.appendChild(styl);
