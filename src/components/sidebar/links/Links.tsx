import React from "react";
const Links = () => {
  const items = ["Homepage", "Portfolio", "Project", "Contact"];
  return (
    <>
      <div className="links">
        {items.map((item) => (
          <a key={item} href={`#${item}`}>
            {item}
          </a>
        ))}
      </div>
    </>
  );
};

export default Links;
