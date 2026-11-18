import { CONFIG } from '../config.js';
import { escapeHtml } from '../utils/html.js';
import { i18n,en } from '../i18n/markup.js';
import { SocialLinks } from '../components/SocialLinks.js';
export const Contact=()=>`<section class="contact" id="contact" aria-labelledby="contact-title"><div class="container contact-grid"><div><p class="eyebrow" ${i18n('contact.label')}>${en('contact.label')}</p><h2 id="contact-title" ${i18n('contact.title')}>${en('contact.title')}</h2><p ${i18n('contact.text')}>${en('contact.text')}</p></div><div class="contact-actions"><a class="btn" href="mailto:${escapeHtml(CONFIG.email)}"><span ${i18n('contact.cta')}>${en('contact.cta')}</span><span class="directional" aria-hidden="true">↗</span></a><a class="email-link" href="mailto:${escapeHtml(CONFIG.email)}"><bdi>${escapeHtml(CONFIG.email)}</bdi></a>${SocialLinks()}</div></div></section>`;
