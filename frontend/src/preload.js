// src/preload.js
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  sendToPython: (channel, data) => {
    ipcRenderer.send(channel, data)
  },
  receiveFromPython: (channel, func) => {
    ipcRenderer.on(channel, (event, ...args) => func(...args))
  }
})
