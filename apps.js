
let input = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-button');
const time = document.getElementById('city-date');
const city = document.getElementById('city');
const icon = document.getElementById('icon')
const temp = document.getElementById('temp-output')
const winds = document.getElementById('wind-output')
const humidity = document.getElementById('humidity-output')
const uvIndex = document.getElementById('uv-index')
const uvBox = document.getElementById('uv-box');
const btn = document.getElementById('btn');

//getting date  and time
function dateTime () {
  let now = moment().format('LL'); 
  time.textContent = now ;
  }
  dateTime();

  const userInput = input.value.trim();


function user () {

    // getting search input
  const userInput = input.value.trim();
  

  //displaying input city 
  city.textContent = userInput.toUpperCase();

  let responseApi = 'https://api.openweathermap.org/data/2.5/weather?q=' +userInput + ',us&APPID=c6e868e79bd98cae1acee3ad146ee1cc&units=imperial';
  // calling api 
fetch(responseApi)
.then(data => {
  // display();
  return data.json(data);
})
.then((data) => {
  console.log(data)
  display(data);
})
.catch(error => {
  alert('Ut-oh, somethings not right. Please try again.')
})
document.createElement('img')

//getting icon display
// displaying results inside first output block
// getting lon and lat for uv index
// getting 5 day forecast 
function display (data){

let lat = data.coord.lat
let lon = data.coord.lon

  //  getting icon 
  let icon = data.weather[0].icon 
  let iconId = document.getElementById('weather-icon')
  iconId.src = 'http://openweathermap.org/img/wn/' + icon + '.png';

    let tempResults = data.main.temp;
    temp.textContent = tempResults + ' \u00B0F';
    temp.style.color = 'red';
    temp.style.fontSize='22px'

    let windResults = data.wind.speed;
    winds.textContent = windResults + ' mph';
    winds.style.color = 'red';
    winds.style.fontSize='22px'

    let humidityResults = data.main.humidity;
    humidity.textContent = humidityResults + ' %'
    humidity.style.color = 'red';
    humidity.style.fontSize='22px'

  // Calling uv api 
  let indexUvApi = 'https://api.openweathermap.org/data/2.5/uvi?lat=' + lat + '&lon='+ lon + '&units=imperial&appid=c6e868e79bd98cae1acee3ad146ee1cc';

  fetch(indexUvApi)
  .then(data => {
    return data.json(data);
  })
  .then((data) => {
    // console.log(data);
      let index = data.value;
      uvIndex.textContent = index;
      uvIndex.style.color = 'red';
      uvIndex.style.fontSize='22px'
      if (index <= 5) {
        uvBox.style.color='green';
      } else if (index > 5 && index < 10) {
        uvBox.style.backgroundColor='yellow';
      } else if (index > 10) {
        uvBox.style.backgroundColor='red';
      } else {
        uvBox.style.backgroundColor='none';
      }

// getting 5 day forecast 
let futureForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&exclude=current,hourly&units=imperial&appid=" + 'c6e868e79bd98cae1acee3ad146ee1cc';
fetch(futureForecast)
.then((data) => {
  return data.json(data)
})
.then((data) => {
  console.log(data)

  let dt = moment();
  dt = dt.add(1, 'days')
  dt = dt.format('M-D')
  const dateOne = document.getElementById('forecast-block-1')
  dateOne.textContent = dt;

// getting dates
  let dtTwo = moment();
  dtTwo = dtTwo.add(2, 'days')
  dtTwo = dtTwo.format('M-D')
  const dateTwo = document.getElementById('forecast-block-2')
  dateTwo.textContent = dtTwo;

  let dtThree = moment();
  dtThree = dtThree.add(3, 'days')
  dtThree = dtThree.format('M-D')
  const dateThree = document.getElementById('forecast-block-3')
  dateThree.textContent = dtThree;

  let dtFour = moment();
  dtFour = dtFour.add(4, 'days')
  dtFour = dtFour.format('M-D')
  const dateFour = document.getElementById('forecast-block-4')
  dateFour.textContent = dtFour;

  let dtFive = moment();
  dtFive = dtFive.add(5, 'days')
  dtFive = dtFive.format('M-D')
  const dateFive = document.getElementById('forecast-block-5')
  dateFive.textContent = dtFive;
  
// getting icons
  let dayOneIcon = data.list[0].weather[0].icon 
  let icon1 = document.getElementById('day-1-icon')
  icon1.src = 'http://openweathermap.org/img/wn/' + dayOneIcon + '.png';

  let dayTwoIcon = data.list[7].weather[0].icon 
  let icon2 = document.getElementById('day-2-icon')
  icon2.src = 'http://openweathermap.org/img/wn/' + dayTwoIcon + '.png';

  let dayThreeIcon = data.list[15].weather[0].icon 
  let icon3 = document.getElementById('day-3-icon')
  icon3.src = 'http://openweathermap.org/img/wn/' + dayThreeIcon + '.png';

  let dayFourIcon = data.list[23].weather[0].icon 
  let icon4 = document.getElementById('day-4-icon')
  icon4.src = 'http://openweathermap.org/img/wn/' + dayFourIcon + '.png';

  let dayFiveIcon = data.list[31].weather[0].icon 
  let icon5 = document.getElementById('day-5-icon')
  icon5.src = 'http://openweathermap.org/img/wn/' + dayFiveIcon + '.png';

  // getting temp
  let dayOneTemp = data.list[0].main.temp
  let temp1 = document.getElementById('day-1-block-temp')
  temp1.textContent = 'Temp: '  + dayOneTemp + ' \u00B0F';

  let dayTwoTemp = data.list[7].main.temp
  let temp2 = document.getElementById('block-temp-2')
  temp2.textContent = 'Temp: '  + dayTwoTemp + ' \u00B0F';

  let dayThreeTemp = data.list[15].main.temp
  let temp3 = document.getElementById('block-temp-3')
  temp3.textContent = 'Temp: '  + dayThreeTemp + ' \u00B0F';

  let dayFourTemp = data.list[23].main.temp
  let temp4 = document.getElementById('block-temp-4')
  temp4.textContent = 'Temp: '  + dayFourTemp + ' \u00B0F';

  let dayFiveTemp = data.list[31].main.temp
  let temp5 = document.getElementById('block-temp-5' )
  temp5.textContent = 'Temp: '  + dayFiveTemp + ' \u00B0F';

  // getting wind speed 
  let dayOneWind = data.list[0].wind.speed
  let wind1 = document.getElementById('day-1-block-wind')
  wind1.textContent = 'Wind: '  + dayOneWind + ' MPH';

  let dayTwoWind = data.list[7].wind.speed
  let wind2 = document.getElementById('block-wind-2')
  wind2.textContent = 'Wind: '  + dayTwoWind + ' MPH';

  let dayThreeWind = data.list[15].wind.speed
  let wind3 = document.getElementById('block-wind-3')
  wind3.textContent = 'Wind: '  + dayThreeWind + ' MPH';

  let dayFourWind = data.list[23].wind.speed
  let wind4 = document.getElementById('block-wind-4')
  wind4.textContent = 'Wind: '  + dayFourWind + ' MPH';
  
  let dayFiveWind = data.list[31].wind.speed
  let wind5 = document.getElementById('block-wind-5')
  wind5.textContent = 'Wind: '  + dayFiveWind + ' MPH';
  
  // getting humidity 
  let dayOneHum = data.list[0].main.humidity
  let hum1 = document.getElementById('day-1-block-humidity')
  hum1.textContent = 'Humidity:' + dayOneHum + '%'

  let dayTwoHum = data.list[7].main.humidity
  let hum2 = document.getElementById('block-humidity-2')
  hum2.textContent = 'Humidity:' +  dayTwoHum + '%'

  let dayThreeHum = data.list[15].main.humidity
  let hum3 = document.getElementById('block-humidity-3')
  hum3.textContent = 'Humidity:' +  dayThreeHum + '%'

  let dayFourHum = data.list[23].main.humidity
  let hum4 = document.getElementById('block-humidity-4')
  hum4.textContent = 'Humidity:' +  dayFourHum + '%'

  let dayFiveHum = data.list[31].main.humidity
  let hum5 = document.getElementById('block-humidity-5')
  hum5.textContent = 'Humidity:' +  dayFiveHum + '%'

})
  })
  userLocalHistory();
}
}
//get user input in local storage  and adding city to output page

  function userLocalHistory () {

  const userInput = input.value.trim();
  
    //setting local storage
    localStorage.setItem('city', userInput);
    const userLocal = localStorage.getItem('city')
    const key = localStorage.getItem('city')
    

    const ulList = document.getElementById('city-ul-list')
    const btn = document.createElement('button');
    btn.setAttribute('id', 'history-button')
    btn.textContent = userInput.toUpperCase();
    ulList.appendChild(btn);
    
  }



  console.log(userInput)

  
searchBtn.addEventListener('click', user)
