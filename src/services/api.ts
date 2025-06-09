export const getSignedUrlFromApi = async (key: string): Promise<string> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_S3_GET_SIGNED_URL_API_END_POINT}/getSignedUrl?key=${key}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_S3_GET_SIGNED_URL_API_KEY || "",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.url;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export const getMultipleSignedUrls = async (
  keys: string[]
): Promise<string[]> => {
  return Promise.all(keys.map((key) => getSignedUrlFromApi(key)));
};
