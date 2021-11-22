import React from 'react';

export const AboutScreen = () => {
    return (
        <div>
            <h1> About Screen</h1>
            <hr />
            <div className="row">
                <h4>Technology Used</h4>
                <hr />
                <span>npm pkg</span>
                <ul>
                    <li>
                        <a href="https://reactrouter.com/docs/en/v6" target="_blank" rel="noopener noreferrer"><span>react-router-dom : 6.0.2</span></a>
                    </li>
                    <li>
                        <a href="https://www.npmjs.com/package/query-string" target="_blank" rel="noopener noreferrer"><span>query-string : 7.0.1</span></a>
                    </li>
                </ul>
                <span>Custom Hooks</span>
                <ul>
                    <li>
                    <a href="https://github.com/NikoHuerta/mi-repo-react/tree/master/hooks/useForm" target="_blank" rel="noopener noreferrer"><span>useForm</span></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
