<template>
    <div class="play">
        <div class="header">
            <div class="title">
                <router-link to="/">
                    <i class="iconfont icon-shouye left"></i>
                </router-link>
                <div class="music-info">
                    <p v-if="songinfo.songinfo">{{ songinfo.songinfo.title }}</p>
                    <p v-if="songinfo.songinfo" class="author">{{ songinfo.songinfo.author }}</p>
                </div>
                <router-link to='/search'>
                    <i class="iconfont icon-sousuo right"></i>
                </router-link>
            </div>
        </div>

        <div class="song-info">
            <div class="song-info-img">
                <img v-if="songinfo.songinfo" :src="songinfo.songinfo.pic_big">
                <LRC :currentTime="currentTime" :durationTime="durationTime" :music_id="music_id"/>
            </div>
            <div class="iconbox">
                <i class="iconfont icon-shoucang2 left"></i>
                <i class="box"></i>
                <i class="iconfont icon-xiazai right"></i>
            </div>
        </div>
        <div class="song">
            <audio ref="player" v-if="songinfo.bitrate" :src="songinfo.bitrate.file_link" controls></audio>
        </div>
    </div>
</template>
<script>
const LRC = () => import("@/components/LrcView");
export default {
    name: "Play",
    components: {
        LRC
    },
    data() {
        return {
            songinfo: {},
            currentTime: 0,
            durationTime: 0
        };
    },
    props: ["music_id"],
    mounted() {
        this.$axios
            .get(this.Baidu_Host + "/v1/restserver/ting", {
                params: {
                    method: "baidu.ting.song.play",
                    songid: this.music_id
                }
            })
            .then(res => {
                this.songinfo = res.data;
                this.$nextTick(() => {
                    this.playAddEvent();
                });
            })
            .catch(error => {
                console.log(error);
            });
    },
    methods: {
        playAddEvent() {
            this.$refs.player.addEventListener(
                "timeupdate",
                this.currentTimeHandler
            );
            this.$refs.player.addEventListener(
                "canplay",
                this.durationTimeHandler
            );
        },
        playDestroyEvent() {
            this.$refs.player.removeEventListener(
                "timeupdate",
                this.currentTimeHandler
            );
            this.$refs.player.removeEventListener(
                "canplay",
                this.durationTimeHandler
            );
        },
        currentTimeHandler() {
            this.currentTime = this.$refs.player.currentTime;
        },
        durationTimeHandler() {
            this.durationTime = this.$refs.player.durationTime;
        }
    },
    beforeDestroy() {
        this.playDestroyEvent();
    }
};
</script>
<style scoped>
.header {
    padding: 15px;
}

.music-info {
    flex: 1;
    font-size: 20px;
}

.title {
    display: flex;
    text-align: center;
}

.left {
    font-size: 30px;
}

.ca {
    color: red;
}

.right {
    font-size: 30px;
}

.song-info {
    padding: 15px;
}

.song-info-img {
    text-align: center;
}

.song-info-img img {
    width: 50%;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.31);
}

.song-lrc {
    margin-top: 10px;
    min-height: 50px;
}

.iconbox {
    display: flex;
    margin-top: 30px;
}

.iconbox .box {
    flex: 1;
}

.song {
    width: 100%;
    text-align: center;
}

.song audio {
    width: 80%;
}

.active {
    color: #222;
}

.author {
    font-size: 12px;
    color: #999;
}
</style>
