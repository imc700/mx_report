<template>
  <el-row>

    <div class="home_input">
      <el-input placeholder="请输入激活码 example: 19dfb39a-90b8-428c-9723-59b9970db40d"
                v-model="search_code" class="input-box2">
        <el-button slot="append" icon="el-icon-search" @click="query_code"></el-button>

      </el-input>
    </div>
    <div class="home_input">

      <el-input placeholder="请输入百度文库文档链接 example: https://wenku.baidu.com/view/da511019227916888486d78c.html"
                v-model="search_text" class="input-box">
        <el-button slot="append" icon="el-icon-download" @click="down_doc"></el-button>
      </el-input>

    </div>
      <a target="_blank" class="input-box3" href="https://item.taobao.com/item.htm?spm=a2oq0.12575281.0.0.50111debOpdyFQ&ft=t&id=658150941309">点击秒杀一毛钱激活码</a>
    <p class="input-box4">Ps:2021年10月20日   防止个别人资源滥用,增加激活码功能,也不贵,1毛钱,谢谢支持.</p>


  </el-row>


</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      search_text: '',
      search_code: ''
    }
  },
  methods: {
    down_doc: function () {
      if (this.search_code.indexOf('-') != -1) {
        if (this.search_text.indexOf('wenku') != -1) {
          axios
              .get("/bd/wenku/get_doc_url/" + this.search_code + "?doc=" + this.search_text)
              .then((response) => {
                if ((response.data.content).indexOf("http") != -1) {
                  window.location.href = response.data.content;
                } else {
                    let content = response.data.content;
                    if (content.indexOf('200012') != -1) {
                        this.$message.error("暂不支持付费文档!");
                    }else {
                        this.$message.error(content);
                    }
                }
              })
              .catch((error) => {
                this.$message.error('Server wrong! 请联系作者.');
                console.log(error);
              })
              .finally(() => (console.log()));
        } else {
          this.$message.error('Need the right url, Please!');
        }
      }else{
        this.$message.error('Need the right code first, Please!');
      }

    },
    query_code: function () {
      if (this.search_code.indexOf('-') != -1) {
        axios
            .get("/bd/wenku/get_code_count/" + this.search_code)
            .then((response) => {
              if ((response.data.content).indexOf("not") != -1) {
                this.$message.error(response.data.content);
              } else {
                this.$message.success("当前code剩余可用次数为: " + response.data.content);
              }
            })
            .catch((error) => {
              this.$message.error('Server wrong! 请联系作者.');
              console.log(error);
            })
            .finally(() => (console.log()));
      } else {
        this.$message.error('Need the right code, Please!');
      }
    }

    // longChange: function (val){
    //   this.how_long = val;
    //   this.get_datas();
    // },
    // get_datas: function (){
    //   axios
    //       .get("/bd/metric/get_data/android_error/" + this.how_long)
    //       .then((response) => {
    //         this.android_error = response.data;
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //         this.errored = true;
    //       })
    //       .finally(() => (this.loading = false));
    //   axios
    //       .get("/bd/metric/get_data/ios_error/" + this.how_long)
    //       .then((response) => {
    //         this.ios_error = response.data;
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //         this.errored = true;
    //       })
    //       .finally(() => (this.loading = false));
    //   axios
    //       .get("/bd/metric/get_data/server_error/" + this.how_long)
    //       .then((response) => {
    //         this.server_error = response.data;
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //         this.errored = true;
    //       })
    //       .finally(() => (this.loading = false));
    //   axios
    //       .get("/bd/metric/get_data/mac_error/" + this.how_long)
    //       .then((response) => {
    //         this.mac_error = response.data;
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //         this.errored = true;
    //       })
    //       .finally(() => (this.loading = false));
    //   axios
    //       .get("/bd/metric/get_data/windows_error/" + this.how_long)
    //       .then((response) => {
    //         this.windows_error = response.data;
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //         this.errored = true;
    //       })
    //       .finally(() => (this.loading = false));
    // }
  },
  mounted() {
  },
};
</script>
<style lang="less" scoped>
.home_input {
  line-height: 60px;
}

.input-box {
  position: fixed;
  left: 50%;
  top: 30%;
  transform: translate(-50%, 50%);
  width: 750px;
}

.input-box2 {
  position: fixed;
  left: 50%;
  top: 22%;
  transform: translate(-50%, 50%);
  width: 500px;
}

.input-box3 {
  position: fixed;
  left: 55%;
  top: 40%;
  transform: translate(-50%, 50%);
  width: 400px;
  color: red;
}

.input-box4 {
  position: fixed;
  left: 52%;
  top: 50%;
  transform: translate(-50%, 50%);
  width: 600px;
}

</style>

