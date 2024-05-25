import type { INav } from "~/interface/nav";
import { defineStore } from 'pinia'
interface ICurrentRoute{
  nav:INav
}
export const useCurrentRoute = defineStore("currentRoute", {
  state: ():ICurrentRoute => ({
    nav:{}
  }),
  actions: {
    changeCurrentRoute(arg:INav) {
      this.nav = arg;
    }
  }
})