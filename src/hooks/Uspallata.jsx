import React, { useState } from 'react';
import { GetApiData } from '../api/api';

const Uspallata = () => {

   const [state, setState] = useState({
    data: {},
    phone : {}
   })
   
   const [dm, setDm]= useState([])

const getallData = async() => {
    // GetApiData().then((data) => {setDm(data)})  
    try {
        const result = await GetApiData();
        // console.log("r", result);
        let lm = result && result?.data.length > 0 && result?.data.map((item)=>{
            const {phone_name} = item;
            return phone_name;
        })
        // setDm(result) 
        setState((prev)=>({
            ...prev,
            data: result,
            phone: lm
        }))

    } catch (error) {
        console.log(error)
    }
}

    return {state, getallData, dm}

};
//
export default Uspallata;