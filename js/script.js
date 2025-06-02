document.addEventListener("DOMContentLoaded", (event) => {

    console.log("Portfolio site loaded");


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

 const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  document.querySelectorAll('.exp').forEach((el) => observer.observe(el));
