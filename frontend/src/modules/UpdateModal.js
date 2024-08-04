import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import UpdateAlert from "./UpdateAlert";
import { update_Note } from "../state/actions/NotesManage";
import { useDispatch, useSelector } from "react-redux";

const UpdateModal = (props) => {
  let dispatch = useDispatch();
  const data = useSelector((state) => state.NotesReducer.todo);
  let close = useRef(null);
  let titless = useRef(null);
  let Des_error = useRef(null);
  let tags_error = useRef(null);
  let tit_error = useRef(null);
  let Descriptions = useRef(null);
  let titleError = "Please Enter the title of the note";
  let descriptionError = "Please Enter the Description of the note";
  let tagsError = "Please Enter the tags of the note";
  let [shos, setShos] = useState(false);
  let tagss = useRef(null);
  let count = 0;
  let { keys, state, setShow, up_tit, up_des, up_tag } = props;
  console.log(keys);
  const [editedTitle, setEditedTitle] = useState(up_tit);
  const [editedDescription, setEditedDescription] = useState(up_des);
  const [editedTags, setEditedTags] = useState(up_tag);
  let update_Task = (e) => {
    if (
      titless.current.value.trim() !== "" ||
      Descriptions.current.value.trim() !== "" ||
      tagss.current.value.trim() !== ""
    ) {
      if (titless.current.value.trim() === "") {
        tit_error.current.textContent = titleError;
      }
      if (Descriptions.current.value.trim() === "") {
        Des_error.current.textContent = descriptionError;
      }
      if (tagss.current.value.trim() === "") {
        tags_error.current.textContent = tagsError;
      }

      if (
        titless.current.value.length !== "" &&
        Descriptions.current.value.length !== "" &&
        tagss.current.value.length !== ""
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

          close_Modal();
          dispatch(
            update_Note(keys, editedTitle, editedDescription, editedTags)
          );
          titless.current.value = "";
          Descriptions.current.value = "";
          tagss.current.value = "";
        } else {
          tit_error.current.textContent =
            "Same note is already exsisted in your notes";
        }
      }
    }
  };
  let titleChange = (e) => {
    setEditedTitle(e.target.value);
    if (titless.current.value !== "") tit_error.current.textContent = "";
  };
  let DesChange = (e) => {
    setEditedDescription(e.target.value);
    if (Descriptions.current.value !== "") Des_error.current.textContent = "";
  };
  let tagChange = (e) => {
    setEditedTags(e.target.value);
    if (tagss.current.value !== "") tags_error.current.textContent = "";
  };
  let close_Modal = () => {
    setShow(false);
    if (state === false) close.current.style.display = "none";
    document.body.classList.remove("overflow-hidden");
  };
  return (
    <>
      <UpdateAlert shos={shos} />
      {useEffect(() => {
        if (shos) {
          const timerId = setTimeout(() => {
            setShos(false);
          }, 3000);

          return () => clearTimeout(timerId);
        }
      }, [shos])}
      <div
        className="modal flex flex-col justify-center items-center bg-black bg-opacity-75 w-[100%] h-screen -mt-[9.3rem] z-20 fixed overflow-hidden "
        ref={close}
      >
        <FontAwesomeIcon
          icon={faClose}
          className="ml-auto text-purple-600 md:text-6xl ssm:mr-5 sm:text-3xl sm:-mt-5 ssm:text-2xl "
          onClick={() => {
            close_Modal();
          }}
        />
        <div className="container flex flex-col gap-y-4 items-center justify-center bg-white w-[60%] p-10 -mt-6 sm:w-[80%] ssm:w-[80%]">
          <div className="flex flex-row items-center">
            <h1 className="items-center p-3 font-sans text-purple-600 bg-purple-100 rounded-md md:text-2xl ssm:text-lg">
              UPDATE YOUR NOTE
            </h1>
          </div>

          <form className="flex flex-col items-center w-full gap-y-3">
            <div className="flex flex-col w-full gap-y-2">
              <label
                htmlFor="title"
                className="items-start text-purple-600 md:text-xl ssm:text-sm"
              >
                New-Title
              </label>
              <div className="flex flex-col w-full gap-y-1">
                <input
                  type="text"
                  name="title"
                  value={editedTitle}
                  className="w-full rounded-md shadow-sm cursor-pointer md:p-3 ssm:p-2 placeholder:text-sm shadow-black md:text-xl ssm:text-sm"
                  id="title"
                  placeholder="type your title"
                  onChange={titleChange}
                  ref={titless}
                />
                <p className="text-sm text-red-600 " ref={tit_error}></p>
              </div>
            </div>
            <div className="flex flex-col w-full gap-y-2">
              <label
                htmlFor="Description"
                className="text-purple-600 md:text-xl ssm:text-sm"
              >
                New-Description
              </label>
              <div className="flex flex-col w-full gap-y-1">
                <input
                  type="text"
                  name="Description"
                  value={editedDescription}
                  className="w-full rounded-md shadow-sm cursor-pointer md:p-3 ssm:p-2 placeholder:text-sm shadow-black md:text-xl ssm:text-sm"
                  id="Description"
                  placeholder="type your title"
                  onChange={DesChange}
                  ref={Descriptions}
                />

                <p className="text-sm text-red-600 " ref={Des_error}></p>
              </div>
            </div>
            <div className="flex flex-col w-full gap-y-2">
              <label
                htmlFor="tags"
                className="text-purple-600 md:text-xl ssm:text-sm"
              >
                New-Tag
              </label>
              <div className="flex flex-col w-full gap-y-1">
                <input
                  type="text"
                  name="tags"
                  value={editedTags}
                  className="w-full rounded-md shadow-sm cursor-pointer md:p-3 ssm:p-2 placeholder:text-sm shadow-black md:text-xl ssm:text-sm"
                  id="tags"
                  placeholder="type your title"
                  onChange={tagChange}
                  ref={tagss}
                />

                <p className="text-sm text-red-600 " ref={tags_error}></p>
              </div>
            </div>
            <input
              type="button"
              value="Update"
              className="p-3 mt-[20px] cursor-pointer rounded-md shadow-sm shadow-black bg-purple-600 text-white w-[10rem]"
              onClick={update_Task}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
