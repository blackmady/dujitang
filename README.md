<!--
 * @Author: None
 * @LastEditors: Please set LastEditors
 * @Date: 2019-11-14 12:27:50
 * @LastEditTime: 2019-11-27 19:08:29
 * @Description: 
 -->
# 毒鸡汤

[DEMO](https://blackmady.github.io/dujitang/)

### 依赖
> react,jszip,jszip-utils

### 原理及说明
此项目是参考别的项目制作而成,基于react hooks构建,区别在于此项目为纯静态项目,不依赖后端,毒鸡汤数据文件打包进行简单加密压缩后,前端访问时加载鸡汤数据文件然后进行解压和解密处理,所以切换毒鸡汤的速度比别人的快,不需要从后端数据库取数据

### 配置 build path && public path
`npm run eject` 