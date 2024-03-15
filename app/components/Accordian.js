"use client";
import "./Accordian.css";
import { useState } from "react";
import faqs from "../data/faqs";

export default function Accordian(props) {
  const [status, setStatus] = useState(false);

  const handleOnClick = () => {
    setStatus(!status);
  };

  return (
    <main className="container">
      <section className="head">
        <div className="top" onClick={handleOnClick}>
          <p>{props.top}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 30 31"
            className={`${status === false && "hidden"}`}
          >
            <path
              fill="#301534"
              d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 30 30"
            className={status === true && "hidden"}
          >
            <path
              fill="#AD28EB"
              d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
            />
          </svg>
        </div>

        <div className={`detail ${status === false && "hidden"}`}>
          <p>{props.down}</p>
        </div>
      </section>

      <hr className={props.index == faqs.length - 1 && "hidden"} />
    </main>
  );
}
