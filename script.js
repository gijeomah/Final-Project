//code for the api 
const Api_key = "d73b4b5315cc473e8e3215605262704";
 async function getData(){
        try{
            const response = await fetch ("https://www.weatherapi.com/my/", {Api_key});
            if (!response.ok){
                throw new Error("could not fetch resources");
            }
            const data = await response.json();
            console.log(data);
        }
        catch(error){
            console.error(error);
        }
 };
getData();