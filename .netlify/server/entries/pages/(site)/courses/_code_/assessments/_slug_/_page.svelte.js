import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h2>${escape(data.meta.code.replace("-", " ").toUpperCase())}</h2>
<h1>${escape(data.meta.title)}</h1>
<p><strong>Weight:</strong> ${escape(data.meta.points)}%</p>
${data.meta.due ? `<p><strong>Due:</strong> <time${add_attribute("datetime", data.meta.due, 0)}>${escape(data.meta.due)}</time></p>
  <p><strong>Late Penalty:</strong> 10% deduction for each day late. Submissions will not be accepted more than three days late.</p>` : `<p>Due: TBA</p>`}

${data.meta.status === "draft" ? `<p>This assessment has not been released.</p>` : `<!-- HTML_TAG_START -->${data.content}<!-- HTML_TAG_END -->`}`;
});
export {
  Page as default
};
