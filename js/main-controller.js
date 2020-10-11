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
        <a onclick="renderModals('${project.id}')" class="portfolio-link" data-toggle="modal" href="#portfolioModal${project.id}">
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
    document.querySelector('.portfolio-html-inject').innerHTML = strHtmls.join('')
}

function renderModals(projId) {
    var project = getProjById(projId)
    var date = new Date(project.publishedAt)
    var year = date.getFullYear()
    var month = getMonth(date)
    var strHtmls = `
        <div class="portfolio-modal modal fade" id="portfolioModal${project.id}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <div class="modal-body">
                                <!-- Project Details Go Here -->
                                <h2>"${project.name}"</h2>
                                <p class="item-intro text-muted">"${project.desc}"</p>
                                <img class="img-fluid d-block mx-auto" src="${project.url}" alt="">
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                                    cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul class="list-inline">
                                    <li>Date: ${month} ${year}</li>
                                    <li>Client: Threads</li>
                                    <li>Category: Illustration</li>
                                </ul>
                                <button class="btn btn-primary" data-dismiss="modal" type="button">
                <i class="fa fa-times"></i>
                Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    document.querySelector('.portfolioModals-html-inject').innerHTML = strHtmls
}