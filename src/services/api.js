import axios from 'axios'

const URL = 'http://api.tvmaze.com/'
// Dashboard
export function getAllShows() {
    return axios.get(URL + 'shows').then(res => res.data);
}

// Search
export function getSearchResult(query) {
    return axios.get(URL + `search/shows?q=${query}`).then(res => res.data);
}

// Detail Page
export function getShowDetailsById(id) {
    return axios.get(URL + `shows/${id}?embed=cast`).then(res => res.data);
}

