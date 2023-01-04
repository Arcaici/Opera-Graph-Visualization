const { app, BrowserWindow, ipcMain } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload:  'preload.js',
        nodeIntegration: true,
        contextIsolation: false
      }
    })
    win.maximize()
    win.loadFile('map_graph.html')

    ipcMain.on('load-new-file', (event, file) => {
      win.loadFile(file)
    })
    ipcMain.on('reload-page', () => {
      const win = BrowserWindow.getFocusedWindow()
      win.reload()
    })
  }
  app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
  })
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

