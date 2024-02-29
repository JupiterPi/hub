import * as db from "@/db/links";

export function AddLinkForm() {
  async function createLink(formData: FormData) {
    "use server";
    const link = {
      link: formData.get("link") as string,
      url: formData.get("url") as string
    };
    await db.createLink(link.link, link.url);
  }

  return (
    <form action={createLink}>
      <div>
        <label>Link: </label>
        <input name="link" />
      </div>
      <div>
        <label>URL: </label>
        <input type="url" name="url" />
      </div>
      <button type="submit" style={{alignSelf: "center"}}>Add</button>
    </form>
  );
}