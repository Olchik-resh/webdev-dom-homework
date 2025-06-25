import { fetchComments } from './modules/api.js'
import { updateComments } from './modules/comments.js'
import { renderComments } from './modules/renderComments.js'
import { initAddCommentListener } from './modules/initListeners.js'

export const fetchAndRenderComments = async (isFirstLoading) => {
    if (isFirstLoading) {
        document.querySelector('.container').innerHTML =
            `<p>Пожалуйста подождите, загружаю комментарии...</p>`
    }

    try {
        const data = await fetchComments()
        updateComments(data)
        renderComments()
    } catch (error) {
        console.error('Ошибка при загрузке комментариев:', error)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAndRenderComments(true)
})
