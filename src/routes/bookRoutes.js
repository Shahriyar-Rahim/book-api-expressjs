const express = require('express');

const router = express.Router();

// local database
let books = [ 
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        genre: "Fiction"
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "Fiction"
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        year: 1949,
        genre: "Dystopian"
    }
]


router.get('/', (req, res) => {
    res.status(200).json({
        message: "Get all books",
        data: books
    });
});

// add new books
router.post('/', (req, res) => {
    console.log(req.body);

    // const { title, author, year, genre} = req.body;
    // const newBook = {
    //     id: books.length + 1,
    //     title,
    //     author,
    //     year,
    //     genre,
    // }

    const newBook = { id: books.length + 1, ...req.body };

    books.push(newBook);
    res.status(201).json({ newBook });
})

router.patch('/:id', (req, res) => {
    const { id }  = req.params;

    const findBookIndex = books.findIndex(book => book.id === parseInt(id));
    // console.log(findBookIndex);

    if (findBookIndex !== -1) {
        books[findBookIndex] = { ...books[findBookIndex], ...req.body};
        res.status(200).json({
            message: `Book with id ${id} has been updated`,
            data: books[findBookIndex]
        })
    } else {
        res.status(400).json({
            message: `Book with id no: ${id} not found`
        })
    }
})

// delete a book
router.delete("/:id", (req, res) => {
    const { id } = req.params;

    books = books.filter(book => book.id !== parseInt( id ));
    res.status(200).json({
        message: `Book with id ${id } has been deleted`,
    })
} )


module.exports = router;