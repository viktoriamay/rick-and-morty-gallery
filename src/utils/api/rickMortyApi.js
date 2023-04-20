const onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getCharacters(pageNumber, searchQuery, status, gender, species) {
    // let queryParams = `?page=${pageNumber}&name=${searchQuery}`;
    // if (status !== undefined) {
    //   queryParams += `&status=${status}`;
    // }
    // if (gender !== undefined) {
    //   queryParams += `&gender=${gender}`;
    // }
    // if (species !== undefined) {
    //   queryParams += `&species=${species}`;
    // }
    return fetch(`${this._baseUrl}/character/?page=${pageNumber}&name=${searchQuery}&status=${status}&gender=${gender}&species=${species}`, {
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
