<template>
    <div>
        <TopNav />
        <HomeList :musicType="todayRecommand" :title="todayRecommand_title"/>
        <HomeList :musicType="hotSongList" :title="hotSong_title"/>
        <HomeList :musicType="newSongList" :title="newSong_title"/>
        <HomeList :musicType="recordList" :title="record_title"/>
        <MySwiperTab :imgs='imgs'/>
        <TabList/>
    </div>
</template>
<script>

import TopNav from "@/components/TopNav"
import HomeList from './homesub/HomeList'
import MySwiperTab from "../components/MySwiperTab"
import TabList from './homesub/TabList'
export default {
    name:"Home",
    components:{
        TopNav,
        HomeList,
        MySwiperTab,
        TabList
    },
    data(){
        return{
            todayRecommand:{
                method:"baidu.ting.billboard.billList",
                type:1,
                size:6,
                offset:0
            },
            todayRecommand_title:"今日推荐",
            hotSongList:{
                method:"baidu.ting.billboard.billList",
                type:2,
                size:6,
                offset:0
            },
            hotSong_title:"热门歌单",
            newSongList:{
                method:"baidu.ting.billboard.billList",
                type:11,
                size:3,
                offset:0
            },
            newSong_title:"摇滚榜单",
            recordList:{
                method:"baidu.ting.billboard.billList",
                type:12,
                size:3,
                offset:0
            },
            record_title:"唱片墙",
            imgs:[
                require('../assets/img/b1.jpg'),
                require('../assets/img/b2.jpg'),
                require('../assets/img/b3.jpg')
            ]
        }
    }
}
</script>
<style scoped>

</style>
