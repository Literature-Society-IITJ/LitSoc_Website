import React, { useEffect, useState } from 'react'
import { FaUserSecret, FaBookmark, FaPenNib } from 'react-icons/fa'
import { MdEventAvailable } from 'react-icons/md'
import CountUp from 'react-countup'

export default function HomeFunData() {

    // const maxUsers = 200;
    // const maxBooks = 200;
    // const maxContent = 100;
    // const maxEvents = 20;
    const [maxUsers, setMaxUsers] = useState(0);
    const [maxBooks, setMaxBooks] = useState(0);
    const [maxContent, setMaxContent] = useState(0);
    const [maxEvents, setMaxEvents] = useState(0);

    const [userCount, setUserCount] = useState(0);
    const [bookCount, setBookCount] = useState(0);
    const [contentCount, setContentCount] = useState(0);
    const [eventsCount, setEventsCount] = useState(0);

    const [scrollTop, setScrollTop] = useState(0);
    const [startCount, setStartCount] = useState(false);
    
    useEffect(() => {
        setTimeout(() => { 
            if (startCount) {
                setUserCount((userCount) => 
                { 
                    if (userCount < maxUsers) {
                        return userCount + 1;
                    }
                    else {
                        return maxUsers;
                    }
                })
            }
        }, 600/maxUsers);
    }, [userCount, startCount]);
    useEffect(() => {
        setTimeout(() => { 
            if (startCount) {
                setBookCount((bookCount) => 
                { 
                    if (bookCount < maxBooks) {
                        return bookCount + 1;
                    }
                    else {
                        return maxBooks;
                    }
                })
            }
        }, 600/maxUsers);
    }, [bookCount, startCount]);
    useEffect(() => {
        setTimeout(() => { 
            if (startCount) {
                setContentCount((contentCount) => 
                { 
                    if (contentCount < maxContent) {
                        return contentCount + 1;
                    }
                    else {
                        return maxContent;
                    }
                })
            }
        }, 850/maxContent);
    }, [contentCount, startCount]);
    useEffect(() => {
        setTimeout(() => { 
            if (startCount) {
                setEventsCount((eventsCount) => 
                { 
                    if (eventsCount < maxEvents) {
                        return eventsCount + 1;
                    }
                    else {
                        return maxEvents;
                    }
                })
            }
        }, 1500/maxEvents);
    }, [eventsCount, startCount]);


    useEffect(() => {
        const onScroll = () => {
            const elemPos = document.querySelectorAll('.home-fun-data-container')[0].getBoundingClientRect().top
            setScrollTop(elemPos)
            if ( elemPos < window.innerHeight-200) {
                // setStartCount(true);
                setMaxUsers(200);
                setMaxBooks(200);
                setMaxContent(100);
                setMaxEvents(20);
            }
        }
        
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [scrollTop]);


    // return (
    //     <div className='home-fun-data-container'>
    //         <div className='fun-data-card'>
    //             <FaUserSecret className='fun-data-card-icon' />
    //             <div className='fun-data-card-info'>
    //                 <div className='fun-data-card-count'>
    //                     {userCount} +
    //                 </div>
    //                 <div className='fun-data-card-category'>
    //                     Users
    //                 </div>
    //             </div>
    //         </div>

    //         <div className='fun-data-card'>
    //             <FaBookmark className='fun-data-card-icon' />
    //             <div className='fun-data-card-info'>
    //                 <div className='fun-data-card-count'>
    //                     {bookCount} +
    //                 </div>
    //                 <div className='fun-data-card-category'>
    //                     Books
    //                 </div>
    //             </div>
    //         </div>

    //         <div className='fun-data-card'>
    //             <FaPenNib className='fun-data-card-icon' />
    //             <div className='fun-data-card-info'>
    //                 <div className='fun-data-card-count'>
    //                     {contentCount} +
    //                 </div>
    //                 <div className='fun-data-card-category'>
    //                     Content
    //                 </div>
    //             </div>
    //         </div>

    //         <div className='fun-data-card'>
    //             <MdEventAvailable className='fun-data-card-icon' />
    //             <div className='fun-data-card-info'>
    //                 <div className='fun-data-card-count'>
    //                     {eventsCount} +
    //                 </div>
    //                 <div className='fun-data-card-category'>
    //                     Events
    //                 </div>
    //             </div>
    //         </div>
    //     </div>

    return (
        <div className='home-fun-data-container'>
            <div className='fun-data-card'>
                <FaUserSecret className='fun-data-card-icon' />
                <div className='fun-data-card-info'>
                    <div className='fun-data-card-count'>
                        <CountUp className='fun-data-card-countup-tag' start={0} end={maxUsers} duration={2} />
                        &nbsp;+
                    </div>
                    <div className='fun-data-card-category'>
                        Users
                    </div>
                </div>
            </div>

            <div className='fun-data-card'>
                <FaBookmark className='fun-data-card-icon' />
                <div className='fun-data-card-info'>
                    <div className='fun-data-card-count'>
                        <CountUp className='fun-data-card-countup-tag' start={0} end={maxBooks} duration={2} />
                        &nbsp;+
                    </div>
                    <div className='fun-data-card-category'>
                        Books
                    </div>
                </div>
            </div>

            <div className='fun-data-card'>
                <FaPenNib className='fun-data-card-icon' />
                <div className='fun-data-card-info'>
                    <div className='fun-data-card-count'>
                        <CountUp className='fun-data-card-countup-tag' start={0} end={maxContent} duration={2} />
                        &nbsp;+
                    </div>
                    <div className='fun-data-card-category'>
                        Content
                    </div>
                </div>
            </div>

            <div className='fun-data-card'>
                <MdEventAvailable className='fun-data-card-icon' />
                <div className='fun-data-card-info'>
                    <div className='fun-data-card-count'>
                        <CountUp className='fun-data-card-countup-tag' start={0} end={maxEvents} duration={2} />
                        &nbsp;+
                    </div>
                    <div className='fun-data-card-category'>
                        Events
                    </div>
                </div>
            </div>
        </div>
    )
}
