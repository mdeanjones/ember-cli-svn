# ember-cli-svn
--------------------------------------------------

[![Build Status](https://travis-ci.org/mdeanjones/ember-cli-svn.svg?branch=master)](https://travis-ci.org/mdeanjones/ember-cli-svn)


Yes it is very old hat, but sometimes you just can't avoid Subversion. There are several tools that allow you to define
SVN dependencies in your package, which is great, but Ember-CLI only inspects `dependencies` and `devDependencies` for
addons that it should include in a build. This plugin aims to get around that by inspecting the parent application's
package, and masquerading any `svnDependencies` as its own `dependencies`. It's not perfect, but - generally speaking -
it seems to get the job done.


## Installation
```
npm install --save-dev ember-cli-svn
```
