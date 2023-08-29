


const embedButton = document.getElementById("embedButton");
const embedCodeInput = document.getElementById("embedCodeInput");
const videoList = document.getElementById("videoList");
const restoreLastButton = document.getElementById("restoreLastButton");
const savedVideos = JSON.parse(localStorage.getItem("embeddedVideos")) || [];

function addVideo(embedCode) {
  const videoItem = document.createElement("div");
  videoItem.className = "video-item";
  videoItem.innerHTML = `${embedCode} <button class="remove-button">Remove</button>`;
  videoList.appendChild(videoItem);
  const removeButton = videoItem.querySelector(".remove-button");
  removeButton.addEventListener("click", () => {
    removeVideo(embedCode);
    videoList.removeChild(videoItem);
  });
}

function removeVideo(embedCode) {
  const updatedVideos = savedVideos.filter(code => code !== embedCode);
  localStorage.setItem("embeddedVideos", JSON.stringify(updatedVideos));
  const removedVideos = JSON.parse(localStorage.getItem("removedVideos")) || [];
  const videoIndex = savedVideos.indexOf(embedCode);
  removedVideos.push({ embedCode, videoIndex });
  localStorage.setItem("removedVideos", JSON.stringify(removedVideos));
}

embedButton.addEventListener("click", () => {
  const embedCode = embedCodeInput.value;

  // Ensure the input is not empty before adding the video
  if (embedCode.trim() !== "") {
    addVideo(embedCode);
    embedCodeInput.value = "";

    savedVideos.push(embedCode);
    localStorage.setItem("embeddedVideos", JSON.stringify(savedVideos));
  }
});

restoreLastButton.addEventListener("click", () => {
  const removedVideos = JSON.parse(localStorage.getItem("removedVideos")) || [];
  if (removedVideos.length > 0) {
    const lastRemoved = removedVideos.pop();
    const videoToRestore = savedVideos[lastRemoved.videoIndex];
    removedVideos.pop(); // Remove the last removed video
    localStorage.setItem("removedVideos", JSON.stringify(removedVideos));
    addVideo(videoToRestore);
  }
});

// Load videos from Local Storage when the page loads
window.addEventListener("load", () => {
  savedVideos.forEach(embedCode => {
    addVideo(embedCode);
  });
});
