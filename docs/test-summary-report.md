# Task Management System — QA Test Summary Report

## Project

Task Management System

## QA Objective

Verify the quality of the application across authentication,
authorization, task workflows, API behavior, validation, notifications,
comments, attachments, UI behavior, and role-based permissions.

## Technology

- React
- Node.js
- Express.js
- MongoDB
- REST API
- JWT
- Playwright

## Testing Performed

Testing included:

- Manual functional testing
- Authentication testing
- Authorization testing
- Role/permission testing
- API testing
- Integration testing
- End-to-end workflow testing
- Negative testing
- Validation testing
- UI testing
- Responsive testing
- Cross-browser sanity testing
- Basic security testing
- Playwright automation

## Major Workflows Verified

### Authentication

Valid login, invalid login, logout, and password change were tested.

### Task Assignment

Task assignment and user task isolation were tested.

### Task Progress

Users were able to update assigned task progress.

Invalid progress boundaries were rejected.

### Approval Workflow

Supervisor creates task
→ User receives task
→ User updates progress
→ User submits task
→ Supervisor receives notification
→ Supervisor approves task
→ User receives approval notification.

The tested happy path completed successfully.

### Rejection Workflow

Task rejection and rejection notification worked.

A UI/backend status inconsistency was discovered during this workflow
and recorded as BUG-003.

### Comments

Empty comment validation, valid comments, and comment notifications
were tested.

### Attachments

Valid upload, invalid upload rejection, and persistence were tested.

### Search and Filters

Search, status filtering, priority filtering, and combined filtering
were tested.

### Permissions

Role-based restrictions were tested for USER, SUPERVISOR, and ADMIN
workflows.

## Automation Results

Playwright automation was implemented for 11 core scenarios:

| ID | Automated Test | Result |
|---|---|---|
| AUTO-001 | Valid login | PASS |
| AUTO-002 | Invalid password | PASS |
| AUTO-003 | Logout | PASS |
| AUTO-004 | USER blocked from Admin users page | PASS |
| AUTO-005 | USER blocked from Create Task | PASS |
| AUTO-006 | User sees only assigned tasks | PASS |
| AUTO-007 | Assigned user updates progress | PASS |
| AUTO-008 | Empty comment rejected | PASS |
| AUTO-009 | Valid comment added | PASS |
| AUTO-010 | Missing API token rejected | PASS |
| AUTO-011 | Invalid API token rejected | PASS |

## Confirmed Defects

Three defects remain open:

### BUG-001 — High

Public registration allows unauthorized self-registration.

### BUG-002 — High

Supervisor cannot load assignable users on the Create Task page.

### BUG-003 — Medium

USER UI can display a task status inconsistent with the backend and
Supervisor view.

## Current QA Status

The executed Playwright regression tests are passing.

However, this does not mean the application is defect-free.

Three known defects remain open and are documented in:

`docs/bug-reports.md`

## Next Actions

1. Fix BUG-001.
2. Fix BUG-002.
3. Fix BUG-003.
4. Retest each defect.
5. Run the Playwright regression suite.
6. Verify no existing functionality was broken.
7. Update defect status and final test report.

## Conclusion

The major application workflows were tested through manual, API,
permission, integration, end-to-end, and automated testing.

Core tested workflows are functioning, while three confirmed defects
remain documented for correction and regression testing.