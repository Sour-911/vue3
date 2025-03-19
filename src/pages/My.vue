<template>
  <div>
    {{user.name}}
    <router-link to="/">首页</router-link>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
  name: 'MyPage',
  setup() {
    const store = useStore();
    let user = ref({});
    user = store.getters.user || {}
    return {
      user,
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