---
layout: post
project: true
title:  "Simple app to find best flight deals from Hamburg"
date:   2023-05-17
excerpt: "A story about bots and Telegram channels and cheap flights."
tag:
- hamburg
- cheap tickets
- telegram channel
comments: true
---
Every year I found myself checking flight tickets to Turkey few times. My time frame and destination might change due to different constraints, usually I try to find the most affordable tickets. In one of those days I thought to my self; `what if there was a robot who would always know when the cheapest ticket is and notify me about it`. That's how Hamburg Cheap Tickets channel came to life.

<figure>
	<img src="../assets/img/ucuz-bilet-hamburg-logo.png">
	<figcaption></figcaption>
</figure>

I've built a tiny bot; it was checking the cheapest deals between Hamburg and Istanbul everyday and saving all details into a database. At this point half of the job was done, I had the data but I wasn't being notified yet. If I wanted to see the best deal, I had to go to database console. That's even worse than checking tickets on airline websites...wait maybe not that bad! In the meantime, I noticed there might be a lot of people who needs the same kind of tickets every year. Which would be a nice nishe user base.

## 📰 The Medium
Next step was wrapping this data into a readable message with enough detail and send it to me. Initially I thought about e-mails but for that I need to capture people's email adresses first, which would be a different hassle. I wanted users to get the benefit if they think it's something for them. A group on instant messaging apps would be great idea, people could join the group with one click and bots would send messages to the group. However WhatsApp doesn't have a public API. On the other hand Telegram not only has an API but also chat bots you can create. Thanks to its comprehensive documentation, your bot can be runnning literally in few minutes. The medium for cheap ticket notifications became a **Telegram channel** where my bot posts messages and people can join this channel to be notified of the best deals.

## 💌 The Message
At this point application flow was following: everyday cheapest deals are being checked few times, details saved and ones a day, 2 best tickets details are sent to Telegram channel. If there hasn't been a good deal past 2 days, bots were sending the latest best ones, so that there is always up to date deals in the channel. I kept the messages as short as possible with maximum benefit details. Next to dates and prices, I also added the airline name and a link which when users click they are directed to ticket page and they can purchase the related ticket with few clicks.

After running this flow for a while I noticed an extra benefit. Naturally I was being notified whenever there is a good deal but additionally I was aware of the price changes of the usual tickets. Because bots were sending new deals continously.

## 💌 Constraints
As soon as I thought about this cheap tickets helper, I noticed how many constraints it comes with. First of all users can not really select the departure and return dates. Bots were focusing on finding the best deal regardless of the dates.  Second point was destinations, departure was set to Hamburg and I added two most popular destinations from Hamburg for Turkey: Istanbul and Antalya. With the help of these constraints, I found a niche area where I can test the idea. If people use it I can easily expand it to make it more customizable.

<figure>
	<img src="../assets/img/the-message.jpg">
	<figcaption></figcaption>
</figure>

After releasing the first version, I kept developing and adding new things to the calculator, watched users coming more and more, fixed few bugs here and there and did experiments. Here are few things I've learned while running this website:

---

I hope you like reading the back story. Let me know if you wish any additional features or any questions. 

### Say hi to me [on Twitter](https://twitter.com/ugurtekbas){:target="_blank"}
