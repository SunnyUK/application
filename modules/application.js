"use strict";
/*global module:false */

/**
 * Serves the homepage
 * @example
    homepage: {}
 */

module.exports = function (config, libraries, services) {
    var app = services.app;

    app.get('/', function (req, res) {
        res.render('homepage.twig', { application: config.application, active: '/' });
    });

    app.get('/writeto', function (req, res) {
        res.render('writeto.twig', { application: config.application, active: '/writeto' });
    });

    app.get('/cv', function (req, res) {
        res.render('cv.twig', { application: config.application, active: '/cv' });
    });

    app.get('/attachements', function (req, res) {
        res.render('attachements.twig', { application: config.application, active: '/attachements' });
    });
};
