<template>
    <div>
        <ListView v-if='song_list.length>0' :songList='song_list' :title='title'/>
    </div>
</template>
<script>
import ListView from '@/components/ListView'
export default {
    name:'HomeList',
    components:{
        ListView
    },
    data(){
        return{
            song_list:[]
        }
    },
    props:{
        musicType:{
            type:Object,
            default:function(){
                return{}
            }
        },
        title:{
            type:String,
            default:'音乐类型'
        }
    },
    mounted(){
        this.$api.homelist.getHomeList(this.musicType)
        .then(res =>{
            this.song_list = res.data.song_list;
        })
    }
}
</script>

