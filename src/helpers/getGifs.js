


export const getGifs = async( category )=>{
    const apiKey = 'sP0nZ5wumGqd4py7CDXGYzIL19oceZXZ'
    const limit = '10'
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`

    const resp = await fetch(url);
    const { data }  = await resp.json();

    const gifs = await data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;
    }