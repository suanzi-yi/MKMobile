<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="订单主页" />
    <!-- 消息 -->
    <van-notice-bar left-icon="volume-o" scrollable text="我的订单" />
    <!-- 空状态 -->
    <van-empty description="无订单"  v-if="showempty"/>
    <!-- 订单 -->
    <van-card
      v-for="item in myorder"
      :key="item.id"
      num="1"
      price="3000.00"
      :desc="'地点:' + item.fieldValue + '-' + '日期:' + item.workdate"
      :title="item.workrname"
    >
      <template #tags>
        <van-tag plain type="danger">{{ item.workGroup }}</van-tag>
        <van-tag plain type="danger">{{ item.workproduct }}</van-tag>
      </template>
      <template #footer>
        <van-button size="mini" @click="deleteorder(item.id)">删除订单</van-button>
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  name: "order",
  data() {
    return {
      myorder: [],
      showempty: false,
    };
  },
  mounted() {
    this.$http
      .get(
        "/orders/getallorder?username=" +
          window.localStorage.getItem("username")
      )
      .then((result) => {
        this.myorder = result.data.data;
        if (this.myorder.length==0) {
          this.showempty = true;
        }else {this.showempty = false}
        console.log(this.myorder);
      })
      .catch((err) => {});
  },
  methods: {
    deleteorder(val) {
      this.$dialog
        .confirm({
          title: "删除订单",
          message: "是否删除当前订单",
        })
        .then(() => {
          // on confirm
          this.$http
            .get("orders/deleteorder?id=" + val)
            .then((result) => {
              if (result.data.success) {
                this.$toast.success("删除成功")
                this.flush()
              }
            })
            .catch((err) => {});
        })
        .catch(() => {
          // on cancel
          this.$toast.fail("已取消删除")
        });
    },
    flush() {
      this.$http
      .get(
        "/orders/getallorder?username=" +
          window.localStorage.getItem("username")
      )
      .then((result) => {
        this.myorder = result.data.data;
         if (this.myorder.length==0) {
          this.showempty = true;
        }else {this.showempty = false}
        console.log(this.myorder);
      })
      .catch((err) => {});
    },
  },
};
</script>

<style>
</style>