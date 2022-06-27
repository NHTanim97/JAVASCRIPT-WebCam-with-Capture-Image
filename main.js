    
    // ----------js
    // ----------for web cam
    const video = document.getElementById('video');

    /*
        mediaDevices.getUserMedia()
        এটা video, image, screen share করার জন্য call করতে হয় ।

        mediaDevices.getDisplayMedia();--- screen share এর জন্য ।
    */

    const webCam = navigator.mediaDevices.getUserMedia();


    /*
        যদি webCam তো mediaDevices.getUserMedia এটার ভিতরের 
        কিছু parameter true হবে।
    */
    if(webCam){
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        })

        // error handling
        .then (function(Live){
            video.srcObject = Live;
        })
        .catch(function(error){
            console('Please try again');
        })
    }



    // -------for capture image
    const canvas = document.getElementById('canvas');
    const btn = document.getElementById('btn');

    /*
        canvas.getContext()
        image capture, draw এসব করার জন্য ।
    */
    const context = canvas.getContext('2d');

    btn.addEventListener('click', ()=>{
        /*
        0, 0 দিয়ে x & y exis 0 বুজানো হয়েছে ।
        250, 150 height & width
        */
        context.drawImage(video, 0, 0, 250, 150)
    })

    