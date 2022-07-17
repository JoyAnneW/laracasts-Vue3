export default {
	// the slot tag makes the button reusable. when ever the button component is used, whatever is passed between the opening and closing tags will be rendered.
	// here we're applying a base set of styles. value is always true. the others will be applied if a condition is met, i.e based on the value of the type prop/attribute
	template: `
    <button :disabled="processing" :class='{"border rounded px-5 py-2 disabled:cursor-not-allowed": true,
   "bg-gray-200 hover:bg-gray-400": btntype === "muted",
   "bg-blue-200 hover:bg-blue-400": btntype === "primary",
   "bg-orange-200 hover:bg-orange-400": btntype === "secondary",
 "is-loading text-transparent": processing,
}'>
      <slot />
    </button>
  `,

	props: {
		// defining a prop named btntype and declaring its datatype to be String. seems like prop name should be all lowercase, no dashes
		btntype: {
			type: String,
			default: "primary",
		},
		// setting state of a processing prop to disable or enable btns
		processing: {
			type: Boolean,
			default: false,
		},
	},
};
