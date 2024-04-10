import { useEffect, useRef } from 'react';
import './../App.css';

const schedule = [
{
    day: 1,
    videos: [
        { link: "https://www.youtube.com/watch?v=_xrAGY9ST4g&ab_channel=ZannavanDijk", image: "fff.jpg" },
        { link: "https://www.youtube.com/watch?v=jtDp6C9zKzw&ab_channel=ZannavanDijk", image: "ddd.jpg" },
    ]
},
{
    day: 2,
    videos: [
        { link: "https://www.youtube.com/watch?v=3K-0JpiJu-o&ab_channel=MimiKuo-Deemer", image: "eee.jpg" },
        { link: "https://www.youtube.com/watch?v=L_xrDAtykMI&ab_channel=TomMerrick", image: "bbb.jpg" },
    ]
},
{
    day: 3,
    videos: [
        { link: "https://www.youtube.com/watch?v=fjWp8iazB9I&ab_channel=CHRISTINADORNER", image: "ccc.jpg"},
        { link: "https://www.youtube.com/watch?v=igtL2m8oH2I&ab_channel=fitbymik", image: "fff.jpg" },
    ]
},
{
    day: 4,
    videos: [
        { link: "https://www.youtube.com/watch?v=3K-0JpiJu-o&ab_channel=MimiKuo-Deemer", image: "eee.jpg" },
        { link: "https://www.youtube.com/watch?v=1n2pDfD6aFo&ab_channel=CandaceCabreraTavino", image: "jjj.jpg" }, 
    ]
},
{
    day: 5,
    videos: [
        { link: "https://www.youtube.com/watch?v=j64BBgBGNIU&ab_channel=ChloeTing", image: "fff.jpg" },
        { link: "https://www.youtube.com/watch?v=I9nG-G4B5Bs&ab_channel=ChloeTing", image: "aaa.jpg" },
    ]
},
{
    day: 6,
    videos: [
        { link: "https://www.youtube.com/watch?v=3K-0JpiJu-o&ab_channel=MimiKuo-Deemer", image: "eee.jpg" },
        { link: "https://www.youtube.com/watch?v=1n2pDfD6aFo&ab_channel=CandaceCabreraTavino", image: "jjj.jpg" },
        
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
                        <img src="/images/${video.image}" alt="Workout Video Image"/>
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