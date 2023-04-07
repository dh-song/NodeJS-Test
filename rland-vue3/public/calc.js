export default{
		data() {
			let x = 30;
			let y = 50;
			let z = 0;

			return { x, y, z };
		},
		methods: {
			calcHandler(e) {
				//			e.preventDefault();
				//			this.z = parseInt(this.x)+parseInt(this.y);
				this.z = parseInt(this.x) + this.y;
				console.log(this.z);
			},
			resetHandler(e) {
				e.preventDefault();
				console.log("reset-handler");
			}
		},
		template:
			`<section id="calc">
    <h1>덧셈 계산기</h1>
    <form>
        <fieldset>
            <legend>계산기 입력폼</legend>
            <div>
                <label>x:</label>
                <input dir="rtl" v-bind:value="x" @input="calcHandler">
<!--            <input dir="rtl" :value="x"> -->
                <label>y:</label>
                <input dir="rtl" v-model.trim.number="y">
                <span>={{z}}</span><br>
                <span v-text="z"></span>
            </div>
            <hr>
            <div>
                <input type="submit" value="초기화" @:click="resetHandler">
                <input type="submit" value="계산하기" v-on:click.prevent="calcHandler">
            </div>
        </fieldset>
    </form>
</section>`
	
}