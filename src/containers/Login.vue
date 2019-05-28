<template>
    <div class="login">
        <div class="header">
            <i @click="backHandler">返回</i>
            <p>登陆页面</p>
        </div>
        <div class="login-input">
            <p>
                <input type="text" v-model="username" placeholder="用户名">
            </p>
            <p>
                <input type="text" v-model="password" placeholder="密码">
            </p>
            <button @click="loginHandler">登陆</button>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        ...mapActions(["setTokenAction"]),
        loginHandler() {
            // 网络请求
            // axios .then(res => { res.data.token })
            // 登陆存储
            localStorage.setItem("token", this.username);
            // 写入到vuex
            this.setTokenAction(this.username);
            this.$router.push("/ucenter");
        },
        backHandler() {
            window.history.back();
        }
    }
};
</script>

<style scoped lang="less">
.header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: red;
    i {
        float: left;
        margin-left: 5px;
        color: #fff;
    }
    p {
        color: #fff;
    }
}
.login-input {
    padding-left: 40px;
    p {
        
        padding-top: 20px;
        input {
            width: 80%;
            border: 1px solid #000;
        }
    }
    button{
        margin-top: 20px;
    }
}
</style>
