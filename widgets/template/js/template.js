/*
    ioBroker.vis template Widget-Set

    version: "0.0.1"

    Copyright 10.2015-2016 @@Author@@<@@Author@@@mail.com>

*/
"use strict";

// add translations for edit mode
if (vis.editMode) {
    $.extend(true, systemDictionary, {
        "circleWidth":      {"en": "Сircle width",      "de": "Kreisbreite",            "ru": "Ширина дуги"},
        "showValue":        {"en": "Show value",        "de": "Wert anzeigen",          "ru": "Показать значение"}
	};
}

// add translations for non-edit mode
$.extend(true, systemDictionary, {
    "Instance":  {"en": "Instance", "de": "Instanz", "ru": "Инстанция"}
});

// this code can be placed directly in template.html
vis.binds.template = {
    version: "0.0.1",
    showVersion: function () {
        if (vis.binds.template.version) {
            console.log('Version template: ' + vis.binds.template.version);
            vis.binds.template.version = null;
        }
    },
	createWidget: function (widgetID, view, data, style) {
        var $div = $('#' + widgetID);
        // if nothing found => wait
        if (!$div.length) {
            return setTimeout(function () {
                vis.binds.template.createWidget(widgetID, view, data, style);
            }, 100);
        }

        var text = '';
        text += 'OID value: <div class="template-value">' + (vis.states[data.oid] ? vis.states[data.oid].val : 'not found') + '</div><br>';
        text += 'Color: <div style="color: ' + data.myColor + '">' + data.myColor + '</div><br>';
        text += 'htmlText: <textarea readonly style="width:100%">' + data.htmlText + '</textarea><br>';
        text += 'extraAttr: extraAttr<br>';
        text += 'Browser instance: ' + vis.instance + '<br>';

        $('#' + widgetID).html(text);

        // subscribe on updates of value
        if (vis.states[data.oid]) {
            vis.states.bind(data.oid + '.val', function (e, newVal, oldVal) {
                $div.find('.template-value').html(newVal);
            });
        }
    }
};
	
vis.binds.template.showVersion();