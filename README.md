# 💻 Repo 소개
날씨 api로 그날의 날씨와장소, 시간을 받아오고 메뉴 api로 지역별 음식, 재료별 음식, 좋아하는 재료의 검색을 통해 메뉴를 추천해주는 앱이다.</br>
React와 api를 활용하여 제작하였다. 스타일은 styled components를 활용하였다.

## 🖋️ 주요 기능
첫화면에서는 아래 코딩을 통해 현재 위치를 경도, 위도로 받아와 각 lat,lon에 저장하였다.
```
const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };
```
받아온 현재위치의 날씨는 아래 코딩의 API를 통하여 받아왔다.</br>여기서는 async,await 비동기임을 알리고 동기처리하였다.
```
const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    let response = await fetch(url);
    let result = await response.json();
    setData(result);
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);
  ```
  아래 코딩을 통해 음식API를 받아와 마찬가지로 음식들의 정보와 재료,지역 등을 json파일로 받아왔다.
  ```
  const areaUrl = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
  useEffect(() => {
    fetch(areaUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        setAreas(data.meals);
      });
  }, []);
  ```
  
  ## ❌ 에러내용 및 해결
  1. 에러내용 : ```Uncaught TypeError: Cannot read properties of null (reading 'name')```에러가 콘솔에 찍혔다.</br>state가 비동기적이며 처음 렌더링(마운팅)하기도 전에 동작한다는 것이다. 이 때의 state는 정의되지 않았기 때문에 당연히 undefined다.
때문에 값을 읽을 수 없다는 에러가 출력되는 것이다.</br>
 해결방법 : 찾아보니 Home.jsx에서의  const [data, setData] = useState(null);구문에서 null 대신 []빈배열을 넣어줌으로써 State에 들어올 값의 타입을 미리 알려주어 배열이 들어갈 것임을 인지시켜줘야 에러가 발생하지 않는다.
  
  ## ⚙️ Prerequisites
  <ul>
  <li>npm >= 18.14.0
  <li>react >= 18.2.0
  <li>react-router-dom >= 6.8.0
  
  ### Install
  ```npx create-react-app .```</br>
  ```npm install react-router-dom --save```</br>
  ```npm install styled-components```</br>
  
  ## 🗺️ API Links
  <ul>
  <li>[MealDB API] (https://www.themealdb.com/api.php)</li>
  <li>[OpenWeather API] (https://openweathermap.org/api)</li></ul>
  
  ## 🖥️ 실행화면
  첫 실행 화면 </br></br>
  
