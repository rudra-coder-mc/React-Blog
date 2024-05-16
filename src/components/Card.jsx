import React from "react";
import fileServices from "../Appwrite/File";
import { Link } from "react-router-dom";

function Card({ $id, title, featuredImage }) {
  return (
    <>
      <Link to={`/post/${$id}`}>
        <div className="w-[300px] rounded-md border bg-slate-50 dark:bg-gray-900 p-2">
          <img
            src={fileServices.getFilePreview(featuredImage)}
            alt={title}
            className="h-[200px] w-full rounded-md object-fill"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            <Link to={`/post/${$id}`}>
              <button
                type="button"
                className="mt-4 rounded-lg bg-black px-2.5 py-1 text-[15px] font-semibold text-white shadow-sm  dark:bg-slate-50 dark:text-black"
              >
                read
              </button>
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
