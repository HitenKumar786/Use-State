import React, { useState } from 'react';
import ReactDOM from 'react-dom';
<body>
  
</body>
function Hi(){

const[data, setData] = useState(0);

  return <div> 
    
{data}
    
    <button onClick={()=>{

      setData(data + 1)
    }}> Plus</button>

<button onClick={()=>{

setData(data - 1)
}}> Minus</button>

{(data % 2 === 0)? <b>Even</b>:<b>Odd</b>}

<br />
<br />
<br />
<br />

<br />
<br />
<br />
<br />
<br />
<br />

<button onClick={()=>{


}}> Plus</button>



<button onClick={()=>{

setData(data + 1)
}}> Plus</button>
    
    </div>

}

ReactDOM.render(<Hi/>,document.querySelector('#root'));