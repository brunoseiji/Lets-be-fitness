import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineFire } from 'react-icons/ai';
import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';
import { IoIosWater } from 'react-icons/io';

import './style.css';

const Sidebar = () => {
    return(
        <div className="sidebar">
            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/"><AiFillHome size={25} /> Home</Link>
                    </li>
                    <li>
                        <Link to="/gasto-calorico"><AiOutlineFire size={25} />Gasto Calórico</Link>
                    </li>
                    <li>
                        <Link to="/perder-peso"><BsArrowDownRight size={25} /> Perder Peso</Link>
                    </li>
                    <li>
                        <Link to="/ganhar-peso"><BsArrowUpRight size={25} /> Ganhar Peso</Link>
                    </li>
                    <li>
                        <Link to="/consumo-de-agua"><IoIosWater size={25} /> Consumo de Água</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;