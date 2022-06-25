export const requestGifs = async (category) => {
    const apyKey = "vfeK6iGgWzBFTqS837f3B0qYIzPMZnMy";
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apyKey}&q=${category}&limit=20`
    const resp = await fetch(endpoint)
    const { data } = await resp.json()
    
    const gifs = data.map( img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))


    return gifs;
    
}