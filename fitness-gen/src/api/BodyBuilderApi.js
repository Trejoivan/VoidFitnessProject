import axios from 'axios'; 

export default {
  getData: () =>
    axios({
      'method': 'GET',
      'url': `https://bodybuilding-quotes1.p.rapidapi.com/random-quote`,
      headers: {
        'X-RapidAPI-Host': 'bodybuilding-quotes1.p.rapidapi.com',
        'X-RapidAPI-Key': '3ffa5fb259msh1aadb9da237bd30p1b726fjsnae990052df67'
      },
    })
};