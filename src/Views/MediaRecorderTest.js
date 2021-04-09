import React, { useEffect, useState } from 'react'

function MediaRecorderTest() {
    const [ mediaRecorderState, setMediaRecorderState ] = useState(null);
    useEffect(() => {
        // set up basic variables for app

        const record = document.querySelector('.record');
        const stop = document.querySelector('.stop');
        const soundClips = document.querySelector('.sound-clips');
        //const canvas = document.querySelector('.visualizer');
        const mainSection = document.querySelector('.main-controls');

        // disable stop button while not recording

        stop.disabled = true;

        // visualiser setup - create web audio api context and canvas

        let audioCtx;
        //const canvasCtx = canvas.getContext("2d");

        //main block for doing the audio recording

        if (navigator.mediaDevices.getUserMedia) {
            console.log('assuming...getUserMedia supported.');

            const constraints = { audio: true };
            let chunks = [];

            let onSuccess = function (stream) {
                const mediaRecorder = new MediaRecorder(stream);
                setMediaRecorderState(mediaRecorder);
                //visualize(stream);

                mediaRecorder.onstop = function (e) {
                    console.log("data available after MediaRecorder.stop() called.");

                    const clipName = prompt('Enter a name for your sound clip?', 'My unnamed clip');

                    const clipContainer = document.createElement('article');
                    const clipLabel = document.createElement('p');
                    const audio = document.createElement('audio');
                    const deleteButton = document.createElement('button');

                    clipContainer.classList.add('clip');
                    audio.setAttribute('controls', '');
                    deleteButton.textContent = 'Delete';
                    deleteButton.className = 'delete';

                    if (clipName === null) {
                        clipLabel.textContent = 'My unnamed clip';
                    } else {
                        clipLabel.textContent = clipName;
                    }

                    clipContainer.appendChild(audio);
                    clipContainer.appendChild(clipLabel);
                    clipContainer.appendChild(deleteButton);
                    soundClips.appendChild(clipContainer);

                    audio.controls = true;
                    const blob = new Blob(chunks, { 'type': 'audio/ogg; codecs=opus' });
                    chunks = [];
                    const audioURL = window.URL.createObjectURL(blob);
                    audio.src = audioURL;
                    console.log("recorder stopped");

                    deleteButton.onclick = function (e) {
                        let evtTgt = e.target;
                        evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
                    }

                    clipLabel.onclick = function () {
                        const existingName = clipLabel.textContent;
                        const newClipName = prompt('Enter a new name for your sound clip?');
                        if (newClipName === null) {
                            clipLabel.textContent = existingName;
                        } else {
                            clipLabel.textContent = newClipName;
                        }
                    }
                }

                mediaRecorder.ondataavailable = function (e) {
                    chunks.push(e.data);
                }
            }

            let onError = function (err) {
                console.log('The following error occured: ' + err);
            }

            navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);

        } else {
            console.log('getUserMedia not supported on your browser!');
        }
    }, []);


    let stopClickHandler = (e) => {
        const record = document.querySelector('.record');
        const stop = document.querySelector('.stop');
        stop.disabled = true;
        record.disabled = false;
        mediaRecorderState.stop();
        console.log(mediaRecorderState.state);
        console.log("recorder stopped");
        record.style.background = "";
        record.style.color = "";
        // mediaRecorder.requestData();

        prompt('Enter a name to save your clip under', 'My unnamed clip');
    }
    let recordClickHandler = (e) => {
        const record = document.querySelector('.record');
        const stop = document.querySelector('.stop');
        console.log("...made it to Record onclick!!!");
        stop.disabled = false;
        record.disabled = true;

        mediaRecorderState.start(); 
        console.log(mediaRecorderState.state);
        console.log("recorder started");
        record.style.background = "red";
    }

    return (
        <div>
            <section className="main-controls">
                <div id="buttons">
                    <button className="record" onClick={()=> recordClickHandler()}>Record</button>
                    <button className="stop" onClick={()=>stopClickHandler()}>Stop</button>
                </div>
                <section className="sound-clips">

                </section>

            </section>
        </div>
    )
}

export default MediaRecorderTest
