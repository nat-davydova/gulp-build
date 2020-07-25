# Gulp 4 initial build for web dev projects

## List of tasks:

- Pug -> HTML
- SCSS -> CSS
- Scripts task:
  - ES6+ support,
  - modules support,
  - async support
  - bundling
- Images handling task:
  - move to `build`
  - optimization
- SVG sptites:
  - 2 tasks for sprites building (depends on type of SVG icon - colored or solid)
- Live server, watching
- Other assets handling task (fonts/favicons/etc)
- JS linter [Standard](https://standardjs.com/) added
  
## How to use:

- extract folder in your project
- install all the packages via `npm install` command
- run watcher and live server with `gulp` command
- on the **build** stage you can use `gulp img-min` command and start better images optimization via TinyPng API (you need a key to proceed the task). This task is optional, you can just not use it if you don't need it.
