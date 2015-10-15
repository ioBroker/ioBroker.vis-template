![Logo](admin/template.png)
ioBroker.vis-template
============

This is template widget set to create your own.
![Screenshot](img/widgets.png)

You can read instructions in template.js, template.html files

To create your own widget set:
- download and unpack this packet from github https://github.com/ioBroker/ioBroker.vis-template/archive/master.zip
  or clone git repository "git clone https://github.com/ioBroker/ioBroker.vis.git"

- download required npm packets. Write in ioBroker.vis-template directory:
  npm install
  
- set name of this template. Call
  
  grunt rename --name=MYNEWNAME --email=email@mail.com --author="Author Name"
  
  MYNEWNAME must be lower case and with no spaces.
 
- rename directory from "ioBroker.vis-template" to "ioBroker.vis-MYNEWNAME"

- to use this template you should copy it into iobroker/node_modules directory
  call "iobroker visdebug MYNEWNAME" to enable debugging and upload widget to vis

- create your widgets
  You can find debug instructions here: https://github.com/ioBroker/ioBroker/wiki/How-to-debug-vis-and-to-write-own-widget-set

- change version: edit package.json and then call "grunt p"
  
- share it

## Changelog

### 0.0.1 (2015-06-28)
- (bluefox) initial checkin

## License
 Copyright (c) 2015-2016 @@Author@@
 MIT
