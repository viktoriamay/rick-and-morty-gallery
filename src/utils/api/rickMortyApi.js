const onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // getCharactersList() {
  //   return fetch(`${this._baseUrl}/character/`, {
  //     method: 'GET',
  //   }).then(onResponse);
  // }

  getCharacters(pageNumber) {
    return fetch(`${this._baseUrl}/character/?page=${pageNumber}`, {
      method: 'GET',
    }).then(onResponse);
  }

  searchCharacters(searchQuery) {
    return fetch(`${this._baseUrl}/character/?&name=${searchQuery}`, {
      method: 'GET',
    }).then(onResponse);
  }
}

const config = {
  baseUrl: 'https://rickandmortyapi.com/api',
  headers: {
    'content-type': 'application/json'
  }
};

const RickMortyApi = new Api(config);

export default RickMortyApi;
