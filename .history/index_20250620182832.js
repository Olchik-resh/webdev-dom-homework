import { fetchComments } from './modules/api.js'
import { updateComments } from './modules/comments.js'
import { renderComments } from './modules/renderComments.js'

export const fetchAndRenderComments = async (isFirstLoading) => {
    if (isFirstLoading) {
        document.querySelector('.container').innerHTML =
            `<p>Пожалуйста подождите, загружаю комментарии...</p>`
    }

    const data = await fetchComments()
    updateComments(data)
    renderComments()
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAndRenderComments(true)
})
