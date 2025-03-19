<template>
  <div>
    <Login/>
    <router-view style="position: fixed;z-index: 9;background: rgba(0, 0, 0, 0.5);color: white;padding: 10px"/>
    <iframe src="https://detail.1688.com/offer/847529853148.html" style="width: 100%;height: 1000px;border: none;"></iframe>
  </div>
</template>

<script>
import Login from './components/Login.vue'
export default {
  name: 'App',
  components: { Login },
};
</script>

<style>
.app {
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #42b983;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #3aa876;
}
</style>