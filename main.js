'use strict';

const {app, BrowserWindow} = require('electron')
const path = require('path')
require('electron-reload')(__dirname)

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  })
  mainWindow.loadFile('pages/index.html')
  mainWindow.setMenu(null)
  // mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
