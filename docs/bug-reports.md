# Task Management System — Bug Reports

## BUG-001 — Public Registration Allows Unauthorized Self-Registration

**Status:** Open  
**Severity:** High  
**Area:** Authentication / Authorization

### Description

The application is intended to use Admin-controlled account provisioning.
However, the public registration API allows an unauthenticated person to
create a USER account.

### Preconditions

- User is not authenticated.
- No JWT token is provided.

### Steps to Reproduce

1. Send a POST request to `/api/auth/register`.
2. Provide a valid name, email, and password.
3. Send the request without an authentication token.

### Expected Result

Public account creation should not be allowed.
Users should be created through the authorized Admin user-management flow.

### Actual Result

The API returns `201 Created`.
A USER account is created and an authentication token is returned.

### Impact

An unauthenticated person can create an account and immediately obtain
authenticated USER access.

### Recommendation

Disable public registration and keep account creation behind the
Admin-authorized user-management endpoint.

---

## BUG-002 — Supervisor Cannot Load Assignable Users

**Status:** Open  
**Severity:** High  
**Area:** Task Management / Authorization

### Description

The Supervisor Create Task page needs a list of users so that a task can
be assigned. The UI attempts to retrieve users, but the Supervisor role
does not have permission to access the users endpoint.

### Preconditions

- Login as SUPERVISOR.
- Open the Create Task page.

### Steps to Reproduce

1. Login as Supervisor.
2. Navigate to Create Task.
3. Wait for the user/assignee list to load.

### Expected Result

Supervisor should be able to retrieve the users that are eligible for
task assignment.

### Actual Result

The request to the users endpoint returns `403 Forbidden`.

The UI displays:

`Failed to load users. Please try again.`

### Impact

Supervisor cannot normally select an assignee and create a task through
the frontend.

### Recommendation

Provide Supervisors with an authorized way to retrieve assignable users,
while keeping administrative user-management operations restricted.

---

## BUG-003 — USER UI Displays Task Status Inconsistent With Backend

**Status:** Open  
**Severity:** Medium  
**Area:** Task Workflow / UI / Data Consistency

### Description

During rejection/resubmission workflow testing, the same task displayed
different statuses between the USER interface and the backend/Supervisor
view.

### Steps to Reproduce

1. Assign a task to a USER.
2. Complete and submit the task.
3. Login as Supervisor.
4. Reject the task.
5. Login as the assigned USER.
6. Continue the task workflow and update progress.
7. Compare the USER UI status with the backend/Supervisor status.

### Expected Result

The task status displayed to the USER should match the actual backend
state and the status displayed to the Supervisor.

### Actual Result

USER UI displayed:

`COMPLETED`

Backend/Supervisor displayed:

`SUBMITTED`

### Impact

Users can receive incorrect information about the current workflow state
of a task.

### Recommendation

Use the backend task status as the consistent source of truth and ensure
the frontend maps and displays task states correctly.

---

# Defect Summary

| ID | Defect | Severity | Status |
|---|---|---|---|
| BUG-001 | Unauthorized public self-registration | High | Open |
| BUG-002 | Supervisor cannot load assignable users | High | Open |
| BUG-003 | Inconsistent task status display | Medium | Open |

These defects remain open and are planned for correction followed by
retesting and regression testing.