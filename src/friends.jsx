import { use } from "react"

export default function Friends({friendPromise}){

    const friends = use(friendPromise)
    return(
        <div className="card">
            <h3>Friends: {friends.length}</h3>
        </div>
    )
}