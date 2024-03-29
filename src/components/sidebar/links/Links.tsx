import React from "react";
const Links = () => {
  const items = ["Homepage", "Portfolio", "Contact", "About"];
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
