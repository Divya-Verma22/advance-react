import { useState , useEffect } from "react";
import axios from "axios";



const url = "https://api.giphy.com/v1/gifs/random?api_key=vYa64syrz25io8XOvqdI4ecttlfoAU89";
// const randomurl = `https://api.giphy.com/v1/gifs/random?api_key=vYa64syrz25io8XOvqdI4ecttlfoAU89&tag=${tag}`;

const UseGif = (tag) => {

    const [gif, setGif] = useState("");
    const[loading , setLoading] = useState(false);


    async function fetchData(tag) {
        setLoading(true);
        console.log(tag);
      
        const {data}= await axios.get(tag ? `${url}&tag=${tag}` : url);
        const output = data.data.images.downsized_large.url;
        setGif(output);   
        setLoading(false); 
    }
    useEffect(() => {
        fetchData("car");        
    }, []);

    return{
        gif ,
        loading,
        fetchData
    }
    
}

export default UseGif;