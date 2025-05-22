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
                            <h4 class="title">${ item.name}</h4>
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