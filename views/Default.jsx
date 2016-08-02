// Default layout template
var React = require('react');
var ReactDom = require('react-dom');
var Default = React.createClass({

  render: function() {

    return(
      <html lang="pt-br">
        <head>
          <meta charSet="utf-8"></meta>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="" />
          <meta name="author" content="" />
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <title></title>                    
        </head>

        <body>
          <div id="app"></div>
          <script src="js/bundle.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = Default;