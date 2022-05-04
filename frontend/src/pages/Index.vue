<template>
  <div>
    <!-- 头部区域 -->
    <van-nav-bar
      title="头部"
      left-text="更多"
      right-text="登录/注册"
      @click-left="show = !show"
      @click-right="tologin"
    ></van-nav-bar>
    <!-- 轮播图区域 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in pictures" :key="item.id">
        <img :src="item.name" alt="" class="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 新闻头条 -->
    <div>
      <!-- 头条导航栏 -->
      <div>
        <span><van-icon name="newspaper-o" /></span>
        <span
          style="
            display: inline-block;
            width: 20%;
            font-weight: bold;
            font-size: 15px;
          "
          >精彩文章</span
        >
        <span
          @click="toallnews"
          style="float: right; margin-right: 6px; font-size: 8px"
          >更多</span
        >
      </div>
      <!-- 头条内容 -->
      <div>
        <hr />
        <hr />
      </div>
    </div>

    <!-- 精彩视频 -->
    <div>
      <!-- 头条导航栏 -->
      <div>
        <span><van-icon name="newspaper-o" /></span>
        <span
          style="
            display: inline-block;
            width: 20%;
            font-weight: bold;
            font-size: 15px;
          "
          >精彩视频</span
        >
        <span
          @click="toallvideo"
          style="float: right; margin-right: 6px; font-size: 8px"
          >更多</span
        >
      </div>
      <div class="vc">
        <video src="../assets/video/001.mp4" controls></video>
      </div>
      <hr />
      <hr />
    </div>
    <!-- 产品中心 -->
    <div>
      <!-- 头条导航栏 -->
      <div>
        <span><van-icon name="newspaper-o" /></span>
        <span
          style="
            display: inline-block;
            width: 20%;
            font-weight: bold;
            font-size: 15px;
          "
          >产品中心</span
        >
        <span
          @click="toallvideo"
          style="float: right; margin-right: 6px; font-size: 8px"
          >更多</span
        >
      </div>
      <!-- 主体 -->
      <div>
        <!-- 1 -->
        <van-card
          num="1"
          price="500.00"
          desc="由公司主要制定的演出策划，适用于各种演出需求，具有较高的普适性和专业性"
          title="主流型产品"
        >
          <template #tags>
            <van-tag plain type="danger">主流型产品</van-tag>
            <van-tag plain type="danger">体育馆武术演出</van-tag>
          </template>
          <template #footer>
            <van-button size="mini" @click="tologin">了解详细</van-button>
          </template>
        </van-card>
        <!-- 2 -->
        <van-card
          num="1"
          price="500.00"
          desc="节假日、特殊纪念日、特殊场所等。这类产品内容相对较为简易，而重点放在主题升华，具有较强主题寓意。"
          title="特殊期产品"
        >
          <template #tags>
            <van-tag plain type="danger">特殊期产品</van-tag>
            <van-tag plain type="danger">五一特色武术演出</van-tag>
            <van-tag plain type="danger">五四青年节定制演出</van-tag>
            <van-tag plain type="danger">建党100周年武术演出</van-tag>
          </template>
          <template #footer>
            <van-button size="mini"  @click="tologin">了解详情</van-button>
          </template>
        </van-card>
        <!-- 3 -->
        <van-card
          num="1"
          price="500.00"
          desc="创新型产品服务"
          title="创新型产品"
        >
          <template #tags>
            <van-tag plain type="danger">创新型产品</van-tag>
            <van-tag plain type="danger">武术套路演出教学</van-tag>
            <van-tag plain type="danger">武术对打表演</van-tag>
          </template>
          <template #footer>
            <van-button size="mini"  @click="tologin">了解详情</van-button>
          </template>
        </van-card>
      </div>
      <hr />
      <hr />
    </div>
    <!-- 武术基地 -->
    <div>
      <!-- 导航栏 -->
      <div>
        <span><van-icon name="newspaper-o" /></span>
        <span
          style="
            display: inline-block;
            width: 20%;
            font-weight: bold;
            font-size: 15px;
          "
          >武术基地</span
        >
        <span
          @click="toallvideo"
          style="float: right; margin-right: 6px; font-size: 8px"
          >更多</span
        >
      </div>
      <!-- 主体 -->
      <div>
        <div>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;MK影武联盟以传播优秀武术文化，以“高水平”“专业性”“故事性”为宗旨，对接需求商与专业化武者双边市场，即“有演出或影视需求的商家”以及“优秀武术运动员”将特色武术文化从视觉角度再次走入大众。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;MK影武联盟武术基地
            初期主要围绕北京、山西开展业务，并且在各大高校武术专业组建“MK影武联盟演出团队”。<br />
            &nbsp;&nbsp;&nbsp;&nbsp;中期业务范围
            在MK影武联盟发展逐渐趋于成熟时，业务范围将逐渐扩大北京、山西周边城市。<br />
            &nbsp;&nbsp;&nbsp;&nbsp;后期业务范围
            MK影武联盟发展后期，将逐渐扩展到全国范围，并且在各地成立分公司管理业务。
          </p>
        </div>
        <div
          style="
             {
              margin-top: 2px;
              text-align: center;
            }
          "
        >
          <img
            src="../assets/pictures/fanwei.png"
            alt="业务范围"
            style="
               {
                width: auto;
                height: auto;
                max-width: 90%;
                max-height: 90%;
              }
            "
          />
        </div>
      </div>
      <hr />
      <hr />
    </div>
    <!-- 联系我们 -->
    <div>
      <!-- 导航栏 -->
      <div>
        <span><van-icon name="newspaper-o" /></span>
        <span
          style="
            display: inline-block;
            width: 20%;
            font-weight: bold;
            font-size: 15px;
          "
          >联系我们</span
        >
        <span
          @click="toallvideo"
          style="float: right; margin-right: 6px; font-size: 8px"
          >更多</span
        >
      </div>
      <!-- 主体 -->
      <div
        style="
           {
            margin-top: 2px;
            text-align: center;
          }
        "
      >
        <img
          src="../assets/pictures/lianxi.jpg"
          alt="联系我们"
          style="
             {
              width: auto;
              height: auto;
              max-width: 90%;
              max-height: 90%;
            }
          "
        />
      </div>
      <div
        style="
           {
            text-align: center;
          }
        "
      >
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;业务质询一：111-111111 业务质询二：222-222222
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;咨询电话：0111-1111111 企业传真：0222-2222222
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;地址：海淀区信息路48号 邮编：100084 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;网址：http://yingwulianmeng.com <br />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      article: [], // article
      pictures: [
        { name: require("../assets/pictures/Head001.jpg"), id: "1" },
        { name: require("../assets/pictures/Head002.jpg"), id: "2" },
        { name: require("../assets/pictures/Head003.jpg"), id: "3" },
        { name: require("../assets/pictures/Head004.jpg"), id: "4" },
      ],
    };
  },
  methods: {
      tologin(){
        this.$router.push('/login');
      }
  },
  components: {},
};
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 0px;
  text-align: center;
  background-color: #39a9ed;
}
video {
  width: 90%;
}
.vc {
  margin-top: 2px;
  text-align: center;
}
p {
  font-size: 5px;
  margin-left: 5px;
  margin-right: 5px;
}
.image {
  object-fit: fill;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 80%;
  /* width: 100%;
  height: 100%; */
  object-fit: cover;
  object-position: 50% 20%;
}

</style>
