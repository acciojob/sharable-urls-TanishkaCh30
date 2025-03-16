let btn = document.getElementById("button");
let url = document.getElementById("url");
let name= document.getElementById("name");
let year =  document.getElementById("year");

btn.addEventListener("click",(e)=>{
	e.preventDefault();
	if(name.value && year.value){
		url.innerText = `https://localhost:8080/?name=${name.value}&year=${year.value}`;
	}
	else if(year.value){
	url.innerText = `https://localhost:8080/?year=${year.value}`;
	}
	else if(name.value){
	url.innerText = `https://localhost:8080/?name=${name.value}`;
	}
})
