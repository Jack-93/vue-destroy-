<template>
	<div class="a">
		<!--当前位置-->
		<div class="indeof">
            a组件
			<p>{{value}}</p>
			<el-input v-model="value"></el-input>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value:''
			}
		},
		methods: {},
		beforeDestroy(){
			console.log('beforeDestroy:a');
		}
	}
</script>

<style scoped>
	
</style>