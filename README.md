![Logo](admin/template.png)
ioBroker.vis-template
============

This is template widget set to create your own.
![Screenshot](img/widgets.png)

You can read instructions in template.js, template.html files

To create your own widget set:
- download this packet from git https://github.com/ioBroker/ioBroker.vis-template/archive/master.zip
  or clone git repository "git clone https://github.com/ioBroker/ioBroker.vis.git"

- download required npm packets
  npm install
  
- set your name of this template. Call
  "grunt rename --name=MYNEWNAME"
  MYNEWNAME must be lower case and with no spaces.
 
- rename directory from "ioBroker.vis-template" to "ioBroker.vis-MYNEWNAME"

- replace @@Author@@ and @@Author@@@mail.com in io-package.json, package.json, LICENSE, README.md, MYNEWNAME.js and MYNEWNAME.html

- create your widgets
  You can find debug instructions here: https://github.com/ioBroker/ioBroker/wiki/How-to-debug-vis-and-to-write-own-widget-set

- share it

## Changelog

### 0.0.1 (2015-06-28)
- (bluefox) initial checkin

## License
 Copyright (c) 2015-2016 @@Author@@
 MIT
