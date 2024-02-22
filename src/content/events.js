const sanetizeEventsObject = (data) => {
    const {title, resume, color, link, date, location, role} = data
    const poster = data.poster ? data.poster[0].url : '';

    return { title, resume, color, link, date, location, role, poster }
}

export default async () => {
    const response = await fetch('https://api.airtable.com/v0/appBV8nDwYEWwVBxi/events?view=WebMarStaging', { 
        method: 'GET', 
        headers: new Headers({
          'Authorization': 'Bearer patt4SC80mBiFCRv5.18120bafecf3d1f0438f7c5cd511d2739a81b0f6db027b58bf35029f515e31c7', 
          'Content-Type': 'application/x-www-form-urlencoded'
        }), 
      });
    const data = await response.json()
    const result = data.records.map(item => sanetizeEventsObject(item.fields))
    return result
}
