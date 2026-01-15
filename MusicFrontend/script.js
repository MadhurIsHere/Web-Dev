const songs=[
    {
        "title":"SongOne",
        "artist":"Artist1",
        "src":"Library/Songs/Song1.mp3",
        "cover":"https://th.bing.com/th/id/OIP.lulXuCXRYazVF30Q-8J1ZwHaHa?w=161&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
    },
    {
        "title":"SongTwo",
        "artist":"Artist2",
        "src":"Library/Songs/song2.mp3",
        "cover":"https://ilyrictranslation.com/wp-content/uploads/2025/07/SIRRA-LYRICS-1024x576.webp"
    },
    {
        "title":"SongOne",
        "artist":"Artist1",
        "src":"Library/Songs/Song1.mp3",
        "cover":"https://th.bing.com/th/id/OIP.lulXuCXRYazVF30Q-8J1ZwHaHa?w=161&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
    }
];

const audio=document.getElementById("audio");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const play=document.getElementById("play");

const cover=document.querySelector(".cover");
const currentTime=document.querySelector(".current-time");
const duration=document.querySelector(".duration");
const volumeSlider=document.querySelector(".volume-slider")
const progress=document.querySelector(".progress")
const title=document.querySelector(".title");
const artist=document.querySelector(".artist");

let currentInd=0;
let isPlaying=false;

function UIBinding(index)
{
    const song=songs[index];
    title.textContent=song.title;
    artist.textContent=song.artist;
    cover.src=song.cover
    audio.src=song.src;
}

function formatTime(time)
{
    const min=Math.floor(time/60);
    const sec=Math.floor(time%60);
    return `${min}:${sec<10 ? "0":""}${sec}`;
}

play.addEventListener("click",()=>{
    if(!isPlaying)
    {
        isPlaying=true;
        audio.play();
        play.textContent="⏸";
    }
    else
    {
        isPlaying=false;
        audio.pause();
        play.textContent="▶";
    }
});

prev.addEventListener("click",()=>{
    currentInd--;
    if(currentInd<0)
    {
        currentInd=songs.length-1;
    }

    UIBinding(currentInd);
    audio.play();
    isPlaying=true;
    play.textContent="⏸"
});

next.addEventListener("click",()=>{
    currentInd++;
    if(currentInd>=songs.length)
    {
        currentInd=0;
    }
    UIBinding(currentInd)
    audio.play();
    isPlaying=true;
    play.textContent="⏸";
});

audio.addEventListener("ended",()=>{
    currentInd++;
    if(currentInd>=songs.length)
    {
        currentInd=0;
    }
    UIBinding(currentInd);
    audio.play();
});

audio.addEventListener("timeupdate",()=>{
    if(!audio.duration) return;
    progress.value=(audio.currentTime/audio.duration)*100;
});

progress.addEventListener("input",()=>{
    audio.currentTime=(progress.value/100)*audio.duration;
});

volumeSlider.addEventListener("input",()=>{
    audio.volume=volumeSlider.value;
});

audio.addEventListener("loadedmetadata",()=>{
    duration.textContent=formatTime(audio.duration);
});
audio.addEventListener("timeupdate",()=>{
    currentTime.textContent=formatTime(audio.currentTime);
});

UIBinding(currentInd);