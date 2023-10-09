function copyToClipboard() {
    var inputElement = document.getElementById('input-link');
    navigator.clipboard.readText().then(text => {
        console.log(text);
        inputElement.value = text;
    }).catch(err => {
        console.error('Gagal membaca teks dari clipboard:', err);
    });
};


const accordionButtons = document.querySelectorAll('.border button');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.classList.toggle('hidden');
  });
});

const loadingBox = document.getElementById("loadingBox")
if(loadingBox) {
    loadingBox.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
    });
}

function backToHome() {
    homeBtn = document.getElementById("logo");
    if(homeBtn) {
        homeBtn.click();
    }
};


// REQUEST

const requestPost = (link, cb) => {
    fetch("/", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ url: link })
    }).then(res => res.json()).then(res => {
        cb({
            error: "",
            message: res.message,
            data: res.data,
        });
    }).catch(err => {
        cb({
            error: err.toString(),
            message: "",
            data: {},
        })
    });
};


function downloadVideoFromURL(url, filename) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(error => alert('Error downloading video: ' + error.toString()));
};

const renderCard = (data) => {
    const imgaeTag = document.getElementById("image");
    const nameTag = document.getElementById("video-name");
    const creatorTag = document.getElementById("video-creator");
    const sizeTag = document.getElementById("video-size");
    const durationTag = document.getElementById("video-duration");

    const downloadHD = document.getElementById("downloadHD");
    const downloadServer2 = document.getElementById("downloadServer2");
    // data.dynamicCover

    if(imgaeTag && data.dynamicCover && data.dynamicCover.length > 0) {
        imgaeTag.src = data.dynamicCover[0]
    } else if(imgaeTag && data.originCover && data.originCover.length > 0) {
        imgaeTag.src = data.originCover[0]
    } else if(imgaeTag && data.cover && data.cover.length > 0) {
        imgaeTag.src = data.cover[0]
    };
    if(creatorTag && data.author.nickname) {
        creatorTag.innerText = data.author.nickname;
    } else if(creatorTag){
        creatorTag.innerText = data.author.username;
    }
    if(durationTag && data.duration) {
        durationTag.innerText = data.duration;
    };
    if(downloadHD && data.video && data.video.length > 0) {
        try { downloadHD.removeEventListener("click") } catch(er) {};
        downloadHD.addEventListener("click", () => {
            downloadVideoFromURL(data.video[0], `maingames-${Date.now()}.mp4`);
        });
    };
    if(downloadServer2 && data.video && data.video.length > 1 || data.video.length == 1) {
        try { downloadServer2.removeEventListener("click") } catch(er) {};
        downloadServer2.addEventListener("click", () => {
            downloadVideoFromURL(data.video[1], `maingames-${Date.now()}.mp4`);
        });
    };
};

function processLink() {
    var inputElement = document.getElementById('input-link');
    const link = inputElement.value;
    if (link == "") {
        alert("Masukan Url")
        return
    };
    if(loadingBox) {
        loadingBox.style.display = "flex";
    }
    requestPost(link, res => {
        if(res.error != "") {
            loadingBox.style.display = "none";
            alert(res.error)
        } else {
            loadingBox.style.display = "none";
            const inpForm = document.getElementById("input-form");
            if(inpForm) {
                inpForm.style.display = "none";
            }
            const videoBox = document.getElementById("video-box");
            if(videoBox) {
                videoBox.style.display = "flex";
            }
            renderCard(res.data);
        }
    });
};
