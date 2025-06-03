document.addEventListener("DOMContentLoaded", (event) => {

    console.log("Portfolio site loaded");

    // Dark and Light Mode 
 const lightBtn = document.getElementById("light-mode");
  const darkBtn = document.getElementById("dark-mode");

  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  }
  
  function getCookie(name) {
    return document.cookie.split('; ').reduce((acc, cookie) => {
      const [key, val] = cookie.split('=');
      return key === name ? val : acc;
    }, '');
  }

  function applyLightMode(){
    lightBtn.classList.add("active2")
    darkBtn.classList.remove("active2")

    document.body.classList.add("light-mode");
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
  }
   function applyDarkMode(){
    darkBtn.classList.add("active2")
    lightBtn.classList.remove("active2")

     document.body.classList.remove("light-mode");
    document.body.classList.remove("light-mode");
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
  }
  
  lightBtn.addEventListener('click', function () {
    applyLightMode();
    setCookie('theme', 'light', 30);
  });

  darkBtn.addEventListener('click', function () {
    applyDarkMode();
    setCookie('theme', 'dark', 30);
  });
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = getCookie('theme');
    if (savedTheme === 'dark') {
      applyDarkMode();
    } else {
      applyLightMode();
    }
  });

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
    background(7, 12, 17);
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

  