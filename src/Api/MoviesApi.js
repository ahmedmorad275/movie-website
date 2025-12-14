export async function getMovie() {
  let data
  const url = 'https://imdb236.p.rapidapi.com/api/imdb/tt0816692'
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '19eb216061mshc0890e3a7ca553ap19fecbjsn733e970e8831',
      'x-rapidapi-host': 'imdb236.p.rapidapi.com',
    },
  }
  try {
    const response = await fetch(url, options)
    const result = await response.json()
    data = result
  } catch (error) {
    console.error(error)
  }
  return data
}
