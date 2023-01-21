import React from 'react'
import { Link } from 'react-router-dom'
import {SiSpacex} from "react-icons/si"

export default function Header() {
  return (
    <>
    <header className="absolute flex items-center justify-between px-5 w-full">
        <div>
            <Link to="/">
                <SiSpacex className="text-8xl text-white"/>
            </Link>
        </div>

        <nav>
            <ul>
                <li>
                    <Link to="/launchpads" className="text-white text-sm lg:text-base">Launchpads</Link>
                </li>

                <li>
                    <Link to="/launches" className="text-white text-sm lg:text-base">Launches</Link>
                </li>
            </ul>
        </nav>
    </header>
  </>
  )
}
