import React from "react";

function InputComponent({type,id,placeholder,value,setUser}) {
  return (
    <div className="">
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e)=>setUser(prevState=>({...prevState,[e.target.id]:e.target.value}))}
        autoComplete="off"
        className="border my-3 border-gray-300 text-gray-900 text-md rounded-md  w-full p-3 ring-green-300 ring-offset-1 focus:ring"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default InputComponent;
