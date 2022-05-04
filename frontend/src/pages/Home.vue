<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar
      title="个人中心主页"
      left-text="返回"
      left-arrow
      @click-left="$router.push('/')"
    />
    <!-- 底部导航栏 -->
    <router-view />

    <van-tabbar route>
      <van-tabbar-item  to="/home/product" icon="cart-circle-o">产品</van-tabbar-item>
      <van-tabbar-item replace to="/" icon="comment-o">消息</van-tabbar-item>
      <van-tabbar-item replace to="/" icon="search">订单</van-tabbar-item>

      <van-tabbar-item replace to="/" icon="friends-o">个人资料</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>