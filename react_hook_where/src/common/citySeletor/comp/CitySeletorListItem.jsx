import React from 'react';
const CitySeletorListItem = (props) => {
    const { name, onSelect } = props
    return (
        <li className="city-suggest-li" onClick={() => { onSelect(name) }}>
            {name}
        </li>
    );
}

export default CitySeletorListItem;