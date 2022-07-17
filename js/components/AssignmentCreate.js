export default {
	template: `
      <form @submit.prevent="add">
         
              <input v-model="newAssignment" placeholder="New assignment..." class="p-2" /> 
              <button type="submit" class="bg-white p-2 border-l bg-blue-400">Add</button>
  
      </form> 
  `,

	data() {
		return {
			newAssignment: "",
		};
	},

	// parents communicate with children by passing down props. children communicate with parents by emiting an event.
	methods: {
		add() {
			// this will send newAssignment up to the assignments component.
			this.$emit("add", this.newAssignment);

			this.newAssignment = "";
		},
	},
};
