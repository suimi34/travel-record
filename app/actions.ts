'use server';

export async function getSignedUrlAction(key: string) {
  const { getSignedUrl } = await import('@/lib/s3');
  const url = await getSignedUrl(key);

  return url;
}
