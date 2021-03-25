An immersive custom interface for Alexa that uses Markov chains to generate original compliments and random facts.

<figure><iframe width="560" height="315" src="https://www.youtube.com/embed/C5I7C1meqjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure>

### What it does

Our project is an Alexa-integrated web app that has two major functionalities:

When the user expresses that they are unhappy, asks about their appearance, or asks for a compliment, Proton responds with several unique compliments generated with a Markov chain.

When the user asks to learn something new, Proton responds with an interesting fact from /r/todayilearned. A main highlight of our project is that our user interface is not an Echo device; instead, we implemented our own interface, created a mascot, and designed a smooth and immersive user experience based around that.

### How we built it

We worked on the project in four phases: acquiring training data, implementing Markov chain for compliment generation, integrating with Amazon Voice Service/Amazon Alexa, implementing a front-end interface.

**Training Data:** The training data was collected from two different sources using Python: Compliments were collected from the Twitter account @TheNiceBot (using Twitter API and Twython) and the Subreddits (using Reddit API and PRAW) /r/toastme and /r/freecompliments. Facts were gathered from /r/todayilearned. Scripts were written to filter out inappropriate or excessively specific content, and we ended up with a set of 938 compliments and 762 interesting facts.

**Markov Chain:** We initially tested the feasibility of various key lengths for the Markov chain using an implementation we wrote in Python. The Markov chain uses the training data to generate text, in our case compliments, using a probability table. We decided that a key length of three words resulted in an acceptably low occurrence of error/incoherence in generated compliments (approx. 15-20%). We then re-implemented it in Javascript to use in our Lambda function for AWS.

**Alexa:** We programmed Alexa with a new skill named “Compbot” to understand when the user wants a compliment or a fact. Example utterances include: “I want to learn something new,” “I’m feeling down today,” or “Give me a compliment.” The back-end was written in NodeJS and depending on intent, either generates a response of five compliments or responds with a random fact.

**Front-End Interface:** We used a NodeJS library called alexa-voice-service to help with integrating our interface with Amazon Voice Service. We created a cute mascot based off of one of the logos associated with Amazon Alexa, and animated it on a canvas to respond to user input.
