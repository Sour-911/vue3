<template>
  <div>
    {{isLoggedIn?'已登录':'未登录'}}
    <button @click="logout" v-if="isLoggedIn">Logout</button>
    <button @click="login" v-else>Login</button>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

export default {
  name: 'LoginPage',
  setup() {
    const store = useStore();
    const router = useRouter();
    const isLoggedIn = computed(() => store.getters.isLoggedIn); // 从 Vuex 获取登录状态

    const login = () => {
      // 模拟登录成功
      const user = { name: 'John Doe' }; // 用户信息
      store.dispatch('login', user); // 更新 Vuex 中的登录状态
    };
    const logout = () => {
      store.dispatch('logout'); // 更新 Vuex 中的登录状态
    };

    const goBack = () => {
      router.go(-1)
    }

    return {
      login,
      logout,
      isLoggedIn,
      goBack,
    };
  },
  beforeUnmount (e) {
    console.log('+++beforeUnmount', e)
  },
  unmounted (e) {
    console.log('+++unmounted', e)
  }
};
</script>