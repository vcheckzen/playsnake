---
to: src/components/<%= name %>/<%= h.changeCase.lcFirst(name) %>.stories.tsx
---

import React from "react";
import <%= name %> from ".";
import "story.css"

export default {
  title: "Components/<%= name %>",
  component: <%= name %>,
};

export const Default = () => <<%= name %>>Default</<%= name %>>;