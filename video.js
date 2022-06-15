let video = JSON.parse(localStorage.getItem("video"))
console.log(video)
console.log(video.id.videoId)

let videoDiv = document.getElementById("video1")

let iframe = document.createElement("iframe")

iframe.src = `https://www.youtube.com/embed/${video.id.videoId}`
iframe.width = "1250px"
iframe.height = "550px"
iframe.setAttribute("allowfullscreen", "true")

videoDiv.append(iframe);