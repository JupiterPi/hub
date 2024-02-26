import {createKysely} from "@vercel/postgres-kysely";

export interface Database {
  link: LinkTable;
}

export interface LinkTable {
  link: string;
  url: string;
  times_visited: number;
}

export const db = createKysely<Database>();