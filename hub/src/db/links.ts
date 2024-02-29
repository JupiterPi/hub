"use server";

import {db} from "@/db/db";

export async function getLinks() {
  return await db.selectFrom("link").select(["link", "url", "times_visited"]).orderBy("times_visited desc").execute();
}

export async function getLink(link: string) {
  return await db.selectFrom("link").where("link", "=", link).select(["link", "url", "times_visited"]).executeTakeFirst();
}

export async function createLink(link: string, url: string) {
  await db.insertInto("link").values({link, url, times_visited: 0}).execute();
}

export async function updateLink(link: {link: string, url: string, times_visited: number}) {
  await db.updateTable("link").set(link).where("link", "=", link.link).execute();
}

export async function deleteLink(link: string) {
  await db.deleteFrom("link").where("link", "=", link).execute();
}