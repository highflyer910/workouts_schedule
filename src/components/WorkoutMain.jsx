import { useEffect, useRef } from 'react';
import './../App.css';

const schedule = [
{
    day: 1,
    videos: [
        { link: "https://www.youtube.com/watch?v=_xrAGY9ST4g&ab_channel=ZannavanDijk", image: "v1698754006/5_uvzaxn.jpg" },
        { link: "https://www.youtube.com/watch?v=9qqnYOcSpY8&ab_channel=HeatherRobertson", image: "v1698754006/6_fdimtx.jpg" },
    ]
},
{
    day: 2,
    videos: [
        { link: "https://www.youtube.com/watch?v=3K-0JpiJu-o&ab_channel=MimiKuo-Deemer", image: "v1698754006/7_kbkv7o.jpg" },
        { link: "https://www.youtube.com/watch?v=L_xrDAtykMI&ab_channel=TomMerrick", image: "v1698754007/2_gmiqj3.jpg" },
    ]
},
{
    day: 3,
    videos: [
        { link: "https://www.youtube.com/watch?v=fjWp8iazB9I&ab_channel=CHRISTINADORNER", image: "v1698754006/4_zpuut6.jpg"},
        { link: "https://www.youtube.com/watch?v=igtL2m8oH2I&ab_channel=fitbymik", image: "v1698754006/3_m7aufm.jpg" },
    ]
},
{
    day: 4,
    videos: [
        { link: "https://www.youtube.com/watch?v=3K-0JpiJu-o&ab_channel=MimiKuo-Deemer", image: "v1698754006/7_kbkv7o.jpg" },
        { link: "https://www.youtube.com/watch?v=1n2pDfD6aFo&ab_channel=CandaceCabreraTavino", image: "v1698760696/8_kj2avb.jpg" }, 
    ]
},
{
    day: 5,
    videos: [
        { link: "https://www.youtube.com/watch?v=j64BBgBGNIU&ab_channel=ChloeTing", image: "v1707495631/9_wcmrff.jpg" },
        { link: "https://www.youtube.com/watch?v=I9nG-G4B5Bs&ab_channel=ChloeTing", image: "v1707495132/8_dwlzvy.jpg" },
    ]
},
{
    day: 6,
    videos: [
        { link: "https://www.youtube.com/watch?v=3K-0JpiJu-o&ab_channel=MimiKuo-Deemer", image: "v1698754006/7_kbkv7o.jpg" },
        { link: "https://www.youtube.com/watch?v=1n2pDfD6aFo&ab_channel=CandaceCabreraTavino", image: "v1698760696/8_kj2avb.jpg" },
        
    ]
},

];

const daysOfWeek = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
};


const WorkoutMain = () => {
    const scheduleListRef = useRef(null);
    
    useEffect(() => {
        generateCalendar();
    }, []);

    function generateCalendar() {
        const scheduleList = scheduleListRef.current;
        scheduleList.innerHTML = '';
    
        schedule.forEach(function (day) {
            const videos = day.videos;
    
            if (videos.length > 0) {
                const videoCount = videos.length;
                const grammar = videoCount === 1 ? "session" : "sessions";
    
                const videoLinks = videos.map(video => `
                    <a href="${video.link}" target="_blank">
                        <img src="https://res.cloudinary.com/highflyer910/image/upload/${video.image}" alt="Workout Video Image"/>
                    </a>
                `).join('');
    
                const dayName = daysOfWeek[day.day];
    
                const dayHTML = `
                    <div class='js-day'>
                        <div class='workout__info'>${dayName} - ${videoCount} ${grammar}</div>
                        <div class='workout__links'>${videoLinks}</div>
                    </div>
                `;
    
                scheduleList.innerHTML += dayHTML;
            }
        });
    }
    
    

    return (
        <section className="workout-main">
            <div className="schedule-list js-schedule-list" ref={scheduleListRef}></div>            
        </section>

    );
}

export default WorkoutMain;