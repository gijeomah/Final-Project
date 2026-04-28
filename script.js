//code for the api 
const Api_key = "d73b4b5315cc473e8e3215605262704";
const Api_url= `http://api.weatherapi.com/v1/current.json?key=${encodeURIComponent(Api_key)}&q=Paris`;
// const Api_url= `http://api.weatherapi.com/v1`;
console.log(Api_url);

 async function getData(){
        try{
            const response = await fetch (Api_url);
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
// Creating my abstract Class 
class abstract{
    constructor(data){
        for(let key of data){
            if ("location"==data[key]){
                for (let obj in data[key]){
                    if(obj == "name"){
                        this.name=obj;
                    }
                }

            }
        } 

        // //this.location=location;
        // this.temp="temp_f" //figure out how to get that info
        // this.text="partly cloudy"
        // this.icon="img tag"
        // this.name=name//figure out how to get that 

    }

}