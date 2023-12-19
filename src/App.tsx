import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import {SearchBooksPage} from "./layouts/SearchBooksPage/SearchBooksPage";
import {Navigate, Route, Routes} from "react-router";
import {BookCheckOutPage} from "./layouts/BookCheckOutPage/BookCheckOutPage";

export const App = ()=> {
  return (
    <div className={"d-flex flex-column min-vh-100"}>
        <Navbar/>

        <div className={"flex-grow-1"}>
            <Routes>
                <Route path='/' element={<Navigate to={'/home'}/>}></Route>
                <Route path='/home' element={<HomePage/>}></Route>
                <Route path={"/search"} element={ <SearchBooksPage/>}></Route>
                <Route path={"/checkout/:bookId"} element={<BookCheckOutPage/>}/>
            </Routes>
        </div>


        <Footer/>

    </div>

  );
}
