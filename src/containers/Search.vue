<template>
    <div>
        <TopNav/>
        <SearchInput @onSearchContent='SearchContent'/>
        <SearchListView v-if="searchData.album" :searchData="searchData"/>
        <SearchHotView v-else/>
    </div>
</template>
<script>

import TopNav from "@/components/TopNav"
import SearchInput from '@/components/SearchInput'
import SearchListView from '@/components/SearchListView' 
import SearchHotView from '@/components/SearchHotView' 
export default {
    name:"Search",
    components:{
        TopNav,
        SearchInput,
        SearchListView,
        SearchHotView
    },
    data(){
        return{
            searchData:{}
        }
    },
    methods:{
        SearchContent(s_data){
            this.searchData = s_data
        }
    }
}
</script>
<style scoped>

</style>
