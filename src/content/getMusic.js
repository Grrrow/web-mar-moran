export default async () => {
  const response = await fetch(
    'https://api.airtable.com/v0/appBV8nDwYEWwVBxi/albums?view=WebMarStaging',
    {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Bearer keytxVc6GBBouUvtX',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    }
  )
  const data = await response.json()
  const result = data.records.map((item) => item.fields)
  return result
}
