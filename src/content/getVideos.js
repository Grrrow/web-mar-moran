const sanetizeVideo = (data) => {
    const {id, youtubeLink, title, description} = data
    return {id, youtubeLink, title, description}
}
export default async () => {
    const response = await fetch('https://api.airtable.com/v0/appBV8nDwYEWwVBxi/hero1?view=Hero', { 
        method: 'GET', 
        headers: new Headers({
          'Authorization': 'Bearer keytxVc6GBBouUvtX', 
          'Content-Type': 'application/x-www-form-urlencoded'
        }), 
      });
    const data = await response.json()
    console.log(data)
    const result = data.map(item => sanetizeVideo(item))
    return result
}
