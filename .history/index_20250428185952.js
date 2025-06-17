import {fetchComments} from './api.'
import { initAddCommentListener } from './modules/initListeners.js'
import { renderComments } from './modules/renderComments.js'

fetchComments()

renderComments()

initAddCommentListener(renderComments)


