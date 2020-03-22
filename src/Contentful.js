import { createClient } from 'contentful';

import React from 'react'

/**
* @author
* @function Contentful
**/

export default createClient({
    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN

});

