
let tableCountry;


function setCountry(){
    let cityInput=document.getElementById("txtSearch").value;
    let country=document.getElementById("txtCountry")
    country.innerHTML=cityInput
}

function searchByCity(){
    let cityInput=document.getElementById("txtSearch").value
    tableCountry=cityInput;
   // let search= cityInput.charAt(0).toUpperCase() + cityInput.slice(1)
   let detail=document.getElementById("detailText")
    let temperature=document.getElementById("temp")
    let city=document.getElementById("city")
    let weatherImg=document.getElementById("weather-img")
    let humidity=document.getElementById("humidity")
    let wind=document.getElementById("wind")
    // let description=document.getElementById("description")



fetch(`http://api.weatherapi.com/v1/current.json?key=54a5cab28f1f4d1195971015242808&q=${cityInput==""?cityInput="Sri Lanka":cityInput}`)
.then(res=>res.json())
.then(data=>{
       city.innerText=cityInput.toUpperCase()
       weatherImg.src=data.current.condition.icon 
       detail.innerText=data.current.condition.text 
       temperature.innerText=data.current.temp_c+"°C"
       wind.innerText=data.current.wind_kph+"km/h"
       humidity.innerText=data.current.humidity+"%"
    
})
}

function forecast(){
    let cityInput=document.getElementById("txtSearch").value
    let afterday1=document.getElementById("afterdate1")
    let afterday1temp=document.getElementById("aftertemp1")
    let afterday1img=document.getElementById("afterdate1img")
    let afterday2=document.getElementById("afterdate2")
    let afterday2temp=document.getElementById("aftertemp2")
    let afterday2img=document.getElementById("afterdate2img")


    

    
    
    
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=54a5cab28f1f4d1195971015242808&q=${cityInput==""?cityInput="Sri Lanka":cityInput}&days=7`)
    .then(res=>res.json())
    .then(data=>{
      
      afterday1.innerText= data.forecast.forecastday[1].date
      afterday1temp.innerText= data.forecast.forecastday[1].day.avgtemp_c+"°C"

      afterday2.innerText= data.forecast.forecastday[2].date
      afterday2temp.innerText= data.forecast.forecastday[2].day.avgtemp_c+"°C"

      afterday1img.src=data.forecast.forecastday[1].day.condition.icon
      afterday2img.src=data.forecast.forecastday[2].day.condition.icon
      
    }) 


 
}

function history(){

    let cityInput=document.getElementById("txtSearch").value
    let beforeday1=document.getElementById("beforedate1")
    let beforeday1temp=document.getElementById("beforetemp1")
    let beforeday1img=document.getElementById("beforedate1img")
    

    let today = new Date();
    today.setDate(today.getDate() - 1);
    let yesterday = today.toISOString().split('T')[0];
 

    fetch(`http://api.weatherapi.com/v1/history.json?key=54a5cab28f1f4d1195971015242808&q=${cityInput==""?cityInput="Sri Lanka":cityInput}&dt=${yesterday}`)
    .then(res=>res.json())
    .then(data=>{
        //console.log(data.forecast.forecastday[0].date)
       beforeday1.innerText= data.forecast.forecastday[0].date
       beforeday1temp.innerText= data.forecast.forecastday[0].day.avgtemp_c+"°C"
       beforeday1img.src=data.forecast.forecastday[0].day.condition.icon
      
    }) 

  
}

function dayBefore(){
    let cityInput=document.getElementById("txtSearch").value
    let beforeday2=document.getElementById("beforedate2")
    let beforeday2temp=document.getElementById("beforetemp2")
    let beforeday2img=document.getElementById("beforedate2img")
    let today = new Date();
    today.setDate(today.getDate() - 2);
    let dayBefore = today.toISOString().split('T')[0];
 
    fetch(`http://api.weatherapi.com/v1/history.json?key=54a5cab28f1f4d1195971015242808&q=${cityInput==""?cityInput="Sri Lanka":cityInput}&dt=${dayBefore}`)
    .then(res=>res.json())
    .then(data=>{
       // console.log(data.forecast.forecastday[0].date)
        beforeday2.innerText= data.forecast.forecastday[0].date
        beforeday2temp.innerText= data.forecast.forecastday[0].day.avgtemp_c+"°C"
        beforeday2img.src=data.forecast.forecastday[0].day.condition.icon
      
    }) 
}



function viewTableForecast(){
    let cityInput=document.getElementById("txtCountry").value

    let tblforecast=document.getElementById("tblforecast");
    let tableBody = `<tr>
                    <th scope="col">DATE</th>
                    <th scope="col"></th>
                    <th scope="col">AVERAGE TEMPERATURE</th>
                    <th scope="col">WIND FLOW</th>
                    <th scope="col">HUMIDITY</th>
                </tr>` ;
    

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=54a5cab28f1f4d1195971015242808&q=${cityInput}&days=7`)
    .then(res=>res.json())
    .then(data=>{ 

        console.log(data)
        // tableBody+=`
                    
        // <tr>
        //     <td>

        //     <h1>${data.forecast.forecastday[1].date}</h1> <br>
                                
        //     </td>
        //     <td><img src="${data.forecast.forecastday[1].day.condition.icon}" alt=""></td>
        //     <td>${data.forecast.forecastday[1].day.avgtemp_c}+"°C"</td>
        //     <td>${data.forecast.forecastday[1].day.maxwind_kph}+"km/h"</td>
        //     <td>${data.forecast.forecastday[1].day.avghumidity}+""</td>
            
        // </tr>
        
        // <tr>
        //     <td>

        //     <h1>${data.forecast.forecastday[2].date}</h1> <br>
                                
        //     </td>
        //     <td><img src="${data.forecast.forecastday[2].day.condition.icon}" alt=""></td>
        //     <td>${data.forecast.forecastday[2].day.avgtemp_c}+"°C"</td>
        //     <td>${data.forecast.forecastday[2].day.maxwind_kph}+"km/h"</td>
        //     <td>${data.forecast.forecastday[2].day.avghumidity}+""</td>
            
        // </tr>
        
        // <tr>
        //     <td>

        //     <h1>${data.forecast.forecastday[3].date}</h1> <br>
                                
        //     </td>
        //     <td><img src="${data.forecast.forecastday[3].day.condition.icon}" alt=""></td>
        //     <td>${data.forecast.forecastday[3].day.avgtemp_c}+"°C"</td>
        //     <td>${data.forecast.forecastday[3].day.maxwind_kph}+"km/h"</td>
        //     <td>${data.forecast.forecastday[3].day.avghumidity}+""</td>
            
        // </tr>
        
        // <tr>
        //     <td>

        //     <h1>${data.forecast.forecastday[4].date}</h1> <br>
                                
        //     </td>
        //     <td><img src="${data.forecast.forecastday[4].day.condition.icon}" alt=""></td>
        //     <td>${data.forecast.forecastday[4].day.avgtemp_c}+"°C"</td>
        //     <td>${data.forecast.forecastday[4].day.maxwind_kph}+"km/h"</td>
        //     <td>${data.forecast.forecastday[4].day.avghumidity}+""</td>
            
        // </tr>
        // `
        // tblforecast.innerHTML=tableBody;
    }) 
}


