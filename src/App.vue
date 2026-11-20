<template>
  <el-container style="min-height: 100vh">
    <el-header class="header">
      <b>Rental Admin</b>
      <el-menu mode="horizontal" :ellipsis="false" router :default-active="$route.path">
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/customer-rent/1/1?name=Demo">Rent Detail</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<style>
body { margin: 0; font-family: system-ui, sans-serif; }
.header { display: flex; align-items: center; gap: 24px; border-bottom: 1px solid #eee; }
</style>
