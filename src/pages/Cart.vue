<template>
  <div>
    <router-link to="/">首页</router-link>
    <h1>Cart {{value}} <span class="link" @click="value++">++</span></h1>
    <div>
      <CartItem v-for="(item,index) in list" :key="index" :data="item" @goDetails="goDetails" ref="childRef"></CartItem>
    </div>
    <div class="link" @click="submit">提交订单</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import CartItem from '../components/CartItem.vue'
import { ref, provide } from 'vue'
export default {
  name: 'ItemPage',
  components: { CartItem },
  setup() {
    const router = useRouter();
    const childRef = ref(null);
    const value = ref(0);
    provide('value', value);
    const list = ref([
      {
        id: 847529853148,
        title: '勃肯鞋懒人包头半拖鞋男女同款外穿软木凉拖鞋休闲复古博肯鞋',
        count: 1,
        price: 165.2,
        imageUrl: "https://cbu01.alicdn.com/img/ibank/O1CN01XWLDFK2K1gRKsKHyK_!!2218439589497-0-cib.jpg_.webp",
        productUrl: 'https://detail.1688.com/offer/847529853148.html'
      },
      {
        id: 808218287997,
        title: '2024新款春夏防晒衬衫外套女夏设计感小众后开叉薄款上衣外贸批发',
        count: 1,
        price: 20,
        imageUrl: "https://cbu01.alicdn.com/img/ibank/O1CN01eSVLSF1YAkgljUiJj_!!2217133913019-0-cib.jpg_.webp",
        productUrl: 'https://detail.1688.com/offer/808218287997.html'
      },
      {
        id: 782442367194,
        title: '新款蜡笔小新葫芦小新周边 超大号葫芦文玩潮玩手办家居装饰摆件',
        count: 1,
        price: 9.9,
        imageUrl: "https://cbu01.alicdn.com/img/ibank/O1CN016jHbkP1oZVw7wCerc_!!1604325239-0-cib.jpg_.webp",
        productUrl: 'https://detail.1688.com/offer/782442367194.html'
      },
      {
        id: 573102939222,
        title: '跨境新品配饰 曼陀罗瑜伽时光宝石项链 时尚玻璃吊坠颈链欧美饰品',
        count: 2,
        price: 1.8,
        imageUrl: "https://cbu01.alicdn.com/img/ibank/9094103880_1618818564.jpg_.webp",
        productUrl: 'https://detail.1688.com/offer/573102939222.html'
      },
      ])

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