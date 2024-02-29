"use client";

import {createLink} from "./actions";
import {useState} from "react";
import "@/util/useEphemeralState";
import useEphemeralState from "@/util/useEphemeralState";

export function AddLinkForm() {
  const [status, setStatus] = useEphemeralState<{success: boolean, message: string} | null>(null, 3000);

  const [link, setLink] = useState("");
  const [url, setUrl] = useState("");

  const submit = async () => {
    const status = await createLink({link, url});
    setStatus(status);
    if (status.success) {
      setLink("");
      setUrl("");
    }
  };

  return (
    <div style={{display: "flex", flexDirection: "column", gap: 10}}>
      <div>
        <label>Link: </label>
        <input value={link} onChange={e => setLink(e.target.value)} />
      </div>
      <div>
        <label>URL: </label>
        <input type="url" value={url} onChange={e => setUrl(e.target.value)} />
      </div>
      <button style={{alignSelf: "center"}} onClick={submit}>Add</button>
      {status != null && <div style={{alignSelf: "center", color: status.success ? "green" : "red"}}>{status.message}</div>}
    </div>
  );
}