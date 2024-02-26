import {db} from "@/db";
import "./page.scss";

export default async function LinksPage() {
  const links = await db.selectFrom("link").select(["link", "url", "times_visited"]).execute();

  return (
    <table>
      <thead>
      <tr>
        <th>Link</th>
        <th>URL</th>
        <th>Times visited</th>
      </tr>
      </thead>
      <tbody>
      {links.map(link => (
        <tr key={link.link}>
          <td>{link.link}</td>
          <td>{link.url}</td>
          <td>{link.times_visited}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}