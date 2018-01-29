<template>
  <div class="nav-left">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-active="$route.path"
        router>

        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <span slot="title">折线图</span>
        </el-menu-item>
        <el-menu-item index="/bar">
          <i class="el-icon-setting"></i>
          <span slot="title">饼状图</span>
        </el-menu-item>

        <el-menu-item index="/scatter">
          <i class="el-icon-setting"></i>
          <span slot="title">散点图</span>
        </el-menu-item>

        <el-menu-item index="/map">
          <i class="el-icon-setting"></i>
          <span slot="title">Map</span>
        </el-menu-item>

      </el-menu>
    </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-left{
    width: 15%;
    height: 100%;
    background-color: rgb(84, 92, 100);
    float: left;
  }
</style>
