---
layout: post
project: true
title:  "Germany Salary Calculator for Turkey and Ukraine"
date:   2022-03-07
excerpt: "New, simple Germany salary calculator in Turkish and Ukrainian languages."
tag:
- germany
- salary calculator
- taxes
- zarplatavgermanii
comments: true
---
Every now and then I need a calcualtor to check details about my social contributions or tax deductions from my salary. I go to one of the known salary calculator websites for Germany either in German or in English. In one of those days, I noticed there was no calculator in Turkish, people (me included) probably use the English version and that's helpful enough. On the other hand, checking these details in their native language would be beneficial. Building such a tool would be a good challenge for me since I didn't know much about developing websites so I jumped on the apportunity. That's how [Almanya Maas](https://www.almanyamaas.com/) came into life.

<figure>
	<img src="../assets/img/ss-salary.png">
	<figcaption></figcaption>
</figure>

After studying existings tools I decided to build Almanya Maas on three princible:

1. **Simplicity**: From website title to calculator form and to result page, everything should be simple. First version should be as simple as possible. Users should fill in as little information as possible to prevent confusing them. That's why in the firt version I omitted few entry fields, used a fixed value for public health insurance. After users start using I iterated and allow them put in more details for more accurate and realistic results.
2. **Information**: Users should understand what they need to and why they need it. That's why I added explanations for each section of the form in the same page. Users easily scroll down and read about every item on the form, with suggested data for different cases.
3. : In the result page, it shows the most important number users want which is the monthly net salary. Below it, in a simple table, they can see all the calculation details both monthly and yearly manner.

<figure>
	<img src="../assets/img/ss-salary-result.png">
	<figcaption></figcaption>
</figure>

After releasing the first version, I kept developing and adding new things to the calcuator, watched users coming more and more, fixed few bugs here and there and did experiements. Here are few things I've learned while running this website:

## ✨ Domain Name
Before I buy the domain name, I did a short keyword research and decied to buy [almanyamaas.com](https://www.almanyamaas.com/). `Almanya Maas` literally means `Germany Salary`. That was the keyword that was searched the most, numbers weren't so high but demand was there. With zero marketing, it now has 3000 monthly unique visitors, %100 organic. I knew picking a domain name was very important for any project but I was not expecting such a huge return. More people came from searching, visiting and spending time on the website, it was shown higher in the searhes which attracted even more users.

## ✨ Iteration
Since I started working with iteration in every project, directions started getting clearer, priorities revealed easily and building became hassle-free. For the first version of the calculator I built only the most necessary parts and left out the rest. For example on the result page, it was only showing net montlhy salary and some monthly details. I let this version brew until it got tracktion. After seeing increasing numbers of visitors, I started building one feature, one change, fixing one bug at a time. Keeping changes in minumum also helped keeping codebase in shape and offered users value continously.

## ✨ Talking to Users
Except pages such as [about](https://almanyamaas.com/pages/almanya-maas-hesaplama-araci-hakkinda.html), I don't have many contact points with the users to get feedback. I've created a small feedbackcomponent next the form but it was not really used. This led me to guess about `what users would want`. I worked on a sharing feature where people can share their calculation results with others. It took me some time and energy to finish, after release not many made a use of it. So I ended up spending quite some time to build a feature I thougt was very helpful which wasn't really used at the end, because I did not talk with the users enough.

## ✨ Ukrainian Version
After seeing the first website creating value and people keep coming, I thought why not creating the same thing in Ukranian. Luckily a dear friend of mine speaks fluent Ukrainian, so I asked him for help and he translated the entire tool in few hours. I bought a new Ukrainian domain name following the same methods and that's why [Zarplatavgermanii](https://zarplatavgermanii.com) is alive now :(.

<figure>
	<img src="../assets/img/ss-salary-uk.png">
	<figcaption></figcaption>
</figure>

---

I hope you like reading the back story. Let me know if you wish any additional features or any questions. 

### Say hi to me [on Twitter](https://twitter.com/ugurtekbas){:target="_blank"}
