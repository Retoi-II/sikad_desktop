'use strict'

const { app, BrowserWindow } = require('electron')
const path = require('path')

// Function to create the main window
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      preload: path.join(__dirname, 'preload.js') // Sesuaikan dengan path Anda
    }
  })

  // Load the index.html file from your Django server
  win.loadURL('http://localhost:8000') // Sesuaikan dengan URL backend Django Anda

  if (process.env.NODE_ENV === 'development') {
    // If in development mode, open DevTools
    win.webContents.openDevTools()
  }

  // Event listener for when the window is closed
  win.on('closed', () => {
    app.quit()
  })
}

// Event listener for when Electron has finished initialization
app.whenReady().then(() => {
  createWindow()

  // Event listener for macOS to recreate the window when the dock icon is clicked
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Event listener for when all windows are closed
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// Event listener for when Electron is ready to create browser windows
app.on('ready', async () => {
  createWindow()
})
