const messages = [
  { 
    text: "Hey… this year felt special from the moment you came into my life ❤️ I know ki aap phle se mere saath the ... kuch toh kahna tha aapse meri jaan ..💕 itne pyaare se ho itne achhe ho deserving candidate nhi lagti mai aapke liye 🥹💗 but that you soo much for always being there for me .. greatful to have you in my life 😭💗🫂 Allah kre hamesha mere saath rho hamesha hamesha inshallah inshallah inshallah 😭💗 I miss you alott and and lllllll you alott ye smjh jaiyega koi din bolenge jld hi inshallah 😚💗", 
    img: "assets/images/photo1.jpeg" 
  },
  { 
    text: "From random conversations to endless laughs 😂 Itna achha lgta that I don't have to act mature and can be myself infront of you 🥹💕 kabhi judge nhi krte mere natak me khudh bhi include ho jaate allahhh 😭💗 itne pyare ho kaha se mujhe mil gye 😭💗 you are the bestttesttt and and Illllllllll you with all my heart and will always be there for you no matter what ..will always be on your side support you and ofcourse will love you even more bachha 😘😚💗🫂", 
    img: "assets/images/photo2.jpeg" 
  },
  { 
    text: "From little fights to stronger us 🤍Pta hai this year was the worst for me until I had you in my life 🥺💗 you are soo special so perfect I am blessed to have you in my life my love 😘💗🫂", 
    img: "assets/images/photo3.jpeg" 
  },
  { 
    text: "Every memory this year has one thing in common — YOU ✨Aap pr hi meri  saari cheeze depend krti hai ..aap hai toh mai khush rhti hu ..💗😚", 
    img: "assets/images/photo4.jpeg" 
  },
  { 
    text: "Happy New Year, my favorite person ❤️I hope this year will bring more happiness success and love in your life 💗✨ May Allah bless you with every thing you desire and we stay together always inshallah 💗✨", 
    img: "assets/images/photo5.jpeg" 
  }
];

let current = 0;

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const messageBox = document.getElementById("messageBox");
const photo = document.getElementById("photo");
const music = document.getElementById("bgMusic");

/* Typing Effect */
function showContent() {
  messageBox.textContent = "";
  photo.src = messages[current].img;

  let i = 0;
  const text = messages[current].text;

  const typing = setInterval(() => {
    messageBox.textContent += text[i];
    i++;
    if (i === text.length) clearInterval(typing);
  }, 40);
}

/* Start Button */
startBtn.addEventListener("click", () => {
  music.play();
  startBtn.classList.add("hidden");
  messageBox.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
  photo.classList.remove("hidden");
  showContent();
});

/* Next Button */
nextBtn.addEventListener("click", () => {
  current++;
  if (current < messages.length) {
    showContent();
  } else {
    nextBtn.classList.add("hidden");
  }
});
