export default {
	//   @click="$emit("change", tag) creating a custom event called 'change' and passing the tag clicked on back up to the parent to rerender the filtered assignments. all references to change event removed since I refactored with vmodel. the styling is now also based on modelValue
	template: `<div class="flex gap-2">
	<button 
  @click="$emit('update:modelValue', tag)" 
  v-for="tag in tags" 
  class="border rounded px-1 py-px" 
  :class="{'border-blue-500 text-blue-500': tag === modelValue}">{{tag}}</button>
</div>`,
	props: {
		// this is definied inline when the assignment-tags component is used
		initialTags: Array,
		// this is the default prop name for v model on custom components
		modelValue: String,
	},
	computed: {
		tags() {
			// this is the array created from all the tag propeties of the objects in the assignments array
			return ["all", ...new Set(this.initialTags)];
		},
	},
};
