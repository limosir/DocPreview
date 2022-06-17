<template>
	<div class="doc-viewer">
		<template v-for="(item, index) in docContent">
			<component
				:key="index"
				:is="'doc' + item.type"
				:content="item.content"
				:cssstyle="item.style || {}"
			></component>
		</template>
	</div>
</template>

<script>
import docparagraph from './viewerComponents/paragraph.vue'
import doctable from './viewerComponents/table.vue'
import doctext from './viewerComponents/text.vue'
export default {
	name: 'docViewer',
	components: {
		doctext,
		doctable,
		docparagraph
	},
	props: {
		content: {
			tyepe: Object,
			require: true
		}
	},
	computed: {
		docContent() {
			if (this.content.type === 'doc') {
				return this.content.content
			}
			return []
		}
	},
	created() {},
	methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.doc-viewer {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>

