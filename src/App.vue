<template>
  <div id="app">
    <keep-alive exclude="Detail">
   <router-view/>
    </keep-alive>
    <!--keep-alive会从内存中读取数据，而不重新发请求-->
    <!--显示当前路由地址所对应的内容-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
