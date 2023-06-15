import React, { useState } from 'react'



const Parent = () => {
    const[text, setText]= useState("");
    
    return(
        <>
            <div className='parent'>
                <h1>Parent Component</h1>
                <p>{text}</p>
                <div className='child'>
                    <h2 >Child Component</h2>
                    <input type="text" onChange={(e)=> setText(e.target.value)}/>
                    {/* <button onClick={()=> setShowModal(true)}>Show Modal</button> */}
                    {/* {
                        showModal && (
                            <>
                            <div className='modal'>
                                <h3>Modal Content</h3>
                                <p>This is the modal content.</p>
                            </div>
                             
                            </> 
                        )       
                    }; */}
                </div>
            </div>
        </>
     );
}

export default Parent