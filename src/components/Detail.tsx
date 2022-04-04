import React from 'react';

const Detail = ({ selected }) => {
    return (
        <div className='detail'>
            <div className='wrapper'>
                <div className='title'>Title:</div>
                <div className='content'>{selected.title}</div>
            </div>
            <div className='wrapper'>
                <div className='title'>Level:</div>
                <div className='content'>{selected.level}</div>
            </div>
            <div className='wrapper'>
                <div className='title'>Published Date:</div>
                <div className='content'>{selected.publishedDate}</div>
            </div>
            <div className='wrapper'>
                <div className='title'>Action(s):</div>
                <div className='actions'>
                    {selected.url_action.map((action, index) => (
                        <div key={index} className='action'><a href={action.url} target="_blank" className='content'>{action.url}</a></div>
                    ))}
                </div>
            </div>
            <div className='wrapper'>
                <div className='title'>Content:</div>
                <div className='content'>{selected.body}</div>
            </div>
        </div>
    )
}

export default Detail;