export interface GitLabConfig {
  baseUrl: string;
  token: string;
  projectId: number;
}

export const defaultGitLabConfig: GitLabConfig = {
  baseUrl: process.env.GITLAB_BASE_URL || '',
  token: process.env.GITLAB_TOKEN || '',
  projectId: parseInt(process.env.GITLAB_PROJECT_ID || '', 10) || 0
};
