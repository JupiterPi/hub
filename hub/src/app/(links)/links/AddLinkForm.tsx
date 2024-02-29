"use client";

import {createLink} from "./actions";
import {useRef, useState} from "react";
import "@/util/useEphemeralState";
import useEphemeralState from "@/util/useEphemeralState";

export function AddLinkForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useEphemeralState<{success: boolean, message: string} | null>(null, 3000);

  const [link, setLink] = useState("");
  const [url, setUrl] = useState("");

  return (
    <form ref={ref} action={async () => {
      const status = await createLink({link, url});
      if (status.success) ref.current?.reset();
      setStatus(status);
    }}>
      <div>
        <label>Link: </label>
        <input onChange={e => setLink(e.target.value)} />
      </div>
      <div>
        <label>URL: </label>
        <input type="url" onChange={e => setUrl(e.target.value)} />
      </div>
      <button type="submit" style={{alignSelf: "center"}}>Add</button>
      {status != null && <div style={{alignSelf: "center", color: status.success ? "green" : "red"}}>{status.message}</div>}
    </form>
  );
}