// src/elasticsearch.ts
import { Client } from '@elastic/elasticsearch';
import dotenv from 'dotenv';
dotenv.config();

const node = process.env.ELASTIC_HOST || 'https://localhost:9200';
const username = process.env.ELASTIC_USERNAME || 'elastic';
const password = process.env.ELASTIC_PASSWORD || '';

export const esClient = new Client({
  node,
  auth: { username, password },
  tls: {
    // ES Docker uses self-signed cert — ignore verification in dev
    rejectUnauthorized: false as any
  }
});

export async function pingElasticsearch() {
  try {
    const r = await esClient.info();
    console.log('Elasticsearch info:', r.body ? r.body.version : r);
    return true;
  } catch (err) {
    console.error('Elasticsearch connection error:', err);
    return false;
  }
}
