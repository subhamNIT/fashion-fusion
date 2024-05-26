import React from 'react';

const SectionsHead = (props) => {
    return (
        <>
            <div className="section_head">
                <h2 className="text-6xl text-center my-12 max-md:text-4xl text-accent-content">{props.heading}</h2>
            </div>
        </>
    );
};

export default SectionsHead;