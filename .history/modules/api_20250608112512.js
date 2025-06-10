const host = ` https://wedev-api.sky.pro/api/v2/:olchik-resh`
const authHost = 'https://wedev-api.sky.pro/api/user'

let token = ""

export const setToken = (newToken) => {
    token = newToken
}

export const fetchComments = () => {
    return fetch(host + '/comments')
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
        .catch((error) => {
            if (error.message.includes('500')) {
                console.error('Произошла ошибка на сервере:', error)
                alert('Произошла ошибка на сервере')
            } else if (error.message.includes('network')) {
                console.error('Ошибка сети:', error)
                alert('Нет интернета, попробуйте снова')
            } else {
                console.error('Ошибка:', error.message)
                alert('Произошла непредвиденная ошибка')
            }
        })
}

export const postComment = (name, text) => {
    return fetch(host + '/comments', {
        method: 'POST',
        headers 
        body: JSON.stringify({
            text,
            name,
        }),
    }).then((response) => {
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
}
