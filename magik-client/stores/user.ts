import type { IUser } from "~/interface/user";
import { defineStore } from "pinia";
const useUserMsg = defineStore("userMsg", {
  state: (): IUser => ({
    userId: " 110",
    userName: "叶子",
    avatarUrl: "http://gips3.baidu.com/it/u=3557221034,1819987898&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960"
  })
});
const a = 12;
console.log(a);
export { useUserMsg };

//
