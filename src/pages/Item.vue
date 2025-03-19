<template>
  <div>
    <h1>Item {{userId}}</h1>
    <button @click="add">按钮</button>
    <div class="link" @click="retunPage">返回上一页</div>
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
    const retunPage = () => {
      router.go(-1)
    }

    return {
      go,
      add,
      userId,
      retunPage
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