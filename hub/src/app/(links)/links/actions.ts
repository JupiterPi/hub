"use server";

import * as db from "@/db/links";
import {getLink} from "@/db/links";
import {revalidatePath} from "next/cache";

export async function createLink(link: {link: string, url: string}) {
  if (await getLink(link.link) != undefined) return {success: false, message: "This link already exists!"};
  await db.createLink(link.link, link.url);
  revalidatePath("/links");
  return {success: true, message: "Link created"};
}

export async function deleteLink(id: string) {
  await db.deleteLink(id);
  revalidatePath("/links");
}