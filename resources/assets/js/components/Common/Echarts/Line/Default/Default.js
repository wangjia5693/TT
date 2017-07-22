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
                xaxis:this.xaxis,
                datalist:this.datalist
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
                title: {
                    text: this.data.title
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#277eab'
                        }
                    }
                },
                legend: {
                    data: this.data.legend,
                    selected:{'所有店铺':false}
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: this.data.xaxis
                },
                yAxis: {
                    type: 'value',
                    min:'dataMin'
                },
                series: this.data.datalist
            });
        }
    },
    mounted: function() {
        this.init()
            .update();
    },
    props: {
        id: [String],
        title: [String, Number],
        legend: {
            type: [Array, Object],
            required: true
        },
        xaxis: {
            type: Array,
            required: true
        },
        datalist: {
            type: Array,
            required: true
        }
    },
    watch: {
        id(v) {
            this.data.id = v;
            this.update();
        },
        title(v) {
            this.data.title = v;
            this.update();
        },
        legend(v) {
            this.data.legend = v;
            this.update();
        },
        xaxis(v) {
            this.data.xaxis = v;
            this.update();
        },
        datalist(v) {
            this.data.datalist = v;
            this.update();
        }
    }
}