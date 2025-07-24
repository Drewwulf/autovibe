import { useContext, useEffect } from "react"
import { StorageContext } from "./StorageContext"

function Button2(props) {


    return (
        <div>
            <button onClick={props.onClick} >
                {props.name}
            </button>
        </div>
    )
}
export default Button2;