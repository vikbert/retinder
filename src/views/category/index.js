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
      <nav className="nav bottom-nav">
        {inEdit ? (
          <>
            <div className="">delete all</div>
            <div className="">delete selected</div>
          </>
        ) : (
          <>
            <div></div>
            <div className="text-right">Neuer Ordner</div>
          </>
        )}
      </nav>
      <section className="page-content">
        {[...Array(20)].map((value, index) => (
          <FolderItem key={index} />
        ))}
      </section>
    </>
  );
};

export default CategoryIndex;
