import React, { useState, useEffect, Fragment } from "react"
import Second from "./Second";

const Main = () => {
    const [el, setEl] = useState("12");
    const [test, setTest] = useState(0);

    const addCount = newString => {
        setEl(newString)
    }

    const addTest = () => {
        setTest(test + 1)
    }

    const table = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        },
    ]

    return(
        <div>
            <Second count={el} addCount={addCount}>
                <div>{test}</div>
                {test > 0 ?
                    <Fragment>
                        <div>{test}</div>
                    </Fragment>
                : 'nop'}
            </Second>
            <button onClick={() => addTest()}>Test</button>  

            <hr/>
            {table.map((item, index) => {
                return(
                    <div key={`table1${index}`}>
                        {item.id}
                    </div>
                )
            })}
            {table.map((item, index) => {
                return(
                    <div key={`table2${index}`}>
                        {item.id}
                    </div>
                )
            })}
        </div>
    )
}

export default Main

// class Main extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             el: 12,
//             text: 'bonjour'
//         }
//     }

//     render(){
//         return (
//             <div>
//                 main
//             </div>
//         )
//     }
// }