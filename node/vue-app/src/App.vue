<!-- vue object -->
<script setup>
import HelloVue from '@/components/HelloVue.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Todo from '@/views/Todo.vue'
import Nav from '@/components/Nav.vue'

</script>

<!-- html -->
<template>
  <Nav></Nav>
  <div class="row">
      <!-- <div class="col-2"></div> -->
      <div class="col-4"><HelloVue></HelloVue></div>
      <div class="col-6">
        <!-- http://localhose:5174/ -->
        <router-link to="/">Home</router-link>  |
        <router-link to="/About">About</router-link>  |
        <router-link to="/Todo">Todo</router-link>  |
        <hr/>
        
        <!-- 根據路由載入的component會顯示在這裡 -->
        <router-view></router-view>
      </div>
    </div>
</template>

<!-- css -->
<style scoped>

</style>
