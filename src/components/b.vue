<template>
	<div class="b">
		<!--当前位置-->
		<div class="indeof">
            b组件
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
			console.log('beforeDestroy:b');
		}
	}
</script>

<style scoped>
	
</style>