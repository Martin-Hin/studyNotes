---
sidebar_position: 4
---

# Git

Here are the most relevant git commands to get started as a developer.


## Git commands to use

### Git clone

```bash
git clone <http: // name-of-the-repository-link>
```
The command above allows a developer to download a project from a remote repository. If the remote repository is on Github, navigate to the repository and click on the clone or download repository button on the top left and paste the link on the on the git command above. This copies the file onto the local workspace and are ready to be worked on.


### Git branch

Branches are important so that several developers are able to work in parallel on the same project. For creating a new 

#### Create new branch

```bash
git branch <branch name>
```

The command creates a new branch on the local repository.

### Git push

````bash
git push -u <remote> <branch-name>
````
The command above will push the new branch into a remote repository.

### git branch or git branch --list

```bash 
git branch 
git branch --list
```
The command above will allow the developer to view all the branches.

### Deleting a branch

```bash
git branch -d <branch-name> 
```
The command above allows the developer to delete a branch from the local repository when it is no longer needed.


### Commit

```bash
git commit -m "my mesage"
```

### Git add

```bash
git add
```
The command above adds files to the staging area.
