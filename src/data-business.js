import axios from "axios";

function getCharacters() {
    return axios
        .get("https://rickandmortyapi.com/api/character")
        .then(response => {
            return response.data;
        });

};

function getCharacterByID(id) {
    return axios
        .get("https://rickandmortyapi.com/api/character/" + id)
        .then(response => {
            return response.data;
        });
};

function getLocation() {
    return axios
        .get("https://rickandmortyapi.com/api/location")
        .then(response => {
            return response.data
        });
}

export { getCharacters, getCharacterByID, getLocation };