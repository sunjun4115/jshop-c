<template>
    <!-- 商品分类导航 -->
        <div class="type-nav">
            <div class="container">
                <h2 class="all">全部商品分类</h2>
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
                <div class="sort">
                    <div class="all-sort-list2">
                        <div class="item" v-for="(c1 , index) in categoryList" :key="c1.categoryId" :index="index">
                            <h3>
                                <a href="">{{c1.categoryName}}</a>
                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore"  v-for="(c2 ,index) in c1.categoryChild" :key="c2.categoryId" :index="index">
                                        <dt>
                                            <a href="">{{c2.categoryName}}</a>
                                        </dt>
                                        <dd>
                                            <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                                                <a href="">{{c3.categoryName}}</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import {mapState} from 'vuex'
    console.log("mapState",mapState)
    export default {
        name:'TypeNav',
        mounted(){

            // dispatch是分发和触发的意思，和emit单词意思一样
            // 本质其实就是在调用指定的action函数  

            // 如果发请求在这发，只要home和search切换，每一次
            //home和search内部都需要重新创建typeNav组件，mounted就会重新执行 
            //请求就会重复发，而三级分类列表数据是一样的，没必要发那么多次 

            //

            // this.$store.dispatch("getCategoryList");
            this.$store.dispatch("getCategoryList");
        },
        computed:{
            //函数内部可以是数组也可以是对象
            //是数组必须要满足条件：
            //1、数据直接就是总的state当中的数据，不能是模块里面的
            //2、数组当中的名字必须和state当中的名字一致
            // ...mapState(['categoryList'])
            //不能这么干，因为categoryList，不是state.categoryList,而是state.home.categoryList

            ...mapState({
                // 必须使用对象，而且返回的是state.home.categoryList
                categoryList: (state) => state.home.categoryList,
            }),

        }
    }
</script>

<style>
.type-nav {
  border-bottom: 2px solid #e1251b;
}
.type-nav .container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  position: relative;
}
.type-nav .container .all {
  width: 210px;
  height: 45px;
  background-color: #e1251b;
  line-height: 45px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
.type-nav .container .nav a {
  height: 45px;
  margin: 0 22px;
  line-height: 45px;
  font-size: 16px;
  color: #333;
}
.type-nav .container .sort {
  left: 0;
  top: 45px;
  width: 210px;
  height: 461px;
  position: absolute;
  background: #fafafa;
  z-index: 999;
}
.type-nav .container .sort .all-sort-list2 .item h3 {
  line-height: 30px;
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  padding: 0 20px;
  margin: 0;
}
.type-nav .container .sort .all-sort-list2 .item h3 a {
  color: #333;
}
.type-nav .container .sort .all-sort-list2 .item .item-list {
  display: none;
  position: absolute;
  width: 734px;
  min-height: 460px;
  background: #f7f7f7;
  left: 210px;
  border: 1px solid #ddd;
  top: 0;
  z-index: 9999 !important;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem {
  float: left;
  width: 650px;
  padding: 0 4px 0 8px;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl {
  border-top: 1px solid #eee;
  padding: 6px 0;
  overflow: hidden;
  zoom: 1;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl.fore {
  border-top: 0;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dt {
  float: left;
  width: 54px;
  line-height: 22px;
  text-align: right;
  padding: 3px 6px 0 0;
  font-weight: 700;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd {
  float: left;
  width: 415px;
  padding: 3px 0 0;
  overflow: hidden;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd em {
  float: left;
  height: 14px;
  line-height: 14px;
  padding: 0 8px;
  margin-top: 5px;
  border-left: 1px solid #ccc;
}
.type-nav .container .sort .all-sort-list2 .item:hover .item-list {
  display: block;
}
</style>