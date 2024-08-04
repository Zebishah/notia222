import { useState } from "react";
import NoteContext from "./NoteContext";
let NoteState = (props) => {
  let host = process.env.REACT_APP_API_HOST;
  let notes = [];

  let [note, setNotes] = useState(notes);


  // let get_Notes = async () => {
  //   const response = await fetch(`${host}/api/notes/fetchNote`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token": localStorage.getItem('token')
  //     },

  //   });
  //   const data = await response.json();

  //   setNotes(data);
  // }
  // let add_Note = async (key, title, Description, tags, s) => {


  //   const response = await fetch(`${host}/api/notes/addNote`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token": localStorage.getItem('token')
  //     },
  //     body: JSON.stringify({ title, Description, tags }),
  //   });
  //   const data = await response.json();
  //   setNotes(note.concat(data))

  // }
  // let delete_Note = async (id) => {

  //   const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token": localStorage.getItem('token')
  //     },

  //   });
  //   const data = response.json();
  //   console.log(data)



  //   let new_Notes = note.filter((note) => {

  //     return note._id !== id;
  //   })

  //   setNotes(new_Notes);
  // }
  // let update_Note = async (id, title, Description, tags) => {



  //   // Default options are marked with *
  //   const response = await fetch(`${host}/api/notes/updateNote/${id}`, {

  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token": localStorage.getItem('token')
  //     },
  //     body: JSON.stringify({ title, Description, tags }),
  //   });


  //   const data = await response.json();
  //   console.log(data)




  //   const updatedNotes = note.map((element) => {
  //     if (element._id === id) {
  //       return {
  //         ...element,
  //         title,
  //         Description,
  //         tags,
  //       };
  //     }
  //     return element;
  //   });

  //   setNotes(updatedNotes);
  // }


  return (
    <NoteContext.Provider value={{ note }}>
      {props.children}
    </NoteContext.Provider>

  )

}
export default NoteState;