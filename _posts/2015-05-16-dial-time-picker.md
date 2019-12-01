---
layout: post
title:  "Dial Time Picker Android Library"
date:   2015-03-23
excerpt: "A custom dial time picker for Android."
tag:
- time picker
- library
- Android
comments: true
---
In the process of developing my alarm app,[Alarm Shuffle](https://play.google.com/store/apps/details?id=com.ugurtekbas.alarmshuffle), I needed a different, well-designed time picker. It is one of the key components which users interact almost every time they use the app. Android Lollipop has a very sleek example of this dialog, since it’s also by far the best one between Android versions in terms of user experience, I decided to use default one in my app.

However it is pretty straight forward in older Android versions also it didn’t fit in my design specs. In order to save some time I searched for a proper library and came up with [this one](https://github.com/erz05/TimePicker). I kept most of the calculations to the original, changed its look and feel, added a couple of new features. As a result I had stylish, customizable dial time picker library.

You can download sample app and library from [here](https://github.com/ugurtekbas/dialTimePicker), can read how to use it [here](https://github.com/ugurtekbas/dialTimePicker/blob/master/README.md).

Please feel free to fork and star the repo on [my github account](https://github.com/ugurtekbas).

## Preview

{% capture images %}
	https://github.com/ugurtekbas/dialTimePicker/blob/master/images/1.png
	https://github.com/ugurtekbas/dialTimePicker/blob/master/images/2.png
{% endcapture %}
{% include gallery images=images caption="Screenshots of Dial Time Picker" cols=3 %}
