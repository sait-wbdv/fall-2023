---
title: Final Group Project - Open Data Implementation
type: assignment
points: 35
---

In this group assignment, you will work with your classmates to create a database-driven web application based on openly licensed data found online

**Grading**:

- Group mark: 25 points
- Peer evaluation: 10 points

---

## Marking Rubric

### 10 points: Database import

Create a database of information based on openly licensed data decided upon by your group. The data will need to be cleaned up and imported to Supabase.

**Requirements:**

- Each table should have a primary key named `id`;
- Foreign keys should end in `_id`;
- Table and column names should be lowercase with under scores;
- Column data types should reflect the data contained in the columns (for example, a column of numbers shouldn't have a data-type of `Text`);

### 5 points: Database Relations

One-to-many relationships built for

- Country
- Industry

**Requirements**

- `country` table with `country_id` column in `billionaire` table
  - `country_id` has foreign key to `country:id`
- `industry` table with `industry_id` column in `billionaire` table
  - `industry_id` has foreign key to `industry:id`

### 5 points: List entry and item endpoints

- Build a billionaire list entry route that displays a list of ranked billionaires;
- Build a dynamic item endpoint that lists details of individual billionaires.

Requirements

- Same requirements as [Achievement 7](/courses/cpnt-200/day-7#achievement)

### 5 points: Chartjs Implementation

Use [ChartJS](https://www.chartjs.org/) (or similar) to chart billionaires by ONE of the following:

- country
- industry
- age
- etc

**Requirements**
Examples would be similar to:

- [Bar Chart](https://www.chartjs.org/docs/latest/charts/bar.html)
- [Line Chart](https://www.chartjs.org/docs/latest/charts/line.html)
- [Doughnut Chart](https://www.chartjs.org/docs/latest/charts/doughnut.html)

### 10 points: Peer Evaluation

At the end of the Final Project, all team members must evaluate their teammates on a scale of 1-10. Each member's mark for this portion will be the average score given to them by their teammates.

- You must submit an evaluation to receive marks for this component;
- Evaluations will be submitted confidentially in Brightspace;
- Your Instructor will adjust this mark based on Assigned tasks (see below) plus commits submitted to GitHub.

### Group Charter (GH Project)

Due: Friday, March 31st @ 11:59pm

To facilitate group communication and transparency, submit a [GitHub Project Board](https://github.com/features/issues) with the following:

1. Board README listing Team members and general roles and responsibilities;
2. Agile columns (i.e. To do, Doing, Done)
3. At least two or three board cards converted to [Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) and [Assigned](https://docs.github.com/en/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users) to each team member that (as a group) each of you have committed to completing;
