import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import religionImage from "../images/cathryn-lavery-fMD_Cru6OTk-unsplash.jpg";
import hinduismImage from "../images/natalie-kinnear-bXI_74lvZyI-unsplash.jpg";
import businessImage from "../images/wendy-aros-routman-Pf5iPTOJQ3g-unsplash.jpg";
import { useDispatch } from "react-redux";
import { delete_Note } from "../state/actions/NotesManage";

const Noteitem = (props) => {
  const { keys, titles, Description, tags, update_Note } = props;

  const dispatch = useDispatch();
  let imageSrc;

  if (tags === "Personal") {
    imageSrc = religionImage;
  } else if (tags === "Work") {
    imageSrc = hinduismImage;
  } else {
    imageSrc = businessImage;
  }

  return (
    <div>
      <div className="relative flex flex-row w-full p-3 text-gray-700 bg-white border-2 border-blue-600 shadow-md shadow-lg bg-clip-border rounded-xl shadow-black">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
          <img
            src={imageSrc}
            alt={tags}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6 rounded-md bg-slate-300">
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
            Tag: {tags}
          </h6>
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {titles}
          </h4>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            {Description}
          </p>
          <div className="flex flex-row gap-x-4 smd:mt-[0.3rem] sm:mt-[0.2rem]">
            <FontAwesomeIcon
              icon={faTrash}
              className="text-blue-600 cursor-pointer "
              onClick={() => {
                dispatch(delete_Note(keys));
              }}
            />
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="text-blue-600 cursor-pointer "
              onClick={() => {
                update_Note(keys, titles, Description, tags);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
