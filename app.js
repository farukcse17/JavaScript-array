let mediaRecorder;
let recordedChunks = [];

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const downloadButton = document.getElementById('downloadButton');
const recordedVideo = document.getElementById('recordedVideo');

startButton.addEventListener('click', startRecording);
stopButton.addEventListener('click', stopRecording);
downloadButton.addEventListener('click', downloadRecording);

async function startRecording() {
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
            video: { mediaSource: 'screen' }
        });

        recordedChunks = [];
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = handleDataAvailable;
        mediaRecorder.onstop = handleStop;

        startButton.disabled = true;
        stopButton.disabled = false;
        downloadButton.disabled = true;

        mediaRecorder.start();
    } catch (error) {
        console.error('Error accessing screen recording:', error);
    }
}

function handleDataAvailable(event) {
    if (event.data.size > 0) {
        recordedChunks.push(event.data);
    }
}

function handleStop() {
    startButton.disabled = false;
    stopButton.disabled = true;
    downloadButton.disabled = false;
}

function stopRecording() {
    mediaRecorder.stop();
}

function downloadRecording() {
    const blob = new Blob(recordedChunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    recordedVideo.src = url;

    const a = document.createElement('a');
    a.href = url;
    a.download = 'screen_recording.webm';
    a.click();
}
