
// const baseURL =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid= ${api}`;

// let api = '9834506ddad2b1c50b68dac71bf3fa3e';


const cities = document.querySelector('input');
const  lat = document.querySelector('.lat');
const long = document.querySelector('.long');
const countries = document.querySelector('.country');
const origin = document.querySelector('.name');
const img = document.querySelector('.weather_img');
const text = document.querySelector('.city');

cities.addEventListener('keypress',()=>{
  const input = cities.value;
  const city = "Offa"
  const key = '2c98c921e50747cfa41185246221109';
  const base = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${input}&aqi=no`;
   
  
  fetch(base)
  .then( res => res.json())
  .then(data =>{
  console.log(data);
  // const lagtitude = data.location.lon;
  // const  longtitude = data.location.lat;
   const country= data.location.country;
   const city = data.location.name;
   const origins = data.location.region;
   const imgs = data.current.condition.icon; 
   const texts = data.current.condition.text;
  
  
  //  lat.textContent = `lag ${lagtitude} `;
  //  long.textContent = `long ${longtitude}`;
   countries.textContent = `${country}`;
   origin.textContent = ` ${city} / ${origins}`;
   img.src = `${imgs} `;
   text.textContent = texts;
  });

})




