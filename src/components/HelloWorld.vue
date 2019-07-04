
<template>
  <div>

    <h1 align="center"> Budget-Planer </h1>
    <table class="table" ref="table">
    <thead>
      <tr>
        <th></th>
        <th>Absolut</th>
        <th>Prozentual</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <Row v-for="(c, i) in counter" :key="i" :index="i"/>

      <tr>
        <td>Total</td>
        <td>{{getTotal(counter)}}</td>
        <td>0%</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <button class="btn btn-primary" @click="addrow"> Add Row</button> <button @click="generatePDF" class="btn-primary btn"> Get PDF</button>
  </div>
</template>

<script>
import Row from "./row"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'
export default {
  components:{
    Row,
    
  },
  data(){
    return{
    }
  },
  methods:{
    addrow(){
      this.$store.commit('add')
    },
    getTotal(x){
      var b = 0
      if(this.counter.length >= 0){
        x.forEach(a => {
           b += a.Total 
        })
      }
      return b
    },
    generatePDF(){
      html2canvas(this.$refs.table).then(
        a => {
          var myImage = a.toDataURL("image/jpeg,1.0");

          var imgWidth = (this.$refs.table.clientWidth * 20) / 120;
					var imgHeight = (this.$refs.table.clientHeight * 20) / 100; 

          var pdf = new jsPDF('p', 'mm', 'a4');
					pdf.addImage(myImage, 'JPEG', 1, 5, imgWidth, imgHeight);
					pdf.save('Download.pdf');
        } 
      )
    }
  },
  computed:{
    counter(){
      return this.$store.state.count
    }
  }
}
</script>

<style>

/* table tbody tr button{
  opacity: 0;
}
table tbody tr button:hover{
  opacity: 1;
} */
table tr{
  position: relative !important;
  /* margin: 10px !important; */
}
table button{
  opacity: 0;
}
table tr:hover  button{
  opacity: 1;
}

</style>
