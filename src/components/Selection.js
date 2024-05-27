import React,{useState} from 'react'

const Selection = (props) => {
    const [background,setBackground]=useState("");
    const update=()=>{
        props.applyColor(setBackground)
    }
    console.log("this is in selection component",background);
  return (
    <div onClick={update} className='fix-box'
    style={{backgroundColor:background,width:"200px",height:"200px",display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',border:'1px solid white'}}>{props.index}</div>
  )
}

export default Selection
