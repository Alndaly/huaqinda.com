## 拿picgo举例

picgo项目地址：https://github.com/Molunerfinn/PicGo

macOS系统安装完PicGo显示「文件已损坏」或者安装完打开没有反应

因为 PicGo 没有签名，所以会被 macOS 的安全检查所拦下。

安装后打开遇到「文件已损坏」的情况，请按如下方式操作：
信任开发者，会要求输入密码:

```shell
sudo spctl --master-disable
```

然后放行 PicGo :

```shell
xattr -cr /Applications/PicGo.app
```

然后就能正常打开。

如果提示以下内容

```
option -r not recognized

usage: xattr [-slz] file [file ...]
       xattr -p [-slz] attr_name file [file ...]
       xattr -w [-sz] attr_name attr_value file [file ...]
       xattr -d [-s] attr_name file [file ...]
       xattr -c [-s] file [file ...]

The first form lists the names of all xattrs on the given file(s).
The second form (-p) prints the value of the xattr attr_name.
The third form (-w) sets the value of the xattr attr_name to attr_value.
The fourth form (-d) deletes the xattr attr_name.
The fifth form (-c) deletes (clears) all xattrs.

options:
  -h: print this help
  -s: act on symbolic links themselves rather than their targets
  -l: print long format (attr_name: attr_value)
  -z: compress or decompress (if compressed) attribute value in zip format
```

执行命令

```shell
xattr -c /Applications/PicGo.app/*
```

如果上述命令依然没有效果，可以尝试下面的命令：

```shell
sudo xattr -d com.apple.quarantine /Applications/PicGo.app/
```

如果安装打开后没有反应，请按下方顺序排查：

macOS安装好之后，PicGo 是不会弹出主窗口的，因为 PicGo 在 macOS 系统里设计是个顶部栏应用。注意看你顶部栏的图标，如果有 PicGo 的图标，说明安装成功了，点击图标即可打开顶部栏窗口。参考上述第八点。

如果你是 M1 的系统，此前装过 PicGo 的 x64 版本，但是后来更新了 arm64 的版本发现打开后没反应，请重启电脑即可。