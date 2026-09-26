# Task Management System — Test Cases

## Test Case Summary

This document contains the major manual and automated test cases executed
against the Task Management System.

---

## Authentication

### TC-001 — Valid User Login

**Precondition:** Valid USER account exists.

**Steps:**
1. Open the application.
2. Enter valid email.
3. Enter valid password.
4. Click Login.

**Expected Result:**
User successfully logs in and the dashboard is displayed.

**Result:** PASS

**Automation:** AUTO-001

---

### TC-002 — Invalid Password

**Steps:**
1. Open the login page.
2. Enter a valid email.
3. Enter an incorrect password.
4. Click Login.

**Expected Result:**
Login is rejected and an error message is displayed.

**Result:** PASS

**Automation:** AUTO-002

---

### TC-003 — Logout

**Steps:**
1. Login with valid credentials.
2. Click Logout.

**Expected Result:**
User session ends and the login page is displayed.

**Result:** PASS

**Automation:** AUTO-003

---

### TC-004 — Change Password With Wrong Current Password

**Expected Result:**
Password change is rejected.

**Result:** PASS

---

### TC-005 — Change Password Successfully

**Expected Result:**
Password is changed successfully.
New password works and old password no longer works.

**Result:** PASS

---

## Authorization and Permissions

### TC-006 — USER Accesses Admin User Management

**Expected Result:**
Normal USER is denied access.

**Result:** PASS

**Automation:** AUTO-004

---

### TC-007 — USER Accesses Create Task

**Expected Result:**
Normal USER is denied access.

**Result:** PASS

**Automation:** AUTO-005

---

### TC-008 — User Task Isolation

**Steps:**
1. Login as QA User Three.
2. Open Tasks.
3. Check visible tasks.

**Expected Result:**
User sees only tasks assigned to that user.

**Result:** PASS

**Automation:** AUTO-006

---

### TC-009 — Protected API Without Token

**Expected Result:**
API returns 401 Unauthorized.

**Result:** PASS

**Automation:** AUTO-010

---

### TC-010 — Protected API With Invalid Token

**Expected Result:**
API returns 401 Unauthorized.

**Result:** PASS

**Automation:** AUTO-011

---

## User Management

### TC-011 — Admin Creates User

**Expected Result:**
Admin can create a new user.

**Result:** PASS

---

### TC-012 — Public Self-Registration

**Expected Result:**
Unauthenticated users should not be able to create accounts because
account provisioning is intended to be controlled by Admin.

**Actual Result:**
Public registration successfully creates a USER account.

**Result:** FAIL

**Defect:** BUG-001

---

### TC-013 — Normal USER Requests User List

**Expected Result:**
Access is denied.

**Actual Result:**
403 Forbidden.

**Result:** PASS

---

## Task Management

### TC-014 — Supervisor Creates Task Through API

**Expected Result:**
Task is successfully created and assigned.

**Result:** PASS

---

### TC-015 — Supervisor Loads Assignable Users From Create Task UI

**Expected Result:**
Supervisor can load users available for task assignment.

**Actual Result:**
User loading fails because the Supervisor receives 403 when the UI
requests the users endpoint.

**Result:** FAIL

**Defect:** BUG-002

---

### TC-016 — Assigned User Receives Task

**Expected Result:**
Assigned task appears for the correct user.

**Result:** PASS

---

### TC-017 — Update Task Progress

**Expected Result:**
Assigned user can update task progress.

**Result:** PASS

**Automation:** AUTO-007

---

### TC-018 — Progress Below Valid Boundary

**Input:** -1

**Expected Result:**
Invalid progress is rejected.

**Result:** PASS

---

### TC-019 — Progress Above Valid Boundary

**Input:** 101

**Expected Result:**
Invalid progress is rejected.

**Result:** PASS

---

## Task Approval Workflow

### TC-020 — Submit Completed Task

**Expected Result:**
Task is submitted for Supervisor review.

**Result:** PASS

---

### TC-021 — Supervisor Receives Submission Notification

**Expected Result:**
Supervisor receives task submission notification.

**Result:** PASS

---

### TC-022 — Supervisor Approves Task

**Expected Result:**
Task status changes to APPROVED.

**Result:** PASS

---

### TC-023 — User Receives Approval Notification

**Expected Result:**
Assigned user receives task approval notification.

**Result:** PASS

---

## Task Rejection Workflow

### TC-024 — Supervisor Rejects Submitted Task

**Expected Result:**
Task is rejected and user is notified.

**Result:** PASS

---

### TC-025 — User Receives Rejection Notification

**Expected Result:**
User receives task rejection notification.

**Result:** PASS

---

### TC-026 — Task Status Consistency After Rejection/Resubmission

**Expected Result:**
Task status displayed to the USER should match the actual backend
task status and Supervisor view.

**Actual Result:**
Backend/Supervisor reports SUBMITTED while USER UI displays COMPLETED.

**Result:** FAIL

**Defect:** BUG-003

---

## Comments

### TC-027 — Empty Comment

**Expected Result:**
Empty comment is rejected.

**Result:** PASS

**Automation:** AUTO-008

---

### TC-028 — Valid Comment

**Expected Result:**
Comment is successfully saved.

**Result:** PASS

**Automation:** AUTO-009

---

### TC-029 — Comment Notification

**Expected Result:**
Relevant users receive a notification when another involved user
adds a comment.

**Result:** PASS

---

## File Attachments

### TC-030 — Valid Attachment

**Expected Result:**
Valid file is uploaded successfully.

**Result:** PASS

---

### TC-031 — Invalid Attachment

**Expected Result:**
Invalid file is rejected.

**Result:** PASS

---

### TC-032 — Attachment Persistence

**Expected Result:**
Uploaded attachment remains available after refresh.

**Result:** PASS

---

## Search and Filtering

### TC-033 — Search Existing Task

**Expected Result:**
Matching task is displayed.

**Result:** PASS

---

### TC-034 — Search Nonexistent Task

**Expected Result:**
No matching tasks are displayed.

**Result:** PASS

---

### TC-035 — Status Filter

**Expected Result:**
Only tasks matching selected status are displayed.

**Result:** PASS

---

### TC-036 — Priority Filter

**Expected Result:**
Only tasks matching selected priority are displayed.

**Result:** PASS

---

### TC-037 — Combined Search and Filter

**Expected Result:**
Results satisfy both search and filter criteria.

**Result:** PASS

---

## Notifications

### TC-038 — New Task Notification

**Expected Result:**
Assigned user receives notification.

**Result:** PASS

---

### TC-039 — Mark Notification Read

**Expected Result:**
Notification state and unread count update correctly.

**Result:** PASS

---

## UI / Compatibility

### TC-040 — Responsive UI

**Expected Result:**
Application remains usable at tested screen sizes.

**Result:** PASS

---

### TC-041 — Cross-Browser Sanity

**Expected Result:**
Core application functionality remains usable in tested browsers.

**Result:** PASS

---

## Current Results

Confirmed failed test cases:

- TC-012 → BUG-001
- TC-015 → BUG-002
- TC-026 → BUG-003

All other test cases documented above passed during the executed QA cycle.

## Automated Regression Coverage

Current Playwright automation:

- AUTO-001 — Valid login
- AUTO-002 — Invalid password
- AUTO-003 — Logout
- AUTO-004 — USER blocked from Admin user management
- AUTO-005 — USER blocked from Create Task
- AUTO-006 — User task isolation
- AUTO-007 — Progress update
- AUTO-008 — Empty comment validation
- AUTO-009 — Valid comment
- AUTO-010 — Missing API token
- AUTO-011 — Invalid API token