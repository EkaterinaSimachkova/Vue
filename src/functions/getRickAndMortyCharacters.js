import axios from 'axios';
export default async function getRickAndMortyCharacters(count) {
    try{
        let countArr = [...Array(count+1).keys()].slice(1)
        let result = []
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${countArr}`)
        let data = response.data
        data.forEach(item => result.push({id: item.id, name: item.name, url: item.image}))
        return result
    } catch(error) {
        if (error.response) {
            // Запрос был сделан, и сервер ответил кодом состояния, который выходит за пределы 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // Запрос был сделан, но ответ не получен `error.request`- это экземпляр XMLHttpRequest в браузере
            console.log(error.request);
        } else {
            // Произошло что-то при настройке запроса, вызвавшее ошибку
            console.log('Error', error.message);
        }
        console.log(error.config);
    };
  }