const api = {
        getUser: username => fetch(`https://api.github.com/users/${username}`)
                .then(response => response.json())
                .catch(err => console.error('Failed retrieving information', err))
}

export default api