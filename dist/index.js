"use strict";
/// <reference types="electron" />
const electron_1 = require("electron");
const version = require("../package.json").version;
// set application title
let appTitle = `Desktop Grimoire v${version}`;
electron_1.app.setName(appTitle);
electron_1.app.on("ready", () => {
    let mainWindow = new electron_1.BrowserWindow({
        width: 1000,
        height: 750,
        backgroundColor: "#2e2c29",
        title: electron_1.app.getName()
    });
    mainWindow.once("ready-to-show", () => {
        mainWindow.show();
        mainWindow.focus();
        mainWindow.flashFrame(true);
    });
});
