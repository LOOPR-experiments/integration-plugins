export interface JiraConfig {
  baseUrl: string;
  username: string;
  apiToken: string;
  projectKey: string;
}

export const defaultJiraConfig: JiraConfig = {
  baseUrl: process.env.JIRA_BASE_URL || '',
  username: process.env.JIRA_USERNAME || '',
  apiToken: process.env.JIRA_API_TOKEN || '',
  projectKey: process.env.JIRA_PROJECT_KEY || ''
};
