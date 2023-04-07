import Calc from './calc.js';
Vue
	.createApp({
		components:{
			cc : Calc
			// Calc
		},
	template:
	`
	<section>
	<h1>하이요</h1>
	<cc/>
	<cc/>
	</section>
	`
})
.mount("#app");