import axios from "axios";
const  BASE_URL ='https://youtube138.p.rapidapi.com';


  export const fetchDataFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}` ,{
        params: { hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key':'a6c3568491mshfc945561dd29196p11a5a9jsn16c5764c7e1d',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
    })
    console.log(data)
return data;
  }