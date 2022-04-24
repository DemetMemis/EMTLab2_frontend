import axios from '../custom-axios/axios';

const EShopService = {
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    fetchCountries: () => {
        return axios.get("/countries");
    },
    fetchCategories: () => {
        return axios.get("/books/categories");
    },
    fetchBooks: () => {
        return axios.get("/books");
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    addBook: (name, category, authorId, availableCopies) => {
        return axios.post("/books/add", {
            "name" : name,
            "category" : category,
            "authorId" : authorId,
            "availableCopies" : availableCopies
        });
    },
    editBook: (id, name, category, authorId, availableCopies) => {
        return axios.post(`/books/edit/${id}`, {
            "name" : name,
            "category" : category,
            "authorId" : authorId,
            "availableCopies" : availableCopies
        });
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    }

}

export default EShopService;
