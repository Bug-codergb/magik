<template>
  <NuxtLayout>
    <div>
      <input v-model="formData.account" />
    </div>
    <div>
      <input v-model="formData.password" />
    </div>
    <div class="control-btn">
      <button @click="handleLogin">登录</button>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { type R } from "~/interface/R";
import { type IUser } from "~/interface/user";
definePageMeta({
  layout: "login"
});
const formData = reactive({
  account: "",
  password: ""
});
const handleLogin = async (): Promise<void> => {
  const res = await $fetch<R<IUser>>("/api/login", {
    method: "POST",
    body: {
      userName: formData.account,
      password: formData.password
    }
  });
  console.log(res);
  if (res.code === 200) {
    console.log(1);
    navigateTo("/home");
  }
};
</script>
