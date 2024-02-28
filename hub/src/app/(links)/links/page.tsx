import "./page.scss";
import {getLinks} from "@/db/links";
import {DeleteLinkButton} from "@/app/(links)/links/DeleteLinkButton";
import {AddLinkForm} from "@/app/(links)/links/AddLinkForm";

export default async function LinksPage() {
  const links = await getLinks();

  return (
    <>

      <AddLinkForm/>

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
            <td><DeleteLinkButton id={link.link} /></td>
          </tr>
        ))}
        </tbody>
      </table>

    </>
  );
}