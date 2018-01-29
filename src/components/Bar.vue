<template>
  <div class="Bar">
    <div v-for="n in num" class="con-text" :id="gernerateId(n)"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      num: 4
    }
  },
  methods :{
    gernerateId(index){
      return "bar" +index
    },
    drawBar1(){
      let myChart = this.$echarts.init(document.getElementById('bar1'));
      myChart.setOption({
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data:['利润', '支出', '收入']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'value'
          }
        ],
        yAxis : [
          {
            type : 'category',
            axisTick : {show: false},
            data : ['周一','周二','周三','周四','周五','周六','周日']
          }
        ],
        series : [
          {
            name:'利润',
            type:'bar',
            label: {
              normal: {
                show: true,
                position: 'inside'
              }
            },
            data:[200, 170, 240, 244, 200, 220, 210]
          },
          {
            name:'收入',
            type:'bar',
            stack: '总量',
            label: {
              normal: {
                show: true
              }
            },
            data:[320, 302, 341, 374, 390, 450, 420]
          },
          {
            name:'支出',
            type:'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'left'
              }
            },
            data:[-120, -132, -101, -134, -190, -230, -210]
          }
        ]
      })
    },
    drawBar2(){
      let myChart = this.$echarts.init(document.getElementById('bar2'));
      myChart.setOption({
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'直接访问',
            type:'bar',
            data:[320, 332, 301, 334, 390, 330, 320]
          },
          {
            name:'邮件营销',
            type:'bar',
            stack: '广告',
            data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
            name:'联盟广告',
            type:'bar',
            stack: '广告',
            data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
            name:'视频广告',
            type:'bar',
            stack: '广告',
            data:[150, 232, 201, 154, 190, 330, 410]
          },
          {
            name:'搜索引擎',
            type:'bar',
            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine : {
              lineStyle: {
                normal: {
                  type: 'dashed'
                }
              },
              data : [
                [{type : 'min'}, {type : 'max'}]
              ]
            }
          },
          {
            name:'百度',
            type:'bar',
            barWidth : 5,
            stack: '搜索引擎',
            data:[620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name:'谷歌',
            type:'bar',
            stack: '搜索引擎',
            data:[120, 132, 101, 134, 290, 230, 220]
          },
          {
            name:'必应',
            type:'bar',
            stack: '搜索引擎',
            data:[60, 72, 71, 74, 190, 130, 110]
          },
          {
            name:'其他',
            type:'bar',
            stack: '搜索引擎',
            data:[62, 82, 91, 84, 109, 110, 120]
          }
        ]
      })
    },
    drawBar3(){
      var builderJson = {
        "all": 10887,
        "charts": {
          "map": 3237,
          "lines": 2164,
          "bar": 7561,
          "line": 7778,
          "pie": 7355,
          "scatter": 2405,
          "candlestick": 1842,
          "radar": 2090,
          "heatmap": 1762,
          "treemap": 1593,
          "graph": 2060,
          "boxplot": 1537,
          "parallel": 1908,
          "gauge": 2107,
          "funnel": 1692,
          "sankey": 1568
        },
        "components": {
          "geo": 2788,
          "title": 9575,
          "legend": 9400,
          "tooltip": 9466,
          "grid": 9266,
          "markPoint": 3419,
          "markLine": 2984,
          "timeline": 2739,
          "dataZoom": 2744,
          "visualMap": 2466,
          "toolbox": 3034,
          "polar": 1945
        },
        "ie": 9743
      };
      var downloadJson = {
        "echarts.min.js": 17365,
        "echarts.simple.min.js": 4079,
        "echarts.common.min.js": 6929,
        "echarts.js": 14890
      };
      var themeJson = {
        "dark.js": 1594,
        "infographic.js": 925,
        "shine.js": 1608,
        "roma.js": 721,
        "macarons.js": 2179,
        "vintage.js": 1982
      };
      var waterMarkText = 'ECHARTS';
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      canvas.width = canvas.height = 100;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.globalAlpha = 0.08;
      ctx.font = '20px Microsoft Yahei';
      ctx.translate(50, 50);
      ctx.rotate(-Math.PI / 4);
      ctx.fillText(waterMarkText, 0, 0);
      let myChart = this.$echarts.init(document.getElementById('bar3'));
      myChart.setOption({
        backgroundColor: {
          type: 'pattern',
          image: canvas,
          repeat: 'repeat'
        },
        tooltip: {},
        title: [{
          text: '在线构建',
          subtext: '总计 ' + builderJson.all,
          x: '25%',
          textAlign: 'center'
        }, {
          text: '各版本下载',
          subtext: '总计 ' + Object.keys(downloadJson).reduce(function (all, key) {
            return all + downloadJson[key];
          }, 0),
          x: '75%',
          textAlign: 'center'
        }, {
          text: '主题下载',
          subtext: '总计 ' + Object.keys(themeJson).reduce(function (all, key) {
            return all + themeJson[key];
          }, 0),
          x: '75%',
          y: '50%',
          textAlign: 'center'
        }],
        grid: [{
          top: 50,
          width: '50%',
          bottom: '45%',
          left: 10,
          containLabel: true
        }, {
          top: '55%',
          width: '50%',
          bottom: 0,
          left: 10,
          containLabel: true
        }],
        xAxis: [{
          type: 'value',
          max: builderJson.all,
          splitLine: {
            show: false
          }
        }, {
          type: 'value',
          max: builderJson.all,
          gridIndex: 1,
          splitLine: {
            show: false
          }
        }],
        yAxis: [{
          type: 'category',
          data: Object.keys(builderJson.charts),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }, {
          gridIndex: 1,
          type: 'category',
          data: Object.keys(builderJson.components),
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }],
        series: [{
          type: 'bar',
          stack: 'chart',
          z: 3,
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          data: Object.keys(builderJson.charts).map(function (key) {
            return builderJson.charts[key];
          })
        }, {
          type: 'bar',
          stack: 'chart',
          silent: true,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          data: Object.keys(builderJson.charts).map(function (key) {
            return builderJson.all - builderJson.charts[key];
          })
        }, {
          type: 'bar',
          stack: 'component',
          xAxisIndex: 1,
          yAxisIndex: 1,
          z: 3,
          label: {
            normal: {
              position: 'right',
              show: true
            }
          },
          data: Object.keys(builderJson.components).map(function (key) {
            return builderJson.components[key];
          })
        }, {
          type: 'bar',
          stack: 'component',
          silent: true,
          xAxisIndex: 1,
          yAxisIndex: 1,
          itemStyle: {
            normal: {
              color: '#eee'
            }
          },
          data: Object.keys(builderJson.components).map(function (key) {
            return builderJson.all - builderJson.components[key];
          })
        }, {
          type: 'pie',
          radius: [0, '30%'],
          center: ['75%', '25%'],
          data: Object.keys(downloadJson).map(function (key) {
            return {
              name: key.replace('.js', ''),
              value: downloadJson[key]
            }
          })
        }, {
          type: 'pie',
          radius: [0, '30%'],
          center: ['75%', '75%'],
          data: Object.keys(themeJson).map(function (key) {
            return {
              name: key.replace('.js', ''),
              value: themeJson[key]
            }
          })
        }]
      })
    },
    drawBar4(){
      let myChart = this.$echarts.init(document.getElementById('bar4'));
      myChart.setOption({
        title : {
          text: '某地区蒸发量和降水量',
          subtext: '纯属虚构'
        },
        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data:['蒸发量','降水量']
        },
        calculable : true,
        xAxis : [
          {
            type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint : {
              data : [
                {type : 'max', name: '最大值'},
                {type : 'min', name: '最小值'}
              ]
            },
            markLine : {
              data : [
                {type : 'average', name: '平均值'}
              ]
            }
          },
          {
            name:'降水量',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint : {
              data : [
                {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
              ]
            },
            markLine : {
              data : [
                {type : 'average', name : '平均值'}
              ]
            }
          }
        ]
      })
    }
  },
  mounted(){
    this.drawBar1();
    this.drawBar2();
    this.drawBar3();
    this.drawBar4();
  }
}
</script>


<style scoped>
  .con-text{
    width: 31.25%;
    height: 350px;
    border: 1px solid #666;
    float: left;
    margin-left: 20px;
    margin-top: 20px;
  }
  h2{
    color: #fff;
  }
</style>
