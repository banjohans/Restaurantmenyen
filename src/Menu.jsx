import React from "react";
import menuStyles from "./Menu.module.css";

export default function Menu({
  data: { tittel, ingredienser, kategori, pris },
}) {
  return (
    <div className={menuStyles.dishCard}>
      <h2>{tittel}</h2>
      <p>{ingredienser}</p>
      <h4>{kategori}</h4>
      <h3>{pris}</h3>
    </div>
  );
}
