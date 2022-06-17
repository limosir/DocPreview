<template>
	<div class="doc-text" :class="[textClass]" :style="textStyle">
		<span>{{ content }}</span>
	</div>
</template>
<script>
export default {
	name: 'doctext',
	props: {
		content: {
			tyepe: String,
			require: true
		},
		cssstyle: {
			tyepe: Object,
			require: true
		}
	},
	created() {
		console.log(this.content)
	},
	computed: {
		textClass() {
			if (this.cssstyle.theme && this.cssstyle.theme !== 'custom') {
				return 'text-' + this.cssstyle.theme
			}
			return ''
		},
		textStyle() {
			if (this.cssstyle.theme && this.cssstyle.theme === 'custom') {
				return this.cssstyle.css
			}
			return ''
		}
	}
}
</script>
<style lang="less" scoped>
@import '@/style/common-text.less';
@import '@/style/common/text.less';
</style>
