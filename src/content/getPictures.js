const sanetizePicture = (data) => {
    const {id, title, image} = data
    const imageUrl = `http://188.166.144.88${image.url}`
    return {id, title, imageUrl}
}
export default async () => {
    const response = await fetch('http://188.166.144.88/fotos')
    const data = await response.json()
    console.log(data)
    const result = data.map(item => sanetizePicture(item))
    return result
}