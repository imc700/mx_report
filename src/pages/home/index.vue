<template>
    <el-row>

        <div class="home_input">
            <el-input placeholder="请输入百度文库文档链接 example: https://wenku.baidu.com/view/da511019227916888486d78c.html"
                      v-model="search_text" class="input-box">
                <el-button slot="append" icon="el-icon-search" @click="down_doc"></el-button>
            </el-input>
        </div>

    </el-row>


</template>

<script>

    import axios from "axios";

    export default {
        data() {
            return {
                search_text: ''
            }
        },
        methods: {
            down_doc: function () {
                if (this.search_text.indexOf('wenku') != -1) {
                    axios
                        .get("/web/wenku/get_doc_url?doc=" + this.search_text)
                        .then((response) => {
                            if ((response.data.content).indexOf("http") != -1) {
                                window.location.href = response.data.content;
                            } else {
                                this.$message.error(response.data.content);
                            }
                        })
                        .catch((error) => {
                            this.$message.error('Server wrong! 请联系作者.');
                            console.log(error);
                        })
                        .finally(() => (console.log()));
                }else {
                    this.$message.error('Need the right url, Please!');
                }
            }

            // longChange: function (val){
            //   this.how_long = val;
            //   this.get_datas();
            // },
            // get_datas: function (){
            //   axios
            //       .get("/web/metric/get_data/android_error/" + this.how_long)
            //       .then((response) => {
            //         this.android_error = response.data;
            //       })
            //       .catch((error) => {
            //         console.log(error);
            //         this.errored = true;
            //       })
            //       .finally(() => (this.loading = false));
            //   axios
            //       .get("/web/metric/get_data/ios_error/" + this.how_long)
            //       .then((response) => {
            //         this.ios_error = response.data;
            //       })
            //       .catch((error) => {
            //         console.log(error);
            //         this.errored = true;
            //       })
            //       .finally(() => (this.loading = false));
            //   axios
            //       .get("/web/metric/get_data/server_error/" + this.how_long)
            //       .then((response) => {
            //         this.server_error = response.data;
            //       })
            //       .catch((error) => {
            //         console.log(error);
            //         this.errored = true;
            //       })
            //       .finally(() => (this.loading = false));
            //   axios
            //       .get("/web/metric/get_data/mac_error/" + this.how_long)
            //       .then((response) => {
            //         this.mac_error = response.data;
            //       })
            //       .catch((error) => {
            //         console.log(error);
            //         this.errored = true;
            //       })
            //       .finally(() => (this.loading = false));
            //   axios
            //       .get("/web/metric/get_data/windows_error/" + this.how_long)
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
        width: 600px;

    }

</style>

