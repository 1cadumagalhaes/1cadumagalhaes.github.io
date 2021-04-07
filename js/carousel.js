var intervalId;
var projects = {
    "data": [
        {
            "name": "Smart Parking",
            "url": "https://1cadumagalhaes.github.io/smart-parking",
            "desc": "Uma solução para estacionar e encontrar o seu veículo de forma fácil, eficiente e conectada, resolvendo os problemas em um jeito inteligente e sustentável",
            "img": "ecoala.jpg"
        },
        {
            "name": "GCP Functions",
            "url": "https://github.com/1cadumagalhaes/GCP-Functions",
            "desc": "Coleção de funções em javascript usando a biblioteca de API da Google Cloud Platform em diversos produtos",
            "img": "google-cloud.png"
        },
        {
            "name": "O Chapa",
            "url": "https://github.com/1cadumagalhaes/ccr_hackathon",
            "desc": "Projeto desenvolvido durante o Hackathon da CCR, focado na melhora da qualidade de vida dos caminhoneiros",
            "img": "ochapa.png"
        },
        {
            "name": "Web Performance Utils",
            "url": "https://github.com/1cadumagalhaes/web_performance_utils",
            "desc": "Js library to wrap pagespeed insights and crux API's and format it's values to present.",
            "img": "pagespeed.png"
        },
        {
            "name": "Uber Mais",
            "url": "https://github.com/1cadumagalhaes/uberhack-infinity",
            "desc": "Ubermais, um aplicativo para trazer mais acessibilidade a todos os tipos de usuário",
            "img": "icon_black_shadow.webp"
        }
    ]
}

function renderProjects() {
    console.log(projects);
    //var info = { title: 'Projeto ', img: 'https://1cadumagalhaes.github.io/img/me.jpeg', desc: 'lorem ipsum lorema asdasdlasda', url: '#' };
    projects.data.forEach(function (info, index) {
        var card = createProjectCard(index + 1, info.name, info.img, info.desc, info.url);
        $('.card-carousel').append(htmlToElement(card));
    });
}

function createProjectCard(index, title, img, desc, url) {
    return `<div class="item card shadow" id="project${index}">
    <div class="column">
        <div class="card-title">
            <h2>${title}</h2>
        </div>
        <div class="card-image">
            <img class="profile" src="./img/${img}"
                alt="my picture" width="210" height="210" loading="lazy">
        </div>
        <div class="card-desc">
            ${desc}
        </div>
        <div class="card-action">
            <a class="button btn-large shadow" href="${url}">Saiba mais</a>
        </div>
    </div>

</div>`;

}

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

document.addEventListener("DOMContentLoaded", function () {

    intervalId = setInterval(function () { navSlide(1, true) }, 2000);
    renderProjects();
    touchHandler('.carousel-wrapper', 'direction', navSlide);
    $('.card-carousel .item').forEach(function (item) {
        item.addEventListener('mousedown', function (e) {
            var t = e.target.id;
            if (/project/.test(t)) {

                $('input[value="' + t + '"]').click();
                clearInterval(intervalId);
            }

        })
    });
});

