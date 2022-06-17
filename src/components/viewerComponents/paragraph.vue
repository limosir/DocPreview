<template>
	<div
		class="doc-paragraph"
		:class="[paragraphClass]"
		:style="paragraphStyle"
	>
		<template v-for="(item, index) in content">
			<component
				:key="index"
				:is="'doc' + item.type"
				:content="item.type === 'text' ? item.text : item.content"
				:cssstyle="item.style || {}"
			></component>
		</template>
	</div>
</template>
<script>
import doctext from './text.vue'
export default {
	name: 'docparagraph',
	components: {
		doctext
	},
	props: {
		content: {
			tyepe: Array,
			require: true
		},
		cssstyle: {
			tyepe: Object,
			require: true
		}
	},
	created() {
		console.log('111', this.cssstyle)
	},
	computed: {
		paragraphClass() {
			if (this.cssstyle.theme && this.cssstyle.theme !== 'custom') {
				return 'text-' + this.cssstyle.theme
			}
			return ''
		},
		paragraphStyle() {
			if (this.cssstyle.theme && this.cssstyle.theme === 'custom') {
				return this.cssstyle.css
			}
			return ''
		}
	}
}
</script>
<style lang="less" scoped>
@import '@/style/common-paragraph.less';
</style>
