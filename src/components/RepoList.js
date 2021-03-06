import React from "react"
import Spacer from "./Spacer"

export default function RepoList({ repos }) {
  const topics = normalizeRepos(repos)

  return (
    <div className="topics">
      {topics.map(({ name, stargazers, repos }, i) => (
        <div className="topic" key={i} id={name}>
          <Spacer height={6} />
          <h1 title={stargazers.totalCount + " ★"}>{humanReadable(name)}</h1>
          <Spacer height={2} />
          <ul>
            {repos.map(({ homepageUrl, url, name, description, stargazers }, c) => (
              <li key={c} title={stargazers.totalCount + " ★"}>
                <a
                  href={
                    homepageUrl && !homepageUrl.includes("://pravdomil.com")
                      ? homepageUrl
                      : url + "#readme"
                  }
                  target="_blank"
                >
                  <span className="title">{humanReadable(name)}</span>
                  <Spacer height={0.5} />
                  <span className="desc">{description}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function normalizeRepos(repos) {
  // our main topic collection
  const topics = []
  // add repos to corresponding topics
  for (const repo of repos) {
    if (!repo.description) {
      continue
    }

    const repoTopics = repo.repositoryTopics.nodes
    const repoTopicName = repoTopics.length ? repoTopics[0].topic.name : "uncategorized"
    const topic = getTopic(topics, repoTopicName)
    topic.stargazers.totalCount += repo.stargazers.totalCount
    topic.repos.push(repo)
  }

  // sort topics
  topics.sort(sortByStarsAndName)
  // sort topic repos
  for (const topic of topics) {
    topic.repos.sort(sortByStarsAndName)
  }
  return topics
}

function getTopic(topics, name) {
  const found = topics.find(t => t.name === name)
  if (found) {
    return found
  }
  const topic = { name, repos: [], stargazers: { totalCount: 0 } }
  topics.push(topic)
  return topic
}

function sortByStarsAndName(a, b) {
  if (a.name === "uncategorized") {
    return 1
  }
  if (b.name === "uncategorized") {
    return -1
  }
  if (a.stargazers.totalCount !== b.stargazers.totalCount) {
    return a.stargazers.totalCount < b.stargazers.totalCount ? 1 : -1
  }
  if (a.name < b.name) {
    return -1
  }
  if (a.name > b.name) {
    return 1
  }
  return 0
}

function humanReadable(input) {
  const output = input.replace(/-/g, " ")
  return output[0].toLocaleUpperCase() + output.substr(1)
}
