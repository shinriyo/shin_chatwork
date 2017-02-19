// ↓のが出来ないのでコメントアウト
// const { app } = require('electron');
// console.log(app);

// var webview = document.getElementById('mainWebview');
// var title = "";
// var unreadCount = "";
// var timer = setInterval(function() {
//     title = webview.getTitle();
//     var result = title.match(/\((\d+)\)/);
//     if (result) {
//         unreadCount = result[1];
//     } else {
//         unreadCount = "";
//     }
//     // unreadCountに基づいてバッジを更新
//     console.log(app);
// 何故かappがundefined...
//     app.dock.setBadge(unreadCount);
// }, 1000);