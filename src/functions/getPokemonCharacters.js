export default async function getPokemonCharacters(count) {
    try{
        let result = []
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${count}`)
        let data = response.data.results
        for (let item of data) {
            let id = item.url.split('/').at(-2)
            const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            console.log(pokemon.data.sprites.front_default)
            result.push({id: +id, name: item.name, url: pokemon.data.sprites.front_default})
        }
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