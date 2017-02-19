'use strict';

const { app, dialog, BrowserWindow, ipcMain } = require('electron');
//require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({ width: 1000, height: 600 });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.openDevTools(true);

    mainWindow.on('closed', function() {
        mainWindow = null;
    });

    // ダウンロード
    mainWindow.webContents.session.on('will-download', function(event, item, webContents) {
        //  event.preventDefault();
        // event.session.setDownloadPath("path/to/tmp/folder");
        // console.log('start');

        item.on('update', function() {
            console.log(item.percentComplete);
        });

        // こっちは動かない
        // item.on('complete', function() {
        item.on('done', function() {
            // console.log('completed');
            // ファイル名のみ
            // console.log(item.getFilename());
            // 元のURL
            // console.log(item.getURL());
            // フルパス
            var full_path = item.getSavePath();
            var options = {
                type: 'info',
                buttons: ['OK'],
                title: 'ダウンロード完了',
                message: 'ダウンロード完了',
                detail: full_path + '\nへダウンロードしました'
            };

            dialog.showMessageBox(mainWindow, options);

            // mainWindow.createPdfView("path/to/tmp/folder/item.name");
        });
    });
});