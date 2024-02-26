import {redirect} from "next/navigation";
import {db} from "@/db";

export async function GET(_: Request, {params}: {params: {link: string}}){
  const link = await db.selectFrom("link").where("link", "=", params.link).select(["url"]).executeTakeFirst();
  if (link == undefined) return new Response("Not found", {status: 404});
  redirect(link.url);
}