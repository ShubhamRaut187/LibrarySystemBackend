# LibrarySystemBackend 📖💾

The backend for a library system built using Node.js with Express, Mongoose, and MongoDB provides a set of API routes to manage the library's book inventory. The API includes four main routes to perform CRUD (Create, Read, Update, Delete) operations on book details.
Backend is deployed on Render.</br>
Server Deployed Link:https://librarysystem-hupf.onrender.com/

# End Points 🔚
1. Get All Books:</br>
Endpoint: /book</br>
Method: GET</br>
Description: This endpoint retrieves a list of all books available in the library. The server responds with details of each book, including information such as title, author, and other relevant details.

2. Get Single Book:</br>
Endpoint: /book/:id</br>
Method: GET</br>
Description: This endpoint retrieves details for a specific book identified by its unique :id parameter. The server responds with information about the requested book.

3. Create Book:</br>
Endpoint: /book/createbook</br>
Method: POST</br>
Description: Use this endpoint to add a new book to the library. The client sends a POST request with a JSON payload containing the details of the book to be created, such as title, author, publication year, etc. The server then adds the new book to the books collection.

4. Update Book:</br>
Endpoint: /book/updatebook/:id</br>
Method: PUT</br>
Description: This endpoint allows the client to update the details of a specific book identified by its :id parameter. The client sends a PUT request with a JSON payload containing the updated information for the book. The server processes the request, modifies the existing book record, and responds with the updated book details.

5. Delete Book:
Endpoint: /book/deletebook/:id
Method: DELETE
Description: Use this endpoint to remove a book from the library's inventory. The client sends a DELETE request with the unique :id parameter identifying the book to be deleted. The server processes the request, removes the specified book from the database, and responds with a confirmation message.
