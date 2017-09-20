# Angular Plugins

* https://github.com/orizens/angular2-infinite-scroll
* https://github.com/KoderLabs/ng2-device-detector
* (https://github.com/zyra/ngx-facebook)

# Folder: server-scripts
### share.php
* og-tags cannot be set dynamically via JavaScript.
* Use this static site to generate og-tags for sharing on Facebook.

## plugins
### acf-custom-post-template-support.php
* Plugin for Wordpress (folder wp-content/plugins, then activate in Backend)
* Used to be able to select custom page templates for type "post" (not only page) in combination with "Advanced Custom Fields"

## theme
### pschild-angular
#### Features
* Routes for retrieving menu by name: pschild-angular/v1/menu/<MENU_NAME>
* Additional image sizes. A scaled version of an image is automatically created when uploaded.

#### templates
##### template-page-....php
* Templates for Wordpress type "page"

##### template-post-....php
* Templates for Wordpress type "post"

# Wordpress Plugins
* [ACF to REST API](http://github.com/airesvsg/acf-to-rest-api): Exposes Advanced Custom Fields Endpoints in the WP REST API v2. Version: 2.2.1
* [Advanced Custom Fields](https://www.advancedcustomfields.com/): Customise WordPress with powerful, professional and intuitive fields. Version: 4.4.11
* Support for Custom Post Templates in ACF (see plugins)

# Wordpress installation

1) Download Wordpress and install it on the server (for example via FTP).
2) Install and activate plugins for Wordpress (see section Wordpress Plugins)
3) Install and activate theme for Wordpress
4) In Wordpress: choose "Einstellungen > Permalinks > Beitragsname"
5) Import ACF JSON: Werkzeuge > Daten importieren > WordPress (must be installed first) > choose XML file > Import

# Troubleshooting

* Make sure that the menu name used in environment.ts fits with the menu name in Wordpress.
* When using a fresh Wordpress installation and ACFs are not showing up properly when creating a post, try to save the ACFs again.