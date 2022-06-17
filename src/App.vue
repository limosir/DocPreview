<template>
	<div id="app">
		<p>基础样式</p>
		<DocViewer :content="content1"></DocViewer>
		<p>主题样式</p>
		<DocViewer :content="content2"></DocViewer>
		<p>自定义样式</p>
		<DocViewer :content="content3"></DocViewer>
	</div>
</template>

<script>
import DocViewer from './components/docViewer.vue'
import { content1, content2, content3 } from '../src/data/content.js'

export default {
	name: 'App',
	components: {
		DocViewer
	},
	data() {
		return {
			content1,
			content2,
			content3
		}
	}
}
</script>

<style lang="less">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>

