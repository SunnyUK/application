"use strict";
/*global __dirname:false */

// Load the libraries and modules

var env = require('./env.json');
var config = {
    directory: __dirname + '/modules/',
    modules: {
        npm: {
            'dragonnodejs-webserver': {
                app: {
                    port: process.env.PORT || env.PORT,
                    package: __dirname + '/package.json',
                    static: __dirname + '/web/'
                },
                auth: {
                    disabled: process.env.AUTH_DISABLED,
                    realm: process.env.AUTH_REALM,
                    user: process.env.AUTH_USER,
                    password: process.env.AUTH_PASSWORD
                },
                bower: {
                    libraries: ['jquery', 'bootstrap'],
                    path: __dirname + '/'
                },
                header: {
                    'X-UA-Compatible': 'IE=edge,chrome=1',
                    'X-Frame-Options': 'DENY',
                    'X-XSS-Protection': '1; mode=block',
                    'X-Powered-By': null
                },
                language: {
                    default: 'en',
                    languages: ['de', 'en'],
                    path: __dirname + '/languages/'
                },
                swig: { views: __dirname + '/views/' }
            }
        },
        directory: {
            app: {},
            application: { application: require(__dirname + '/data/application.json') }
        }
    }
};
require('dragonnodejs')(config);
