 /*
Author: Niza Volair
Program: Ajax Interactions
Date: 11-08-15
*/

//Old Example:
// var req = new XMLHttpRequest();
//      req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Corvallis,or&appid=fa7d80c48643dfadde2cced1b1be6ca1", false);
//      req.send(null);
//      console.log(JSON.parse(req.responseText));


//My API from Open Weather
var APIKey = '017bfac0302afd1c00edbfeba3cfc8bf';

//Event listener for DOM Loaded
document.addEventListener("DOMContentLoaded",bindCity);
document.addEventListener("DOMContentLoaded",bindZip);
document.addEventListener("DOMContentLoaded",bindRandom);


function bindCity(){
	document.getElementById("CitySubmit").addEventListener("click", function(event){
		//variable for the request and for the payload to send
		var req = new XMLHttpRequest();
		var payload = document.getElementById("City").value;
		//open the request
		req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + payload + "&appid=" + APIKey, true);
		//add a listener to load 
		req.addEventListener('load',function(){
			//200 to 400 is good, so get values and assign to ids
			if(req.status >= 200 && req.status < 400){
				var response = JSON.parse(req.responseText);
				console.log(response);
				document.getElementById('city').textContent = response.name;
				document.getElementById('weather').textContent = response.weather[0].description;
				document.getElementById('temp').textContent = response.main.temp;
				document.getElementById('humid').textContent = response.main.humidity;

			} 
			//response was bad, print error
			else {
				console.log("Error in network request: " + request.statusText);
			}
		});
		//send the payload as a string
		req.send(JSON.stringify(payload));
		//prevent default so it deoens't refresh and break
		event.preventDefault();
	})
}
function bindZip(){
	document.getElementById("ZipSubmit").addEventListener("click", function(event){
		//variable for the request and for the payload to send
		var req = new XMLHttpRequest();
		var payload = document.getElementById("Zip").value;
		//open the request
		req.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=" + payload + "&appid=" + APIKey, true);
		//add a listener to load 
		req.addEventListener('load',function(){
			//200 to 400 is good, so get values and assign to ids
			if(req.status >= 200 && req.status < 400){
				var response = JSON.parse(req.responseText);
				console.log(response);
				document.getElementById('city').textContent = response.name;
				document.getElementById('weather').textContent = response.weather[0].description;
				document.getElementById('temp').textContent = response.main.temp;
				document.getElementById('humid').textContent = response.main.humidity;

			} 
			//response was bad, print error
			else {
				console.log("Error in network request: " + request.statusText);
			}
		});
		//send the payload as a string
		req.send(JSON.stringify(payload));
		//prevent default so it deoens't refresh and break
		event.preventDefault();
	})
}
function bindRandom(){
	document.getElementById("RandomSubmit").addEventListener("click", function(event){
		//variable for the request and for the empty payload object to send
		var req = new XMLHttpRequest();
		var payload = {random:null};
		payload.data = document.getElementById("random").value;
		//open the request and set header
		req.open("POST", "http://httpbin.org/post", true);
		req.setRequestHeader("Content-Type", "application/json");
		//add a listener to load 
		req.addEventListener('load',function(){
			//200 to 400 is good, so get values and assign to ids
			if(req.status >= 200 && req.status < 400){
				//Parse two times to get to the inner object
				var response = JSON.parse(req.responseText);
				console.log(response);
				response = JSON.parse(response.data);
				console.log(response);
				document.getElementById('ditto').textContent = response.data;
			}
			//response was bad, print error
			else {
				console.log("Error in network request: " + request.statusText);
			}
		});
		//send the payload as a string
		req.send(JSON.stringify(payload));
		//prevent default so it deoens't refresh and break
		event.preventDefault();
	})
}

