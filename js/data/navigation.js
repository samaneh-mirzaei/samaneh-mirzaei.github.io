import { FEATURES } from "../config.js";
export const NAVIGATION = {
  home: { brandHref: "#top", links: [
    {href:"#about",key:"nav.about"}, {href:"#skills",key:"about.skills.title"},
    {href:"#projects",key:"nav.projects"}, {href:"#resume",key:"nav.resume"}, {href:"#contact",key:"nav.contact"}
  ]},
  details: { brandHref: "index.html", links: [
    {href:"index.html",key:"nav.home"}, {href:"#projects",key:"nav.projects"},
    ...(FEATURES.caseStudies ? [{href:"#case-studies",key:"nav.cases"}] : []),
    {href:"#learning",key:"nav.learning"}, {href:"#contact",key:"nav.contact"}
  ]}
};
