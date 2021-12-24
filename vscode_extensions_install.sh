#!/bin/bash
 
# Visual Studio Code :: Package list
pkglist=(
# ここの中身に拡張機能名を一行ずつ書いていく
ms-python.python
ms-vscode-remote.remote-containers
ms-vscode-remote.remote-wsl
dbaeumer.vscode-eslint
esbenp.prettier-vscode
)
 
for var in ${pkglist[@]}
do
    code --install-extension $var
done