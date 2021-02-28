<script>
  const d3 = require('d3');
  export default {
    name: 'GraphComponent',
    props: ['title'],
    methods: {
      generate: function (){

      }
    },
    mounted () {
      let svg = d3.select("#graphItem").append('svg')
          .attr("width",500)
          .attr("height",300)
      let scale = d3.scaleLinear()
          .domain([-100,100])
          .range([0,400])
      let yScale = d3.scaleLinear()
          .domain([0,400])
          .range([-100,100])
      let xAxis = d3.axisBottom().scale(scale);
      let yAxis = d3.axisRight().scale(yScale);
      svg.append('g').attr("transform","translate(20,282)").call(xAxis).append('g').attr("transform","translation(50,10)").call(yAxis);
      return true;
    }
  }
</script>

<template>
  <div id="graphComponent">
    <h1 @click="this.generate()">{{title}}</h1>
    <div id ="graphItem">
      Graph goes here.
    </div>
  </div>
</template>

<style>

</style>