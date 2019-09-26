<template>
    <div>
        <van-nav-bar
                title="标题"
                left-text="返回"
                right-text="添加"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />
        <van-swipe :autoplay="3000"  :width="fullWidth">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <a href="http://www.baidu.com">
                    <img :src="image" alt="" :width="fullWidth">
                </a>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    import {getHomeMultidata} from "../../network/home";
    
    export default {
        name: "Home",
        methods: {
            onClickLeft() {
                alert('test')
            },
            onClickRight() {
                alert('test2')
            }
        },
        data(){
            return{
                result: null,
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ],
                fullWidth:document.documentElement.clientWidth
            }
        },
        created(){
            getHomeMultidata().then(res =>{
                console.log(res);
                this.result = res.data;
                console.log(this.result[0].img);
            })
        }
    }
</script>

<style scoped>

</style>