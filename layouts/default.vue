<template>
  <div>
    <FixedBar />
    <Nuxt />
    <Modal :visible="modalVisible" @visibleChange="handleVisibleChange" />
  </div>
</template>
<script>
import FixedBar from '@/components/FixedBar/index.vue'
import Modal from '@/components/Modal/index.vue'
export default {
  data() {
    return {
      timer: null,
      modalVisible: false
    }
  },
  mounted() {
    if(localStorage.getItem('visited') !== 'true') {
      this.timer = setTimeout(() => {
        this.modalVisible = true
        console.log(this.modalVisible)
      },30000)
    }
  },
  beforeDestroy (){
    this.timer && clearTimeout(this.timer)
  },
  methods: {
    handleVisibleChange(value) {
      localStorage.setItem('visited','true')
      this.value =value
    }
  },
  components: {
    FixedBar,
    Modal,
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
