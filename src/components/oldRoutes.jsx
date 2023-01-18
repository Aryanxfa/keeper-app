import React from "react";
import mongoose from "mongoose";
import bodyParser from "body-parser";

export function Add_notedb(props) {
    const conn = async () => {
        try {
            await mongoose.connect('mongodb://127.0.0.1:27017/notesdb', {
                useNewUnifiedTopology: true,
                useNewUrlParser: true
            });
            console.log('connected');
        } catch (err) {
            return console.log(err);
        }
        conn();
    }


    const notesSchema = mongoose.Schema({
        key: Number,
        title: String,
        content: String
    });

    const NoteModel = new mongoose.model('NoteModel', notesSchema);


    const Newnote = new NoteModel({
        title: "beast",
        key: 1,
        content: "hey wehat akdjl"
    })
    Newnote.save();





}

export function Get_notedb() {


}