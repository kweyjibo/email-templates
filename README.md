# email-templates

I want to show how you can easily create an attractive email template. Then I will show you how to send it. 

Using any of the free templates available on the internet  you can then modify the design to better meet your needs.

Up to you, but I do not create my layouts by using any frameworks. I think they use unnecessary code. 

What do you need? I recommend looking at the website [Can I email](https://caniemail.com). On this site, you can find a lot of answers to questions about technology support.

I like [Nodemailer](https://nodemailer.com/) and find this module in is good for test sending of emails. I created a script [send.js](https://github.com/kweyjibo/email-templates/blob/main/send.js). You need to configure its parameters: email, password, sender address, subject line, and list of receivers then send your email by running the script with the console command. 

<pre><code>node send</code></pre>

One more thing – I also created script [index.js](https://github.com/kweyjibo/email-templates/blob/main/index.js), then run it in console to watch and change files and rebuilt them if you have made any changes. I use the tool **HTMLMinifier** for optimizing HTML. One more plugin is **Juice** which will inline your CSS properties to the style attributes. 

<pre><code>node index</code></pre>
