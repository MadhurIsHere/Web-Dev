const songs=[
    {
        "title":"SongOne",
        "artist":"Artist1",
        "src":"Library/Songs/Song1.mp3"
    },
    {
        "title":"SongTwo",
        "artist":"Arist2",
        "src":"Library/Songs/Song2.mp3"
    },
    {
        "title":"SongOne",
        "artist":"Artist1",
        "src":"Library/Songs/Song1.mp3"
    }
];

const audio=document.getElementById("audio");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const play=document.getElementById("play");

const title=document.querySelector(".title");
const artist=document.querySelector(".artist");

let currentInd=0;
let isPlaying=false;

function UIBinding(index)
{
    const song=songs[index];
    title.textContent=song.title;
    artist.textContent=song.artist;

    audio.src=song.src;
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


UIBinding(currentInd);