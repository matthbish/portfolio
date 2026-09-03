// Conventional commits enforcement via commitlint.
// Extends the conventional config and scopes messages for this repo.
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'perf', 'test', 'ci', 'build', 'revert'],
    ],
    'scope-enum': [
      2,
      'always',
      ['core', 'features', 'shared', 'ui', 'data', 'seo', 'a11y', 'e2e', 'ci', 'docs', 'styles', 'deps'],
    ],
  },
};
