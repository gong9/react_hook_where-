import React, { useState, useEffect } from 'react';
import CitySeletorListItem from './CitySeletorListItem'
/**
 * 这个组件作用：
 * 请求后台接口数据，循环列出来
 * 需要接受的外界参数 1. 搜索key 2. 还需要一个点击函数要在每一项上做回显
 */
const CitySeletorList = (props) => {
    const { searchKey, onSelect } = props;
    const [resData, setResData] = useState([])

    useEffect(() => {
        fetch('/rest/search?key=' + encodeURIComponent(searchKey))
            .then(res => res.json())
            .then(data => {
                const { result, searchKey: sKey } = data;
                if (sKey === searchKey) {
                    setResData(result);
                }
            })
    }, [searchKey])

    return (
        <div className="city-suggest">
            <ul className="city-suggest-ul">
                {
                    resData.map((item) => {
                        <CitySeletorListItem
                            key={item.display}
                            name={item.display}
                            onClick={onSelect}
                        />
                    })
                }
            </ul>
        </div>
    );
}

export default CitySeletorList;