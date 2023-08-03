import React from 'react'

export default function Feedback() {
    return (
        <div style={{position: 'fixed', right: '24px', bottom: '24px', zIndex: '9999'}}>
            <a href="https://forms.gle/qpTCW5W4LnZdeaWe6" target='/'>
                <div style={{ height: '46px', width: '46px', backgroundColor: 'rgba(63, 91, 128, 1)', border: 'solid white 2px', borderRadius: '50%', alignItems: 'center', fontSize: '30px', color: 'white', display: 'flex', justifyContent: 'center',}}>
                    ?
                </div>
            </a>
        </div>
    )
}
