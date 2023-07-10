# email-templates

There is an easy way to show  how works email building. I use a free email template for that.

For creating the html template I didn’t use any frameworks. But you can. Sometimes it doesn’t need heavy and massive frameworks to create an easy email template. What do you need? Let see.

I recommend looking over the website [Can I email](https://caniemail.com). On this site, you can find a lot of answers that you can use for creating your emails or technology support.

Nodemailer for test sending. This module is easy for email sending. The official site is [Nodemailer](https://nodemailer.com/).  I created a  script send.js. You need to configure its parameters: email, password, sender address, password, subject line, and list of receivers. And send your email by the script

<pre><code>node send</code></pre>

One more thing - script index.js. Run in in console for watching files and rebuild if you do changes. I use a plugin **html-minifier** for optimizing HTML-code. One more plugin **juice** will inline your CSS properties into the style attribute. You can create styles separately from html and use classes.

<pre><code>node index</code></pre>
