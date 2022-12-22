import { baseurl } from "./domscript";


const fetch = async()=>{
    try{
        let response = await fetch(`${baseurl}`);
        console.log(response.ok)
        if(response.ok){
            let jsonResponse = response.json();
            return jsonResponse;
        }
    }catch(err){
        console.log(err)
    }
    }

    export{fetch}