<template>
    <div id="tabbar">
        <router-view></router-view>
        <van-tabbar v-model="active">
            <van-tabbar-item to="/home" name="home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/explore" name="search" icon="search">标签</van-tabbar-item>
            <van-tabbar-item to="/myup" name="friends" icon="friends-o">标签</van-tabbar-item>
            <van-tabbar-item to="/shop" name="setting" icon="setting-o">标签</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "About",
        data() {
            return {
                active: 'home'
            }
        }
    }
</script>

<style scoped>

</style>