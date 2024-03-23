import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    const home = () => {
        return (
            <div>
            <nav>
            <ul>
                <li>
                <Link to="/chap1">Chap 1</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/users">Users</Link>
                </li>
            </ul>
            </nav>
            </div>
        )
    };
    return (
    <div>
        {home()}
    </div>
  )
}
