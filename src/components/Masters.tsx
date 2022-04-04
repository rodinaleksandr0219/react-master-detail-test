import React from 'react';

const Masters = ({ masters, handleClick }) => {
    const onSelectedClick = (id) => {
        handleClick(id);
    }

    return (
        <>
            {masters.map((master) => (
                <div key={master.id}
                    className={`master ${ parseInt(master.level) ? 'color-yellow' : 'color-green'}`}
                    onClick={() => onSelectedClick(master.id)}
                >
                    <div className='wrapper'>
                        <div className='title'>Title:</div>
                        <div className='content'>{master.title}</div>
                    </div>
                    <div className='wrapper'>
                        <div className='title'>Content:</div>
                        <div className='content'>{master.body}</div>
                    </div>
                </div>
            ))}
        </>        
    )
}

export default Masters;