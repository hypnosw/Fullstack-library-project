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
import {LoginCallback, Security} from "@okta/okta-react";
import LoginWidget from "./Auth/LoginWidget";

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
                    <Route path={"/search"} element={ <SearchBooksPage/>}></Route>
                    <Route path={"/checkout/:bookId"} element={<BookCheckOutPage/>}/>
                    <Route path={"/login"} element={<LoginWidget config={oktaConfig}/>}/>
                    <Route path={"/login/callback"} element={<LoginCallback/>}/>
                </Routes>
            </div>


            <Footer/>
        </Security>


    </div>

  );
}
