# Rest API (Book API)

This is a RESTful API for managing a collection of books. It provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on books.

## Table of Contents

  - [About the Project]
  - [Getting Started]
  - [Usage]
  - [Contributing]
  - [License]
  - [Contact]
-----

## About the Project

This project provides a simple and efficient way to interact with a book database. The API allows you to add new books, retrieve a list of all books, get details about a specific book, update a book's information, and delete a book from the collection.

### Built With

  * Node.js
  * Express

-----

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You will need the following software installed on your machine:

  * Node.js
  * npm
  * express

### Installation

1.  Clone the repo
    ```sh
    git clone [GitHub URL]
    ```
2.  Navigate to the project directory
    ```sh
    cd book-api
    ```
3.  Install NPM packages
    ```sh
    npm install
    ```
4.  Create a `.env` file in the root directory and add your localhost port.
    ```
    PORT = 8080
    ```
5.  Run the server
    ```sh
    npm start
    ```

-----

## Usage

The API is running on `http://localhost:5000` by default. Here are the available endpoints:

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/books` | Get a list of all books |
| `GET` | `/books/:id`| Get details of a specific book by ID |
| `POST`| `/books` | Add a new book |
| `PUT` | `/books/:id`| Update an existing book by ID |
| `DELETE`| `/books/:id`| Delete a book by ID |

**Example Request to add a new book:**

```json
POST http://localhost:5000/books
Content-Type: application/json

{
  "title": "The Hitchhiker's Guide to the Galaxy",
  "author": "Douglas Adams",
  "year": 1979
}
```

-----

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

-----

## License

Distributed under the MIT License. See `LICENSE` for more information.

-----

## Contact

Md. Shahriyar Rahim 

Project Link: [https://github.com/Shahriyar-Rahim/book-api-expressjs]
