import * as axios from "axios";

let instance = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag='
})

export const imgsURL = {
    all(word){
        return instance.get(`${word}`)
            .then(response => {
                return response.data
            })
    }
}