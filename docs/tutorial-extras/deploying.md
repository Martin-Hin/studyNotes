---
sidebar_position: 3
---

# Deploying 

### How to deploy on Github

Find below the steps required to prepare docusaure to be deployed on github pages and how to automate the
process with github workflow in order to deploy automatically the latest version of the main branch.

### Setup github workflow 

To automate the workflow a `yml` file has to be written and instructions set. In `yml` file we declare the event the jobs and the steps that should be taken. In my case the event is when the new changes are pushed to the main branch. This deploys the new code on Github automatically following a set of steps.

### How Deployment actually works 

There are always two branches involved in the publishing process. One has the source code and the other has the build that is served by github pages.
In my configuration I set gh-pages as the branch that has the deploy ready files in the root folder. These files can also be called the build of the artefact.
Environment settings are also very important because if not done correctly the site will not deploy. 

### GitHub actions

GitHub actions allows for the customization and the automation of specific processes and execution of software within the repository. More info on this link [GitHub actions](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions)
In my case the trigger is caused when new changes are pushed to the main branch. The site builds in the gh-pages branch and is deployed from there, this is in my case the deploy branch.
