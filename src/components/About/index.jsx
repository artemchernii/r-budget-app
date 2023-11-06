import { Link, Outlet, useParams } from "react-router-dom"


export function AboutContent() {
    const {id} = useParams()
    return <div>Content {id || 1}</div>
}
export default function About() {
    const aboutArr = [
        {
            id: 1,
            content: 'lorem'
        },
        {
            id: 2,
            content: 'ipsum'
        },
        {
            id: 3,
            content: 'youra'
        },
    ]
    return (
        <div className="about">
            <h3>About</h3>
            <nav>
                {aboutArr.map(ab => {
                    return <Link key={ab.id} to={`/about/${ab.id}`}>About {ab.id}</Link>
                })}
            </nav>
            <hr />
            <Outlet />
        </div>
    )
}