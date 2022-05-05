<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="个人中心" />
    <van-cell-group>
      <van-cell title="修改密码" is-link @click="openchange" />
      <van-cell title="退出登录" is-link @click="logout" />
    </van-cell-group>

    <!-- 修改密码弹出框 -->
    <van-overlay :show="show">
      <div class="wrapper1">
        <div class="block2">
          <!-- 修改密码 -->
          <van-form ref="allform">
            <!-- 密码 -->
            <van-field
              v-model="password"
              type="password"
              name="密码"
              label="新密码"
              placeholder="密码"
              left-icon="smile-o"
              colon
              :rules="[
                { required: true, message: '请填写密码' },
                {
                  validator: (val) => {
                    if (val.length >= 3 && val.length <= 10) return true;
                    else return false;
                  },
                  message: '密码必须在3-10位之间',
                  trigger: 'onBlur',
                },
                {
                  validator: (val) => {
                    let reg = /[^a-zA-Z0-9]/;
                    if (val.search(reg) == -1) return true;
                    else return false;
                  },
                  message: '密码必须是由数字和英文构成',
                  trigger: 'onBlur',
                },
              ]"
            />
            <!-- 确认密码 -->
            <van-field
              v-model="password2"
              type="password"
              name="密码"
              label="确认密码"
              placeholder="密码"
              left-icon="smile-o"
              colon
              :rules="[
                { required: true, message: '请再次填写密码！' },
                {
                  validator: (val) => {
                    if (val != password) return false;
                    else return true;
                  },
                  message: '两次密码必须一致！',
                  trigger: 'onBlur',
                },
                {
                  validator: (val) => {
                    let reg = /[^a-zA-Z0-9]/;
                    if (val.search(reg) == -1) return true;
                    else return false;
                  },
                  message: '密码必须是由数字和英文构成',
                  trigger: 'onBlur',
                },
              ]"
            />
            <div style="margin: 16px">
              <van-button
                round
                block
                type="info"
                native-type="button"
                @click="changepwd"
                >修改密码</van-button
              >
            </div>
            <div style="margin: 16px">
              <van-button
                round
                block
                type="info"
                native-type="button"
                @click="show = false"
                >关闭</van-button
              >
            </div>
          </van-form>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  name: "setting",
  data() {
    return {
      show: false,
      password: "",
      password2: "",
    };
  },
  methods: {
    openchange() {
      this.show = true;
    },
    changepwd() {
      this.$dialog
        .confirm({
          title: "修改密码",
          message: "确认修改密码？",
        })
        .then(() => {
          // on confirm
          if (this.password != "" && this.password2 != "") {
            const user = {
              username: window.localStorage.getItem("username"),
              password: this.password,
            };
            this.$http
              .post("/user/updatepassword", user)
              .then((result) => {
                if (result.data.success) {
                  this.show = false;
                  this.password = "";
                  this.password2 = "";
                  this.$toast.success("修改成功");
                }
              })
              .catch((err) => {});
          }else{
            this.$toast.fail("请输入正确格式")
          }
        })
        .catch(() => {
          // on cancel
          this.$toast.fail("已取消修改");
        });
    },
    logout() {
      this.$router.push("/");
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("username");
    },
  },
};
</script>

<style>
.wrapper1 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.block2 {
  width: 90%;
  height: 70%;
  background-color: #ffff;
}
</style>