cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.jkt.zebra.barcode.plugin.ZebraBarcodePlugin",
    "file": "plugins/com.jkt.zebra.barcode.plugin/www/ZebraBarcodePlugin.js",
    "pluginId": "com.jkt.zebra.barcode.plugin",
    "clobbers": [
      "zebraBarcodePlugin"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-android-support-gradle-release": "1.4.4",
  "com.jkt.zebra.barcode.plugin": "0.0.1",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});