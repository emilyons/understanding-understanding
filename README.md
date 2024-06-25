# Model for Understanding Understanding

# Why am I Creating this Model?

- As I've been studying software engineering, I notice that sometimes I understand the content well, and other times I don't feel as comfortable with new information. 
- Building projects, sometimes I spend hours debugging, because I have not understood something relatively simple about how the code I'm trying to use works, or how to use it optimally.
- Doing is probably the best way to learn something, because it tests what we know and don't know, and forces us to focus on and learn the areas that we do not know.
- I developed a hypothesis: 

If I can determine what information my brain wants to know about each thing I am learning, then as I am ingesting new information or trying to understand or use something, it will be easier to discover what I don't know. Then, I can target thoes aspects of the new material, to more efficiently plan and write code, resolving bugs when they do come up, and proactively avoiding them more often.

- This led to the question: 

**What do I need to know to help me truly understand something?** 

I began thinking of a list of questions that I want to know about each bit of code that I see in my lessons or try to use, myself:

1. What _is_ it?

_For example, if I'm looking at an array "it" may be a set of square brackets: []._

-  How could we say it out loud, in English? Or, how to represent its meaning in spoken English?

_For example, for the square brackets above, maybe I would read "square bracket container that will hold the array" or something._ 

I initially was not sure how to address the fact that "[]" could be read as square brackets, which _is_ an important part of the concept of arrays, but is more directly already addressed in the first question. This question is meant to explain what is happening, like "container that will hold the array".

2. Why is it here?

3. What does it do?

Those questions kind of combined into another: 

4. What does it represent?

Part of what the element represents is how it would be described out loud, and part of it is about what it does.  

Extrapolated, that led to:

5. How does it work?

and 

6. What problem is it solving?

Thinking about #3 What does it do, I wondered:

7. How are the things around it dependent on it or not? 

which led to

8. What would happen if we left it out?

and 

9. What errors would suggest a problem with this, or are related to this?

This seemed to be an extension of my original question "What is this?" because when we're looking at errors or what happens when we leave it out, then in a sense, we're asking _"What is it not?"_ which is really another way to define what something is.

Related: This concept is apparent if you've ever tried to guess what a young child is trying to tell you about. Process of elimination does help narrow things down effectively.

Back to my original line of thought, I added,

10. Does it need to go anywhere else?

Which led me to wonder, 

Or will it? Or could it?

Because when we're initially learning about something, we may not know that two pages later it is going to show up again in a way that will make more sense if we'd understood that it was coming.

And then, 

11. Why or why not?

12. Will it look the same or different somehow? 

Back to wondering about why it is here, 

13. Are there other ways to do the same thing? If so, why did we use _this_ method?

14. Is the way we're using it standard, common, uncommon, or discouraged?

And then, thinking about that and whether things will look the same or different in different places, I wondered:

15. How does this interact with related codes and services?

_Ex: classes appear in HTML, CSS, SCSS, JS, and JSX, but they appear a little differently._

and finally, 

16. Is there a relatable non-dev analogy?

Sometimes that is useful to help me understand, but it could also be useful later when I am working with non-technical folks who need to understand something technical. 

## Sorting the Questions

It was quickly apparent that a lot of these questions had minor aspects in common one with another.

If I was going to make some kind of form or worksheet to refer to as I was learning about things, it would make sense to understand how these questions relate to one another so that information did not need to be duplicated, and details could be linked together in a way that would make the most sense intuitively.

Noticing that my questions had a lot of the common typical questions, I saw that the questions or their parts could be sorted into the usual "who", "what", "where", "when", "why", and "how".

I color coded my list of questions, to see what patterns and overlaps I could find. 

I immediately saw that location (where) and location in time (when) have a fair amount of overlap. "Where" seems to be one aspect of "When", but the difference may be negligible and based only on my own personal usage of those terms. For instance, I classified "does it need to go anywhere else?" as entirely related to "when", but the "does it need to" part was not exactly related to "where"--the necessity aspect is more closely linked with maybe "how" or "where", or the "what" it is doing.

Other overlaps arise with "why" and "how", which makes sense, because a reason for doing something can imply a specific method for doing it. 

Questions related to "Who" and "What" overlap a fair amount, but the identity piece (who) is concerned with what it is not, and that is the opposite of "what".

## Accessing and Understanding Patterns

At first I wondered if I could somehow create a Venn Diagram with all 6 Questions as circles, so that I could visualize the overlaps between the different information. This seemed like it would be unwieldly.

I thought I could print out strips of paper where each question was printed in each of the colors that applied. Then I could have circles that were colored and labeled to represent the different questions as colors, and I could attach the papers with the strips that they had in common. 

Upon printing strips, I realized that trying to attach them all would likely be very bulky and make things more confusing rather than less.

I decided to create the circles as a flat poster, and then I could connect the colored circles with strings for what they have in common. I started doing this, and ended up affixing the questions in their cirlcles as applicable.

I wondered if a computer could model this more easily than I could, because it seemed like a lot of work and strings and connections to be able to draw inferences. 

## Physical to Digital using GPT

I showed ChatGPT my poster and asked it if there was a way to build a model of these connections using React. ChatGPT recommended using the d3 library and suggested some code that could create the visualization.

I set this up and found that the model was a very interesting visualization, but wrong. The questions were not sorted, nor connected properly. 

## Improving the Digital Model

I added the different nodes and their links, to correspond with my existing physical diagrams. 

Now, I have a functional model that has been really interesting to me. 

## Next Steps

I plan to fix the colors; currently they do not match the legend. 

I may also add the ability to add more questions or links, or new ways to display the data. 

If anyone else has ideas for how to better visualize this information, or better conceptualize how we understand things, please send me a message!