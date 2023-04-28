const onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getCharacters(pageNumber, searchQuery, status, gender, species) {
    return fetch(`${this._baseUrl}/character/?page=${pageNumber}&name=${searchQuery}&status=${status}&gender=${gender}&species=${species}`, {
      method: "GET",
    }).then(onResponse);
  }

  getCharacterByID(characterID) {
    return fetch(`${this._baseUrl}/character/${characterID}`, {
      method: "GET",
    }).then(onResponse);
  }

  getLocations() {
    return fetch(`${this._baseUrl}/location`, {
      method: "GET",
    }).then(onResponse);
  }
  
}

const config = {
  baseUrl: "https://rickandmortyapi.com/api",
  headers: {
    "content-type": "application/json",
  },
};

const RickMortyApi = new Api(config);

export default RickMortyApi;