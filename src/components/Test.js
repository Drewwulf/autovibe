import { useContext, useEffect } from "react"
import { StorageContext } from "./StorageContext"
import Button2 from "./Button2";

function Button(props) {

    const { value, setValue } = useContext(StorageContext);
    useEffect(() => {
        setValue(props.name);
    }, [])
    return (
        <div>

            <Button2 OnClick={Method()}></Button2>
        </div>
    )
}
export default Button;