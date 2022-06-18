import React from 'react'

const Hello =({Student1,Student2})=>{
    return (
        <h1>
            Hello {Student1} {Student2 && `and ${Student2}`} 
        </h1>
    )
}
export default Hello