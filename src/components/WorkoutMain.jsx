import { useEffect, useRef } from 'react';
import './../App.css';

const schedule = [
{
    day: 1,
    videos: [
        { link: "https://www.youtube.com/watch?v=_xrAGY9ST4g&ab_channel=ZannavanDijk", image: "aaa.png" },
        { link: "https://www.youtube.com/watch?v=jtDp6C9zKzw&ab_channel=ZannavanDijk", image: "bbb.png" },
    ]
},
{
    day: 2,
    videos: [
        { link: "https://www.youtube.com/watch?v=3K-0JpiJu-o&ab_channel=MimiKuo-Deemer", image: "ccc.png" },
        { link: "https://www.youtube.com/watch?v=L_xrDAtykMI&ab_channel=TomMerrick", image: "bbb.png" },
    ]
},
{
    day: 3,
    videos: [
        { link: "https://www.youtube.com/watch?v=fjWp8iazB9I&ab_channel=CHRISTINADORNER", image: "ddd.png"},
        { link: "https://www.youtube.com/watch?v=igtL2m8oH2I&ab_channel=fitbymik", image: "aaa.png" },
    ]
},
{
    day: 4,
    videos: [
        { link: "https://www.youtube.com/watch?v=3K-0JpiJu-o&ab_channel=MimiKuo-Deemer", image: "aaa.png" },
        { link: "https://www.youtube.com/watch?v=1n2pDfD6aFo&ab_channel=CandaceCabreraTavino", image: "eee.png" }, 
    ]
},
{
    day: 5,
    videos: [
        { link: "https://www.youtube.com/watch?v=j64BBgBGNIU&ab_channel=ChloeTing", image: "fff.png" },
        { link: "https://www.youtube.com/watch?v=I9nG-G4B5Bs&ab_channel=ChloeTing", image: "jjj.png" },
    ]
},
{
    day: 6,
    videos: [
        { link: "https://www.youtube.com/watch?v=3K-0JpiJu-o&ab_channel=MimiKuo-Deemer", image: "aaa.png" },
        { link: "https://www.youtube.com/watch?v=1n2pDfD6aFo&ab_channel=CandaceCabreraTavino", image: "bbb.png" },
        
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
                    <a href="images/${video.link}" target="_blank">
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