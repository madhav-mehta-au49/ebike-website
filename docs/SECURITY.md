# Security
No authentication, roles, API mutations, uploads or secrets are required by this version.
No personal information is collected. Dialogs disclose that bookings are not sent. Do not imply delivery or store enquiry information without an approved flow.
Keep credentials out of code, docs and screenshots; .env files are ignored.
Metadata disallows indexing while this remains a concept. This is a crawler directive, not access control.
If a booking endpoint is introduced: validate input server-side, rate-limit requests, avoid logging contact details, define retention and use a server-side provider secret.
Before public launch: review dependencies, real legal copy, image rights, actual business claims, HTTPS and hosting access.
