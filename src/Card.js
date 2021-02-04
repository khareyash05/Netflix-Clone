import React from "react"

function Card(props){
    return (
        <>
            <div className = "cards">
                <div className = "card">
                    <img src = {props.img} alt = {props.alt} className = "image" />
                    <div>
                        <span>{props.type}</span>
                        <h3 className = "name"><u>{props.name}</u></h3>
                        <p>{props.summ}</p>
                        <a href = {props.link}>
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card