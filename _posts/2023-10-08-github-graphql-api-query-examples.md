---
layout: post
title:  "Github GraphQL API Query Examples"
date:   2023-10-08
excerpt: "Various search queries over Github's API."
tag:
- github
- graphql
- api
- search
- query
comments: true
---
Recently, I created a tiny app to browse public repositories on GitHub. And I've noticed there aren't many examples of [Search queries](https://docs.github.com/en/graphql/reference/queries#search) out there, so I wanted to provide examples with this post.            

Let's start with a simple query:

```
search(
    query: "language:Kotlin forks:>10"
    type: REPOSITORY
    first: 5
    after: null
  ) {
    repositoryCount
    nodes {
      ... on Repository {
        name
        description
        stargazerCount
        forkCount
      }
    }
  }
```

We are using four parameters  in the search query above. First one `query` is basically our search phrase, what kind of public repositories we want to search for. I chose repositories which contain Kotlin language and has more than 10 forks. You can change your phrase as you wish, it uses same structure in Github's [search page](https://github.com/search?q=kotlin+forks%3A10&type=repositories&ref=advsearch). `type` is what we want to search, we used REPOSITORY value because we want to check out repos. We could also use issues, users or discussions. `first` is determine how many items we want from the top of the resulting list. `after`  is used for pagination; it’s not required, but I wanted to use it just to demonstrate some paginated queries later.

Next let's take a look at what kind of information we are requesting. `repositoryCount` is an interesting one, it tells us the number of results for this specific search. We will soon see in the response that there are 7247 repositories on Github matches our `"language:Kotlin forks:>10"` phrase.  The reason we used `... on Repository` line is because search result could be different types such as discussions, issues, users. We are only interested in repositories so we used that, more about Fragments later.
For Repository object we get name, description, number of stars and forks it has, pretty straight forward basic information about particular repository. 

Let's see the results:

```
{
  "data": {
    "search": {
      "repositoryCount": 7247,
      "nodes": [
        {
          "name": "kotlin",
          "description": "The Kotlin Programming Language. ",
          "stargazerCount": 45957,
          "forkCount": 5672
        },
        {
          "name": "okhttp",
          "description": "Square’s meticulous HTTP client for the JVM, Android, and GraalVM.",
          "stargazerCount": 44551,
          "forkCount": 9224
        },
        {
          "name": "architecture-samples",
          "description": "A collection of samples to discuss and showcase different architectural tools and patterns for Android apps.",
          "stargazerCount": 43189,
          "forkCount": 11579
        },
        {
          "name": "shadowsocks-android",
          "description": "A shadowsocks client for Android",
          "stargazerCount": 34022,
          "forkCount": 11640
        },
        {
          "name": "fanqiang",
          "description": "翻墙-科学上网",
          "stargazerCount": 32131,
          "forkCount": 6473
        }
      ]
    }
  }
}
```
As you can see our query works like a charm 🥳.        
We received 5 repos as requested and all the details they have. Whenever I do searches on Github I stumble upon interesting repos like `fanqiang` here.

You can run queries by yourself and check out the data using [Github's Explorer](https://docs.github.com/en/graphql/overview/explorer) tool.

## 📚 More data
Let's extend our query by requesting more fields. We can use owner field to get repo owner's name, url field to get Github page url , some important dates and also all the programming languages repo contains. Let's check out this extended version of our query:

```
search(
    query: "language:Kotlin forks:>10"
    type: REPOSITORY
    first: 5
    after: null
  ) {
    repositoryCount
    nodes {
      ... on Repository {
        id
        name
        description
        stargazerCount
        forkCount
        updatedAt
        createdAt
        url
        owner {
          login
        }
        languages(first: 3) {
          nodes {
            name
            color
          }
        }
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
```
If you noticed we requested a field called `pageInfo` in the new query. We can use that information to navigate different pages and to determine if there are more pages to paginate. [Check out this gist](https://gist.github.com/ugurtekbas/308a9439ec77dddebd585f02dc8af59e) for queries with pagination parameters.

## 📗 Using Fragments

So far our queries are working and we are retrieving the data we want. It's possible that our queries get longer and longer over time. Let's use **Fragments** and make our queries reusable and pretty.

Fragments are a way to define reusable sets of fields that can be included in multiple queries. They allow you to group fields together and give them a name, making your queries more organized, readable, and maintainable. Fragments help avoid duplication of field selections when you have common sets of fields that you want to include in multiple parts of your queries. Looking at our query we can easily define a fragment for main Repository object as following:

```
fragment Repo on Repository {
    id
    name
    description
    stargazerCount
    forkCount
    updatedAt
    createdAt
    url
    owner {
      login
    }
    languages(first: 3) {
      nodes {
        name
        color
      }
    }
  }
```
Now `Repo` fragment is ready to use in main query, in the mean time you can try to create another fragment for `LanguageConnection` where we request languages info for each repo.

Now let's look at the final version of our query:

```
search(
    query: "language:Kotlin forks:>10"
    type: REPOSITORY
    first: 5
    after: null
  ) {
    repositoryCount
    nodes {
      ...Repo
    }
    pageInfo {
    	startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
```
Short and sweet 👌🏽       
We used newly created Repo fragment and it's ready to use all other queries and mutations in the future.

---

You can find all the query examples with different parameters and pagination [in this gist file](https://gist.github.com/ugurtekbas/308a9439ec77dddebd585f02dc8af59e). 

**I hope this gives you a head start to write queries. If you have any questions/suggestions feel free to drop in the comments below.**
{: .notice}

---
### Say hi to me [on Twitter](https://twitter.com/ugurtekbas){:target="_blank"}
