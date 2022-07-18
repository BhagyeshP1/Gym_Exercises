export const exerciseOptions  = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,                                // This helps us hide our API key
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  


export const fetchData = async (url, options) => {                                          // This function will only extract the data
    const response = await fetch(url , options);                                            // We want to fetch the url first and then provide the options
    const data = await response.json();

    return data;
}