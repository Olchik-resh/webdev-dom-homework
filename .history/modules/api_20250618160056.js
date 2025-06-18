export const host = `https://wedev-api.sky.pro/api/v1/olchik-resh`

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
        )
        .then((res) => {
            return res.json()
        })
        .then((responseData) => {
            const appComments = responseData.comments.map((comment) => {
                return {
                    name: comment.author.name,
                    date: new Date(comment.date),
                    text: comment.text,
                    likes: comment.likes,
                    isLikes: false,
                }
            })

            return appComments
        })
}

export const postComment = (name, text) => {
    return fetch(host + '/comments', {
        method: 'POST',
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
}
