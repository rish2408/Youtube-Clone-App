// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=[YOUR_API_KEY]

// AIzaSyBznqhGluHRmuw4oI6rRjukaSWZYbRBUSI

const api_key = "AIzaSyBD-qB9pGvybl3EiOgQTO_c7pLwb6rzMm8";

const container = document.getElementById('results');

let search = async () => {
    try {
    let query = document.getElementById('query').value;
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&chart=mostPopular&regionCode=IN&key=${api_key}&maxResults=20`);

    let data = await res.json();
    append(data.items);
    // console.log(data);
    } catch (error) {
        console.log(error);
    }
};
search();
// Append

let append = (items) => 
{
    
    container.textContent = null;
    // console.log(data);
    // data.forEach((el)=> {el.id.videoId/el.snippet.title})
    items.forEach((ele) => {
        // console.log(videoId);
        // console.log(title);
        // console.log(id,snippet);
        let div = document.createElement('div');
        let iframe = document.createElement('img');
        iframe.setAttribute("id", "thumb");
        iframe.src = ele.snippet.thumbnails.medium.url;
        
        // iframe.src = `https://www.youtube.com/embed/${videoId}`;
        // iframe.allow = "fullscreen";
        // let h3 = document.createElement('h3');
        // h3.innerText = title;
        let title = document.createElement("p");
        title.textContent = ele.snippet.title;
        title.style.fontSize = "17px"


        let Name = document.createElement("p");
        Name.textContent = ele.snippet.channelTitle;
        Name.style.fontSize = "16px"
        Name.style.opacity = "0.8"
        Name.style.marginTop = "5px"
        div.append(iframe,title,Name);

        // let video = {
        //     title,
        //     videoId,
        // }

        div.onclick = () => {
            playVideo(ele);
        }
        container.append(div);
    })
};

let playVideo = (data) => 
{
    console.log(data);
    window.localStorage.setItem("video",JSON.stringify(data));
    window.location.href = "video.html";
}

