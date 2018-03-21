exports.paths = {
    //directories that brunch should watch for changes - if any - then it will recompile them.
    watched: ['front-end', 'node_modules/bootstrap/dist', 'node_modules/font-awesome/scss'],
    // Where to compile files to.
    public: "dist"

};

exports.optimize = true,

    exports.files = {
        javascripts: {
            joinTo: {
                'js/app.js': /^front-end/, // have to add the folder (if its not the default - 'app') to watched paths list above.
                'js/vendor.js': /^node_modules/
            }
       },
        stylesheets: {
            joinTo: {
                'css/app.css': /^front-end/, // have to add the folder (if its not the default - 'app') to watched paths list above.
                'css/vendor.css': /^node_modules/
            }
        }
    },


exports.plugins = {
    babel: { presets: ['latest', 'stage-0'] },
    pleeease: {
        scss: true,
        less: true,
        autoprefixer: {
            browsers: ['> 1%'],
        },
    },
    copycat: {
        fonts: [
            'node_modules/bootstrap/fonts',
            'node_modules/font-awesome/fonts'
        ],
        onlyChanged: true,
    },
    uglify: {
        mangle: false,
        compress: {
            global_defs: {
                DEBUG: true
            }
        },
        ignored: / /    //any files that will be ignored in uglification
    },
 //  fingerprint: {  //A plugin that renames assets with a SHA (generate from file content) to fingerprinted it.
 //      targets: '*',
 //      autoReplaceAndHash: true,
 //      autoClearOldFiles: true,
 //      environments: ['*'],
 //      alwaysRun: true,
 //      manifestGenerationForce: true,
 //  },
},

exports.modules = {
    //wrapper: false
    autoRequire: {
        'js/app.js': [ //automatically require separated js files as modules (no need of other configuration)
            'front-end/scripts/main.js'
        ]
    }
},

exports.npm = {
    enabled: true,
    globals: {
        jQuery: 'jquery',
        $: 'jquery',
        bootstrap: 'bootstrap',
        //WOW: 'wow.js'
    },
}
