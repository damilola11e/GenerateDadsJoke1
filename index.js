const buttonEl=document.getElementById("button");
const Api_Key='s1NapmCQ56KLTFHYQk79cXLxg4dPL03XnySzsB1B'
const options={
    method:"GET",
    headers:{
        "X-Api-Key": Api_Key,
    },
};
const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1"
const heading_2el=document.getElementById("heading_2");
let limit=10;


async function fetchjoke(){
    try {
    heading_2el.innerText="Updating..."
    buttonEl.disabled="True";
    buttonEl.innerText="Loading...";
    const response= await fetch(apiURL,options)
    const data = await response.json()
    buttonEl.disabled="false";
    buttonEl.innerText="Get a Joke";
    heading_2el.innerHTML=data[0].joke;
        
    } catch (error) {
        heading_2el.innerText="An error Happened, Please Refresh the Page"
        heading_2el.style.color="red";
        buttonEl.innerText="Failed!";
    
    }


 
   
}
buttonEl.addEventListener("click", fetchjoke)
   



