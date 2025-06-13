import { JiraService } from '../src/jira/jiraService';

describe('JiraService', () => {
  it('throws if required config missing', () => {
    process.env.JIRA_BASE_URL = '';
    process.env.JIRA_USERNAME = '';
    process.env.JIRA_API_TOKEN = '';
    process.env.JIRA_PROJECT_KEY = '';
    expect(() => new JiraService()).toThrow();
  });
});
