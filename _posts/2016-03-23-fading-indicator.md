---
layout: post
title:  "Fading Indicator Android Library"
date:   2016-03-23
excerpt: "A custom indicator with a fading effect for Android."
tag:
- indicator
- library
- Android
comments: true
---
Android’s view pager is a very useful way to deal with continuous pages in single activities. Especially it’s very handy as a part of user on boarding. A navigation to view pagers is very much needed, thats where indicators come into play. They show which page or picture, you are on instantly, similar to scrollbars in lists.

There are such a wide variety of indicator libraries, probably the most popular one  is [Jake Wharton’s](https://github.com/JakeWharton/ViewPagerIndicator){:target="_blank"} , as [I stated before](https://twitter.com/ugurtekbas/status/656734735251722241){:target="_blank"} :). Although those libraries have cool attributes, the missing part for me was a smooth transition. To have a nice fading in-out animation every time when view pager is flipped, I created a custom view as an indicator and added few scale animations. The indicator consists of circles which might have different radius value, fill and stroke colors as user please. Duration of the animations is fixed to optimum value for now, it will be an modifiable attribute as I update the library.

[Here](https://github.com/ugurtekbas/fadingIndicator){:target="_blank"} is library and a sample app, usage tips [here](https://github.com/ugurtekbas/fadingIndicator/blob/master/README.md){:target="_blank"}.

Please feel free to fork and star the repo on [my github account](https://github.com/ugurtekbas){:target="_blank"}.

## Preview

{% capture images %}
	https://github.com/ugurtekbas/fadingIndicator/blob/master/images/1.gif
	https://github.com/ugurtekbas/fadingIndicator/blob/master/images/2.png
{% endcapture %}
{% include gallery images=images caption="Screenshots of Dial Time Picker" cols=3 %}
