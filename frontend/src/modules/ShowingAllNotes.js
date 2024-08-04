import React, { useEffect, useState } from "react";
import Noteitem from "./NoteitemDesign";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_Note } from "../state/actions/NotesManage";
const AllNotes = (props) => {
  const data = useSelector((state) => state.NotesReducer.todo);

  const navigate = useNavigate();
  let { update_Note } = props;
  let dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(get_Note());
    else {
      navigate("/SignIn");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-y-14">
      <h1 className="items-center w-full p-4 font-sans text-3xl text-center text-white bg-blue-600 rounded-md ">
        YOUR NOTES
      </h1>

      <div className="z-10 flex flex-wrap items-center sm:justify-start smd:ml-8 xl:gap-x-[1.7rem] gap-y-8 lg:gap-x-[4.2rem] smd:gap-x-[2.6rem] ssm:gap-x-[1rem] md:ml-8 sm:ml-2 ssm:justify-center sssm:justify-center sssm:items-center  ">
        {data.length === 0 && (
          <h1 className="items-center w-full p-4 font-sans text-2xl text-center text-blue-600">
            No notes to display... Please Add some notes from above
          </h1>
        )}

        {data.map((notes) => {
          return (
            <Noteitem
              keys={notes._id}
              titles={notes.title}
              Description={notes.Description}
              tags={notes.tags}
              update_Note={update_Note}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllNotes;
