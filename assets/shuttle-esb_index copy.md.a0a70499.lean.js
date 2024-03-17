import { r as resolveComponent, o as openBlock, c as createElementBlock, e as createVNode, a as createBaseVNode, b as createTextVNode } from "./app.b950f06e.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "test",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Test "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#test",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "page-truetitle-home",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("page: true title: Home "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#page-truetitle-home",
    "aria-hidden": "true"
  }, "#")
], -1);
const __pageData = JSON.parse('{"title":"Test","description":"","frontmatter":{},"headers":[{"level":2,"title":"page: truetitle: Home","slug":"page-truetitle-home","link":"#page-truetitle-home","children":[]}],"relativePath":"shuttle-esb/index copy.md"}');
const __default__ = { name: "shuttle-esb/index copy.md" };
const _sfc_main = Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Home = resolveComponent("Home");
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        _hoisted_3,
        createVNode(_component_Home)
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
