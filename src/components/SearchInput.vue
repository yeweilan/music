<template>
    <div class="search-view">
        <div>
            <form @submit="formSubmit">
                <div class="input-wrap">
                    <i class="iconfont icon-sousuo"></i>
                    <input
                        v-model="searchContent"
                        @keyup.enter="keyUpHandler"
                        type="search"
                        autofocus="autofocus"
                        placeholder="歌名、歌词、歌手、专辑"
                    >
                    <div @click="searchCancelHandler" class="search-button">取消</div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import SearchInput from "@/components/TopNav";

export default {
    name: "SearchInput",
    components: {},
    data() {
        return {
            searchData: {},
            searchContent: ""
        };
    },
    methods: {
        formSubmit(event) {
            event.preventDefault();
        },
        searchCancelHandler() {
            this.searchData = {};
            this.$emit("onSearchContent", this.searchData);
        },
        keyUpHandler() {
            this.$api.search
                .searchList({
                    method: "baidu.ting.search.catalogSug",
                    query: this.searchContent
                })
                .then(res => {
                    this.searchData = res.data;
                    this.$emit("onSearchContent", this.searchData);
                });
        }
    }
};
</script>
<style scoped lang="less">
.search-view {
    border-top: 5px solid #f1f1f1;
    form {
        padding: 5px;
        .input-wrap {
            display: flex;
            border: 1px solid #c3c3c3;
            border-radius: 18px;
            height: 36px;
            line-height: 36px;
            box-sizing: border-box;
            position: relative;
            padding: 4px;
            input[type="search"] {
                flex: 1;
                padding: 0 40px 0 40px;
                -webkit-appearance: none;
            }
            input::-webkit-search-cancel-button {
                display: none;
            }
            i {
                font-size: 27px;
                position: absolute;
                left: 6px;
                top: 0px;
            }
            .search-button {
                position: absolute;
                right: 10px;
                top: 0;
                height: 26px;
                margin: 5px 0;
                padding-left: 8px;
                border-left: 1px solid #c3c3c3;
                text-align: center;
                font-size: 14px;
                line-height: 26px;
                z-index: 10;
            }
        }
    }
}
</style>
