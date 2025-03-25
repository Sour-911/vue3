<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <input @input="inputE()"/>
  </div>
</template>

<script>
import { ref } from 'vue';
import sha256 from 'crypto-js/sha256';
import encHex from 'crypto-js/enc-hex';
import { POST } from '@/utils/http.js';

export default {
  name:'LoginPage',
  setup() {
    const username = ref('');
    const password = ref('');
    const errorMessage = ref('');

    // SHA-256 哈希函数
    const hashPassword = (password) => {
      let hashedPassword = sha256(password);
      console.log('++++hashedPassword', hashedPassword);
      console.log('++++encHex', encHex);
      hashedPassword = hashedPassword.toString(encHex);
      return hashedPassword;
    };

    // 登录逻辑
    const handleLogin = () => {
      try {
        const hashedPassword = hashPassword(password.value);
        console.log('+++++++++', hashedPassword)
        POST('api/url', {passwordId: hashedPassword}, {
          'Content-Type': 'application/x-www-form-urlencoded',
        })
        // const response = await login(username.value, hashedPassword);
        // console.log('Login successful:', response);
        // 跳转到主页或其他逻辑
      } catch (error) {
        errorMessage.value = 'Login failed. Please check your credentials.';
      }
    };
    const inputE = () => {
      let timeoutId = null;
      return function () {
        console.log(1)
        clearTimeout(timeoutId);
        timeoutId = setTimeout(()=>{
          console.log('防抖')
        }, 1000)
      }
    };

    return {
      username,
      password,
      errorMessage,
      handleLogin,
      inputE
    };
  },
};
</script>

<style scoped>
.login-container {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>