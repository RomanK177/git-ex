'use strict'

console.log('Starting up');

function onInit() {
    renderProjects()
}

function renderProjects() {
    var projects = getProjects()
    var strHtmls = projects.map(function(project) {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="img-fluid" src="${project.url}" alt="">
        </a>
            <div class="portfolio-caption">
            <h4>"${project.title}"</h4>
            <p class="text-muted">Game</p>
            </div>
        </div>
    `
    })
    debugger
    document.querySelector('.portfolio-html-inject').innerHTML = strHtmls.join('')
}