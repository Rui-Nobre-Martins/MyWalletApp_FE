async function fetchData(endpoint, method, body) {
   
    const options = {
       method,
       headers: {
          "Content-Type": "application/json",
       },
       credentials: "include"
    };
 
    if (body) {
       options.body = JSON.stringify(body);
    };
 

    const apiURL = import.meta.env.VITE_REACT_API_URL;
 
    const response = await fetch(apiURL + endpoint, options);
    const result = await response.json();
    
    return result;
 };
 
 export default {
    fetchData
 };

