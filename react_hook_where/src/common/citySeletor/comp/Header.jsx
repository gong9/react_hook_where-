import React, { useRef } from 'react';
import classnames from 'classnames'
/**
 * 
 * 接受过来一个back的函数
 * input的值应该是外层组件的一个状态吧
 */
const Header = (props) => {
    const { onBack, searchKey, dosetSearch } = props;
    const inptRef = useRef(null)
    return (
        <div className="city-search">
            <div className="search-back" onClick={() => onBack()}>
                <svg width="42" height="42">
                    <polyline
                        points="25,13 16,21 25,29"
                        stroke="#fff"
                        strokeWidth="2"
                        fill="none"
                    />
                </svg>
            </div>

            <div className="search-input-wrapper">
                <input type="text"
                    placeholder="城市、车站的中文或拼音"
                    value={searchKey}
                    onChange={(e) => { dosetSearch(e.target.value) }}
                    ref={inptRef}
                    className="search-input"
                />
            </div>

            <i className={classnames("search-clean", {
                hidden: searchKey.trim() === ""
            })} onClick={() => dosetSearch("")}>
                &#xf063;
            </i>
        </div>
    );
}

export default Header;