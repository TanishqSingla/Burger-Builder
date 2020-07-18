import React from "react";

const layout = (props) => {
  return (
    <>
      <div>toolbar, sidedrawer, Backdrop</div>
      <main>{props.children}</main>
    </>
  );
};

export default layout;
