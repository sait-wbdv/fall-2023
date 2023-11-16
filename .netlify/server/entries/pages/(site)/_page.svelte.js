import { c as create_ssr_component, s as setContext, e as escape, h as createEventDispatcher, j as getContext, a as subscribe, b as add_attribute, d as compute_slots, i as each, v as validate_component } from "../../../chunks/index3.js";
import { a as siteTitle } from "../../../chunks/config.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { w as writable } from "../../../chunks/index2.js";
import { s as schedule } from "../../../chunks/stores2.js";
import dayjs from "dayjs";
import { P as PageHeader } from "../../../chunks/PageHeader.js";
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { autocollapse = false } = $$props;
  let { duration = 200 } = $$props;
  let { width = "w-full" } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { disabled = false } = $$props;
  let { padding = "py-2 px-4" } = $$props;
  let { hover = "hover:bg-primary-hover-token" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { caretOpen = "rotate-180" } = $$props;
  let { caretClosed = "" } = $$props;
  let { regionControl = "" } = $$props;
  let { regionPanel = "space-y-4" } = $$props;
  let { regionCaret = "" } = $$props;
  const active = writable(null);
  setContext("active", active);
  setContext("autocollapse", autocollapse);
  setContext("duration", duration);
  setContext("disabled", disabled);
  setContext("padding", padding);
  setContext("hover", hover);
  setContext("rounded", rounded);
  setContext("caretOpen", caretOpen);
  setContext("caretClosed", caretClosed);
  setContext("regionControl", regionControl);
  setContext("regionPanel", regionPanel);
  setContext("regionCaret", regionCaret);
  if ($$props.autocollapse === void 0 && $$bindings.autocollapse && autocollapse !== void 0)
    $$bindings.autocollapse(autocollapse);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.caretOpen === void 0 && $$bindings.caretOpen && caretOpen !== void 0)
    $$bindings.caretOpen(caretOpen);
  if ($$props.caretClosed === void 0 && $$bindings.caretClosed && caretClosed !== void 0)
    $$bindings.caretClosed(caretClosed);
  if ($$props.regionControl === void 0 && $$bindings.regionControl && regionControl !== void 0)
    $$bindings.regionControl(regionControl);
  if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
    $$bindings.regionPanel(regionPanel);
  if ($$props.regionCaret === void 0 && $$bindings.regionCaret && regionCaret !== void 0)
    $$bindings.regionCaret(regionCaret);
  classesBase = `${width} ${spacing} ${$$props.class ?? ""}`;
  return `

<div class="${"accordion " + escape(classesBase, true)}" data-testid="accordion">${slots.default ? slots.default({}) : ``}</div>`;
});
const cBase = "";
const cControl = "text-left w-full flex items-center space-x-4";
const cControlCaret = "fill-current w-3 transition-transform duration-[200ms]";
const cPanel = "";
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let openState;
  let classesBase;
  let classesControl;
  let classesCaretState;
  let classesControlCaret;
  let classesPanel;
  let $$slots = compute_slots(slots);
  let $active, $$unsubscribe_active;
  const dispatch = createEventDispatcher();
  let { open = false } = $$props;
  let { id = String(Math.random()) } = $$props;
  let { autocollapse = getContext("autocollapse") } = $$props;
  let { active = getContext("active") } = $$props;
  $$unsubscribe_active = subscribe(active, (value) => $active = value);
  let { duration = getContext("duration") } = $$props;
  let { disabled = getContext("disabled") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { caretOpen = getContext("caretOpen") } = $$props;
  let { caretClosed = getContext("caretClosed") } = $$props;
  let { regionControl = getContext("regionControl") } = $$props;
  let { regionPanel = getContext("regionPanel") } = $$props;
  let { regionCaret = getContext("regionCaret") } = $$props;
  function setActive(event) {
    if (autocollapse === true) {
      active.set(id);
    } else {
      open = !open;
    }
    onToggle(event);
  }
  function onToggle(event) {
    const currentOpenState = autocollapse ? $active === id : open;
    dispatch("toggle", {
      event,
      id: `accordion-control-${id}`,
      open: currentOpenState,
      autocollapse
    });
  }
  if (autocollapse && open)
    setActive();
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.autocollapse === void 0 && $$bindings.autocollapse && autocollapse !== void 0)
    $$bindings.autocollapse(autocollapse);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.caretOpen === void 0 && $$bindings.caretOpen && caretOpen !== void 0)
    $$bindings.caretOpen(caretOpen);
  if ($$props.caretClosed === void 0 && $$bindings.caretClosed && caretClosed !== void 0)
    $$bindings.caretClosed(caretClosed);
  if ($$props.regionControl === void 0 && $$bindings.regionControl && regionControl !== void 0)
    $$bindings.regionControl(regionControl);
  if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
    $$bindings.regionPanel(regionPanel);
  if ($$props.regionCaret === void 0 && $$bindings.regionCaret && regionCaret !== void 0)
    $$bindings.regionCaret(regionCaret);
  {
    if (open && autocollapse)
      setActive();
  }
  openState = autocollapse ? $active === id : open;
  classesBase = `${cBase} ${$$props.class ?? ""}`;
  classesControl = `${cControl} ${padding} ${hover} ${rounded} ${regionControl}`;
  classesCaretState = openState ? caretOpen : caretClosed;
  classesControlCaret = `${cControlCaret} ${regionCaret} ${classesCaretState}`;
  classesPanel = `${cPanel} ${padding} ${rounded} ${regionPanel}`;
  $$unsubscribe_active();
  return `

<div class="${"accordion-item " + escape(classesBase, true)}" data-testid="accordion-item">
	<button type="button" class="${"accordion-control " + escape(classesControl, true)}" id="${"accordion-control-" + escape(id, true)}"${add_attribute("aria-expanded", openState, 0)} aria-controls="${"accordion-panel-" + escape(id, true)}" ${disabled ? "disabled" : ""}>
		${$$slots.lead ? `<div class="accordion-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``}
		
		<div class="accordion-summary flex-1">${slots.summary ? slots.summary({}) : `(summary)`}</div>
		
		<div class="${"accordion-summary-caret " + escape(classesControlCaret, true)}">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg></div></button>
	
	${openState ? `<div class="${"accordion-panel " + escape(classesPanel, true)}" id="${"accordion-panel-" + escape(id, true)}" role="region"${add_attribute("aria-hidden", !openState, 0)} aria-labelledby="${"accordion-control-" + escape(id, true)}">${slots.content ? slots.content({}) : `(content)`}</div>` : ``}</div>`;
});
const Schedule = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $schedule, $$unsubscribe_schedule;
  $$unsubscribe_schedule = subscribe(schedule, (value) => $schedule = value);
  const weekOfYear = () => {
    const workingDate = /* @__PURE__ */ new Date();
    const startDate = new Date(workingDate.getFullYear(), 0, 1);
    const days = Math.floor((workingDate - startDate) / (24 * 60 * 60 * 1e3));
    const weekNumber = Math.ceil(days / 7);
    return weekNumber;
  };
  $$unsubscribe_schedule();
  return `${each($schedule, (week, index) => {
    return `<section class="lg:my-2">${validate_component(Accordion, "Accordion").$$render(
      $$result,
      {
        rounded: "rounded-md",
        spacing: "space-y-3"
      },
      {},
      {
        default: () => {
          return `
      
      ${validate_component(AccordionItem, "AccordionItem").$$render($$result, { open: weekOfYear() == index + 36 }, {}, {
            content: () => {
              return `${each(week, (day) => {
                return `${day.type === "lesson" && day.status != "draft" ? `<div class="text-error-700 dark:text-warning-300 mt-1"><time class="font-bold">${escape(dayjs(day.date).format("dddd, MMM D"))}</time></div>
              <a href="${"courses/" + escape(day.code, true) + "/day-" + escape(day.day, true)}" class="hover:bg-primary-800/20 rounded-md block transition duration-150 ease-linear py-2 pl-2"><article class="${escape(day.code, true) + " lesson"}"><p>${escape(day.code.toUpperCase().replace("-", " "))} - Day ${escape(day.day)}</p>
                  <h3 class="text-primary-700 dark:text-primary-300 h4">${escape(day.title)}</h3></article>
              </a>` : `${day.status === "draft" ? `<div class="bg-gradient-to-r from-error-300 to-primary-400 bg-clip-text text-transparent mt-1"><time class="font-bold">${escape(dayjs(day.date).format("dddd, MMM D"))}</time></div>
              <article class="${escape(day.code, true) + " unpublished pl-2"}"><p>${escape(day.code.toUpperCase().replace("-", " "))} - Day ${escape(day.day)}</p>
                <h3 class="text-slate-500 h4">To be Announced</h3>
              </article>` : `<div class="bg-gradient-to-r from-error-300 to-primary-400 bg-clip-text text-transparent mt-1"><time class="font-bold">${escape(dayjs(day.date).format("dddd, MMM D"))}</time></div>
              <article class="holiday pl-2"><h3 class="text-slate-500">${escape(day.label)}</h3>
              </article>`}`}`;
              })}
        `;
            },
            summary: () => {
              return `<h2 class="h3" id="${"week-" + escape(index + 1, true)}">Week ${escape(index + 1)}</h2>
        `;
            }
          })}
    `;
        }
      }
    )}
  </section>`;
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-8f4hp6_START -->${$$result.title = `<title>${escape(siteTitle)}</title>`, ""}<!-- HEAD_svelte-8f4hp6_END -->`, ""}
<section class="max-w-4xl container mx-auto">${validate_component(PageHeader, "PageHeader").$$render(
    $$result,
    {
      title: "Program Schedule",
      description: "View the course content by week. Lesson content is published the evening before each day."
    },
    {},
    {}
  )}
  ${validate_component(Schedule, "Schedule").$$render($$result, {}, {}, {})}</section>`;
});
export {
  Page as default
};
