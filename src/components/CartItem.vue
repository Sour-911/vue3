<template>
  <div class="item-box">
    <div class="info flex">
      <img :src="product.imageUrl" />
      <div>
        <h5>{{ product.productTitle }}</h5>
        <h3>{{ product.price }}</h3>
      </div>
    </div>
    <div class="quantity">
      <span @click="reduce" class="link">-</span> {{ product.quantity }} <span @click="add" class="link">+</span>
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
      product.quantity++;
    };

    const reduce = () => {
      if (product.quantity>1) product.quantity--;
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
  .quantity {
  	padding-left: 10px;
  }
}
</style>