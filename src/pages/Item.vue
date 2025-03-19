<template>
  <div>
    <h1>Item {{userId}}</h1>
    <button @click="add" class="link">按钮</button>
    <router-link to="/">首页</router-link>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
export default {
  name: 'ItemPage',
  setup() {
    const router = useRouter();

    const userId = ref(useRoute().params.id);

    const go = () => {
      router.push('/'); // 跳转到首页
    };
    const add = () => {
      userId.value++
    };

    return {
      go,
      add,
      userId
    };
  },
  beforeCreate () {
    console.log('+++beforeCreate')
  },
  created () {
    console.log('+++created')
  },
  beforeMount () {
    console.log('+++beforeMount')
  },
  mounted () {
    console.log('+++mounted')
  },
  beforeUpdate () {
    console.log('+++beforeUpdate')
  },
  updated () {
    console.log('+++updated')
  },
};
</script>