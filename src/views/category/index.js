import React, { useState } from "react";
import FolderItem from "./FolderItem";

const CategoryIndex = () => {
  const [inEdit, setInEdit] = useState(false);

  const handleClickOnEdit = () => {
    setInEdit(!inEdit);
  };

  return (
    <>
      <nav className="nav top-nav">
        <div></div>
        <div>Ordner</div>
        <div className="text-right" onClick={handleClickOnEdit}>
          {inEdit ? "Abbrechen" : "Edit"}
        </div>
      </nav>
      <nav class="nav bottom-nav">
        {inEdit ? (
          <>
            <div class="">delete all</div>
            <div class="">delete selected</div>
          </>
        ) : (
          <>
            <div></div>
            <div class="text-right">Neuer Ordner</div>
          </>
        )}
      </nav>
      <section class="page-content">
        {[...Array(20)].map(value => (
          <FolderItem key={value} />
        ))}
      </section>
    </>
  );
};

export default CategoryIndex;
