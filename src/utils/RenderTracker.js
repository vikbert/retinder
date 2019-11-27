import React, {useEffect} from 'react';

let count = 0;
const RenderTracker = () => {
    useEffect(() => {
        console.log('rendered counter:  ' + count++);
    });
    return (
        <div></div>
    );
};

export default RenderTracker;
