import React, { useRef, useState, useEffect } from "react";
import Alert from "./Alert";
import AllNotes from "./ShowingAllNotes";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import UpdateModal from "./UpdateModal";
import { useDispatch, useSelector } from "react-redux";
import { add_Note } from "../state/actions/NotesManage";

const AddNote = () => {
  //Adding new note in database as well as in screen

  const dispatch = useDispatch();
  let data = useSelector((state) => state.NotesReducer.todo);
  let [title, setTitle] = useState("");
  let [Description, setDescription] = useState("");
  let [tags, setTags] = useState("");
  let [shos, setShos] = useState(false);

  let count = 0;

  const [key, setKey] = useState(null);

  let [state, ss] = useState(false);

  let [noteValue, setNotValue] = useState({
    id: "",
    title: "",
    Description: "",
    tags: "",
  });
  let titless = useRef(null);
  let Des_error = useRef(null);
  let tags_error = useRef(null);
  let tit_error = useRef(null);
  let Descriptions = useRef(null);
  let tagss = useRef(null);

  let update_Note = (keys, title, Description, tags) => {
    ss(true);
    setKey(keys);

    setNotValue({
      id: keys,
      title: title,
      Description: Description,
      tags: tags,
    });

    document.body.classList.add("overflow-hidden");
  };

  let submit_Task = (e) => {
    console.log("hery");
    if (
      titless.current.value.trim() !== "" ||
      Descriptions.current.value.trim() !== "" ||
      tagss.current.value.trim() !== ""
    ) {
      if (titless.current.value.trim() === "") {
        tit_error.current.textContent = "Please Enter the title of note";
      }
      if (Descriptions.current.value.trim() === "") {
        Des_error.current.textContent = "Please Enter the Description of note";
      }
      if (tagss.current.value.trim() === "") {
        tags_error.current.textContent = "Please Enter the tags of note";
      }

      if (
        titless.current.value.length <= 12224 &&
        Descriptions.current.value.length <= 6622224 &&
        tagss.current.value.length <= 14
      ) {
        e.preventDefault();
        for (let index = 0; index < data.length; index++) {
          const element = data[index];

          if (element.title.trim() === titless.current.value) {
            console.log("yes");
            count = 0;
          } else {
            console.log("no");
            count++;
          }
        }
        if (count === data.length) {
          setShos(true);
          dispatch(
            add_Note(
              titless.current.value,
              Descriptions.current.value,
              tagss.current.value
            )
          )
            .then(() => {
              // Reset form values
              titless.current.value = "";
              Descriptions.current.value = "";
              tagss.current.value = "";
            })
            .catch((error) => {
              console.error("Error dispatching add_Note action:", error);
              // Handle error if needed
              // You can dispatch an error action here if required
            });
        } else {
          tit_error.current.textContent =
            "Same note is already exsisted in your notes";
        }
      } else {
        if (titless.current.value.length > 12224) {
          tit_error.current.textContent =
            "You cant enter a title larger than this length";
        }
        if (Descriptions.current.value.length > 6622224) {
          Des_error.current.textContent =
            "You cant enter a Description larger than this length";
        }
        if (tagss.current.value.length > 14) {
          tags_error.current.textContent =
            "You cant enter a tag larger than this length";
        }
      }
    } else {
      if (titless.current.value.trim() === "") {
        tit_error.current.textContent = "Please Enter the title of note";
      }
      if (Descriptions.current.value.trim() === "") {
        Des_error.current.textContent = "Please Enter the Description of note";
      }
      if (tagss.current.value.trim() === "") {
        tags_error.current.textContent = "Please Enter the tags of note";
      }
    }
  };
  // let fetching_Values = (e) => {

  //   set_Note({ ...not, [e.target.name]: e.target.value });
  //   if (titless.current.value.length <= 14 && titless.current.value !== "")
  //     tit_error.current.textContent = ""
  //   if (Descriptions.current.value.length <= 66 && Descriptions.current.value !== "")
  //     Des_error.current.textContent = ""
  //   if (tagss.current.value.length <= 14 && tagss.current.value !== "")
  //     tags_error.current.textContent = ""
  // };

  //add note interface
  return (
    <>
      <Alert shos={shos} />
      {useEffect(() => {
        if (shos) {
          const timerId = setTimeout(() => {
            setShos(false);
          }, 3000);

          return () => clearTimeout(timerId);
        }
      }, [shos])}

      <div className="container flex flex-col items-center smd:gap-y-7 ssm:gap-y-5 sssm:gap-y-5">
        <h1 className="items-center p-4 font-sans text-blue-600 bg-blue-100 rounded-md smd:text-3xl">
          ADD YOUR NOTES
        </h1>
        <form className="flex flex-col items-center gap-y-3">
          <div className="flex flex-col smd:gap-y-3 ssm:gap-y-2 sssm:gap-y-1">
            <label
              htmlFor="title"
              className="items-start text-blue-600 smd:text-xl md:"
            >
              Title
            </label>
            <div className="flex flex-col gap-y-1">
              <input
                type="text"
                name="title"
                ref={titless}
                className="smd:p-3 cursor-pointer rounded-md placeholder:text-sm shadow-sm shadow-black smd:w-[40rem] ssm:p-2 ssm:placeholder:text-xs md:w-[30rem] sm:w-[23rem] ssm:w-[18rem] sssm:p-1"
                id="title"
                placeholder="type your title"
                onChange={(event) => setTitle(event.target.value)}
              />
              <p className="text-sm text-red-600 " ref={tit_error}></p>
            </div>
          </div>

          <div className="flex flex-col gap-y-3 ssm:gap-y-2 sssm:gap-y-1">
            <label htmlFor="tags" className="text-blue-600 smd:text-xl">
              Tags
            </label>
            <div className="flex flex-col gap-y-1">
              <select
                name="tags"
                ref={tagss}
                className="smd:p-3 cursor-pointer rounded-md placeholder:text-sm shadow-sm shadow-black smd:w-[40rem] ssm:p-2 ssm:placeholder:text-xs md:w-[30rem] sm:w-[23rem] ssm:w-[18rem] sssm:p-1"
                id="tags"
                onChange={(event) => setTags(event.target.value)}
              >
                <option value="">Select a tag</option>
                <option value="Personal">Personal</option>
                <option value="Work">Work</option>
                <option value="Important">Important</option>
              </select>
              <p className="text-sm text-red-600" ref={tags_error}></p>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 ssm:gap-y-2 sssm:gap-y-1">
            <label htmlFor="Description" className="text-blue-600 smd:text-xl ">
              Description
            </label>
            <div className="flex flex-col gap-y-1">
              <textarea
                type="text"
                name="Description"
                ref={Descriptions}
                className="smd:p-3 cursor-pointer rounded-md placeholder:text-sm shadow-sm shadow-black smd:w-[40rem] ssm:p-2 ssm:placeholder:text-xs md:w-[30rem] sm:w-[23rem] ssm:w-[18rem] sssm:p-1 h-[12rem]"
                id="Description"
                placeholder="type your note"
                onChange={(event) => setDescription(event.target.value)}
              />
              <p className="text-sm text-red-600 " ref={Des_error}></p>
            </div>
          </div>
          <input
            type="button"
            value="Submit"
            className="p-3 smd:mt-[20px] cursor-pointer rounded-md shadow-sm shadow-black bg-blue-600 text-white w-[10rem] ssm:p-2 ssm:w-[8rem] md:mt-[16px] ssm:mt-[14px] sssm:mt-[14px] sssm:p-2"
            onClick={submit_Task}
          />
        </form>
        {state && (
          <UpdateModal
            keys={key}
            state={state}
            setShow={ss}
            up_tit={noteValue.title}
            up_des={noteValue.Description}
            up_tag={noteValue.tags}
          />
        )}

        <AllNotes update_Note={update_Note} />
      </div>
    </>
  );
};

export default AddNote;
