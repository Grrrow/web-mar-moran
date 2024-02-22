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
        Authorization: 'Bearer patt4SC80mBiFCRv5.18120bafecf3d1f0438f7c5cd511d2739a81b0f6db027b58bf35029f515e31c7',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    }
  )
  const data = await response.json()
  const result = data.records.map((item) => sanetizeSliderObject(item.fields))
  return result
}
