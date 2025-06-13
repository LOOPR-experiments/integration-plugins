import { SlackService } from '../src/slack/slackService';

describe('SlackService', () => {
  it('throws if no webhook URL provided', () => {
    process.env.SLACK_WEBHOOK_URL = '';
    expect(() => new SlackService()).toThrow();
  });
});
