<template>
  <div>
    <h1>{{count}}</h1>
    <div class="link" @click="go">按钮</div>
    {{user.name}}
    <router-link to="/">首页</router-link>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref, readonly } from 'vue';
import { GET } from "@/utils/http.js"
export default {
  name: 'MyPage',
  setup() {
    const store = useStore();
    let user = ref({});
    user = store.getters.user || {};
    GET('/1688api/offer/817850518537.html').then(res=>{
      // console.log('++++++++++++请求结果', res)
    });
    const count = readonly(ref(0))
    const go = () => {
      count.value++;
    };
    return {
      user,
      count,
      go,
    };
  },
  // beforeUnmount (e) {
  //   console.log('+++beforeUnmount', e)
  // },
  // unmounted (e) {
  //   console.log('+++unmounted', e)
  // }
};
</script>