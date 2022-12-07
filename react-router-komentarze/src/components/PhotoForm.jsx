import Photo from "./Photo";
import { useEffect, useState } from "react";
import { useImageContext } from "../context/ImagesProvider";
import { Rating } from "@mui/material";


export default function PhotoForm({ photoProps }) {
  let [msg, setMsg] = useState("");
  let [buttonMsg, setButtonMsg] = useState("Show");

  let toggleDesc = () => {
    if (msg) {
      setMsg("")
      setButtonMsg("Show")
    } else {
      setMsg(photoProps.desc)
      setButtonMsg("Hide")
    }
  }

  let hideDesc = () => {
    if (msg) {
      setMsg("")
      setButtonMsg("Show")
    }
  }

  useEffect(() => {
    hideDesc()
  }, [photoProps])

  let { addContextRate } = useImageContext();

  let clickRate = (value) => {
    // console.log(`Added rate: ${[...rating, value]}`)
    // setAvg([...rating, value].reduce((e,acc) => e + acc) / [...rating,value].length)
    addContextRate(photoProps.index, value)

  }
  return (
    <div className="container">
      <div className="photo-container">
        <i>{ photoProps.title }</i>
        <img src={ photoProps.src } href={ photoProps.src } alt="" className="photo" />
        <button onClick={() => toggleDesc()}>{ buttonMsg } description</button>
        <div className="desc">
          {msg}
        </div>
      </div>
      <div className="rate">
      <Rating
        name="simple-controlled"
        onChange={(event, newValue) => {
          console.log(`Rate clicked: ${newValue}`)
          clickRate(newValue);
        }}
      />
        {/* <i className="star 1" onClick={() => clickRate(1)}>1</i>
        <i className="star 2" onClick={() => clickRate(2)}>2</i>
        <i className="star 3" onClick={() => clickRate(3)}>3</i>
        <i className="star 4" onClick={() => clickRate(4)}>4</i>
        <i className="star 5" onClick={() => clickRate(5)}>5</i> */}
        <div>
          Current rating: { photoProps.rating.length > 0 ? photoProps.avg(photoProps.rating) : "No rates yet!"}
        </div>
      </div>
    </div>
  )
}