export const FetchCars = async () =>{
  const url = 'https://carhs-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bcc661b622msh19966babd8b5fd6p105bd8jsn5e916f4454a1',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  };

  const response = await fetch(url, options)

  const result = await response.json()
  return result
}
