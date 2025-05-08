import { useState } from "react";

function Button() {
  const [nam, setNam] = useState("fawa");
  const [age, setAge] = useState(20);

    function handleClick(){
        setNam('moh');
        setAge(25)
    }

  return (
    <>
      <button onClick={handleClick}>submit</button>
      <p>{nam}</p>
      <h2>i am {age} years old</h2>
    </>
  );
}

export default Button;
