import { fetchComments } from './modules/api.js'
import { updateComments } from './modules/comments.js'
import { renderComments } from './modules/renderComments.js'

export const fetchAndRenderComments = (isFirstLoading) => {
    if (isFirstLoading) {
        document.querySelector('.container').innerHTML =
            `<p>Пожалуйста подождите, загружаю комментарии...</p>`
    }

  fetchComments().then((data) => {
        updateComments(data)

        // Проверка наличия контейнера перед рендерингом комментариев
        const container = document.querySelector('.container')
        if (!container) {
            console.error('Контейнер не найден')
            return
        }

        renderComments()
    })
}


fetchAndRenderComments(true)
