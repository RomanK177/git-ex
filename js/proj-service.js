"use strict";
const STORAGE_KEY = 'projDB';

var gProjects = []

_createProjects()

function _createProjects() {
    var projects = loadFromStorage(STORAGE_KEY)
    if (!projects || !projects.length) {
        projects = []
        projects.push(_createProj('minesweeper', 'minesweeper', 'Mine Sweeper', 'Dont blow up!'))
    }
    gProjects = projects
    _saveProjToStorage();
}

function createNewProj(id, name, title, desc) {
    var proj = _createProj(id, name, title, desc)
    gProjects.unshift(proj)
    _saveProjToStorage();
}


function _createProj(id, name, title, desc) {
    return {
        id: id,
        name: name,
        title: title,
        desc: desc,
        url: `img/portfolio/${name}.JPG`,
        publishedAt: Date.now(),
        labels: []
    }
}

function _saveProjToStorage() {
    saveToStorage(STORAGE_KEY, gProjects)
}

function getProjects() {
    var projects = gProjects.slice();
    return projects
}

function getProjById(projId) {
    var proj = gProjects.find(function(project) {
        return projId === project.id
    })
    return proj
}

// function _getProjIdxById(projId) {
//     return gProjects.findIndex(function(project) {
//         return projId === project.id
//     });
// }