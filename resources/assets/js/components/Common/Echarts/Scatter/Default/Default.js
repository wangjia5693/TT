import echarts from 'echarts';
export default {
    name: 'echarts',
    data() {
        return {
            chartDom: null,
            data: {
                id: this.id,
                title: this.title,
                legend:this.legend,
                datalist:this.datalist,
                datalists:[]
            },
        }
    },
    methods: {
        init() {
            //基于准备好的dom，初始化echarts实例
            this.chartDom = echarts.init(document.getElementById(this.data.id));
            return this;
        },
        update() {
            if (this.chartDom === null) {
                this.init();
            }
            this.chartDom.setOption({
                    // backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                    //     offset: 0,
                    //     color: '#f7f8fa'
                    // }, {
                    //     offset: 1,
                    //     color: '#cdd0d5'
                    // }]),
                title: {
                    text: this.data.title
                },
                legend: {
                    right: 10,
                    data: this.data.legend
                },
               xAxis: {
                    name:'售价',
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
                },
                yAxis: {
                    name:'销量',
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    },
                    scale: true
                },
                series: this.data.datalists
            });
        },
        getRandomColor(){
            var rgb='rgb('+Math.floor(Math.random()*255)+','
                     +Math.floor(Math.random()*255)+','
                     +Math.floor(Math.random()*255)+')';
            return rgb;
        },
        credata(){
            //循环生成series数据
            var resourcei = [];
            for( var key in this.data.datalist){
                var resource = {};

                resource.name = key;
                resource.data = this.data.datalist[key];
                resource.type = 'scatter',
                resource.symbolSize = function (data) {
                    return Math.sqrt(data[2]) / 5e2;
                },
                resource.label =  {
                    emphasis: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        position: 'top'
                    }
                },
                resource.itemStyle = {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(120, 36, 50, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: this.getRandomColor(),
                        }, {
                            offset: 1,
                            color: this.getRandomColor(),
                        }])
                    }
                }

                resourcei.push(resource);
                // this.data.datalists.push(resource);     
            }
            this.data.datalists = resourcei;
            return this;
        }
    },
    mounted: function() {
        this.init()
            .credata()
            .update();
    },
    props: {
        id: [String],
        title: [String, Number],
        legend: {
            type: Array,
            required: true
        },
        datalist: {
            type: Object,
            required: true
        }
    },
    watch: {
        id(v) {
            this.data.id = v;
            this.credata().update();

        },
        title(v) {
            this.data.title = v;
            this.credata().update();
        },
        legend(v) {
            this.data.legend = v;
            this.credata().update();
        },
        datalist(v) {
            this.data.datalist = v;
            this.credata().update();
        }
    }
}