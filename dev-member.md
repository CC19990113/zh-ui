# 分支功能

master（主分支，永远是可用的、稳定的、可直接发布的版本，不能直接在该分支上开发）

develop（开发主分支，代码永远是最新，所有新功能以这个分支来创建自己的开发分支，该分支只做只合并操作，不能直接在该分支上开发）

feat/xxx（功能开发分支，在develop上创建分支，以自己开发功能模块命名，功能测试正常后合并到release分支）

fix/xxx（bug修复分支，在develop上创建分支，以自己修复功能模块命名，功能测试正常后合并到release分支）

release（预发布分支，在合并好feat分支的develop分支上创建，主要是用来提测的分支，修改好bug并确定稳定之后合并到develop和master分支，然后发布master分支）

# 分支命名规范
开发人员-分支功能/开发功能模块

竹合
feat/button

cc
cc-feat/button

鸡哥
jige-feat/button

王杰
wj-feat/button