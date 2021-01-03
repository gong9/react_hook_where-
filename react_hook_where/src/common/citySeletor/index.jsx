import React, { useState } from 'react';
import classnames from 'classnames'
import PropTypes from 'prop-types'
import './index.css'

import Header from './comp/Header'
import CitySeletorList from './comp/CitySeletorList'

const CitySeletor = (props) => {
    const {
        show,
        onBack,
        // isLoading,
        // cityData,
        // fetchCityData,
        // onSelect
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
            {/* <CitySeletorList /> */}
        </div>
    );
}

// CitySeletor.prototype = {

// }
export default CitySeletor;