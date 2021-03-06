const { name, description } = require('./package.json');

module.exports = {
  title: name,
  nav: {
    Source: 'https://github.com/gabrielcsapo/node-git-server',
    Docs: './code/index.html'
  },
  body: `
      <div style="width:80%;position: absolute;left: 50%;top: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);">
        <h3 class="text-center" style="font-weight: 100"> ${description} </h3>
        <pre style="background-color:rgb(7, 7, 7);color:rgb(228, 228, 228);white-space: pre;text-align:left;width: auto;display:inline-block;">
      const Server = require('node-git-server');
      const repo = new Server(path.resolve(__dirname, 'tmp'), {
          autoCreate: true,
          authenticate: (type, repo, username, password, next) => {
            console.log(type, repo, username, password);
            next();
          }
      });
      const port = process.env.PORT || 7005;

      repos.listen(port, () =&gt; {
        console.log(\`node-git-server running at http://localhost:{port}\`)
      });
        </pre>
      </div>
    `,
  options: {
    width: '80%'
  },
  footer: `
       <div class="text-black">Made with ☕️ by <a href="http://www.gabrielcsapo.com">@gabrielcsapo</a></div>
    `,
  template: 'landing',
  output: './docs'
};
