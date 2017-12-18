import fetch from 'cross-fetch';

const fetchApi = (url) => {
    return fetch(url).then(response => response.json())
}

export default fetchApi;