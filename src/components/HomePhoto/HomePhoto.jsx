import React from 'react';
import  homephoto  from "../../ph.png"
import "../HomePhoto/HomePhoto.css"

const HomePhoto = () => {
    return (
        <div className='phot'>
            <img src={homephoto} alt="ss" />
        </div>
    );
};

export default HomePhoto;