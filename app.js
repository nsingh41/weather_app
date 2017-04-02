
const button_value=document.getElementById('button')

button_value.addEventListener('click',getinfo) 

function getinfo()
{
const LIQ_url = 'https://locationiq.org/v1/search.php?key='
const LIQ_key = 'fe9d58fe18f1d7599f9f'
const OWM_key='10ecbf79877b77986bc42d7a31aa6fdb'
const city =document.getElementById("city").value
const country =document.getElementById("country").value
console.log(city)

fetch(`${LIQ_url}${LIQ_key}&format=json&city=${city}&country=${country}`)
  .then((res) => res.json())
  .then((info_LIQ) => {
    console.log(info_LIQ)
    console.log(info_LIQ[0].display_name)
    console.log(`the longitude and latitude for this location are: lon ${info_LIQ[0].lon} lat ${info_LIQ[0].lat}`)
    
    const OWP_url = 'http://api.openweathermap.org/data/2.5/forecast/daily?'
   

   fetch(`${OWP_url}&lat=${info_LIQ[0].lat}&lon=${info_LIQ[0].lon}&appid=${OWM_key}&units=metric`)
   .then((res) => res.json())
  .then((OWM_info) => {
    console.log(OWM_info)

   
    // let div=document.getElementById("display")
for(let i=0;i<=5;i++){
    let humidity=document.createElement("h3")
    humidity.textContent="Humidity :- "+OWM_info.list[i].humidity+"%"

    
    let mainTemp=document.createElement("h1")
    mainTemp.textContent=OWM_info.list[i].temp.day+" °C"

    let maxTemp=document.createElement("h3")
    maxTemp.textContent="Max. Temp :- "+OWM_info.list[i].temp.max+" °C"
	
	let minTemp=document.createElement("h3")
    minTemp.textContent="Min. Temp :- "+OWM_info.list[i].temp.min+" °C"
	
	
	let speed=document.createElement("h3")
    speed.textContent="Wind :- "+OWM_info.list[i].speed+" Km/h"

    let main=document.createElement("h2")
    main.textContent="Weather :- "+OWM_info.list[i].weather[0].main
    let bc=OWM_info.list[i].weather[0].main
     
     let hr=document.createElement("hr")

     let image=document.createElement("img")
    
    if(bc=="Snow"){
  image.src="img/001-Shapes.png"}
  else if(bc=="Clouds"){
  	image.src="img/002-cloud.png"
  }
  else if(bc=="Clear"){
  	image.src="img/001-sun.png"
  }

  else if(bc=="Rain"){
  	image.src="img/003-sign.png"}

    let dive=document.getElementById("display1")

    let predict=document.createElement("h4")	
    predict.textContent="Weather prediction for day " + i

	dive.appendChild(mainTemp)
	dive.appendChild(main)
	dive.appendChild(image)
	dive.appendChild(maxTemp)
	dive.appendChild(minTemp)
	dive.appendChild(humidity)
	dive.appendChild(speed)
	dive.appendChild(predict)
	dive.appendChild(hr)
}

	

    
})
  })
  .catch((exception) => console.log(exception, "We got an exception here"))




}

