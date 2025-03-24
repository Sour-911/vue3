<template>
  <div>
    <p>count: {{count}}</p>
    <button @click="addCount()">++++</button>
    <h1>Home</h1>
    <router-link to="/list">list</router-link> | 
    <router-link to="/cart">cart</router-link> | 
    <router-link to="/login">login</router-link> | 
    <router-link to="/my">my</router-link>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { ref, defineComponent } from 'vue'

export default defineComponent ({
  name: 'HomePage',
  setup() {
    const count = ref(0);
    const list = ref([1,2,3,4,56])
    const store = useStore();
    const isLoggedIn = computed(() => store.getters.isLoggedIn); // 从 Vuex 获取登录状态
    const addCount = () => {
      count.value++
    }

    return {
      isLoggedIn,
      count,
      addCount,
    };
  },
});
</script>