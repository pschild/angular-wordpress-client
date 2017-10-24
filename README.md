# Angular
## Configuration
You need to create a copy of src/app/config.template.ts and name it config.ts. Replace all attributes so that they fit to your personal needs/installation.

## Plugins
* [ng-wordpress-templates](https://www.npmjs.com/package/ng-wordpress-templates) for template components that are used to request and display the content.

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

# Building
Run ```ng b --app APPNAME --prod --build-optimizer``` to build the app.

To define a new app, edit ```.angular-cli.json``` and make a copy of any folder located in ```src```.

# Dev Notes
* Make sure that the menu name used in ```config.ts``` fits with the menu name in Wordpress.
* When using a fresh Wordpress installation and ACFs are not showing up properly when creating a post, try to save the ACFs again.