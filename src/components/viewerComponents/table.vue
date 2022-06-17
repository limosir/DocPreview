<template>
	<table class="doc-table" :class="[tableClass]" :style="tableStyle">
		<template v-for="(item, index) in content">
			<tr :key="'tr' + index" v-if="item.type === 'row'">
				<template v-for="(trItem, idx) in item.content">
					<td
						:key="'td' + idx"
						v-if="trItem.type === 'cell'"
						:style="tdStyle(trItem)"
					>
						<template v-for="(tdItem, i) in trItem.content">
							<component
								:key="'content' + i"
								:is="'doc' + tdItem.type"
								:content="tdItem.content"
								:cssstyle="tdItem.style || {}"
							></component>
						</template>
					</td>
				</template>
			</tr>
		</template>
	</table>
</template>
<script>
import docparagraph from './paragraph.vue'
export default {
	name: 'doctable',
	components: {
		docparagraph
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
	computed: {
		tableClass() {
			if (this.cssstyle.theme && this.cssstyle.theme !== 'custom') {
				return 'table-' + this.cssstyle.theme
			}
			return ''
		},
		tableStyle() {
			if (this.cssstyle.theme && this.cssstyle.theme === 'custom') {
				return this.cssstyle.css
			}
			return ''
		}
	},
	methods: {
		tdStyle(tdItem) {
			if (tdItem.style && tdItem.style.theme === 'custom') {
				return tdItem.style.css
			}
		}
	}
}
</script>
<style lang="less" scoped>
@import '@/style/common-table.less';
@import '@/style/common/table.less';
</style>
