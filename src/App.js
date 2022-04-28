import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// pages
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import SignIn from "./pages/SignIn"; 

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/sign-in'} element={<SignIn/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
