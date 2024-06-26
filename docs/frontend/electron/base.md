---
title: Electron学习
---

## 基础

Electron 核心其实就是两个进程，一个主进程，其中可以使用 nodejs 所有的 api，另一个渲染进程，即一般的前端。

两个进程之间想要交互，必须通过 preload 来进行。

**主进程**

```ts {5-7} title="main.ts"
...
const mainWindow = new BrowserWindow({
	width: 800,
	height: 600,
	webPreferences: {
		preload: path.join(__dirname, 'preload.js'),
	},
});
...
```

**预加载脚本**

```ts {11} title="preload.ts"
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('versions', {
	node: () => process.versions.node,
	chrome: () => process.versions.chrome,
	electron: () => process.versions.electron,
});

contextBridge.exposeInMainWorld('electronApi', {
	startDrag: (fileName: string) => {
		ipcRenderer.send('ondragstart', fileName);
	},
});
```

通过 preload 中的 `contextBridge` 向 `window` 中注入函数或者对象，这样在渲染进程中就可以通过 `window` 来调用这些函数或者对象了。

**渲染进程**

```ts title="app.ts"
window.electronApi.startDrag('test.txt');
```

注意由于window对象本身不具备electronApi属性，所以此处ts编译会出错，需要增加d.ts类型文件。

```ts title="types/index.d.ts"
interface Window {
    electronApi: {
        startDrag: (fileName: string) => void;
    }
}
```

在tsconfig中，把类型文件也加到编译文件里

```ts title="tsconfig.json"
...
"include": [
  ...
  "types/interface.d.ts",
],
...
```

然后通过 `ipcRenderer` 来向主进程发送通知，主进程监听到通知即可执行相应的操作（此时可以使用 nodejs 的 api）。

ipcRenderer 的传输参数有限制，详情见[electron ipcrender](https://www.electronjs.org/zh/docs/latest/api/ipc-renderer#ipcrenderersendchannel-args)。

**主进程**

```ts {3} title="main.ts"
import { app, BrowserWindow, ipcMain, Notification } from 'electron';
...
ipcMain.on('ondragstart', (event, filePath) => {
  event.sender.startDrag({
    file: path.join(__dirname, filePath),
    icon: path.join(__dirname, 'icon.jpg')
  })
})
```

## 优化

为了方便进程间的沟通，往往会在本地增加一个 nodejs 服务进程，便于接受应用发起的请求并且做出相应。