<template>
  <div>
    <router-link to="/">首页{{list.length}}</router-link>
    <h1>Cart {{value}} <span class="link" @click="value++">++</span></h1>
    <div class="list">
      <CartItem v-for="(item,index) in list" :key="index" :data="item" @goDetails="goDetails" ref="childRef"></CartItem>
    </div>
    <div class="link" @click="submit">提交订单</div>
  </div>
</template>

<script>
  import { useRouter } from 'vue-router';
  import CartItem from '../components/CartItem.vue'
  import { ref, reactive, provide } from 'vue';
  import { GET, JSONP } from "@/utils/http.js"
  export default {
    name: 'ItemPage',
    components: { CartItem },
    setup() {
      const router = useRouter();
      const childRef = ref(null);
      const value = ref(0);
      provide('value', value);
      let list = reactive([])

      const getData = async () => {
        const data = await GET('https://67db87611fd9e43fe474d9e6.mockapi.io/cartList', {id: 1});
        // 正确更新响应式数组

        list.length = 0; // 清空数组
        data.forEach(item => list.push(item)); // 添加新数据
      }
      getData()

      const go = () => {
        router.push('/'); // 跳转到首页
      };
      const goDetails = (res) => {
        router.push('/item/' + res.id)
      };
      const submit = () => {
        console.log('++++++', childRef.value[0].product, list.value)
      };
      return {
        list,
        go,
        goDetails,
        value,
        submit,
        childRef
      };
    },
  };
</script>

<style lang="scss">
  .list {
    max-height: 700px;
    overflow-y: scroll;
  }
</style>