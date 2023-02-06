const BASE_URL = 'https://api.github.com/users/'

const api = {
        getUser: username => fetch(`${BASE_URL}${username}`)
                .then(response => response.json())
                .catch(err => console.error('Failed retrieving information', err)),
        getRepos: username => fetch(`${BASE_URL}${username}/repos`)
                .then(response => response.json())
                .catch(err => console.error('Failed retrieving information', err))
}

export default api