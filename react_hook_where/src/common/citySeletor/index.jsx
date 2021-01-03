import React, { useState } from 'react';
import classnames from 'classnames'
import PropTypes from 'prop-types'
import './index.css'

import Header from './comp/Header'
import CitySeletorList from './comp/CitySeletorList'

/**
 * 
 * 这个组件主要干什么？
 * - 显示所有的城市
 * - 点击城市项，该城市名字回显到app组件
 * 
 * 这个点击回显数据的函数由谁提供呢？因为要拿到城市项的数据回显到app组件。故该函数最好还是由app组件提供
 * 其实也是改变from和to的值 
 */
const CitySeletor = (props) => {
    const {
        show,
        onBack,
        isLoading,
        cityData,
        fetchCityData,
        onSelect
    } = props;
    const [searchKey, setSearchKey] = useState("");
    const dosetSearch = (value) => {
        setSearchKey(value)
    }
    return (
        <div className={classnames('city-selector', { hidden: !show })}>
            <Header
                onBack={onBack}
                searchKey={searchKey}
                dosetSearch={dosetSearch}
            />
            <CitySeletorList
                searchKey={searchKey}
                onSelect={onSelect}
            />
        </div>
    );
}

// CitySeletor.prototype = {

// }
export default CitySeletor;