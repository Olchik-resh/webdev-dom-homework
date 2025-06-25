import { fetchComments } from './modules/api.js'
import 
import { initAddCommentListener } from './modules/initListeners.js'
import { renderComments } from './modules/renderComments.js'

fetchComments().then(data => {
    updateComments
})

// renderComments()

initAddCommentListener(renderComments)
