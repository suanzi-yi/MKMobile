<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar
      title="登录"
      left-text="返回"
      right-text="注册"
      left-arrow
      @click-left="$router.go(-1)"
      @click-right="$router.push('/register')"
    />
    <!-- 登录表单 -->
    <van-form @submit="onSubmit" ref="allform">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        left-icon="smile-o"
        colon
        :rules="[{ required: true, message: '请填写用户名' },
        {
            validator: (val) => {
              if (val.length >= 3 && val.length <= 10) return true;
              else return false;
            },
            message: '用户名必须在3-10位之间',
            trigger: 'onBlur',
          },
          {
            validator: (val) => {
                let reg = /[^a-zA-Z0-9]/
                if(val.search(reg) == -1) return true;
                else return false;
            },
            message: '用户名必须是由数字与英文构成',
            trigger: 'onBlur',
          },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
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
                let reg = /[^a-zA-Z0-9]/
                if(val.search(reg) == -1) return true;
                else return false;
            },
            message: '密码必须是由数字和英文构成',
            trigger: 'onBlur',
          },
        ]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="button" @click="reset"
          >重置</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      const user ={
          username:this.username,
          password:this.password
      }
      this.$http.post('user/login',user).then((result) => {
        if(result.data.success) {
          window.localStorage.setItem("token",result.data.token)
          window.localStorage.setItem("username",this.username)
          this.$router.push('/home')
          this.$toast.success("登录成功")
        }
        else {
          this.$toast.fail(result.data.msg)
        }
      }).catch((err) => {
        
      });
    },
    reset() {
      this.$refs["allform"].resetValidation();
      this.username = "";
      this.password = "";
    },
  },
};
</script>

<style>
</style>