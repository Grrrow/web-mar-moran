const sanetizeSliderObject = (data) => {
  const { title, description, colorText, position } = data
  const url = data.url[0].url
  return { title, description, url, colorText, position }
}
export default async () => {
  const response = await fetch(
    'https://api.airtable.com/v0/appBV8nDwYEWwVBxi/slidesHero?view=WebMarStaging',
    {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Bearer keytxVc6GBBouUvtX',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    }
  )
  const data = await response.json()
  console.log(data)
  const result = data.records.map((item) => sanetizeSliderObject(item.fields))
  return result
}
