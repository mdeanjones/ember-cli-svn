'use strict';

const expect = require('chai').expect;
const MockCLI = require('../helpers/mock-cli');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Project = require('ember-cli/lib/models/project');
const path = require('path');


class SVNProject extends Project {
  discoverAddons() {
    let addonsList = this.addonDiscovery.discoverProjectAddons(this);

    addonsList.push({
      name: 'ember-cli-svn',
      path: process.cwd(),
      pkg: {
        'ember-addon': {},
      },
    });

    this.addonPackages = this.addonDiscovery.addonPackages(addonsList);
  }
}


describe('Addon', function() {
  let project, projectPath;

  function setupProject(rootPath) {
    const packageContents = require(path.join(rootPath, 'package.json'));
    let cli = new MockCLI();

    project = new SVNProject(rootPath, packageContents, cli.ui, cli);

    return project;
  }


  it('inherits svnDependencies from it\'s parent', function() {
    projectPath = path.resolve(__dirname, '../fixtures/apps/with-deps');
    project = setupProject(projectPath);

    new EmberApp({ project });

    const addon = project.addons.find(addon => addon.name === 'ember-cli-svn');

    expect(addon).to.have.deep.property('pkg.dependencies.addon-one');
    expect(addon).to.have.deep.property('pkg.dependencies.addon-two');
  });
});
