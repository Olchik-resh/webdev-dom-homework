//массив
export let comments = [
    {
        name: 'Глеб Фокин',
        date: new ,
        text: 'Это будет первый комментарий на этой странице',
        likes: 3,
        isLikes: false,
    },
    {
        name: 'Варвара Н.',
        date: '13.02.22 19:22',
        text: 'Мне нравится как оформлена эта страница! ❤',
        likes: 75,
        isLikes: true,
    },
]

export const updateComments = newComments => {
    comments = newComments
}