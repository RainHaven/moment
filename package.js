Package.describe({
  name: 'rainhaven:moment',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('rainhaven:moment.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rainhaven:moment');
  api.addFiles('rainhaven:moment-tests.js');
});
