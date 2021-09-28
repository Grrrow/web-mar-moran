const sanetizeEventsObject = (data) => {
    const {title, resume, color, link, date, location, role} = data
    const poster = data.poster ? data.poster[0].url : '';

    return { title, resume, color, link, date, location, role, poster }
}

export default async () => {
    const response = await fetch('https://api.airtable.com/v0/appBV8nDwYEWwVBxi/events?view=WebMarStaging', { 
        method: 'GET', 
        headers: new Headers({
          'Authorization': 'Bearer keytxVc6GBBouUvtX', 
          'Content-Type': 'application/x-www-form-urlencoded'
        }), 
      });
    const data = await response.json()
    const result = data.records.map(item => sanetizeEventsObject(item.fields))
    console.log(result)
    return result
}
