//массив
export let comments = []

export const updateComments = (newComments) => {
    if (Array.isArray(newComments)) {
        comments = newComments
    } else {
        console.error('newComments не является массивом')
    }
}
