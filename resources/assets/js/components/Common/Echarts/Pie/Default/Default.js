import echarts from 'echarts';
export default {
    name: 'pie_echarts',
    data() {
        return {
            chartDom: null,
            data: {
                id: this.id,
                title: this.title,
                subtext: this.subtext,
                hovertitle: this.hovertitle,
                datalist: this.datalist,
                textlist: []
            },
        }
    },
    methods: {
        init() {
            //基于准备好的dom，初始化echarts实例
            if (this.data.id) {
                this.chartDom = echarts.init(document.getElementById(this.data.id));
            }
            return this;
        },
        update() {
            
            if (this.chartDom === null) {
                this.init();
            }
            // console.log(this.data.datalist);
            this.chartDom.setOption({
                title: {
                    text: this.data.title,
                    subtext: this.data.subtext,
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: this.data.textlist
                },
                series: [{
                    name: this.data.hovertitle,
                    type: 'pie',
                    radius: '55%',
                    // center: ['50%', '60%'],
                    data: this.data.datalist,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            },true);
        },

        updateTextList() {
            var data = this.data.datalist;
            this.data.textlist = [];
            for (var i = 0; i < data.length; i++) {
                this.data.textlist.push(data[i].name);
            }
            return this;
        }
    },
    mounted: function() {
        this.updateTextList()
            .init()
            .update();
    },
    props: {
        id: {
            type: String,
            required: true
        },
        title: [String, Number],
        subtext: [String, Number],
        hovertitle: [String, Number],
        datalist: {
            type: Array,
            required: true
        }
    },
    watch: {
        datalist(v) {
            this.data.valuelist = v;
            this.updateTextList().update();
        },
        title(v) {
            this.data.title = v;
            this.update();
        },
        subtext(v) {
            this.data.subtext = v;
            this.update();
        },
        hovertitle(v) {
            this.data.hovertitle = v;
            this.update();
        }
    }
}