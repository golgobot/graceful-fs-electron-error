var BrowserWindow = require('electron').BrowserWindow;
var app = require('electron').app;
var Menu = require('electron').Menu;
var mainWindow = null;
var path = require('path');

app.on('window-all-closed', function () {
    if (process.platform != 'darwin')
        app.quit();
});


app.on('ready', function () {
    mainWindow = new BrowserWindow({width: 1280, height: 720, resizable: true, title: 'Jibo Programming Challenge'});
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
    mainWindow.webContents.openDevTools({mode:'right'});
});
