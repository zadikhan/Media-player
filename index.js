let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs= [
    {songName:"Tera Zikr", filePath:"songs/1.mp3", coverPath:"images/1.png"},
    {songName:"Pasoori", filePath:"songs/2.mp3", coverPath:"images/2.png"},
    {songName:"Khaab", filePath:"songs/3.mp3", coverPath:"images/3.png"},
    {songName:"Yaaro Sab Dua Karo", filePath:"songs/4.mp3", coverPath:"images/4.png"},
    {songName:"shiddat", filePath:"songs/5.mp3", coverPath:"images/5.png"},
    {songName:"photo-luka chupi", filePath:"songs/6.mp3", coverPath:"images/6.png"},
    {songName:"Duniya--luka chupi", filePath:"songs/7.mp3", coverPath:"images/7.png"},
    {songName:"Bekhayali--", filePath:"songs/8.mp3", coverPath:"images/8.png"},
    {songName:"Tera Naam Dil Rakh Diya ", filePath:"songs/9.mp3", coverPath:"images/9.png"},
    {songName:"na seekha mene jeena", filePath:"songs/10.mp3", coverPath:"images/10.png"},
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
    
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity=0;
    }

})
audioElement.addEventListener('timeupdate',()=>{
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')

})
} 
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        
        
        audioElement.currentTime = 0;
        
        masterSongName.innerText=songs[songIndex].songName;
        gif.style.opacity=1;
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        
    })
})

 
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    
    masterSongName.innerText=songs[songIndex].songName;

    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex>=0){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})
