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

Section title, description, and position changes are saved after the section exists.

### Lessons

Lessons are added explicitly inside sections. A lesson needs a title and lesson type before it becomes a created lesson.

After a lesson exists, creators can edit the lesson description and choose the content area for the selected lesson type.

### Video lessons

Video lessons show a video file uploader. Creators can select a video file in the editor.

### Article lessons

Article lessons show a rich text editor for writing article content.

Article content is saved through the current lesson service path as serialized rich-text content. This is separate from durable Course lesson video storage.

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
