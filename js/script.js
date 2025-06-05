document.addEventListener("DOMContentLoaded", (event) => {

  console.log("Portfolio site loaded");

  // Dark and Light Mode 
 let lightmode = localStorage.getItem('light-mode');
 const themeSwitch = document.getElementById('theme-switch');

 const enableLightmode = () => {
    document.body.classList.add('light-mode');
    document.querySelector("header").classList.add("light-mode");
    document.querySelectorAll("html").forEach(h => h.classList.add("light-mode"));
    document.querySelectorAll(".sidenav a").forEach(s => s.classList.add("light-mode"));
    document.querySelectorAll(".nav2 a").forEach(n => n.classList.add("light-mode"));
    document.querySelectorAll("h2").forEach(h2 => h2.classList.add("light-mode"));
    document.querySelectorAll(".sidenav").forEach(side => side.classList.add("light-mode"));
    document.querySelectorAll(".contributions-content").forEach(c => c.classList.add("light-mode"));
    document.querySelectorAll(".project").forEach(p => p.classList.add("light-mode"));
    document.querySelectorAll(".program").forEach(program => program.classList.add("light-mode"));
    document.querySelectorAll(".data2").forEach(data => data.classList.add("light-mode"));
    document.querySelectorAll(".language-name").forEach(l => l.classList.add("light-mode"));
    document.querySelectorAll(".language-level").forEach(level => level.classList.add("light-mode"));
    document.querySelectorAll("i").forEach(end => end.classList.add("light-mode"));
    document.querySelectorAll(".subtitle").forEach(subtitle => subtitle.classList.add("light-mode"));
    document.querySelectorAll("button").forEach(button => button.classList.add("light-mode"));
    document.querySelectorAll("#title span").forEach(title => title.classList.add("light-mode"));
    document.querySelectorAll("#description").forEach(d => d.classList.add("light-mode"));
    localStorage.setItem('light-mode', 'active');
 }

  const disableLightmode = () => {
    document.body.classList.remove('light-mode');
      document.querySelector("header").classList.remove("light-mode");
    document.querySelectorAll("html").forEach(h => h.classList.remove("light-mode"));
    document.querySelectorAll(".sidenav a").forEach(s => s.classList.remove("light-mode"));
    document.querySelectorAll(".nav2 a").forEach(n => n.classList.remove("light-mode"));
    document.querySelectorAll("h2").forEach(h2 => h2.classList.remove("light-mode"));
    document.querySelectorAll(".sidenav").forEach(side => side.classList.remove("light-mode"));
    document.querySelectorAll(".contributions-content").forEach(c => c.classList.remove("light-mode"));
    document.querySelectorAll(".project").forEach(p => p.classList.remove("light-mode"));
    document.querySelectorAll(".program").forEach(program => program.classList.remove("light-mode"));
    document.querySelectorAll(".data2").forEach(data => data.classList.remove("light-mode"));
    document.querySelectorAll(".language-name").forEach(l => l.classList.remove("light-mode"));
    document.querySelectorAll(".language-level").forEach(level => level.classList.remove("light-mode"));
    document.querySelectorAll("i").forEach(end => end.classList.remove("light-mode"));
    document.querySelectorAll(".subtitle").forEach(subtitle => subtitle.classList.remove("light-mode"));
    document.querySelectorAll("button").forEach(button => button.classList.remove("light-mode"));
    document.querySelectorAll("#title span").forEach(title => title.classList.remove("light-mode"));
    document.querySelectorAll("#description").forEach(d => d.classList.remove("light-mode"));
    localStorage.setItem('light-mode', null);
  }

  if(lightmode === 'active'){
    enableLightmode();
  }

 themeSwitch.addEventListener('click', () => {
    lightmode = localStorage.getItem('light-mode');
    if(lightmode !== 'active'){
        enableLightmode()
    }
    else{
      disableLightmode()
    }
 })
})
// sidenav for small screens
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "rgb(7,12,17)";
}

// API GitHub on Portfolio
const repositories = document.querySelector('.repositories');

function getApiGitHub() {
  fetch('https://api.github.com/users/lauracoelho0412/repos')
    .then(async res => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      let data = await res.json();
      data.map(item => {
        let project = document.createElement('div');

        project.innerHTML = `
                <div class="project">
                    <div class="content">
                        <div class="description">
                            <h4 class="title">${item.name}</h4>
                            <p class="program">${item.description}</p>
                         </div>
                        <div class="data">
                            <span class="data2">${Intl.DateTimeFormat('en').format(new Date(item.created_at))}</span>
                        </div>
                    </div>
                    <div class="content">
                        <span class="program"><span class="circle"></span>${item.language}</span>
                        <a href="${item.html_url}">${item.full_name}</a>
                    </div>
                </div>
                `

        repositories.appendChild(project);
      })
    })
}

getApiGitHub()

// Star effect using p5.js
let star = [];
let quantity = 150;
function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);

  for (let i = 0; i < quantity; i++) {
    star[i] = [];
    star[i][0] = random(width);
    star[i][1] = random(height);
    star[i][2] = random(1, 4);

  }
}

function draw() {
  clear();

  for (let i = 0; i < quantity; i++) {

    let thickness = map(star[i][2], 1, 5, 0.5, 3.5);
    strokeWeight(thickness);

    let size = map(star[i][2], 1, 5, 2, 5);
    line(star[i][0], star[i][1], star[i][0], star[i][1] + size);

    let velocity = map(star[i][2], 5, 1, 0.2, 0.8);
    star[i][1] -= velocity;

    if (star[i][1] < 0) {
      star[i][0] = random(width);
      star[i][1] = height;
    }
  }
  //Fix the canvas size on window resize
  if (windowWidth !== width || windowHeight !== height) {
    resizeCanvas(windowWidth, windowHeight);
  }
  // Fix the beginning of the canvas on window
}
// Skills section animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.exp').forEach((el) => observer.observe(el));

