import React from "react"
const Header: React.FC = () => {
    return(
        <div className="flex bg-black justify-around items-center p-3">
            <div>
                <a href="#">
                    <img src="/logo.png" alt="Logo" />
                </a>
            </div>
            <nav>
                <ul className="flex text-gray-300 gap-8">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/Solutions">Nossas soluções</a>
                    </li>
                    <li>
                        <a href="/About">Quem somos</a>
                    </li>
                    <li>
                        <a href="/Contact">Contato</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;