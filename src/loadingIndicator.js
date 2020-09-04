
import usePromiseTracker  from 'react-promise-tracker'

export const LoadingIndicator = props =>
{
   const promiseInProgess = usePromiseTracker();
   return (
     promiseInProgess && <i className="fas fa-spinner fa-pulse"></i>
   )
}

import React from 'react'

function LoadingIndicator() {
    return (
        <div>
            
        </div>
    )
}

export default loadingIndicator
