import fetch from 'cross-fetch';
import { JiraConfig, defaultJiraConfig } from './jiraConfig';

export class JiraService {
  private config: JiraConfig;

  constructor(config?: Partial<JiraConfig>) {
    this.config = { ...defaultJiraConfig, ...config };
    const { baseUrl, username, apiToken, projectKey } = this.config;
    if (!baseUrl || !username || !apiToken || !projectKey) {
      throw new Error('JIRA_BASE_URL, JIRA_USERNAME, JIRA_API_TOKEN, and JIRA_PROJECT_KEY are required');
    }
  }

  async createIssue(summary: string, description: string): Promise<any> {
    const url = `${this.config.baseUrl}/rest/api/2/issue`; 
    const auth = Buffer.from(`${this.config.username}:${this.config.apiToken}`).toString('base64');

    const body = {
      fields: {
        project: { key: this.config.projectKey },
        summary,
        description,
        issuetype: { name: 'Task' }
      }
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Jira API error: ${res.status} ${text}`);
    }
    return res.json();
  }
}
