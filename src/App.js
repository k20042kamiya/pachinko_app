import './App.css';
import React, { useState } from "react";

function App() {
  const [startText, setstartText] = useState("");
  const [rotateText, setrotateText] = useState("");
  const [result, setResult] = useState("");
  const [resultborder,setResultborder] = useState("");
  const [invText, setinvText] = useState("1");
   const [borderText, setborderText] = useState("");
  const [buttonDisabled, setEbuttonDisabled] = useState(false);
  const onclickStart = () => {
    const calc = Number((rotateText - startText) / invText);
    let b = Number(calc - borderText)
    if (0 < b) {
      b = `+${b}`
    }
    if (!calc) {
      setResult("半角英数で入力してください");
      setinvText(invText)
    }
    else{
      setResult(`1k ${calc} 回転`);
      setinvText(Number(invText) + 1)
      if (b && borderText) {
        setResultborder(`ボーダー: ${b}`)
      }
    }
    setEbuttonDisabled(false)
    setrotateText("");
    

  }

  const handleBlur = () => {
    const start = startText;
    const rotate = rotateText;
    const inv = invText;
    if (!start || !rotate || ! inv) {
      setEbuttonDisabled(false)
    }
    else {
      setEbuttonDisabled(true)
    }
  }

  return (
    <>
    <div>
        スタート<input type="text"
          onChange={(e) => setstartText(e.target.value)}
          value={startText}
          onBlur={handleBlur}
        />
        1K後回転数<input type="text"
          onChange={(e) => setrotateText(e.target.value)}
          value={rotateText}
          onBlur={handleBlur}
        />
        投資金額<input type="text"
          onChange={(e) => setinvText(e.target.value)}
          value={invText}
          onBlur={handleBlur}
        />
        ボーダー<input type="text"
          onChange={(e) => setborderText(e.target.value)}
          value={borderText}
          onBlur={handleBlur}
        />
      </div>
      <button type="button"
        onClick={onclickStart}
        disabled={!buttonDisabled}
        onBlur={handleBlur}>回転数計算</button>
      <p>{result}</p>
      <p>{resultborder}</p>
    </>
  )
}

export default App;
