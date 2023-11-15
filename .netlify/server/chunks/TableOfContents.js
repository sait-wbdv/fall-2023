import { c as create_ssr_component, o as onDestroy, e as escape, i as each } from "./index3.js";
const cLabel = "p-4 pt-0";
const cList = "list-none space-y-1";
const cListItem = "px-4 py-2 cursor-pointer";
function setHeadingClasses(headingElem) {
  if (headingElem.tagName === "H3")
    return "ml-3";
  if (headingElem.tagName === "H4")
    return "ml-6";
  if (headingElem.tagName === "H5")
    return "ml-9";
  if (headingElem.tagName === "H6")
    return "ml-12";
  return "";
}
const TableOfContents = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesLabel;
  let classesList;
  let classesListItem;
  let { scrollParent = "#page" } = $$props;
  let { target = "#page" } = $$props;
  let { allowedHeadings = "h2, h3" } = $$props;
  let { label = "On This Page" } = $$props;
  let { width = "w-[240px]" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { text = "text-surface-600-300-token" } = $$props;
  let { hover = "hover:bg-primary-hover-token" } = $$props;
  let { active = "bg-primary-active-token !text-on-primary-token" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  let { regionLabel = "font-bold" } = $$props;
  let { regionList = "" } = $$props;
  let filteredHeadingsList = [];
  let activeHeaderId;
  onDestroy(() => {
  });
  if ($$props.scrollParent === void 0 && $$bindings.scrollParent && scrollParent !== void 0)
    $$bindings.scrollParent(scrollParent);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.allowedHeadings === void 0 && $$bindings.allowedHeadings && allowedHeadings !== void 0)
    $$bindings.allowedHeadings(allowedHeadings);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.regionLabel === void 0 && $$bindings.regionLabel && regionLabel !== void 0)
    $$bindings.regionLabel(regionLabel);
  if ($$props.regionList === void 0 && $$bindings.regionList && regionList !== void 0)
    $$bindings.regionList(regionList);
  classesBase = `${width} ${spacing} ${$$props.class ?? ""}`;
  classesLabel = `${cLabel} ${regionLabel}`;
  classesList = `${cList} ${regionList}`;
  classesListItem = `${cListItem} ${text} ${hover} ${rounded}`;
  return `

${filteredHeadingsList.length > 0 ? `<div class="${"toc " + escape(classesBase, true)}"><nav class="${"toc-list " + escape(classesList, true)}"><div class="${"toc-label " + escape(classesLabel, true)}">${escape(label)}</div>
			${each(filteredHeadingsList, (headingElem) => {
    return `
				
				
				<li class="${"toc-list-item " + escape(classesListItem, true) + " " + escape(setHeadingClasses(headingElem), true) + " " + escape(headingElem.id === activeHeaderId ? active : "", true)}">
					${escape(headingElem.firstChild?.nodeValue)}
				</li>`;
  })}</nav></div>` : ``}`;
});
export {
  TableOfContents as T
};
