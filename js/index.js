const appId = 'ef56b00a6828ba6b944d470010315ded';


const getDataForCity = city => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`)
  .then(response => response.json());

const createCardHtml = (name, temp, pressure, mintemp, maxtemp, description, humidity, sunrise, sunset, wind) => 
`
    <div class="container d-flex flex-column mb-3">
        <div>
            <p><strong>City of: ${name}</strong><p>
        </div>
        <div>
        </p><strong>Description: ${description}</strong></p>
        </div>        
        <div>
            <p><strong>Temperature:</strong> <strong>${Math.round(temp)} c°</strong></hp>
        </div>
        <div>
        <p><strong>Min ${Math.round(mintemp)} °c / Max ${Math.round(maxtemp)} °c </strong></p>
        </div>
        <div>
            <p><strong>Pressure at sea level: ${pressure} Mlb</strong></p>
        </div>
        <div>
            <p><strong>Humidity: ${humidity} %</strong></p>
        </div>      
    </div>
    </card>
`;

const goButton = document.querySelector('#go-button');
const cityInput = document.querySelector('#city-input');
const content = document.querySelector('#appcontent')

goButton.addEventListener('click', () => {

    const city = cityInput.value;
    // get the weather data for the city
    getDataForCity(city)
      .then(data => {
  
        const name = data.name;
        const temp = data.main.temp;
        const pressure = data.main.pressure;
        const mintemp = data.main.temp_min;
        const maxtemp = data.main.temp_max;
        const description = data.weather[0].main;
        const humidity = data.main.humidity;
        
        const cardHtml = createCardHtml(name, temp, pressure, mintemp, maxtemp, description, humidity); //wind to add
  
        content.innerHTML = cardHtml;
      });
  });

  let audio = document.getElementById ('audio');
  let playPauseBTN = document.getElementById ('playPauseBTN');
  let count = 0;
  
  function playPause (){
    if(count == 0){
      count = 1;
      audio.play();
      playPauseBTN.innerHTML = "Pause &#9208;";
    }else{
      count = 0;
      audio.pause();
      playPauseBTN.innerHTML = "Play &#9658;";
    }
  }
  function stop(){
    playPause()
    audio.pause();
    audio.currentTime = 0;
    playPauseBTN.innerHTML = "Play &#9658;";
    
  }  
