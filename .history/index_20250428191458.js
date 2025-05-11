import { fetchComments } from './modules/api.js'
import { initAddCommentListener } from './modules/initListeners.js'
import { renderComments } from './modules/renderComments.js'

fetchComments().then(data => {
    
})

// renderComments()

initAddCommentListener(renderComments)
