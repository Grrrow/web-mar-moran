const sanetizePicture = (data) => {
  const { title, filter } = data
  const imageUrl = data.imageUrl ? data.imageUrl[0].url : ''
  return { title, imageUrl, filter }
}
export default async () => {
  const response = await fetch(
    'https://api.airtable.com/v0/appBV8nDwYEWwVBxi/pictures?view=WebMarStaging',
    {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Bearer keytxVc6GBBouUvtX',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    }
  )
  const data = await response.json()
  const result = data.records.map((item) => sanetizePicture(item.fields))
  return result
}
