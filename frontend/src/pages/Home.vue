<template>
  <div>
    
   <!-- 子路由 -->
    <router-view />
    <!-- 底部导航栏 -->
    <van-tabbar route v-model="active">
      <van-tabbar-item  to="/home/product" icon="cart-circle-o">产品</van-tabbar-item>
      <van-tabbar-item replace to="/home/message" icon="comment-o">消息</van-tabbar-item>
      <van-tabbar-item replace to="/home/order" icon="search">订单</van-tabbar-item>
      <van-tabbar-item replace to="/home/setting" icon="friends-o">个人资料</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
      return {
        active:0,
      }
  },

};
</script>

<style>
</style>