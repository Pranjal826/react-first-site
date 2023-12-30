import { useContext, useState } from "react";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Form from "./components/Form";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import EditProfile from "./components/Edit";
library.add(fas, far, fab);

const App = () => {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />}/>
                <Route path="/login" element={<Form />}/>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/profile" element={<Profile />} /> 
                <Route path="/edit" element={<EditProfile />} /> 


            </Routes>
        </>
    );
};

export default App;
