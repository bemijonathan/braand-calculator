<template>
  <tr>
    <td><input type="text" v-model="name"/> <button class="btn btn-danger" @click="remove"> Remove Cell</button> </td>
    <td>#{{ total }}</td>
    <td>0%</td>
    <td><input type="number" v-model="time" placeholder="Time hr"></td>
    <td><input type="number" v-model="price" placeholder="Amount"></td>
  </tr>
</template>

<script>
import { watch } from 'fs';
export default {
  props:['index'],
  data(){
    return{
      time:'',
      price:'',
      name:''
    }
  },
  methods:{
    remove(){
      this.$store.commit('remove', this.index)
    }
  },
  computed:{
    total(){
      if(this.price !== '' && this.time !== ''){
         return this.price * this.time
      }
     
    }
  },
  watch:{
    total(){
      this.$store.commit('Total',{index:this.index, total:this.total})
    }
  }
}
</script>

<style>

</style>
