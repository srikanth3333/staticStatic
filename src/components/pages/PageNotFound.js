import React from 'react';
import {Link} from 'react-router-dom';

function PageNotFound() {
    return (
        <div className="my-5 text-center mx-auto d-block">
            <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_afwjhfb2.json"  background="transparent"  speed="1"  style={{width: '400px', height: '400px',margin: 'auto'}}  loop autoplay></lottie-player>
            <Link to="/" className="btn btn-secondary">Go To Home page</Link>
        </div>
    )
}

export default PageNotFound
