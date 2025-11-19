/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "category",
      label: "Overview",
      link: { type: "generated-index" },
      items: [
        "overview/intro",
        "overview/quickref",
        "overview/faq"
      ],
    },

    {
      type: "category",
      label: "NAP 9 Covenant",
      link: { type: "generated-index" },
      items: [
        "nap9/nap9-introduction",
        "nap9/nap9-membership",
        "nap9/nap9-council",
        "nap9/nap9-clerks",
        "nap9/nap9-communication",
        "nap9/nap9-evidence",
        "nap9/nap9-voting",
        "nap9/nap9-offenses",
        "nap9/nap9-escalation",
        "nap9/nap9-tagdrop",
        "nap9/nap9-land",
        "nap9/nap9-case-processing",
        "nap9/nap9-appeals",
        "nap9/nap9-optout-expulsion",
        "nap9/nap9-amendments",
      ],
    },

    {
      type: "category",
      label: "Operational Guides",
      link: { type: "generated-index" },
      items: [
        "guides/guide-clerks",
        "guides/guide-council",
        "guides/guide-delegates",
        "guides/guide-new-alliance",
      ],
    },

    {
      type: "category",
      label: "NAP Philosophy",
      link: { type: "generated-index" },
      items: [
        "philosophy/philosophy-core",
        "philosophy/philosophy-governance",
        "philosophy/philosophy-design",
      ],
    },

    {
      type: "category",
      label: "Meta",
      link: { type: "generated-index" },
      items: [
        "meta/meta-changelog",
        "meta/meta-credits",
      ],
    },
  ],
};

module.exports = sidebars;
