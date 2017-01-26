/* eslint-disable no-var */

module.exports = {
  name: 'ember-cli-svn',


  dependencies() {
    const dependencies = {};
    const svnDependencies = this.parent.pkg.svnDependencies;

    if (svnDependencies) {
      Object.keys(svnDependencies).forEach((key) => {
        const tagIdx = key.indexOf('@');
        const value = svnDependencies[key];
        key = tagIdx === -1 ? key : key.substring(0, tagIdx);

        dependencies[key] = value;
      });
    }

    this.pkg = this.pkg || {};
    this.pkg.dependencies = dependencies;

    return {};
  },
};
