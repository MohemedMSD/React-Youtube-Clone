import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_SOME_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

const FeatchData = async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data
}
export default FeatchData