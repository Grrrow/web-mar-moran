const sanetizeSliderObject = (data) => {
    const {id, iconMagazine, link, title, image, articulo} = data
    const imageUrl = `http://188.166.144.88${image[0].url}`
    let iconUrl = null
    if(iconMagazine){
        iconUrl = `http://188.166.144.88${iconMagazine.url}`
    }
    return { id, iconUrl, link, title, imageUrl, articulo }
}
export default async () => {
    const response = await fetch('http://188.166.144.88/noticias')
    const data = await response.json()
    console.log(data)
    const result = data.map(item => sanetizeSliderObject(item))
    return result
    
}
