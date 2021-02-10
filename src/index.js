const api = '4b0acdbf1b451ce9f57778d2b016642b';
// const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=chennai&appid=4b0acdbf1b451ce9f57778d2b016642b';
// fetch(baseUrl).then((res) => {
//   console.log(res.json());
// }).catch(function (err){
//     console.log(err);
// })

const requestCity = async function (city) {
  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
  const query = `?q=${city}&appid=${api}`;
  const res = await fetch(baseUrl + query);
  const data = await res.json();
  return data;
};


requestCity("chennai");