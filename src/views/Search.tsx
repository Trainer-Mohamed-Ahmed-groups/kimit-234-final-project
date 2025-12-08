import { useParams } from "react-router-dom"

export default function Search() {
    const query = useParams()

    console.log(query)
    return (
        <div>Search</div>
    )
}
