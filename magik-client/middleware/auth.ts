export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log(234222);
  return await navigateTo("/login");
});
