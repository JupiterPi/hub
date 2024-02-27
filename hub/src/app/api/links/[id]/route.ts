import {deleteLink} from "@/db/links";

export async function DELETE(_: Request, {params}: {params: {id: string}}) {
  await deleteLink(params.id);
  return new Response("Deleted");
}