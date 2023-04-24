import React from 'react'

function HeadAndSub({head,sub}) {
  return (
    <>
     <h1 className="text-4xl select-none font-semibold font-roboto capitalize">{head}</h1>
                  <p className="text-md py-2 font-sans">{sub}</p>
    </>
  )
}

export default HeadAndSub