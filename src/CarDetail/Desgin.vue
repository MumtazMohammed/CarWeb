<template>
  <div class="dot">
    <ul>
      <li></li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
@import "@/scss/virables";
@import "@/scss/mixin";
.dot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ul {
    display: flex;
    justify-content: center;
    text-decoration: none;
    li {
      list-style: none;
      width: 150px;
      height: 5px;
      background-color: $btnbackground;
      margin: 3px;
    }
  }
}
</style>
