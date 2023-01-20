import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Note } from "./Note.jsx";

export function App() {
    return (
        <div>
            <Header />
            <Note />
            <button className="FAB" >+</button>
            <Footer />
        </div>
    );

}