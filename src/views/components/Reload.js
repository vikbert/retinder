import React from "react";

export default function Reload() {
  return (
    <>
      <div className="text-left" onClick={() => window.location.reload()}>
        Reload
      </div>
    </>
  );
}
