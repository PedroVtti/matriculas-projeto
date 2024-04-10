import React from 'react';
import { Link } from 'react-router-dom';
import './AppHome.css';

function AppHome() {
    return (
        <div>
            <h1>PORTAL DE MATRÍCULAS</h1>
            <div class="links">
                <span>
                    <Link className="link"
                        role="button" to="/aluno">Matrícula Aluno  </Link>
                </span>
                <span>
                    <Link className="link"
                        role="button" to="/professor">Matrícula Professor </Link>
                </span>
            </div>
        </div>
    );
}

export default AppHome;