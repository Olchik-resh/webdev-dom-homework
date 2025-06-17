const host = `https://wedev-api.sky.pro/api/v2/:olchik-resh`
// const authHost = `https://wedev-api.sky.pro/api/user`

export let token = ''

export const setToken = (newToken) => {
    token = newToken
}

export let name = ''

export const setName = (newName) => {
    name = newName
}

export const fetchComments = () => {
    return fetch(host + '/comments', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            if (response.status === 500) {
                throw new Error('Ошибка сервера')
            }
            if (response.status === 400) {
                throw new Error('Неверный запрос')
            }
            return response.json()
        })
        .catch((error) => {
            console.error('Ошибка при получении комментариев:', error)
        })
}

export const postComment = (name, text) => {
    return fetch(host + '/comments', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            text,
        }),
    })
        .then((response) => {
            if (response.status === 500) {
                throw new Error('Ошибка сервера')
            }
            if (response.status === 400) {
                throw new Error('Неверный запрос')
            }
            if (response.status === 201) {
                return response.json()
            }
        })
        .catch((error) => {
            console.error('Ошибка при добавлении комментария:', error)
        })


export const login = (login, password) => {
    return fetch(authHost + '/login', {
        method: 'POST',
        body: JSON.stringify({
            login: login,
            password: password,
        }),
    })
}

export const registration = (name, login, password) => {
    return fetch(authHost, {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            login: login,
            password: password,
        }),
    })
}
