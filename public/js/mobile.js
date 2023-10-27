


const accordionButtons = document.querySelectorAll('.border button');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.classList.toggle('hidden');
  });
});



function copyToClipboard() {
    var inputElement = document.getElementById('input-link');
    navigator.clipboard.readText().then(text => {
        // console.log(text);
        inputElement.value = text;
    }).catch(err => {
        console.error('Gagal membaca teks dari clipboard:', err);
    });
};


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
        if(res) {
            cb(res);
        }
    }).catch(err => {
        alert(err)
    });
};

const loadingBox = document.getElementById("mloadingBox")
loadingBox.addEventListener("click", e => {
    e.stopPropagation();
    e.preventDefault();
})

function processLink() {
    var inputElement = document.getElementById('input-link');
    if(inputElement.value == "") {
        alert("Masukan Link")
    } else {
        loadingBox.style.display = "flex";
        requestPost(inputElement.value, (respon) => {
            const { error , data } = respon;
            if(error || error != "") {
                alert(error)
            } else {
                const inputBox = document.getElementById("input-box");
                const videoBox = document.getElementById("video-box");
                if(inputBox && videoBox) {
                    inputBox.style.display = "none";
                    videoBox.style.display = "flex";
                    loadingBox.style.display = "none";
                    renderCard(data)
                }
            }
        })
    }
    
}




function renderCard(data) {
    const name = document.getElementById("video-name")
    const creator = document.getElementById("video-creator")
    const size = document.getElementById("video-size")
    const durasi = document.getElementById("video-durasi")

    const imgaeTag = document.getElementById("image");

    

    // if(data.author.nickname) {
    //     name.innerText = data.author.nickname;
    // } else {
    //     name.innerText = data.author.username; 
    // }

    if(data.author.nickname) {
        creator.innerText = data.author.nickname;
    } else {
        creator.innerText = data.author.username; 
    }

    if(data.duration) {
        durasi.innerText = data.duration;
    }

    if(data.cover && data.cover.length > 0) {
        imgaeTag.src = data.cover[0]
    }

    


    const btnDownload1 = document.getElementById("download1");
    const btnDownload2 = document.getElementById("download2");
    const downloadLainnya = document.getElementById("downloadLainnya")

    if(data.video && data.video.length > 0) {
        btnDownload1.addEventListener("click", () => {
            downloadVideoFromURL(data.video[0], `maingames-${Date.now()}.mp4`);
        })
    }
    if(data.video && data.video.length > 2 || data.video.length == 2 ) {
        btnDownload2.addEventListener("click", () => {
            downloadVideoFromURL(data.video[1], `maingames-${Date.now()}.mp4`);
        })
    }
    downloadLainnya.addEventListener("click", () => {
        document.getElementById("logo").click();
    })


    console.log(data)
}

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