import React from 'react'
import { Input } from 'antd';
import './index.css';
import { useState } from 'react';
import { urlService } from '../../_services/updateUrl.service';
import { notify } from '../../utils/util';

const { Search } = Input;

function InputScrenn(props) {
    const [searchLoading,setSearchLoading] = useState (false);

    const updateUrl = (e) => {
        urlService.updateUrl(e.target.value).then(response => {
            if (response && response.url) {
                props.history.push("/display")
                notify({
                    message: "url is updated"
                });
            }
        })
    }

    return (
        <div id='input-url-container'>
            <Search allowClear placeholder="Enter url here" enterButton="Search" size="large" onPressEnter={(e)=>updateUrl(e)} loading={searchLoading}/>
        </div>
    )
}

export default InputScrenn
