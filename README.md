# Stonk Tracker
Stonk Tracker is a dynamic React app that pulls stock price information to tell you whether it's up or down for the day.

### Demos
* https://www.ayyyyymc.bet/
* https://www.isgmeup.space/

### Inspiration and Implementation
The Stonk Tracker was inspired by the [GME/AMC short sqeeze](https://en.wikipedia.org/wiki/GameStop_short_squeeze) of 2021. I wanted to make a simple app that would give users feedback as soon as they visited as to whether or not their favorite stock was in the green. 

I wanted this app to be super easy to deploy, easy to update, and easy to replicate. To accomplish this, I used AWS Amplify for deployments. AWS Amplify offers some nifty features like auto-deployments, easy custom URLs, and the most important part - easy to change environment variables.

The thing that makes this app pretty cool is the use of environment variables. For example, if a new meme stock shows up, I can quickly deploy a new website with no code changes. All I would need to do is setup a project on AWS Amplify(5 minutes), change a few environment variables, and BOOM you have yourself a new meme stock tracker. If things go south with a meme stonk and it runs its course, then spinning a site down is just as easy. 

### Questions?
Please feel free to reach out to me with any questions about this app. It's definitely not polised, but it was a fun little project that I love talking about.
