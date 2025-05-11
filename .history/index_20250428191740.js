import { fetchComments } from './modules/api.js'
import {updateComments} fro
import { initAddCommentListener } from './modules/initListeners.js'
import { renderComments } from './modules/renderComments.js'

fetchComments().then(data => {
    updateComments
})

// renderComments()

initAddCommentListener(renderComments)
