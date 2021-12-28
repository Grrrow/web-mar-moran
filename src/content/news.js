const sanetizeSliderObject = (data) => {
    const {id, link, title} = data
    const imageUrl = data.imageUrl ? data.imageUrl[0].url : '';
    const iconUrl = data.iconUrl ? data.iconUrl[0].url : '';

    return { id, iconUrl, link, title, imageUrl }
}

export default async () => {
    const response = await fetch('https://api.airtable.com/v0/appBV8nDwYEWwVBxi/news?view=WebMarStaging', { 
        method: 'GET', 
        headers: new Headers({
          'Authorization': 'Bearer keytxVc6GBBouUvtX', 
          'Content-Type': 'application/x-www-form-urlencoded'
        }), 
      });
    const data = await response.json()
    const result = data.records.map(item => sanetizeSliderObject(item.fields))
    return result
}
