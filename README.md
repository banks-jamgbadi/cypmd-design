# CYPMD Design Prototype

This repository contains a GOV.UK Prototype Kit prototype for the CYPMD service design work. It includes example screens for admin dashboards, publication flows, change requests, egress runs, and status pages.

## Requirements

- Node.js 18 or later
- npm

## Run the prototype locally

1. Open a terminal in the project folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the prototype:
   ```bash
   npm run dev
   ```
4. Open the prototype in your browser at:
   ```text
   http://localhost:3000
   ```
5. To stop the server, press Ctrl+C in the terminal.

If you are running this on a Windows machine, PowerShell or Command Prompt will work as long as you are in the repository root before running the commands above.

## Useful commands

- `npm run dev` - start the prototype in development mode
- `npm run serve` - serve the prototype
- `npm run start` - start the prototype

## Prototype navigation

The prototype is organised around a few main journeys. You can open these pages directly in the browser once the local server is running.

### Home and overview

- `/` - landing page for the prototype
- `/check-data` - check data screen
- `/eligible-schools` - eligible schools view

### Change request journey

- `/change-request/type` - start a change request
- `/change-request/add-pupil/identity` - identity check step
- `/change-request/add-pupil/cohort` - cohort selection step
- `/change-request/add-pupil/evidence` - evidence upload step
- `/change-request/add-pupil/confirm` - confirmation step
- `/change-request/add-pupil/submitted` - submitted state

### Admin publication flow

- `/admin-publication/review-all-schools` - review all schools
- `/admin-publication/review` - review a publication item
- `/admin-publication/processing` - processing state
- `/admin-publication/publishing` - publishing state
- `/admin-publication/complete` - completion state
- `/admin-publication/validating` - validation state
- `/admin-publication/validation-passed` - validation passed
- `/admin-publication/validation-failed` - validation failed


### Admin egress flow

- `/admin-egress/runs` - egress runs history
- `/admin-egress/pull` - pull data step
- `/admin-egress/results` - results screen
- `/admin-egress/preprocessing` - preprocessing screen
- `/admin-egress/summary` - summary screen
- `/admin-egress/complete` - complete screen


### Audit log
- `/audit-log` - audit log view


### Dashboard and status pages

- `/admin-dashboard` - admin dashboard
- `/logged-in` - logged-in state
- `/logged-in-not-submitted` - logged-in but not submitted
- `/not-logged-in` - not logged-in state
- `/submitted-amendments` - submitted amendments
- `/requiring-scrutiny` - requiring scrutiny
- `/total-amendment-requests` - total amendment requests
- `/auto-approved` - auto approved
- `/auto-rejected` - auto rejected

## Project structure

- `app/views/` - HTML page templates
- `app/assets/` - CSS and JavaScript assets
- `app/routes.js` - route definitions for the prototype journeys
- `app/config.json` - prototype configuration
- `package.json` - project dependencies and scripts

## Notes

This prototype is built with the GOV.UK Prototype Kit and GOV.UK Frontend. Some journeys are wired with form submissions and redirects, so following the page flow in the browser will usually take you through the intended steps.
