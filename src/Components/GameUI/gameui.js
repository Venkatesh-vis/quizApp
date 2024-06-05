import { useState } from "react"
import Quiz from "../quiz/quiz"


const GameUI = ()=> {
    const[question,setQuestion]=useState(1)
    const moneyPyramid = [
        {id:15, amount:"₹1,00,00,000"},
        {id:14, amount:"₹50,00,000"},
        {id:13, amount:"₹25,00,000"},
        {id:12, amount:"₹12,50,000"},
        {id:11, amount:"₹6,40,000"},
        {id:10, amount:"₹3,20,000"},
        {id:9, amount:"₹1,60,000"},
        {id:8, amount:"₹80,000"},
        {id:7, amount:"₹40,000"},
        {id:6, amount:"₹20,000"},
        {id:5, amount:"₹10,000"},
        {id:4, amount:"₹5,000"},
        {id:3, amount:"₹3,000"},
        {id:2, amount:"₹2,000"},
        {id:1, amount:"₹1,000"}
    ]
    return(
        <div className="app">
            <div className="main">
                <div className="top">
                    <div className="timer">30</div>
                </div>
                <div className="bottom"><Quiz/></div>
            </div>
            <div className="pyramid">
                <ul className="moneyList">
                    {
                        moneyPyramid.map(m=>
                            (
                                <li className={question === m.id ? "moneyListItem active": "moneyListItem"}>
                                    <span className="moneyListItemNumber">{m.id}</span>
                                    <span className="moneyListItemAmount">{m.amount}</span>
                                </li>
                            ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default GameUI