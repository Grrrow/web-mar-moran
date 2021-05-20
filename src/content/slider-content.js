const sanetizeSliderObject = (data) => {
    const {id, Description, title, image, position} = data
    const url = `http://188.166.144.88${image[0].url}`
    console.log( { id, Description, title, image, position })
    return { id, Description, title, url, position }
}
export default async () => {
    const response = await fetch('http://188.166.144.88/hero-slides')
    const data = await response.json()
    console.log(data)
    const result = data.map(item => sanetizeSliderObject(item))
    return result
    
}
