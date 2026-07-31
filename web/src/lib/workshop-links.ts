import { env } from '$env/dynamic/public';

export const WORKSHOP_GITHUB_URL =
	env.PUBLIC_WORKSHOP_GITHUB_URL || 'https://ela.st/elk-acd-workshop';
