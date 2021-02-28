const { electron, BrowserWindow, app } = require('electron')

class Window {
    create(fileToLoad) {
        function createWindow() {
            const win = new BrowserWindow({
                width: 1280,
                height: 720,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: true
                },
                autoHideMenuBar: true
            });
            win.loadFile(fileToLoad);
        }
        app.whenReady().then(createWindow);
    }
}

module.exports = Window;