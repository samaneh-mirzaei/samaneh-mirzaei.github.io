import { escapeHtml } from "../utils/html.js";
import { i18n, en } from "../i18n/markup.js";
import { CERTIFICATE_KIND_KEYS } from "../data/certificates.js";
import { Card } from "./Card.js";
import { Thumb } from "./Thumb.js";
import { MetaList } from "./MetaList.js";
import { Placeholder } from "./Placeholder.js";

/** One certificate / course / achievement (data/certificates.js). */
export function CertificateCard({ title, kind, image, issuer, date, verifyUrl }) {
	const kindKey = CERTIFICATE_KIND_KEYS[kind] || CERTIFICATE_KIND_KEYS.cert;
	const valueOrPlaceholder = (value, key = "d.ph.value") =>
		value ? escapeHtml(value) : Placeholder(key);

	return Card({
		tag: "article",
		className: "proj",
		children: `
${image ? Thumb(image) : ""}
<p class="kind" ${i18n(kindKey)}>${en(kindKey)}</p>
<h3>${escapeHtml(title)}</h3>
${MetaList([
	// { labelKey: "d.issuer", value: valueOrPlaceholder(issuer) },
	// { labelKey: "d.date", value: valueOrPlaceholder(date) }, // commented out by request
	/*
	{
		labelKey: "d.verify",
		value: verifyUrl
			? `<a href="${escapeHtml(verifyUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(verifyUrl)}</a>`
			: Placeholder("d.ph.link"),
	},
	*/
])}`,
	});
}
