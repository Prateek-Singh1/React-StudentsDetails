import React from 'react'


//------------USING JSX----------------------------//

const Hello = () => {
    return (
        <div id='hello' class = "Hiii">
            <h1>Hello JSX !!</h1>
        </div>
    )

//--------------WITHOUT USKING JSX-----------------//

//     return React.createElement(
//         'div',
//          {id : "hello", className : "dummyclass"},
//         React.createElement("h1", null,  "Hello without JSX"))
}

export default Hello