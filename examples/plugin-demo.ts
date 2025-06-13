import { SlackService } from '../src/slack/slackService';
import { JiraService } from '../src/jira/jiraService';
import { GitLabService } from '../src/gitlab/gitlabService';

async function demo() {
  // Slack demo
  const slack = new SlackService();
  await slack.postMessage('Hello from Loopr integration plugins!');

  // Jira demo
  const jira = new JiraService();
  const issue = await jira.createIssue(
    'Loopr Audit Found Critical Bug',
    'Detailed description of the bug ...'
  );
  console.log('Created Jira issue:', issue.key);

  // GitLab MR comment demo
  const gitlab = new GitLabService();
  const note = await gitlab.postMergeRequestComment(1, 'Loopr audit suggests refactoring this function.');
  console.log('Posted GitLab MR comment ID:', note.id);
}

demo().catch(console.error);
