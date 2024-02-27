import {redirect} from "next/navigation";
import {getLink} from "@/db/links";

export async function GET(_: Request, {params}: {params: {link: string}}){
  const link = await getLink(params.link);
  if (link == undefined) return new Response("Not found", {status: 404});
  redirect(link.url);
}