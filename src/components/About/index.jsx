import { Link, Outlet, useParams } from 'react-router-dom';
import Fetchdata from '../FetchData/Fetchdata';

export function AboutContent() {
    const { id } = useParams();
    return (
        <div
            style={{
                border: '2px solid #333',
                height: '200px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
                borderRadius: '10px',
                margin: '10px 5px',
            }}
        >
            Content {id || 1}
        </div>
    );
}

export default function About() {
    const aboutArr = [
        {
            id: 1,
            content: 'lorem',
        },
        {
            id: 2,
            content: 'ipsum',
        },
        {
            id: 3,
            content: 'youra',
        },
    ];
    return (
        <div className="about">
            <h1>About</h1>
            <hr />
            <h3>Nested routing</h3>
            <nav style={{ display: 'flex' }}>
                {aboutArr.map((ab) => {
                    return (
                        <Link
                            style={{
                                marginRight: '5px',
                                border: '1px solid tomato',
                                padding: '5px 15px',
                                borderRadius: '2px',
                            }}
                            key={ab.id}
                            to={`/about/${ab.id}`}
                        >
                            About {ab.id}
                        </Link>
                    );
                })}
            </nav>
            <Outlet />

            <Fetchdata />
        </div>
    );
}
