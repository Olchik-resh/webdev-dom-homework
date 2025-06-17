import { fetchComments } from 'ю/modules/api.js'
import {updateComments} from './modules/comments.js'
import { initAddCommentListener } from './modules/initListeners.js'
import { renderComments } from './modules/renderComments.js'

fetchComments().then(data => {
    updateComments (data)
    renderComments()
})

// renderComments()

initAddCommentListener(renderComments)
