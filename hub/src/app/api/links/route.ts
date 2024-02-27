import {createLink, getLink} from "@/db/links";

export async function POST(request: Request) {
  const link = await request.json() as {link: string, url: string};
  await createLink(link.link, link.url);
  return Response.json(getLink(link.link));
}