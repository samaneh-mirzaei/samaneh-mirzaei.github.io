// kind: "cert" | "course" | "achievement"
// Leave issuer / date / verifyUrl as null to show the dashed placeholders.
export const CERTIFICATES = [
	{
		title: "Python Kaggle",
		kind: "cert",
		image: {
			src: "assets/certificates/python-kaggle.png",
			alt: "Kaggle Python course certificate",
		},
		issuer: null,
		date: null,
		verifyUrl: null,
	},
	{
		title: "Python To Industry",
		kind: "cert",
		image: {
			src: "assets/certificates/ai-dl-ml-bootcamp.jpg",
			alt: "Certificate for the Python To Industry course",
		},
		issuer: null,
		date: null,
		verifyUrl: null,
	},
	{
		title: "Deep Learning Kaggle",
		kind: "cert",
		image: {
			src: "assets/certificates/deep-learning-kaggle.png",
			alt: "Kaggle Deep Learning course certificate",
		},
		issuer: null,
		date: null,
		verifyUrl: null,
	},
];

export const CERTIFICATE_KIND_KEYS = {
	cert: "d.l.cert",
	course: "d.l.course",
	achievement: "d.l.ach",
};
