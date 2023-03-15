<template>
	<view class="iframe">
		<web-view v-if="props.type==1" :src="props.url" />
		<rich-text v-if="props.type==2" :nodes="props.url"></rich-text>
	</view>
</template>

<script setup lang="ts">
	const props = defineProps({
		type:{
			type:Number,
		},
	  url: {
	    type: String,
	  },
	});
</script>

<style lang="scss">
.iframe{
	width:100%;
	height:100%;
}
</style>
