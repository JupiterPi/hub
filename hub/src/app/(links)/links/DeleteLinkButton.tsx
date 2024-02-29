"use client";

import {deleteLink} from "@/db/links";

export function DeleteLinkButton({id}: {id: string}) {
  return (
    <button onClick={() => deleteLink(id)}>Delete</button>
  );
}