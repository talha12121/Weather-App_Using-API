var date = new Date().toDateString();
var img = document.getElementById("img");
document.getElementById("time").innerHTML += date;
// if ("serviceWorker" in navigator) {
//     window.addEventListener("load", function () {
//       navigator.serviceWorker
//         .register("/serviceWorker.js")
//         .then((res) => console.log("service worker registered"))
//         .catch((err) => console.log("service worker not registered", err));
//     });
//   }

//   function showNotification() {
//     Notification.requestPermission((result) => {
//       if (result === "granted") {
//         navigator.serviceWorker.ready.then((registration) => {
//           registration.showNotification("Yahoo Weather", {
//             body: "Check Your City Weather",
//             icon: "./img/logo.png",
//             vibrate: [200, 100, 200, 100, 200, 100, 200],
//             tag: "vibration-sample",
//           });
//         });
//       }
//     });
//   }

// showNotification();

//   if(navigator.geolocation){
//   navigator.geolocation.getCurrentPosition((position) => {
//     lat = position.coords.latitude;
//     lon = position.coords.longitude;

// fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=ddd4fe361bc98bd7ee7bdf83fd4da229`)
// .then((res)=>res.json())
// .then((res)=>

// console.log(res))
// })
//   }else{
//     search()
//   }
window.onkeydown = function () {
  if (event.keyCode === 13) {
    search();
  }
};
function search() {
  let search = document.getElementById("search");
  console.log(search.value);
  var data;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=ddd4fe361bc98bd7ee7bdf83fd4da229&units=metric`
  )
    .then((res) => res.json())
    .then((res) => {
      data = res;
      console.log(data);
      if (data.cod === 200) {
        let city = document.getElementById("city");
        city.innerHTML = data.name;
        console.log(data.name);
        let temp = document.getElementById("temp");
        temp.innerHTML = Math.ceil(data.main.temp) + " " + "C";
        console.log(data.main.temp);
        let weather = document.getElementById("weather");
        weather.innerHTML = data.weather[0].description;
        console.log(data.weather[0].description);
        let feelslike = document.getElementById("feelslike");
        feelslike.innerHTML = Math.ceil(data.main.feels_like) + " " + "C";
        let humidity = document.getElementById("humidity");
        humidity.innerHTML = data.main.humidity + " " + "%";
        let wind = document.getElementById("wind");
        wind.innerHTML = data.wind.speed + " " + "km/h";
        
        if (data.weather[0].description === "smoke") {
          img.src = "./images/smoke.png";
        }
        
         else if (data.weather[0].description === "clear sky") {
          img.src = "./images/clear-sky.png";
        } 
        else if (data.weather[0].description === "haze") {
          img.src = "./images/cloudy.png";
        } 
        else if (data.weather[0].description === "dust" || data.weather[0].description === "sand") {
          img.src = "./images/sand.png";
        }
         else if (data.weather[0].description === "mist" || data.weather[0].description === "fog"){
          img.src = "./images/smoke.png";
        }
         else if (data.weather[0].description === "snow") {
          img.src = "./images/snowflake.png";
        } 
        else if (data.weather[0].description === "light rain") {
          img.src = "./images/rainy-day.png";
        }
        else if (data.weather[0].description === "drizzle") {
          img.src = "./images/drizzle.png";
        }
        else if (data.weather[0].description === "thunderstorm") {
          img.src = "./images/thunderstorm.png";
        } else  {
          img.src = "./images/cloudy.png";
        }
      } else {
        swal("City Not Found");
      }
    });
}
