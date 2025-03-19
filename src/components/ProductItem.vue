<template>
  <div class="item-box">
    <span style="margin-right:30px">id: {{product.id}}</span>
    <span style="margin-right:30px">名字: {{product.name}}</span>
    <span style="margin-right:30px">年龄: {{product.age}}</span>
    <span style="margin-right:30px">参数: {{message}}</span>
    <span style="margin-right:30px" @click="go" class="link">跳转</span>
  </div>
</template>

<script>
  import { inject } from 'vue';
  export default {
    name: 'ListItemComponent',
    props: {
      product: {
        type: Object
      }
    },
    setup(props, {emit}) {
      const go = () => {
        emit('goDetails', props.product)
      };
      const message = inject('value')
      return {
        go,
        message,
      };
    },
  };
</script>
<style type="text/css" scoped="less">
  .item-box {
    margin-bottom: 10px;
  }
</style>