'use strict';

const {app, BrowserWindow} = require('electron');
const path = require('path');
const ipcMain = require('electron').ipcMain;
const fs = require('fs');

require('electron-reload')(__dirname);

function createMainWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 1100,
    minHeight: 500,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      preload: path.join(__dirname, 'scripts', 'preload.js'),
  },
  });
  mainWindow.loadFile('pages/index.html');
  mainWindow.setMenu(null);
  //mainWindow.webContents.openDevTools();
}

function createQuoteWindow () {
  const quoteWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    minWidth: 800,
    minHeight: 700,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      preload: path.join(__dirname, 'scripts', 'preload.js'),
  },
  });
  quoteWindow.loadFile('pages/card.html');
  quoteWindow.setMenu(null);
  //quoteWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createMainWindow();
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('changeWindow', (event, arg) => {
  //BrowserWindow.getAllWindows()[0].loadFile('pages/card.html');
  createQuoteWindow();
  fs.writeFileSync('quote-db.json', JSON.stringify(arg, null, 2));
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
