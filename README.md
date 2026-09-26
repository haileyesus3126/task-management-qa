# Task Management System — QA Test Plan

## 1. Project Overview

The Task Management System is a web application used to manage users,
assign tasks, track task progress, submit tasks for review, approve or
reject tasks, communicate through comments, and receive notifications.

The system uses role-based access for:

- ADMIN
- SUPERVISOR
- USER

## 2. Objective

The objective of this QA project is to verify that the Task Management
System works according to its expected business rules and that important
workflows are reliable and secure.

The testing focuses on:

- Authentication
- Authorization
- Role permissions
- Task management
- Task assignment
- Task progress
- Task submission
- Approval and rejection
- Comments
- Notifications
- File attachments
- Search and filters
- API security
- Data consistency
- UI behavior

## 3. Application Architecture

Frontend:
React

Backend:
Node.js + Express.js

Database:
MongoDB

Authentication:
JWT

API:
REST API

Automation:
Playwright

## 4. Testing Types

The project includes:

- Functional Testing
- Manual Testing
- API Testing
- Authentication Testing
- Authorization Testing
- Role-Based Access Testing
- Integration Testing
- End-to-End Testing
- Negative Testing
- Validation Testing
- UI Testing
- Responsive Testing
- Cross-Browser Testing
- Basic Security Testing
- Regression Testing
- Automated Testing

## 5. Test Environment

Frontend:
https://task-management-app-nine-coral.vercel.app/

Backend:
https://task-management-app-backend-fmye.onrender.com

Automation Framework:
Playwright

Browser used for the main automation run:
Chromium

Additional browsers available:
Firefox
WebKit

## 6. Roles Tested

### ADMIN

Responsible for administrative functionality and user management.

### SUPERVISOR

Responsible for assigning and reviewing tasks.

### USER

Responsible for viewing assigned tasks, updating progress,
submitting work, adding comments, and interacting with assigned tasks.

## 7. Major Workflows Tested

### Authentication

Login → Dashboard → Logout

### Task Approval Workflow

Supervisor creates task
→ User receives task
→ User updates progress
→ User submits task
→ Supervisor receives notification
→ Supervisor reviews task
→ Supervisor approves task
→ User receives approval notification

### Task Rejection Workflow

User submits task
→ Supervisor reviews task
→ Supervisor rejects task
→ User receives rejection notification
→ User continues working on task

## 8. Permission Testing

Testing verifies that users cannot access functionality outside
their assigned role.

Examples:

- USER cannot access administrative user management.
- USER cannot access task creation functionality.
- USER should only see tasks assigned to them.
- Protected API endpoints require authentication.

## 9. API Testing

API testing includes:

- Authentication
- Missing token
- Invalid token
- Role permissions
- User access
- Task access
- Validation
- Error responses

Expected HTTP responses include:

- 200 OK
- 201 Created
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden

## 10. Automation Scope

Playwright automation currently covers:

- Valid login
- Invalid login
- Logout
- User permissions
- Task permissions
- Task isolation
- Progress updates
- Comment validation
- Valid comments
- Missing-token API security
- Invalid-token API security

## 11. Defect Management

When a defect is found:

1. Reproduce the issue.
2. Verify the expected behavior.
3. Record reproduction steps.
4. Record expected result.
5. Record actual result.
6. Assign severity.
7. Keep the defect open until fixed.
8. Retest after the fix.
9. Run regression testing.

## 12. Known Defects

Three confirmed defects were identified during testing:

- BUG-001 — Public registration allows unauthorized self-registration.
- BUG-002 — Supervisor cannot load assignable users on the Create Task page.
- BUG-003 — User UI displays a task status inconsistent with the backend/Supervisor view.

Full details are maintained in:

`docs/bug-reports.md`

## 13. Exit Criteria

The testing phase can be considered complete when:

- Critical workflows have been tested.
- Major role permissions have been verified.
- Important API security behavior has been tested.
- Automated regression tests are running successfully.
- Confirmed defects are documented.
- Test results are documented.
- Known defects are clearly communicated before release.

Open defects do not automatically mean testing is incomplete.
They must be documented, fixed when prioritized, retested, and included
in regression testing.