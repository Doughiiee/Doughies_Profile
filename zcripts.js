const usernames = ["Guest", "Guest_1", "Guest_1", "Guest_404"];
let clicks = 0;

document.getElementById("play").addEventListener("click", () => {
  clicks++;

  document.getElementById("status").innerText =
    clicks === 1 ? "Joining server..." :
    clicks === 2 ? "Server not responding" :
    "Last online: 2012";

  document.getElementById("username").innerText =
    usernames[Math.min(clicks, usernames.length - 1)];

  if (clicks === 3) {
    console.log("server_id=███-NULL");
  }
});

