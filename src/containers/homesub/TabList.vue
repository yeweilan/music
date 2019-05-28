<template>
  <TabListView v-if="datalist.length>0" :datalist="datalist"/>
</template>
<script>
import TabListView from "@/components/TabView";
export default {
  name: "TabList",
  components: {
    TabListView
  },
  data() {
    return {
      datalist: []
    };
  },
  mounted() {
    const that = this;
    //热歌榜
    function HotSongList() {
      return that.$api.tablist.getTabList({
        method: "baidu.ting.billboard.billList",
        type: 2,
        size: 5,
        offset: 0
      });
    }
    //新歌榜
    function NewSongList() {
      return that.$api.tablist.getTabList({
        method: "baidu.ting.billboard.billList",
        type: 1,
        size: 5,
        offset: 0
      });
    }
    //经典榜
    function ClassicSongList() {
      return that.$api.tablist.getTabList({
        method: "baidu.ting.billboard.billList",
        type: 22,
        size: 5,
        offset: 0
      });
    }
    this.$axios.all([HotSongList(), NewSongList(), ClassicSongList()]).then(
      that.$axios.spread(function(hotlist, newlist, classiclist) {
        that.datalist.push(hotlist.data, newlist.data, classiclist.data);
      })
    );
  }
};
</script>
<style scoped>
</style>
