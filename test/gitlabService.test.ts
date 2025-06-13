import { GitLabService } from '../src/gitlab/gitlabService';

describe('GitLabService', () => {
  it('throws if required config missing', () => {
    process.env.GITLAB_BASE_URL = '';
    process.env.GITLAB_TOKEN = '';
    process.env.GITLAB_PROJECT_ID = '';
    expect(() => new GitLabService()).toThrow();
  });
});
