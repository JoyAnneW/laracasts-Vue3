export default {
	//   @click="$emit("change", tag) creating a custom event called 'change' and passing the tag clicked on back up to the parent to rerender the filtered assignments
	template: `<div class="flex gap-2">
	<button 
  @click="$emit('change', tag)" v-for="tag in tags" class="border rounded px-1 py-px" :class="{'border-blue-500 text-blue-500': tag === currentTag}">{{tag}}</button>
</div>`,
	props: {
		// this is definied inline when the assignment-tags component is used
		initialTags: Array,
		currentTag: String,
	},
	computed: {
		tags() {
			// this is the array created from all the tag propeties of the objects in the assignments array
			return ["all", ...new Set(this.initialTags)];
		},
	},
};
