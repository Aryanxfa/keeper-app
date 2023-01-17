import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Note } from "./Note.jsx";
import { notes } from "../notes.js";

console.log(notes);

export function App() {

    return (
        <div>
            <Header />
            {notes.map(noteitem => (
                <Note
                    key={noteitem.key}
                    title={noteitem.title}
                    content={noteitem.content}
                />
            ))}
            <Footer />
        </div>
    );

}