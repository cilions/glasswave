"use client";

import {
  TypographyBlockquote,
  TypographyH3,
  TypographyInlineCode,
  TypographyLead,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function TypographyPreview() {
  return (
    <ComponentPreview label="Typography">
      <div className="flex max-w-md flex-col gap-4 text-left">
        <TypographyH3>Section title</TypographyH3>
        <TypographyLead>Lead text introduces a section with relaxed emphasis.</TypographyLead>
        <TypographyP>
          Body copy uses comfortable line height. Use <TypographyInlineCode>TypographyInlineCode</TypographyInlineCode> for
          inline snippets.
        </TypographyP>
        <TypographyBlockquote>Quotes stand out with a subtle left border.</TypographyBlockquote>
        <TypographySmall>Small caption text</TypographySmall>
        <TypographyMuted>Muted supporting text for hints and meta.</TypographyMuted>
      </div>
    </ComponentPreview>
  );
}
