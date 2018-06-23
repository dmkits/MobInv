cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-keyboard.keyboard",
    "file": "plugins/cordova-plugin-keyboard/www/keyboard.js",
    "pluginId": "cordova-plugin-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-plugin-cipherlab-rs30.CipherlabRS30CordovaPlugin",
    "file": "plugins/cordova-plugin-cipherlab-rs30/www/CipherlabRS30CordovaPlugin.js",
    "pluginId": "cordova-plugin-cipherlab-rs30",
    "clobbers": [
      "cordova.plugins.CipherlabRS30CordovaPlugin"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-keyboard": "1.2.0",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-cipherlab-rs30": "0.0.3"
};
// BOTTOM OF METADATA
});