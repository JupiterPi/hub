import {redirect} from "next/navigation";
import {getLink, updateLink} from "@/db/links";
import {revalidatePath} from "next/cache";

export async function GET(_: Request, {params}: {params: {link: string}}){
  const link = await getLink(params.link);
  if (link == undefined) return new Response("Not found", {status: 404});
  await updateLink({...link, times_visited: link.times_visited + 1});
  revalidatePath("/links");
  redirect(link.url);
}