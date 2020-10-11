"use strict";
const STORAGE_KEY = 'projDB';

var gProjects = []
_createProjects()
    // createNewProj('bookshop', 'Book Shop', 'Manege your books!', "Store")

function _createProjects() {
    var projects = loadFromStorage(STORAGE_KEY)
    if (!projects || !projects.length) {
        projects = []
        projects.push(_createProj('minesweeper', 'Mine Sweeper', 'Dont blow up!', "Game"))
    }
    gProjects = projects
    _saveProjToStorage();
}

function createNewProj(name, title, desc, label) {
    var proj = _createProj(name, title, desc, label)
    gProjects.unshift(proj)
    _saveProjToStorage();
}


function _createProj(name, title, desc, label) {
    return {
        id: makeId(4),
        name: name,
        title: title,
        desc: desc,
        url: `img/portfolio/${name}.JPG`,
        publishedAt: Date.now(),
        labels: [label]
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