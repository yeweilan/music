<template>
    <div class="search-view">
        <div class="search-landing">
            <ul class="hot clearfix">
                <li v-for="(item,index) in searchLand" :key="index">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "SearchHotView",
    data() {
        return {
            searchLand: [
                "珍珠奶茶",
                "朴树",
                "友情岁月",
                "豆你玩",
                "新白娘子传奇",
                "王嘉尔",
                "超赞现场",
                "生僻字",
                "薛之谦"
            ]
        };
    }
};
</script>
<style scoped lang="less">
.search-view {
    border-top: 5px solid #f1f1f1;
    .search-landing {
        display: block;
        width: 100%;
        font-size: 16px;
        background: #fff;
        .hot {
            background-color: #fff;
            padding-right: 12px;
            margin-bottom: 10px;
            li {
                border: 1px solid #f3bcc2;
                background-color: #f5f1f0;
                overflow: hidden;
                color: #333;
                font-size: 14px;
                padding: 0 4px;
                height: 36px;
                line-height: 36px;
                float: left;
                margin: 12px 0 0 12px;
            }
            li:nth-child(2n) {
                border: 1px solid #f9e3b3;
                background-color: #fff6e7;
            }
        }
    }
}
</style>
