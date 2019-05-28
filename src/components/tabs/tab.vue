<script>
export default {
    name:"Tab",
    data(){
        return{
            
        }
    },
    props:{
        tabName:{
            type:String,
            default:"tab"
        },
        index:{
            type:[String,Number],
            default:1
        }
    },
    mounted(){
        // this.$parent.containers.push(this.$slots.default);
        this.$parent.containers.push(this);
    },
    computed: {
        active(){
            return this.index === this.$parent.currentIndex
        }
    },
    methods:{
        changeIndexHandler(){
            // this.$emit('onChangeHandler',this.index);
            this.$parent.onChangeHandler(this.index);
        }
    },
    render(){

        let currentClass={
            tab:true,
            active:this.active
        }

        return(
            <li onClick={this.changeIndexHandler.bind(this)} class={ currentClass }>{ this.tabName }</li>
        )
    }
}
</script>
<style scoped>

.tab {
  flex-grow: 1;
  text-align: center;
  list-style: none;
  line-height: 40px;
  /* margin-right: 30px; */
  position: relative;
}

.tab.active {
  border-bottom: 2px solid blue;
}

</style>
