<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar
      title="产品主页"
      left-text="返回"
      left-arrow
      @click-left="$router.push('/')"
    />
    <!-- 折叠面板 -->
    <!-- 产品 -->
    <van-collapse v-model="activeName">
      <van-collapse-item title="主流型产品" name="1" size="large">
        <!-- 1 -->
        <van-card
          num="1"
          price="3000.00"
          desc="由公司主要制定的演出策划，适用于各种演出需求，具有较高的普适性和专业性"
          title="主流型产品"
        >
          <template #tags>
            <van-tag plain type="danger">主流型产品</van-tag>
            <van-tag plain type="danger">体育馆武术演出</van-tag>
          </template>
          <template #footer>
            <van-button size="mini" @click="showdetail(0)">详细参数</van-button>
            <van-button
              size="mini"
              @click="open(0)"
              type="primary"
              icon="plus"
              round
            ></van-button>
          </template>
        </van-card>
      </van-collapse-item>

      <van-collapse-item title="特殊期产品" name="2" size="large">
        <!-- 1 -->
        <van-card
          num="1"
          price="3000.00"
          desc="由公司主要制定的演出策划，适用于各种演出需求，具有较高的普适性和专业性"
          title="特殊期产品"
        >
          <template #tags>
            <van-tag plain type="danger">特殊期产品</van-tag>
            <van-tag plain type="danger">五一特色武术演出</van-tag>
            <van-tag plain type="danger">五四青年节定制演出</van-tag>
            <van-tag plain type="danger">建党100周年武术演出</van-tag>
          </template>
          <template #footer>
            <van-button size="mini" @click="showdetail(1)">详细参数</van-button>
            <van-button
              size="mini"
              @click="open(1)"
              type="primary"
              icon="plus"
              round
            ></van-button>
          </template>
        </van-card>
      </van-collapse-item>

      <van-collapse-item title="创新型产品" name="3" size="large">
        <!-- 1 -->
        <van-card
          num="1"
          price="3000.00"
          desc="由公司主要制定的演出策划，适用于各种演出需求，具有较高的普适性和专业性"
          title="创新型产品"
        >
          <template #tags>
            <van-tag plain type="danger">创新型产品</van-tag>
            <van-tag plain type="danger">武术套路演出教学</van-tag>
            <van-tag plain type="danger">武术对打表演</van-tag>
          </template>
          <template #footer>
            <van-button size="mini" @click="showdetail(2)">详细参数</van-button>
            <van-button
              size="mini"
              @click="open(2)"
              type="primary"
              icon="plus"
              round
            ></van-button>
          </template>
        </van-card>
      </van-collapse-item>
    </van-collapse>
    <!-- 商品属性 -->

    <!-- 详细信息遮罩层 -->
    <van-overlay :show="showmore" @click="showmore = false">
      <!-- 包裹层 -->
      <div class="wrapper">
        <!-- 白块显示层 -->
        <div class="block">
          <van-notice-bar left-icon="volume-o" :text="productdetails.name" />
          <hr />
          <van-notice-bar
            color="#1989fa"
            left-icon="info-o"
            wrapable
            :text="productdetails.moredetail"
          />
          <hr />
          <van-notice-bar
            color="#1989fa"
            left-icon="info-o"
            wrapable
            :text="productdetails.moredetail"
          />
        </div>
      </div>
    </van-overlay>

    <!-- 订单详细界面遮罩层 -->
    <van-overlay :show="ifbuy">
      <!-- 包裹层 -->
      <div class="wrapper">
        <!-- 白块显示层 -->
        <div class="dingdanblock">
          <!-- 商品订单 -->
          <van-form @submit="onSubmit">
            <!-- 活动名称 ：-->
            <van-field
              v-model="productform.workrname"
              name="活动名称"
              label="活动名称"
              placeholder="请输入活动名称"
              :rules="[{ required: true, message: '请填写活动名称' }]"
            />
            <!-- 活动区域 -->
            <van-field
              v-model="productform.fieldValue"
              is-link
              readonly
              name="活动区域"
              label="活动区域"
              @click="showfield = true"
              :rules="[{ required: true, message: '请选择活动区域' }]"
            />
            <van-popup v-model="showfield" round position="bottom">
              <van-cascader
                v-model="cascaderValue"
                title="请选择所在地区"
                :options="options"
                @close="showfield = false"
                @finish="onFinish"
              />
            </van-popup>
            <!-- 活动时间 -->
            <van-field
              v-model="productform.workdate"
              is-link
              readonly
              name="活动时间"
              label="活动时间"
              @click="showrili = true"
              :rules="[{ required: true, message: '请选择活动时间' }]"
              :value="date"
            />
            <van-calendar
              v-model="showrili"
              @confirm="onConfirm"
              position="top"
            />
            <!-- 活动性质 -->
            <van-field
              name="活动性质"
              label="活动性质"
              :rules="[{ required: true, message: '请选择活动性质' }]"
            >
              <template #input>
                <van-radio-group
                  v-model="productform.workGroup"
                  direction="horizontal"
                >
                  <van-radio shape="round" name="线上活动">线上活动</van-radio>
                  <van-radio shape="round" name="地推活动">地推活动</van-radio>
                  <van-radio shape="round" name="线下活动">线下活动</van-radio>
                </van-radio-group>
              </template>
            </van-field>
            <!-- 产品类型 -->
            <van-field
              name="产品类型"
              label="产品类型"
              :rules="[{ required: true, message: '请选择产品类型' }]"
            >
              <template #input>
                <van-radio
                  shape="round"
                  v-model="productform.workproduct"
                  :name="productform.workproduct"
                  >{{ productform.workproduct }}</van-radio
                >
              </template>
            </van-field>
            <!-- 联系方式 -->
            <van-field
              v-model="productform.phone"
              name="联系方式"
              label="联系方式"
              placeholder="请输入手机号码"
              :rules="[
                { required: true, message: '请填写手机号码！' },
                {
                  validator: (val) => {
                    let reg = /[^0-9]/;
                    if (val.search(reg) == -1) return true;
                    else return false;
                  },
                  message: '请输入正确手机号码！',
                  trigger: 'onBlur',
                },
              ]"
            />
            <!-- 按钮 -->
            <div style="margin: 16px">
              <van-button
                round
                block
                type="info"
                native-type="button"
                @click="openask"
                >提交</van-button
              >
            </div>
            <div style="margin: 16px">
              <van-button
                round
                block
                type="info"
                native-type="button"
                @click="ifbuy = false"
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
  name: "product",
  data() {
    return {
      ifbuy: false, //购买产品弹出框
      showmore: false, //产品详情弹出框
      productlist: [
        {
          name: "主流型产品",
          moredetail:
            "由公司主要制定的演出策划，内容充实、主题明确，并且在较长时间内适用于各种演出需求，具有较高的普适性和专业性",
        },
        {
          name: "特殊期产品",
          moredetail:
            "由公司针对不同时期与地点的特殊性制定演出策划与方案，例如：节假日、特殊纪念日、特殊场所等。这类产品内容相对较为简易，而重点放在主题升华，具有较强主题寓意。",
        },
        {
          name: "创新型产品",
          moredetail:
            "公司要在不断的发展过程中创新新的演出策划服务，根据客户需求，进行创新服务，这是保证品牌生命力的重要举措，在不断适应时代的发展过程中，找到可以与观众产生共鸣的主题，并且通过队列、技术等多方面融合，进行创新",
        },
      ],
      productdetails: "",
      activeName: [], //折叠面板
      productform: {
        //
        //收集的用户订单
        workrname: "", //活动名称
        fieldValue: "", //活动区域
        workdate: "", //活动日期
        workGroup: "", //活动形式
        workproduct: "", //产品资源
        phone: "", //联系方式
      },
      //级联选择地区器
      showfield: false,
      fieldValue: "",
      cascaderValue: "",
      options: [
        {
          text: "北京市",
          value: "北京市",
        },
        {
          text: "江苏省",
          value: "江苏省",
          children: [{ text: "南京市", value: "南京市" }],
        },
      ],
      //日历选择器
      showrili: false, //日历弹出框
      date: "",
    };
  },
  methods: {
    showdetail(val) {
      this.showmore = true;
      this.productdetails = this.productlist[val];
    },
    open(val) {
      //打开订单详情
      this.ifbuy = true;
      console.log(this.productlist[val].name);
      this.productform.workproduct = this.productlist[val].name;
    },
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.showfield = false;
      this.productform.fieldValue = selectedOptions
        .map((option) => option.text)
        .join("/");
    },
    formatDate(date) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      console.log(date);
      this.showrili = false;
      this.productform.workdate = this.formatDate(date);
    },
    openask() {
      this.$dialog
        .confirm({
          title: "提交",
          message: "是否确认提交？",
        })
        .then(() => {
          // on confirm
          this.onSubmit();
        })
        .catch(() => {
          // on cancel
          this.$toast.fail("已取消！");
        });
    },
    onSubmit() {
      console.log(this.productform);
    },
  },
};
</script>

<style>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 95%;
  height: 50%;
  background-color: #fff7cc;
}
.dingdanblock {
  width: 95%;
  height: 90%;
  background-color: #ffff;
  margin-bottom: 13%;
}
</style>