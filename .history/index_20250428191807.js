import { fetchComments } from './modules/api.js'
import {updateComments} from '.modules/co'
import { initAddCommentListener } from './modules/initListeners.js'
import { renderComments } from './modules/renderComments.js'

fetchComments().then(data => {
    updateComments
})

// renderComments()

initAddCommentListener(renderComments)
