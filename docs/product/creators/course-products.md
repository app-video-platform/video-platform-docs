---
title: Course Products
sidebar_position: 4
---

# Course Products

## Overview

Course products let creators organize learning content into sections and lessons.

The current course builder supports creating a course structure. Some lesson content editors are still incomplete, so creators should treat course lesson content as partially implemented.

## Who can use this

This page is for Creators configuring Course products.

## What you can do

Creators can currently:

- Create a Course product from the shared product creation flow.
- Add course sections.
- Edit section titles and descriptions.
- Move sections up or down where ordering controls are shown.
- Remove sections.
- Add lessons inside a section.
- Edit lesson titles and descriptions.
- Select lesson types.
- Move lessons up or down where ordering controls are shown.
- Remove lessons.
- Navigate between sections and lessons from the builder sidebar after they exist.
- Create quiz questions in the quiz editor interface.

Available lesson types in the lesson selector are:

- Video
- Article
- Quiz

## How it works

### Sections

Course content is organized into sections. A section can have a title and description.

Creators add sections explicitly with the Add section surface. Once a section has the required title, it can be created and then edited. Existing sections can be renamed, described, reordered, or removed.

Section title and description changes save after a two-second pause, with entity writes sequenced. Lesson autosave remains separate. Section reordering uses its own queued order save and shows Saving/error feedback. If it fails, use **Retry order save**; the error clears after the relevant whole order saves successfully. Some positions may already have saved when another fails, so retry is needed to finish the order; there is no all-or-nothing save or automatic rollback. Deletion waits for relevant pending edits and then saves the remaining order. Workspace controls wait for registered nested detail saves; this does not add a guarantee for every independent order write or forced navigation. See [Save behavior](./creating-a-product.md#save-behavior) for navigation and browser-close limits.

### Lessons

Lessons are added explicitly inside sections. A lesson needs a title and lesson type before it becomes a created lesson.

After a lesson exists, creators can edit the lesson description and choose the content area for the selected lesson type.

### Video lessons

Video lessons show a video file selector. The selected filename stays visible during ordinary title/description edits and editor updates; explicit removal or replacement still changes the selection, and closing the editor does not promise to retain a File object. Selection is not an upload or playable media: Course video persistence/delivery remains backend-pending.

### Article lessons

Article lessons show a rich text editor for writing article content.

Reopening an Article editor uses its latest saved body and formatting. Opening it without editing does not itself save a replacement body. Ordinary workspace updates preserve active typing. If saved structured content uses an unsupported format, the editor explains that the body has been preserved rather than replacing it with starter text.

The Course reader displays supported saved Article formatting, including paragraphs, bold text, lists and allowed links, rather than editor serialization. Supported older HTML is sanitized and older plain text is displayed safely. Empty, malformed or unsupported structured content is omitted, not displayed as raw JSON. Formatting support is limited to the supported editor formats; it does not change who may read private lesson bodies.

### Quiz lessons

Quiz lessons show a quiz editor. Creators can configure:

- Passing score.
- Total points.
- Automatic or manual point distribution.
- Multiple-choice single-answer questions.
- Multiple-choice multi-answer questions.
- True/false questions.
- Answer options.
- Question explanations.
- Answer shuffling.
- Question order controls.

In **Auto-Split**, Total points accepts positive whole numbers and immediately updates question allocations. Uneven totals give extra points to earlier questions: 100 across three questions becomes 34, 33, 33. Invalid totals show feedback while retaining the previous valid allocation. If there are more questions than points, later questions can receive zero points.

In **Manual Split**, edit each question's points; the displayed total is calculated from their sum. Returning to Auto-Split redistributes that total. Passing Score keeps its existing behavior. Each question has its own Points and Explanation label/field association, plus named Move up/down and Remove controls. Moving/removing questions keeps those associations intact.

These are authoring controls. Normal Lesson saving does not establish dedicated Quiz-definition persistence or a complete learner assessment workflow; the builder's end-to-end integration with those separate contracts remains unverified.

### Builder navigation

The builder sidebar lists sections and lessons after they exist. Selecting an item moves the creator back to the Sections area and scrolls to that section or lesson.

### Readiness

Course readiness requires at least one section and at least one lesson. Product media warnings, such as a missing thumbnail, are separate from Course curriculum blockers.

## Current limitations

- Video file selection is visible, but video upload and persistence are not complete.
- Article content is persisted through the current lesson content path, but the complete customer learning/player flow is still limited.
- The backend persists Quiz definitions, questions, options, scoring rules, and attempts. The current frontend builder/player integration is not yet verified as a complete customer Quiz workflow.
- Assignment content is not a usable lesson type in the current selector. Do not document Assignment as supported.
- Course products can be structured, but they are not yet a complete customer learning experience with reliable media, article, and quiz delivery.

## Related pages

- [Creating a Product](./creating-a-product.md)
- [Managing Products](./managing-products.md)
- [Download Products](./download-products.md)
- [Consultation Products](./consultation-products.md)
- [Membership Products](./membership-products.md)
- [Current Platform Status](../start-here/current-platform-status.md)
