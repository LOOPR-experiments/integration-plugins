import fetch from 'cross-fetch';
import { SlackConfig, defaultSlackConfig } from './slackConfig';

export class SlackService {
  private webhookUrl: string;

  constructor(config?: SlackConfig) {
    this.webhookUrl = config?.webhookUrl || defaultSlackConfig.webhookUrl;
    if (!this.webhookUrl) {
      throw new Error('SLACK_WEBHOOK_URL is required');
    }
  }

  async postMessage(message: string): Promise<void> {
    const res = await fetch(this.webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: message })
    });
    if (!res.ok) {
      throw new Error(`Slack API error: ${res.status}`);
    }
  }
}
