import { updateComments } from './comments.js'
import { renderComments } from './renderComments.js'

export const host = `https://wedev-api.sky.pro/api/v1/olchik-resh`

export const fetchComments = () => {
    return fetch(host + '/comments')
        .then((res) => {
            return res.json()
        })
        .then((responseData) => {
            console.log(responseData) // Проверяем формат данных
            const appComments = responseData.comments.map((comment) => {
                return {
                    name: comment.author.name,
                    date: new Date(comment.date),
                    text: comment.text,
                    likes: comment.likes,
                    isLikes: false,
                }
            })

            console.log(appComments)
            return appComments
        })
}

// fetchComments().then((data) => {
//     console.log(data) // Проверяем формат данных
//     updateComments(data)
//     renderComments()
// })

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
