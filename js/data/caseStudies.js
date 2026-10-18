// Case studies (hidden unless FEATURES.caseStudies is true in js/config.js).
// A field is a list of parts: { key } = translated text, PH = dashed placeholder.
export const PH = { placeholder: true };

export const CASE_STUDIES = [
	{
		title: { key: "d.case1.title" },
		problem: [{ key: "d.case1.problem" }],
		approach: [PH],
		implementation: [PH],
		results: [{ key: "d.case1.results" }, PH],
	},
	{
		title: PH,
		problem: [PH],
		approach: [PH],
		implementation: [PH],
		results: [PH],
	},
];
