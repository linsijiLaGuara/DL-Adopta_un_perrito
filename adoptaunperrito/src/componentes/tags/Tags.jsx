

import "./Tags.css";

const Tags = () => {
  const tagsNames = ["Bartolo", "Messi", "Princesa", "Gohan"];

  return (
    <div>
      {tagsNames.map((tagName, index) => (
        <h1 className="name" key={index}>
          {tagName}
        </h1>
        
      ))}
    </div>
  );
};

export default Tags;
