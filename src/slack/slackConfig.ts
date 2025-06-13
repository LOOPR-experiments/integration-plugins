export interface SlackConfig {
  webhookUrl: string;
}

export const defaultSlackConfig: SlackConfig = {
  webhookUrl: process.env.SLACK_WEBHOOK_URL || ''
};
