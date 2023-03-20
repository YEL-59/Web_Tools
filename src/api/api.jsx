import axios from "axios";


 export const GetApiData = async()=>{
    const {data} =  await axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    return data;
 }

 