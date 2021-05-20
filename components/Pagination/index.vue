<template>
  <nav class="pagination-nav" aria-label="navigation">
    <div class="total-page-text">
      <div class="text">{{pageNumber}} 页</div>
    </div>
    <ul class="pagination pagination-sm">

      <li :class="`${currentPage === 1 ? 'disabled' : ''}`">
        <span aria-label="Previous ignore-vw">
<!--          <span aria-hidden="true">&laquo;</span>-->
          <span class="icon glyphicon glyphicon-menu-left" aria-hidden="true"></span>

        </span>
      </li>
      <li
          :class="`${currentPage === item ? 'active' : ''}`"
          v-for="item in pageNumber"
          :key="item"

      >
        <a @click="changePage(item)">{{item}}</a>
      </li>
      <li :class="`${currentPage === pageNumber ? 'disabled' : ''}`">
        <span aria-label="Next">
<!--          <span aria-hidden="true">&raquo;</span>-->
          <span class="icon glyphicon glyphicon-menu-right ignore-vw" aria-hidden="true"></span>

        </span>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Divider',
  props: {
    total: {
      type: Number,
      default: 20
    },
    current: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 6
    },
  },
  data() {
    return {
      currentPage: this.current
    }
  },
  methods: {
    changePage(page) {
      console.log('changePage', page)
      this.currentPage = page
      this.$emit('onchange', page, this.pageSize);
    }
  },
  computed: {
    pageNumber() {
      const number = this.total / this.pageSize
      return Math.ceil(number)
    }
  }
}
</script>
<style lang="less" scoped>
.pagination-nav {
  margin: 20px 0;

  .pagination {
    margin: 0;
    a, span{
      color: #474747;
      cursor: pointer;
      .icon {
        color: #A6AAB1;
        //font-size: 12px;
      }
    }
    .disabled {
      a, span{
        background: #EFF2F7;
        //color: #A6AAB1;
        cursor: not-allowed;
      }
    }
    .active {
      a, span{
        color: #fff;
        background: @mainColor;
      }
      &:hover a {
        color: #fff !important;
      }
    }
  }
}

  .total-page-text {
    display: inline-block;
    .text {
      //display: inline-block;
      position: relative;
      float: left;
      padding: 5px 20px 5px 10px;
      margin-left: -1px;
      line-height: 1.5;
      text-decoration: none;
    }
  }

</style>
