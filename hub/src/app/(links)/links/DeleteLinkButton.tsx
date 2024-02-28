"use client";

export function DeleteLinkButton({id}: {id: string}) {
  const deleteHandler = () => {
    fetch(`/api/links/${id}`, { method: "DELETE" });
  };

  return (
    <button onClick={deleteHandler}>Delete</button>
  );
}