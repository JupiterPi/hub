"use client";

import {useState} from "react";

export function AddLinkForm() {
  const [link, setLink] = useState("");
  const [url, setUrl] = useState("");

  const submit = () => {
    fetch("/api/links", { method: "POST", body: JSON.stringify({link, url})});
  };

  return (
    <div>
      <label>Link: </label>
      <input onChange={e => setLink(e.target.value)} />

      <br/>

      <label>URL: </label>
      <input type="url" onChange={e => setUrl(e.target.value)} />

      <br/>

      <button onClick={submit}>Add</button>
    </div>
  );
}