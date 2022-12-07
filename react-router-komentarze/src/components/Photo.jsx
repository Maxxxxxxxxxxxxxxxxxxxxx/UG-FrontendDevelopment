import { useState } from "react"

export default function Photo({ src, desc }) {
  let [msg, setMsg] = useState("");
  let [buttonMsg, setButtonMsg] = useState("Show");

  let toggleDesc = () => {
    if (msg) {
      setMsg("")
      setButtonMsg("Show")
    } else {
      setMsg(desc)
      setButtonMsg("Hide")
    }
  }

  return (
    <div className="photo-container">
      <a href={ src }>Link</a>
      <img src={ src } alt="" className="photo" />
      <button onClick={() => toggleDesc()}>{ buttonMsg } description</button>
      <div className="desc">
        {msg}
      </div>
    </div>
  )
}