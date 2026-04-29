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
            data = await response.json();
            // console.log(data);
            return data;
           
        }
        catch(error){
            console.error(error);
        }
 };

(async () => {



let data = await getData(); 

console.log(data);
//await getData();
// Creating my abstract Class 
class abstract{
    constructor(data){
        this.name=data['location']['name'];
        this.local_time=data['location']['localtime'];
        this.curr_temp=data['current']['temp_f'];
        this.text=data['current']['text'];
        this.image=data['current']['icon'];
        this.feel_like=data['current']['feelslike_f'];
        // //this.location=location;
        // this.temp="temp_f" //figure out how to get that info
        // this.text="partly cloudy"
        // this.icon="img tag"
        // this.name=name//figure out how to get that 
    }
//     class Module extends abstract{
//         constructor(){
//             //code?


//         }
        
//     }

// }
data_pnt=new abstract(data);

})();