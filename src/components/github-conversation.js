import React, { useState, useEffect } from 'react'
// import Octokit from '@octokit/rest'
import ReactMarkdown from 'react-markdown'

function Pluralize({ count, single, plural }) {
  if (count === 1) {
    return single
  } else {
    return plural.replace(/{{count}}/, count)
  }
}

function Comment({ comment }) {
  return (
    <div className="github-conversation-comment">
      <img className="comment-user-avatar" src={comment.user.avatar_url} />
      <div className="comment-and-name">
        <div className="comment-user-name">{comment.user.login}</div>
        <ReactMarkdown className="comment-body" source={comment.body} />
      </div>
    </div>
  )
}

function CommentEditor({ empty, onSubmit }) {
  const [value, setValue] = useState('')

  function handleChange(e) {
    setValue(e.target.value)
  }

  function handleSubmit() {
    onSubmit(value)
    setValue('')
  }

  function handleKeyDown(e) {
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 13) {
      handleSubmit()
    }
  }

  return (
    <div className="github-conversation-comment-editor">
      <textarea
        placeholder={
          empty
            ? 'Be the first to comment!'
            : 'Share your thoughts and join the conversation...'
        }
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}

function fetchComments(options) {
  return fetch(
    `https://api.github.com/repos/${options.owner}/${options.repo}/issues/${options.issueNumber}/comments`
  ).then(res => res.json())
}

function submitComment(options) {
  return fetch(
    `https://api.github.com/repos/${options.owner}/${options.repo}/issues/${options.issueNumber}/comments`,
    {
      method: 'post',
      body: options.body,
    }
  ).then(res => res.json())
}

export default function GithubConversation({ issueNumber }) {
  const [comments, setComments] = useState(null)

  useEffect(() => {
    // octokit.issues
    //   .createComment({
    //     owner: 'dutzi',
    //     repo: 'dutzi.github.io',
    //     body: 'im a body too!',
    //     issue_number: issueNumber,
    //   })
    //   .then(res => {
    //     console.log({ res })
    //   })
    // octokit.issues
    //   .listComments({
    //     owner: 'dutzi',
    //     repo: 'dutzi.github.io',
    //     issue_number: issueNumber,
    //   })
    //   .then(comments => {
    //     setComments(comments.data)
    //   })
    fetchComments({
      owner: 'dutzi',
      repo: 'dutzi.github.io',
      issueNumber,
    }).then(comments => {
      console.log({ comments })
      setComments(comments)
    })
  }, [issueNumber])

  function handleSubmitComment(value) {
    submitComment({
      owner: 'dutzi',
      repo: 'dutzi.github.io',
      issueNumber,
      body: value,
    })
  }

  return (
    <div className="github-conversation-wrapper">
      <hr />
      <CommentEditor
        empty={!comments || !comments.length}
        onSubmit={handleSubmitComment}
      />
      {comments && comments.map(comment => <Comment comment={comment} />)}
      <a
        href={`https://github.com/dutzi/dutzi.github.io/issues/${issueNumber}`}
        className="link"
      >
        Join the conversation on Github Issues{' '}
        {comments && (
          <Pluralize
            count={comments.length}
            single={`(1 comment)`}
            plural={`({{count}} comments)`}
          />
        )}
      </a>
    </div>
  )
}
