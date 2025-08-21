import {
  S3Client,
  S3ServiceException,
  ListObjectsV2Command,
} from "@aws-sdk/client-s3";

import { HttpRequest } from "@aws-sdk/protocol-http";
import { S3RequestPresigner } from "@aws-sdk/s3-request-presigner";
import { parseUrl } from "@aws-sdk/url-parser";
import { Hash } from "@aws-sdk/hash-node";
import { formatUrl } from "@aws-sdk/util-format-url";

const BUCKET_NAME = process.env.S3_BUCKET_NAME || `travel-record`;
const AWS_REGION = process.env.AWS_REGION || "asia-northeast-1";

export function AwsS3Client() {
  return new S3Client({
    region: process.env.AWS_REGION || "asia-northeast-1",
    credentials: {
      accessKeyId: process.env.IAM_ACCESS_KEY || "",
      secretAccessKey: process.env.IAM_SECRET_ACCESS_KEY || "",
    },
  });
}

export async function fetchObjects(directoryPrefix: string) {
  const client = AwsS3Client();

  try {
    const listParams = {
      Bucket: BUCKET_NAME,
      Prefix: directoryPrefix, // 例: "folder/subfolder/"
    };
    const listResponse = await client.send(
      new ListObjectsV2Command(listParams)
    );

    if (!listResponse.Contents) {
      console.log("指定したディレクトリにはオブジェクトが存在しません。");
      return [];
    }
    return listResponse.Contents;
  } catch (caught) {
    if (
      caught instanceof S3ServiceException &&
      caught.name === "NoSuchBucket"
    ) {
      console.error(
        `Error from S3 while listing objects for "${BUCKET_NAME}". The bucket doesn't exist.`
      );
    } else if (caught instanceof S3ServiceException) {
      console.error(
        `Error from S3 while listing objects for "${BUCKET_NAME}".  ${caught.name}: ${caught.message}`
      );
    } else {
      throw caught;
    }
  }
}

export async function getSignedUrl(key: string) {
  const credentials = {
    accessKeyId: process.env.IAM_ACCESS_KEY || "",
    secretAccessKey: process.env.IAM_SECRET_ACCESS_KEY || "",
  };
  const region = AWS_REGION;
  const presigner = new S3RequestPresigner({
    credentials,
    region,
    sha256: Hash.bind(null, "sha256"),
  });

  const s3ObjectUrl = parseUrl(
    `https://${BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${key}`
  );
  const url = await presigner.presign(new HttpRequest(s3ObjectUrl), {
    expiresIn: 604800,
  }); // 7 days

  return formatUrl(url);
}
