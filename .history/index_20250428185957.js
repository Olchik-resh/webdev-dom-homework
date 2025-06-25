import {fetchComments} from './api.j'
import { initAddCommentListener } from './modules/initListeners.js'
import { renderComments } from './modules/renderComments.js'

fetchComments()

renderComments()

initAddCommentListener(renderComments)


