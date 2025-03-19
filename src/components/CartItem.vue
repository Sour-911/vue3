<template>
  <div class="item-box">
    <img :src="product.imageUrl" />
    <div class="info">
      <h5>{{ product.title }}</h5>
      <h3>{{ product.price }}</h3>
    </div>
    <div class="count">
      <span @click="reduce" class="link">-</span> {{ product.count }} <span @click="add" class="link">+</span>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'ListItemComponent',
  props: {
    data: {
      type: Object,
    },
  },
  setup(props, {emit}) {
  	const product = props.data
    const go = () => {
      // emit('goDetails', props.product);
    };

    const message = inject('value');

    const add = () => {
      product.count++;
    };

    const reduce = () => {
      product.count--;
    };

    return {
      add,
      reduce,
      product,
    };
  },
};
</script>

<style lang="scss">
.item-box {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100px;
    height: 100px;
    margin-right: 5px;
  }
  .count {
  	padding-left: 10px;
  }
}
</style>