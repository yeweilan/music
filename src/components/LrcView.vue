<template>
     <div class="lrcContainer">
       <div class="lrc" ref="lrc">
           <p class="lrc-p" :class="{'active':currentTime > lrcTime[index] && currentTime <lrcTime[index+1]}" v-for="(item,key,index) in lrcData" :key="index">{{ scrollLRC(index) }}{{ item }}</p>
       </div>
    </div>
</template>
<script>
export default {
    name: "LRC",
    components: {},
    data() {
        return {
            lrcData: {},
            lrcTime:[]
        };
    },
    props: {
        durationTime: {
            type: [Number, String],
            default: 0
        },
        currentTime: {
            type: [Number, String],
            default: 0
        },
        music_id: {
            type: [Number, String],
            default: 0
        }
    },
    mounted() {
        this.$api.lrc
            .getLrc({
                method: "baidu.ting.song.lry",
                songid: this.music_id
            })
            .then(res => {
                this.lrcParse(res.data.lrcContent);
            });
    },
    methods: {
        lrcParse(data) {
            const lrcSplit = data.split("\n");
            const lrcObj = {};
            for (var i = 0; i < lrcSplit.length; i++) {
                var reg = /\[\d*:\d*((\.|\:)\d*)\]/g;
                var timeRegExpArr = lrcSplit[i].match(reg);
                if (!timeRegExpArr) continue;
                var t = timeRegExpArr[0];
                var min = Number(String(t.match(/\[\d*/i)).slice(1));
                var sec = Number(String(t.match(/\:\d*/i)).slice(1));
                var time = min * 60 + sec;
                var content = lrcSplit[i].replace(timeRegExpArr,"");
                lrcObj[time] = content;
            }
            this.lrcData = lrcObj;
            this.getLRCTime();
        },
        getLRCTime(){
            for(var i in this.lrcData){
                this.lrcTime.push(i)
            }
        },
        scrollLRC(index){
            if(this.currentTime > this.lrcTime[index] && this.currentTime < this.lrcTime[index+1]){
                this.$refs.lrc.style.top = -((index-2) * 30) + 'px'
            }
        }
    }

};
</script>
<style scoped>

.active {
  color: red;
}

.lrcContainer {
  width: 100%;
  height: 150px;
  overflow: scroll;
  position: relative;
}

.lrc {
  width: 100%;
  position: absolute;
  top: 0;
}

.lrc-p {
  height: 30px;
  line-height: 30px;
}

.up30 {
  margin-top: -30px;
}

</style>

