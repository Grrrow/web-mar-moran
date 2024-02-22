const sanetizeVideo = (data) => {
    const {id, youtubeLink, title, description, filter} = data
    return {youtubeLink, title, description, filter}
}
export default async () => {
    const response = await fetch('https://api.airtable.com/v0/appBV8nDwYEWwVBxi/videos?view=WebMarStaging', { 
        method: 'GET', 
        headers: new Headers({
          'Authorization': 'Bearer patt4SC80mBiFCRv5.18120bafecf3d1f0438f7c5cd511d2739a81b0f6db027b58bf35029f515e31c7', 
          'Content-Type': 'application/x-www-form-urlencoded'
        }), 
      });
    const data = await response.json()
    const result = data.records.map(item => sanetizeVideo(item.fields))
    return result
}