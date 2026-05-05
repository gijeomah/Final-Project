//Getting the location
//const inpt = localStorage.getItem('user_inpt');
//code for the api
const inpt = document.getElementById('locate');
const btn = document.getElementById('btn');
let inpt_val;
let Api_url;
btn.addEventListener('click', function(){
    inpt_val = inpt.value;
    Api_url=`http://api.weatherapi.com/v1/forecast.json?key=${encodeURIComponent(Api_key)}&q=${inpt_val}&days=3`;
    loadDashboard();
});
const Api_key = "d73b4b5315cc473e8e3215605262704";
// const Api_url= `http://api.weatherapi.com/v1`;
console.log(Api_url);
const div = document.getElementById('div');
const img = document.getElementById('image');
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


async function loadDashboard() {






let data = await getData();


console.log(data);
//await getData();
// Creating my abstract Class
class dashboard{
    constructor(data){
        this.name=data['location']['name'];
        this.local_time=data['location']['localtime'];
        this.curr_temp=data['current']['temp_f'];
        this.text=data['current']['condition']['text'];
        this.image=data['current']['condition']['icon'];
        this.feel_like=data['current']['feelslike_f'];
        // //this.location=location;
        // this.temp="temp_f" //figure out how to get that info
        // this.text="partly cloudy"
        // this.icon="img tag"
        // this.name=name//figure out how to get that
    }
    display_dasboard(){//HCHANGE NAME
        let p = document.createElement('p');
        div.appendChild(p);
        p.innerHTML = this.name;
        let p_time = document.createElement('p');//CHANGE FORMAT LATER
        p.appendChild(p_time);
        p_time.innerHTML = this.local_time;
        img.src=this.image;
        let p_temp = document.createElement('p');
        div.appendChild(p_temp);
        p_temp.innerHTML = this.curr_temp;
        let p_feels = document.createElement('p');
        div.appendChild(p_feels);
        p_feels.innerHTML = this.feel_like;
        let p_text = document.createElement('p');
        div.appendChild(p_text);
        p_text.innerHTML = this.text;
    }
    //lst = [];
    calculate_forcast(){
        //let count=0; 
        for(let count=0; count < data['forecast']['forecastday'].length; count++){
            //console.log(data);
            console.log((data['forecast']['forecastday'][count]))
            div.innerHTML+="<p> Date:" + data['forecast']['forecastday'][count]['date']+"</p>"
            div.innerHTML+="<p> Max Temp:" + data['forecast']['forecastday'][count]['day']['maxtemp_f'] + "</p>"+"<p> Min Temp:"+ data['forecast']['forecastday'][count]['day']['mintemp_f']
            //div.innerHTML+=
            //hr Makes the line width; 
        }
        //code
        //Api_url= `http://api.weatherapi.com/v1/forecast.json?key=${encodeURIComponent(Api_key)}&q=Paris`;
        //console.log(data['forecast']['forecastday'][0].day)
        //for (let i=0; i< )
        // while (counter<=3){


        // }
        // for ()
        //  for (count of data['forecast']['forecastday'][counter++].day ){
        //     console.log(i);
        // }
        // for (const[key,value] of Object.entries(data['forecast']['forecastday'])){
        //     console.log(key,value);
        //     //let max_temp = 
            
        // }


    }
}


   
class display extends  dashboard{
    constructor(){
        super(data);
        super.display_dasboard();
        super.calculate_forcast();
    }
}


// }
//     class Module extends abstract{
//         constructor(){
//             //code?
// displayInfo(){
//     //Should Ido this instead:
//     div.innerHTML += "<p> Title: "+ this.#title +"</p>" + "<p> Description: " + this.#description + "</p>"  + "<p> Cast: " + this.#cast + "</p>" + "<p> Rating: " + this.#rating + "</p>"




//         }
       
//     }

// let data_pnt=new abstract(data);
// data_pnt.display_dasboard();
let data_pnt=new display(data);
//data_pnt.calculate_forcast();


};
