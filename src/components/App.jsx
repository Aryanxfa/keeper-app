import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Note } from "./Note.jsx";
import { notes } from "../notes.js";
import { Add_notedb } from "./Routes";
const connectDb = require('./Database');

console.log(notes);

export function App() {
    
    connectDb();

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
            <button onClick={Add_notedb()}>Add Note</button>
            <Footer />
        </div>
    );

}