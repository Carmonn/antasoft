export default {
  extends: ['gitmoji'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'build',
        'chore',
        'revert',
        'security'
      ],
    ],
  },
}