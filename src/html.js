import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="google-signin-client_id"
          content="955421285965-6n8qbvd5isjktm6ci0ejvia0s40sehui.apps.googleusercontent.com"
        />
        <meta
          name="google-signin-scope"
          content="https://www.googleapis.com/auth/analytics.readonly"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.location.host === 'dutzi.github.io') {
                window.location.replace('https://dutzi.party' + window.location.pathname);
              }
              if (!window.localStorage.getItem('light')) {
                document.body.classList.add('dark')
                document.querySelector('html').classList.add('dark')
              }
        `,
          }}
        />
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.emojicsOpts = {
          widget: 'd45d8c3fea9ca530c6a8033dac6238',
          position: 'inline'
          };
          (function(d, e, id) {
            function s() {var js, a = d.getElementsByTagName("script")[0];js = d.createElement("script");js.id = id;js.src = "//connect.emojics.com/dist/sdk.js";a.parentNode.insertBefore(js, a);}
            window.emojics=e;e.readyQueue=[];e.ready=function(b){e.readyQueue.push(b)}
            window.attachEvent?window.attachEvent("onload",s):window.addEventListener("load",s)
          })(document, window.emojics||{}, "emojics-js");
        `,
          }}
        ></script>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
