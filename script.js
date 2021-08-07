const btnScreen = document.getElementById('btn-selectScreen');const videoElement = document.getElementById('video-element');
const btnPath = document.getElementById('btn-selectPath');
const file = document.getElementById('file');
const btnStartScreen = document.getElementById('btn-startScreen');
const filepath = document.querySelector('.file-name');
const test = document.getElementById('test');

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
        videoElement.play()
        }
    }catch(err){
        alert('Some error occured.' + err)
    }
}   

async function startPip(){
    btnStartScreen.disabled = true;
    await videoElement.requestPictureInPicture();
    btnStartScreen.disabled = false;
}

// function selectPath(){
//     file.addEventListener('change', async (e) => {
//     filepath.hidden=false;
//       const [file] = e.target.files;
//       const { name: fileName } = file;
//       const openedFileName = `${fileName}`;
//       document.querySelector('.file-name').textContent = openedFileName;     
//         test.setAttribute('src',openedFileName);
    
// });
// }

// btnPath.addEventListener('click', selectPath);
btnScreen.addEventListener('click', selectMediaStream);
btnStartScreen.addEventListener('click', startPip);



// functionality:
// 1. This allows you to view a screen of yours eg: youtube, in picture in picture mode.
// note that. the select path functionality isnt yet completed. I m stuck upon it.
// but the select screen one is working perfectly.
// Also, I tried but not allwoed to use the local files on server error poped up and I m stuck.
// will come back If found the solution :).
// the commented code is the code of select path one.