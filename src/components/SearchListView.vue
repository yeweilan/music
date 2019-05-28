<template>
    <div>
        <ul>
            <router-link
                tag="li"
                :to="{ name:'Play',params:{music_id:item.songid}}"
                v-for="(item,index) in searchData.song"
                :key="index"
            >
                <p>{{ item.songname }}</p>
                <p class="author">{{ item.artistname }}</p>
            </router-link>
        </ul>
    </div>
</template>
<script>
import SearchListView from "@/components/TopNav";

export default {
    name: "SearchListView",
    components: {},
    props: {
        searchData: {
            type: Object,
            default: function() {
                return {};
            }
        }
    }
};
</script>
<style scoped lang="less">
ul {
    li {
        padding: 5px;
        border-top: 1px solid #f1f1f1;
        .author {
            font-size: 10px;
            margin-top: 2px;
        }
    }
}
</style>
