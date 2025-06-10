//массив
export let comments = []

export const updateComments = (newComments) => {
    console.log(Array.isArray(newComments), newComments)
    comments = newComments
}
