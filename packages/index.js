import ZhButton from "./button/index.js";

const install = (app) => {
  app.use(ZhButton);
};
const ZhUI = {
  install,
};
// 按需引入 import { ZhButton } from "ZhUI"
export {
  ZhButton
};
export default ZhUI;
