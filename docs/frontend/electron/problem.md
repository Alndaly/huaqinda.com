---
title: Electron开发中遇到的一些问题
---

## 安装错误问题

> `Electron failed to install correctly, please delete node_modules/electron and try installing again`

直接`pnpm i electron`是不会安装其完整包的，需要手动 cd 到 electron 包目录下执行`node install.js`命令。

国内这一步大多数情况下会发生网络问题，需要手动修改`install.js`文件中的`mirrorOptions`变量，将其指向可访问镜像。

```js title="node_module/electron/install.js" {5}
downloadArtifact({
	version,
	artifactName: 'electron',
	force: process.env.force_no_cache === 'true',
	mirrorOptions: { mirror: 'https://npmmirror.com/mirrors/electron/' },
	cacheRoot: process.env.electron_config_cache,
	checksums: process.env.electron_use_remote_checksums
		? undefined
		: require('./checksums.json'),
	platform,
	arch,
})
	.then(extractFile)
	.catch((err) => {
		console.error(err.stack);
		process.exit(1);
	});
```

调用`downloadArtifact`会下载 electron 的完整包，包目录下会多出 path.txt 和 version。
