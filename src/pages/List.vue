<template>
  <div>
    <h1>List</h1>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <ProductItem :product="item" @goDetails="goDetails"></ProductItem>
      </li>
    </ul>
    <router-link to="/">首页</router-link>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import ProductItem from '../components/ProductItem.vue'
import { ref } from 'vue'
export default {
  name: 'ItemPage',
  components: { ProductItem },
  setup() {
    const router = useRouter();
    const list = ref([
      {id: 1, name: 'name1', age: 18},
      {id: 2, name: 'name2', age: 19},
      {id: 3, name: 'name3', age: 12},
      {id: 4, name: 'name4', age: 32},
      {id: 5, name: 'name5', age: 21},
      ])

    const go = () => {
      router.push('/'); // 跳转到首页
    };
    const goDetails = (res) => {
      router.push('/item/' + res.id)
    };
    return {
      list,
      go,
      goDetails,
    };
  },
};
</script>