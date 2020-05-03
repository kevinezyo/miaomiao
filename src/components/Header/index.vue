<template>
  <div>
    <header id="header-H">
      <h1>{{title}}</h1>
    </header>
  </div>
</template>


<script>
export default {
  name: "header-H",
  props:{
    title:{
      type:String,
      default:'喵喵电影'
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>


<style scoped>
  #header-H{
    width: 100%;
    height: 50px;
    color: #fff;
    background: #e54847;
    border-bottom: 1px solid #e54847;
    position: relative;

  }

#header-H h1{
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  font-weight: normal;
}

#header-H i{
  position: absolute;
  left: 5px;
  top: 50%;
  margin-top: -13px;
  font-size: 26px;
}
 
</style>