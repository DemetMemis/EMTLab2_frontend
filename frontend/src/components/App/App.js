import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Authors from '../Authors/authors';
import Countries from '../Countries/countries';
import Categories from '../Categories/categories';
import Books from '../Books/BookList/books';
import Header from '../Header/header';
import BookAdd from '../Books/BookAdd/bookAdd';
import EShopService from "../../repository/eshopRepository";
import BookEdit from "../Books/BookEdit/bookEdit";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authors: [],
            countries: [],
            categories: [],
            books: [],
            selectedBook: {}

        }
    }


    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className="container">

                        <Route path={"/authors"} exact render={() =>
                            <Authors authors={this.state.authors}/>}/>

                        <Route path={"/countries"} exact render={() =>
                            <Countries countries={this.state.countries}/>}/>

                        <Route path={"/books/categories"} exact render={() =>
                            <Categories categories={this.state.categories}/>}/>

                        <Route path={"/books/add"} exact render={() =>
                            <BookAdd authors={this.state.authors}
                                     categories={this.state.categories}
                                     onAddBook={this.addBook}/>}/>

                        <Route path={"/books/edit/:id"} exact render={() =>
                            <BookEdit categories={this.state.categories}
                                      authors={this.state.authors}
                                      onEditBook={this.editBook}
                                      book={this.state.selectedBook}/>}/>

                        <Route path={"/books"} exact render={() =>
                            <Books books={this.state.books}
                                   onDelete={this.deleteBook}
                                   onEdit={this.getBook}/>}/>

                        <Redirect to={"/books"}/>

                    </div>
                </main>
            </Router>
        );
    }

    componentDidMount() {
        this.loadAuthors();
        this.loadCountries();
        this.loadCategories();
        this.loadBooks();
    }

    loadAuthors = () => {
        EShopService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }

    loadCountries = () => {
        EShopService.fetchCountries()
            .then((data) => {
                this.setState({
                    countries: data.data
                })
            });
    }

    loadCategories = () => {
        EShopService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }

    loadBooks = () => {
        EShopService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }


    deleteBook = (id) => {
        EShopService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
    }

    addBook = (name, category, authorId, availableCopies) => {
        EShopService.addBook(name, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    getBook = (id) => {
        EShopService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }

    editBook = (id, name, category, authorId, availableCopies) => {
        EShopService.editBook(id, name, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }


}

export default App;
