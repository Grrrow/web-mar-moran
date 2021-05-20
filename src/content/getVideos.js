const sanetizeVideo = (data) => {
    const {id, youtubeLink, title, description} = data
    return {id, youtubeLink, title, description}
}
export default async () => {
    const response = await fetch('http://188.166.144.88/videos')
    const data = await response.json()
    console.log(data)
    const result = data.map(item => sanetizeVideo(item))
    return result
}