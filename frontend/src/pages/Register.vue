<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar
      title="注册"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <!--注册表单 -->
    <van-form @submit="onSubmit" ref="allform">
        <!-- 用户名 -->
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
      <!-- 密码 -->
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
              if (val!=password) return false;
              else return true;
            },
            message: '两次密码必须一致！',
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
          >注册</van-button
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
      password2:""
    };
  },
  methods: {
    onSubmit() {
      console.log("提交了")
      const user ={
          username:this.username,
          password:this.password
      }
      console.log(user);
    },
    reset() {
      this.$refs["allform"].resetValidation();
      this.username = "";
      this.password = "";
      this.password2=''
    },
  },
};
</script>

<style>
</style>