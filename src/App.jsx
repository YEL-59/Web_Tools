import axios from 'axios';
import React, { useEffect } from 'react';
import Uspallata from './hooks/Uspallata';
import { GetApiData } from './api/api';

const App = () => {

const {state, dm, getallData} = Uspallata();

useEffect(() => {
  getallData()
}, [])
console.log("full data",state);
console.log("all phone", state.phone)

  return (
    <div>
      {
        state?.phone?.length > 0 && state.phone.map((item)=>{
          return <p>${item}</p>
        })
      }
    </div>
  );                                                   
};

export default App;