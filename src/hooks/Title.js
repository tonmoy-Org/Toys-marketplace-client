import { useEffect } from "react"

const Title = title => {
    useEffect(() =>{
        document.title = `ToyZone | ${title}`;
    }, [title])
}
export default Title;