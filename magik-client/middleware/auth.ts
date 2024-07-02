export default defineNuxtRouteMiddleware(async (to, from) => {
  const isClient = import.meta.client;
  const isServer = import.meta.server;

  if (isServer) {
    const cookie = useCookie("authorization");

    if (!cookie.value) {
      return await navigateTo("/login");
    }
  }
});
