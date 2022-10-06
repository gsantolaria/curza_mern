const COMMENTS = [
    {
        id: 1,
        author: 1,
        date: new Date('2022-8-15 10:55:32'),
        text: 'este es el 1er mensaje'
    },
    {
        id: 2,
        author: 2,
        date: new Date('2022-8-23 23:32:52'),
        text: 'que lindo mensaje'
    },
    {
        id: 3,
        author: 3,
        date: new Date('2022-9-5 15:38:13'),
        text: 'te parece?'
    },
    {
        id: 4,
        author: 4,
        date: new Date('2022-9-25 16:24:10'),
        text: 'seeeee'
    },
    {
        id: 5,
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
    * @param {int} author
    * @param {string} text
    */
    saveNewComment: (author, text) => {
        let lastId = COMMENTS[COMMENTS.length -1].id;
        lastId++;
        COMMENTS.push({
            id: lastId,
            author: author,
            date: new Date(),
            text: text
        })
    },
    /**
     * @param {int} commetnId
     */
    deleteComment: (commetnId) => {
        for( var i = 0; i < COMMENTS.length; i++){ 
            if ( COMMENTS[i].id === commetnId) { 
                COMMENTS.splice(i, 1); 
                return true;
            }
        }
        return false;
    }
}

