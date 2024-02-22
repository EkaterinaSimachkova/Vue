export default async function getDogs(count) {
    try{
        let result = []
        const response = await axios.get(`https://dog.ceo/api/breeds/image/random/${count}`)
        let data = response.data.message
        data.forEach((item) => result.push({id: data.indexOf(item)+1, name: item.split('/').at(-2), url: item}))
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