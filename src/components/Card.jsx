import React from "react";
import fileServices from "../Appwrite/File";
import { Link } from "react-router-dom";

function Card({ $id, title, featuredImage }) {
  return (
    <>
      <Link to={`/post/${$id}`}>
        <div class="w-[300px] rounded-md border">
          <img
            src={fileServices.getFilePreview(featuredImage)}
            alt={title}
            class="h-[200px] w-full rounded-md object-cover"
          />
          <div class="p-4">
            <h2 class="text-lg font-semibold">{title}</h2>
            <Link to={`/post/${$id}`}>
              <button
                type="button"
                class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
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
