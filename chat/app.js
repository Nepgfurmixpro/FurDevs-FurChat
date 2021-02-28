const Window = require('./window')
const { app, BrowserWindow } = require('electron')
class App {
    window = new Window();
    file;
    constructor(mainFile) {
        this.file = mainFile;
    }
    start() {
        this.window.create(this.file);
        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit();
            }
        });

        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                this.window.create(this.file);
            }
        })
    }
}

module.exports = App;