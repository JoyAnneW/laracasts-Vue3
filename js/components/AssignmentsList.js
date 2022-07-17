import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
	// @change="currentTag = $event" - when defining the fn inline, we can access the parameter passed in the emitted event through the $event variable.

	components: { Assignment, AssignmentTags },
	template: `
  <section v-show="assignments.length">
  <h2>{{title}}
  <span>({{assignments.length}})</span>
  </h2>


<assignment-tags :initial-tags="assignments.map(assignment => assignment.tag)" 
:current-tag="currentTag" 
@change="currentTag = $event"
/>

  <ul>
    <assignment 
  v-for="assignment in filteredAssignments"
  :key="assignment.id" 
  :assignment="assignment"
    ></assignment>
  </ul>
</section>
  `,

	props: {
		assignments: Array,
		title: String,
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
