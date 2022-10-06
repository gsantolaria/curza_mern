const COMMENTS = [
    {
        author: 1,
        date: new Date('2022-8-15 10:55:32'),
        text: 'este es el 1er mensaje'
    },
    {
        author: 2,
        date: new Date('2022-8-23 23:32:52'),
        text: 'que lindo mensaje'
    },
    {
        author: 3,
        date: new Date('2022-9-5 15:38:13'),
        text: 'te parece?'
    },
    {
        author: 4,
        date: new Date('2022-9-25 16:24:10'),
        text: 'seeeee'
    },
    {
        author: 1,
        date: new Date('2022-9-30 09:55:32'),
        text: 'chau'
    },
]

const AUTHORS = [
    {
        id: 1,
        name: 'pepe',
    },
    {
        id: 2,
        name: 'diego',
    },
    {
        id: 3,
        name: 'mariano',
    },
    {
        id: 4,
        name: 'pablo',
    },
]

export const Data = {
    getAllAuthors: () => {
        return AUTHORS;
    },
    getAllComments: () => {
        return COMMENTS;
    },
    /**
    * @param {int} author The date
    * @param {string} text The string
    */
    saveNewComment: (author, text) => {
        COMMENTS.push({
            author: author,
            date: new Date(),
            text: text
        })
    }
}

