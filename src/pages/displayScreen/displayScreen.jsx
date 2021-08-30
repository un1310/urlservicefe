import React, { useEffect } from 'react'
import './index.css';
import { useState } from 'react';
import DOMPurify from "dompurify";
import { urlService } from '../../_services/updateUrl.service';
import { notify } from '../../utils/util';

function DisplayScreen() {
    const [myHTML, setMyHTML] = useState (null);

    useEffect(() => {
        updateUrl();
    }, []);

    const updateUrl = () => {
        urlService.getResponse().then(response => {
            if (response && response.url) {
                setMyHTML(response.urlResponse)
                notify({
                    message: "url is updated"
                });
            }
        })
    }

    return (
        <div id='display-url-container'>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(myHTML) }} />
        </div>
    )
}

export default DisplayScreen
