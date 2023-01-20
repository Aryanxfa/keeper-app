import React, { useEffect, useState } from "react";
import axios from 'axios';


export function Note() {

    //get notes from server
    const [notes, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('http://127.0.0.1:3000/notes').then((res) => {
            return res.data;
        }).then((notes) => {
            setData(notes);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    //render notes
    return (
        notes.map(noteitem => (
            <NoteRenderer
                key={noteitem._id}
                title={noteitem.title}
                content={noteitem.content}
            />
        ))
    );
}


export function NoteRenderer(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}