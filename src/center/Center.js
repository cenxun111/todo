import React, { useState } from "react";
import Cr from "./Cr";
import { CREATEU } from "../GraphQL/Mutations";
import GetCards from "../containers/GetCards";
import { useMutation } from "@apollo/client";
import {LOADU} from '../GraphQL/Queries'
function Center() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  const [createCard, { error }] = useMutation(CREATEU);

  const addCard = () => {
    createCard({
      variables: {
        name: name,
        genre: genre,
        year: year,
      },
      refetchQueries:[{query:LOADU}]
    });
    if (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="p-4 text-2xl">首页</h1>

      <label>表头</label>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="w-full bg-gray-100 p-2 my-3 rounded"
      />

      <label>genre</label>
      <input
        className="w-full bg-gray-100 p-2 my-3"
        type="text"
        required
        onChange={(e) => {
          setGenre(e.target.value);
        }}
      />

      <label>year</label>
      <input
        className="w-full bg-gray-100 p-2 my-3 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        type="text"
        required
        onChange={(e) => {
          setYear(e.target.value);
        }}
      />
      {/* <textarea
          onChange={(e) => {
            setYear(e.target.value);
          }}
          placeholder="something"
          className="w-full bg-gray-100 px-4
        py-10 rounded"
        >
          {" "}
        </textarea> */}
      <button 
      type='submit'
        onClick={addCard}
        className="rounded-lg bg-purple-400 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 px-2 py-1 float-right cursor-pointer "
      >
        Add Content
      </button>
      <button className="px-2 py-1 bg-gray-200 rounded">file</button>
      <button className="px-3 py-1 bg-white-200 rounded">😊</button>

      <Cr />
      <GetCards />
    </div>
  );
}
export default Center;
