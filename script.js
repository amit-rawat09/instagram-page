var arr = [
  {
    dp: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1581382575275-97901c2635b7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww",
    story:
      "https://plus.unsplash.com/premium_photo-1673254928968-b6513f32d43b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybCUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1679678691006-0ad24fecb769?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
  },
];

let clutter = "";
arr.forEach((e, idx) => {
  clutter =
    clutter +
    `
    <div class="story">
      <img id="${idx}" src="${e.dp}" alt="">
    </div>`;
});
let hide = document.querySelector(".manphoto");

document.querySelector("#storiyan").innerHTML = clutter;

document.querySelector("#storiyan").addEventListener("click", (e) => {
  let value = arr[e.target.id].story;
  document.querySelector("#full-screen").style.display = "block";
  hide.style.display = "none";
  document.querySelector(
    "#full-screen"
  ).style.backgroundImage = `url(${value})`;
  setTimeout(() => {
    document.querySelector("#full-screen").style.display = "none";
    hide.style.display = "block";
  }, 2000);
});
