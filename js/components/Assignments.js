import AssignmentsList from "./AssignmentsList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
	components: { AssignmentsList, AssignmentCreate },
	template: `
  <section >
 <AssignmentsList title="in progress" :assignments="filters.inProgress"></AssignmentsList>
 <AssignmentsList title="completed" :assignments="filters.completed"></AssignmentsList>
 <assignment-create @add="add"></assignment-create> 

  </section>
  `,

	//  .prevent can be added to the eventlistener itself so that you don't need to add it in the fn that's run on this event.
	//  <form @submit.prevent="add">
	//  <input v-model="newAssignment" placeholder="New Assignment" class="text-black">
	//  <button class="bg-blue-400 px-2" type="submit">Add</button>
	//  </form>

	// @add="add" -this is listening for a custom event called add which is emitted by the child assignmentcreate component. when this event is detected, the add method fn here is called.
	data() {
		return {
			assignments: [
				{ name: "Task 1", complete: false, id: 1, tag: "math" },
				{ name: "Task 2", complete: false, id: 2, tag: "reading" },
				{ name: "Task 3", complete: false, id: 3, tag: "reading" },
			],
		};
	},
	// for handling computed properties
	computed: {
		// completedAssignments() {
		// 	return this.assignments.filter((assignment) => assignment.complete);
		// },
		// inProgressAssignments() {
		// 	// this will return an array which I can then loop over in the assignments list component
		// 	return this.assignments.filter((assignment) => !assignment.complete);
		// },

		// more reusable way of writing the filters. if we wanted to add new filters, we'd beable to just add another key value pair rather than creating a new computed property
		filters() {
			return {
				inProgress: this.assignments.filter(
					(assignment) => !assignment.complete
				),
				completed: this.assignments.filter((assignment) => assignment.complete),
			};
		},
	},

	methods: {
		// if everything was in one component we wouldn't need to pass an argument here. but because the name is coming in from the child, we need to pass it into the fn that adds a new task
		add(name) {
			this.assignments.push({
				// name: this.newAssignment,
				name: name,
				completed: false,
				id: this.assignments.length + 1,
			});
		},
	},
};
