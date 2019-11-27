# This is the README for Oportuni3

# First configure AWS on your local machine
All the aws features in our react native app are deployed via AWS Amplify which injects all these features directly. PRAISE JEFF BEZOS but he needs to pay taxes

After cloning into the repository, you want to have AWS Amplify installed globally on your machine by doing the following:

> npm install -g @aws-amplify/cli

After this you need to configure an IAM user to your machine. This will open up your browser and create a "terminal" login that will be able to access our AWS account from the console. You do this by running this in the command line and following the steps:

> amplify configure

Check that you're hopefully able to see the AWS Cognito login by running:
> amplify status

If you do sick nasty then we're ok. If not well lmk lol. 

Hopefully if it works correctly all that's let is to npm install the missing dependencies this project uses by running:
>npm outdated

But just in case, here's what I installed so far i think:
>npm install aws-amplify
>npm install aws-amplify-react-native
>npm install react-navigation