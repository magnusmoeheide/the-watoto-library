import React, { useState } from "react";
import { articles } from "../../container/Articles/Articles";

function SelectArticle() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    if (newValue) {
      const element = document.querySelector(`[id="${newValue}"]`);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <select value={selectedValue} onChange={handleChange}>
      <option value="">Select article</option>
      {articles
        .filter((article) => article.status === "Published")
        .map((article) => (
          <option key={article.id} value={article.id}>
            {article.month} {article.year} - {article.title}
          </option>
        ))}
    </select>
  );
}

export default SelectArticle;
