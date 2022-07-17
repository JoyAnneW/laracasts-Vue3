import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";
// slots can have names so that you can distinguish between them.
{
	/* <panel>
	<template v-slot:heading>Heading 1</template>

	<template v-slot:default>This is the default text.</template>
</panel>; */
	//  heading would be passed in as aprop.
	// in the panel componet :
	// <slot name="heading" />
}

export default {
	// @change="currentTag = $event" - when defining the fn inline, we can access the parameter passed in the emitted event through the $event variable.

	// :v-model="currentTag" - v model binds a value and listens to a related event. it can be used on elements other than input elements when this pair of functionalities is needed. No need for these two lines: current-tag="currentTag" @change="currentTag = $event"

	// can be more specific by using this syntax: in AssignmentsList : v-model:currentTag="currentTag" In AssignmentTags:  props: {
	//     currentTag: String },  :class="{'border-blue-500 text-blue-500': tag === currentTarget}   @click="$emit('update:currentTag', tag)"

	// Flags: only show this button if the component is marked as canToggle
	// <button v-show="canToggle">Close</button>

	components: { Assignment, AssignmentTags, Panel },
	template: `
  <Panel v-show="assignments.length" class="w-60">
  <h2>{{title}}
  <span>({{assignments.length}})</span>
  </h2>
	<button v-show="canToggle" @click="$emit('toggle')" >Close</button>


<assignment-tags 
:initial-tags="assignments.map(assignment => assignment.tag)" 
v-model="currentTag"
></assignment-tags>

  <ul>
    <assignment 
  v-for="assignment in filteredAssignments"
  :key="assignment.id" 
  :assignment="assignment"
    ></assignment>
  </ul>

  <slot></slot>
</Panel>
  `,
	// use the slot tag to insert elements you want to appear in one instance of a component only
	props: {
		assignments: Array,
		title: String,
		canToggle: { type: Boolean, default: false },
	},

	data() {
		return {
			currentTag: "all",
		};
	},

	computed: {
		filteredAssignments() {
			if (this.currentTag === "all") {
				return this.assignments;
			}

			return this.assignments.filter(
				(assignment) => assignment.tag === this.currentTag
			);
		},

		// tags() {
		// 	// return only the tags from the objects in the assignments Array. new Set ensures every item in the new array will be unique.
		// 	return [
		// 		"all",
		// 		...new Set(this.assignments.map((assignment) => assignment.tag)),
		// 	];
		// },
	},
};
