# π» Repo μκ°

λ μ¨ apiλ‘ κ·Έλ μ λ μ¨μμ₯μ, μκ°μ λ°μμ€κ³  λ©λ΄ apiλ‘ μ§μ­λ³ μμ, μ¬λ£λ³ μμ, μ’μνλ μ¬λ£μ κ²μμ ν΅ν΄ λ©λ΄λ₯Ό μΆμ²ν΄μ£Όλ μ±μ΄λ€.</br>
Reactμ apiλ₯Ό νμ©νμ¬ μ μνμλ€. μ€νμΌμ styled componentsλ₯Ό νμ©νμλ€.

## ποΈ μ£Όμ κΈ°λ₯

μ²«νλ©΄μμλ μλ μ½λ©μ ν΅ν΄ νμ¬ μμΉλ₯Ό κ²½λ, μλλ‘ λ°μμ κ° lat,lonμ μ μ₯νμλ€.

```
const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };
```

λ°μμ¨ νμ¬μμΉμ λ μ¨λ μλ μ½λ©μ APIλ₯Ό ν΅νμ¬ λ°μμλ€.</br>μ¬κΈ°μλ async,await λΉλκΈ°μμ μλ¦¬κ³  λκΈ°μ²λ¦¬νμλ€.

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

μλ μ½λ©μ ν΅ν΄ μμAPIλ₯Ό λ°μμ λ§μ°¬κ°μ§λ‘ μμλ€μ μ λ³΄μ μ¬λ£,μ§μ­ λ±μ jsonνμΌλ‘ λ°μμλ€.

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

## β μλ¬λ΄μ© λ° ν΄κ²°

1. μλ¬λ΄μ© : `Uncaught TypeError: Cannot read properties of null (reading 'name')`μλ¬κ° μ½μμ μ°νλ€.</br>stateκ° λΉλκΈ°μ μ΄λ©° μ²μ λ λλ§(λ§μ΄ν)νκΈ°λ μ μ λμνλ€λ κ²μ΄λ€. μ΄ λμ stateλ μ μλμ§ μμκΈ° λλ¬Έμ λΉμ°ν undefinedλ€.
   λλ¬Έμ κ°μ μ½μ μ μλ€λ μλ¬κ° μΆλ ₯λλ κ²μ΄λ€.</br>
   ν΄κ²°λ°©λ² : μ°Ύμλ³΄λ Home.jsxμμμ const [data, setData] = useState(null);κ΅¬λ¬Έμμ null λμ  []λΉλ°°μ΄μ λ£μ΄μ€μΌλ‘μ¨ Stateμ λ€μ΄μ¬ κ°μ νμμ λ―Έλ¦¬ μλ €μ£Όμ΄ λ°°μ΄μ΄ λ€μ΄κ° κ²μμ μΈμ§μμΌμ€μΌ μλ¬κ° λ°μνμ§ μλλ€.

## βοΈ Prerequisites

  <ul>
  <li>npm >= 18.14.0
  <li>react >= 18.2.0
  <li>react-router-dom >= 6.8.0
  
  ### Install
  ```npx create-react-app .```</br>
  ```npm install react-router-dom --save```</br>
  ```npm install styled-components```</br>
  
  ## πΊοΈ API Links
  <ul>
  <li>[MealDB API] (https://www.themealdb.com/api.php)</li>
  <li>[OpenWeather API] (https://openweathermap.org/api)</li></ul>
  
  ## π₯οΈ μ€ννλ©΄
  μ²« μ€ν νλ©΄ </br></br>
  <img width="800" alt="αα³αα³αα΅α«αα£αΊ 2023-02-10 αα©αα? 7 21 30" src="https://user-images.githubusercontent.com/120915990/218068967-60c8549d-30af-4740-9784-e4c209855524.png"></br></br> μ§μ­λ³ μμμΆμ²</br></br><img width="800" alt="αα³αα³αα΅α«αα£αΊ 2023-02-10 αα©αα? 6 48 42" src="https://user-images.githubusercontent.com/120915990/218069361-6c42100b-f718-4578-8157-583eabc7e323.png"></br></br>μν©λ³ μμμΆμ²</br></br><img width="800" alt="αα³αα³αα΅α«αα£αΊ 2023-02-10 αα©αα? 6 48 56" src="https://user-images.githubusercontent.com/120915990/218069357-0313599b-111b-4806-ad04-c7cdf0e7330e.png"></br></br>μ¬λ£κ²μ μμμΆμ²</br></br><img width="800" alt="αα³αα³αα΅α«αα£αΊ 2023-02-10 αα©αα? 6 49 10" src="https://user-images.githubusercontent.com/120915990/218069338-c510809f-9a52-41d3-a05c-f8c5e9cae0c0.png"></br></br>λλ€ μμμΆμ²</br></br>
<img width="800" alt="αα³αα³αα΅α«αα£αΊ 2023-02-10 αα©αα? 7 36 25" src="https://user-images.githubusercontent.com/120915990/218070955-af4f9a82-1aa9-450d-b807-f0de9b98d46a.png">
</br></br>μμ μμΈμ λ³΄,λ μνΌ</br></br><img width="800" alt="αα³αα³αα΅α«αα£αΊ 2023-02-10 αα©αα? 7 34 14" src="https://user-images.githubusercontent.com/120915990/218070528-d697ce6b-7eb4-4e6f-8dba-0597ded209c4.png">
