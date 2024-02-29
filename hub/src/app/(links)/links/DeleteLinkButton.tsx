"use client";

import {deleteLink} from "./actions";

export function DeleteLinkButton({id}: {id: string}) {
  return (
    <button onClick={() => deleteLink(id)}>Delete</button>
  );
}