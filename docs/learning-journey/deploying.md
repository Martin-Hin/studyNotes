---
sidebar_position: 3
---

# Deploying 

### How to deploy on Github

Find below the steps required to prepare docusaure to be deployed on github pages and how to automate the
process with github workflow in order to deploy automatically the latest version of the main branch.

### Setup github workflow 

To automate the workflow a `yml` file has to be written and instructions set. In `yml` file we declare the event the jobs and the steps that should be taken. In my case the event is when the new changes are pushed to the main branch. This deploys the new code on Github automatically following a set of steps.

#### How Deployment actually works 

