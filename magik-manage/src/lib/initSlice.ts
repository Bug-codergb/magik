"use client"
import {EnhancedStore} from "@reduxjs/toolkit";
import cache from "@/app/utils/cache";
import {changeUserMsg} from "@/lib/features/user/userSlice";
import {IUser} from "@/app/interface/IUser";

function initUserSlice(store:EnhancedStore){
  const user = cache.getCache("user") as IUser;
  user && store.dispatch(changeUserMsg(user));
}
function init(store:EnhancedStore){
  initUserSlice(store);
}
export { init};
