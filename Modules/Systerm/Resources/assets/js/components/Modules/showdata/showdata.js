 import {
    analysis as anaApi
} from '../../../request/newAnalysis.js';

 export default {
    data() {
      return {
      }
    },
    methods:{
    	analysis(){
    		this.$router.push({name:'analysis'})
    	},
    	Qtydata(){
    		this.$router.push({name:'Qtydata'})
    	}
    }
  }