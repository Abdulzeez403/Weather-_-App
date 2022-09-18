



const cities = document.querySelector('input');
const  lat = document.querySelector('.lat');
const long = document.querySelector('.long');
const countries = document.querySelector('.country');
const origin = document.querySelector('.name');
const img = document.querySelector('.weather_img');
const text = document.querySelector('.city');
const  weather_detail = document.querySelector('.weather_detail')

cities.addEventListener('keypress',()=>{
  const input = cities.value;
  weather_detail.style.display= 'inline-block'
  const key = '2c98c921e50747cfa41185246221109';
  const base = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${input}&aqi=no`;
  fetch(base)
  .then( res => res.json())
  .then(data =>{
  console.log(data);
  // const lagtitude = data.location.lon;
  // const  longtitude = data.location.lat;
   const country = data.location.country;
   const city = data.location.name;
   const origins = data.location.region;
   const imgs = data.current.condition.icon; 
   const texts = data.current.condition.text;
   const temp = data.current.temp_c;
  //  const err = data.err.message;
  //  err ? alert("err has ocucured"): alert('successfully');
  
  //  lat.textContent = `lag ${lagtitude} `;
   long.textContent = ` ${temp}`;
   countries.textContent = `${country}`;
   origin.textContent = ` ${city} | ${origins}`;
   img.src = `${imgs} `;
   text.textContent = texts;
  });

})




