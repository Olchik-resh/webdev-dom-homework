//массив
export let comments = []

export const updateComments = (newComments) => {
    comments = newComments
    console.log(Array.isArray(newComments), newComments)
}
