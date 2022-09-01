#!/usr/bin/env node

const lib = require("./lib");

// 注册一个命令 init
const argv = require("process").argv;

const command = argv[2];
if (lib?.[command]) {
  lib[command]();
} else {
  console.log("请输入命令");
}
