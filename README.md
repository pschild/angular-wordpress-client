# Angular
## Configuration
You need to create a copy of src/app/config.template.ts and name it config.ts. Replace all attributes so that they fit to your personal needs/installation.

## Create a new Application
1. Copy object in .angular-cli.json ```{ "root": ...``` to ```"environments": {...} }```
2. Define custom properties for
    * main (```app.APPNAME.ts```)
    * styles
    * scripts
    * (environments)
3. Create file ```app.APPNAME.ts``` and exchange module to boot:

    ```import {AppAPPNAMEModule} from "./app/custom/APPNAME/app.APPNAME.module";```

    [...]

    ```platformBrowserDynamic().bootstrapModule(AppAPPNAMEModule);```
4. Create folder ```custom/APPNAME/``` and file ```custom/APPNAME/app.APPNAME.module.ts```
5. Call this module ```AppAPPNAMEModule``` and adjust ```providers```, ```declarations``` and ```imports``` to fit your apps needs.

   Remember to import the correct modules and components (mind the import path) in case you overwrite the default ones.
6. In case you want to overwrite default components, apply their folder structure in ```custom/APPNAME``` and overwrite.

## Plugins
* https://github.com/orizens/angular2-infinite-scroll
* https://github.com/KoderLabs/ng2-device-detector
* (https://github.com/zyra/ngx-facebook)

## Javascript Plugins
* highlight.js - Code Highlighting
* hammerjs - Touch Gestures

# Wordpress
## Theme
This application is dependent on the Wordpress Theme [pschild-angular](https://github.com/pschild/pschild-angular-wordpress-theme).

## Plugins
* [ACF to REST API](http://github.com/airesvsg/acf-to-rest-api): Exposes Advanced Custom Fields Endpoints in the WP REST API v2. Version: 2.2.1
* [Advanced Custom Fields](https://www.advancedcustomfields.com/): Customise WordPress with powerful, professional and intuitive fields. Version: 4.4.11

## Installation
1) Download Wordpress and install it on the server (for example via FTP).
2) Install and activate plugins for Wordpress (see section Wordpress Plugins)
3) Install and activate theme [pschild-angular](https://github.com/pschild/pschild-angular-wordpress-theme) for Wordpress
4) In Wordpress: choose "Einstellungen > Permalinks > Beitragsname"
5) Import ACF XML: Werkzeuge > Daten importieren > WordPress (must be installed first) > choose XML file > Import. This file can also be found at [pschild-angular](https://github.com/pschild/pschild-angular-wordpress-theme).

# Dev Notes
* Make sure that the menu name used in environment.ts fits with the menu name in Wordpress.
* When using a fresh Wordpress installation and ACFs are not showing up properly when creating a post, try to save the ACFs again.