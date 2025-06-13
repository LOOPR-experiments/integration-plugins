import fetch from 'cross-fetch';
import { GitLabConfig, defaultGitLabConfig } from './gitlabConfig';

export class GitLabService {
  private config: GitLabConfig;

  constructor(config?: Partial<GitLabConfig>) {
    this.config = { ...defaultGitLabConfig, ...config };
    const { baseUrl, token, projectId } = this.config;
    if (!baseUrl || !token || !projectId) {
      throw new Error('GITLAB_BASE_URL, GITLAB_TOKEN, and GITLAB_PROJECT_ID are required');
    }
  }

  async postMergeRequestComment(mrIid: number, message: string): Promise<any> {
    const url = `${this.config.baseUrl}/api/v4/projects/${this.config.projectId}/merge_requests/${mrIid}/notes`;
    
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'PRIVATE-TOKEN': this.config.token
      },
      body: JSON.stringify({ body: message })
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`GitLab API error: ${res.status} ${text}`);
    }
    return res.json();
  }
}
