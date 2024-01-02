import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import {SearchBooksPage} from "./layouts/SearchBooksPage/SearchBooksPage";
import {Navigate, Route, Routes, useNavigate} from "react-router";
import {BookCheckOutPage} from "./layouts/BookCheckOutPage/BookCheckOutPage";
import {oktaConfig} from "./lib/oktaConfig";
import {OktaAuth, toRelativeUrl} from "@okta/okta-auth-js";
import {LoginCallback, SecureRoute, Security, useOktaAuth} from "@okta/okta-react";
import LoginWidget from "./Auth/LoginWidget";
import {ReviewListPage} from "./layouts/BookCheckOutPage/ReviewListPage/ReviewListPage";
import {ShelfPage} from "./layouts/ShelfPage/ShelfPage";
import {MessagesPage} from "./layouts/MessagesPage/MessagesPage";

const oktaAuth = new OktaAuth(oktaConfig);

export const App = ()=> {
    const navigate = useNavigate();


    const customAuthHandler = ()=>{
        navigate('/login');
    }

    const restoreOriginalUri = async (_oktaAuth:any, originalUri:any)=>{
        navigate(toRelativeUrl(originalUri || '/', window.location.origin), {replace:true});
    }

  return (
    <div className={"d-flex flex-column min-vh-100"}>
        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}
                  onAuthRequired={customAuthHandler}>
            <Navbar/>

            <div className={"flex-grow-1"}>
                <Routes>
                    <Route path='/' element={<Navigate to={'/home'}/>}></Route>
                    <Route path='/home' element={<HomePage/>}></Route>
                    <Route path={'/reviewlist/:bookId'} element={<ReviewListPage/>}/>
                    <Route path={"/search"} element={ <SearchBooksPage/>}></Route>
                    <Route path={"/checkout/:bookId"} element={<BookCheckOutPage/>}/>
                    <Route path={"/login"} element={<LoginWidget config={oktaConfig}/>}/>
                    <Route path={"/login/callback"} element={<LoginCallback/>}/>
                    // need to secure the shelfpage route
                    <Route path={"/shelf"} element={<ShelfPage/>}/>
                    <Route path={"/messages"} element={<MessagesPage/>}/>

                </Routes>


            </div>


            <Footer/>
        </Security>


    </div>

  );
}
