import React from 'react';
import './index.css'
const Header = (props) => {
    const { title, onBack } = props;
    return (
        <div className="header">
            <div className="header-back" onClick={onBack}>
            <svg width="42" height="42">
                    <polyline
                        points="25,13 16,21 25,29"
                        stroke="#fff"
                        strokeWidth="2"
                        fill="none"
                    />
                </svg>
            </div>
            <h3 className="header-title">{title}</h3>
        </div>
    );
}

export default Header;