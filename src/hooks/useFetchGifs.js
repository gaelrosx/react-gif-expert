import { useState, useEffect } from "react"
import { requestGifs } from "../request/requestGifs"

export const useFetchGifs = (category) => {
  
    const [state, setState] = useState({
        images: [],
        loading: true
    })

    useEffect(() => {
        requestGifs( category).then( imgs => {
            setState({ 
                images: imgs,
                loading: false
            })
        })
    }, [ category ]) 
   

    return state;
}
