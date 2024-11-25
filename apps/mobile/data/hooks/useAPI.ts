import { useCallback } from "react";

const urlBase = process.env.EXPO_PUBLIC_API_URL;

export default function useAPI() {
  const httpGet = useCallback(async function (path: string) {
    const uri = path.startsWith("/") ? path : `/${path}`;
    const fullURL = `${urlBase}${uri}`;

    const response = await fetch(fullURL);
    return extractData(response);
  }, []);

  const httpPost = useCallback(async function (path: string, body?: any) {
    const uri = path.startsWith("/") ? path : `/${path}`;
    const completeURL = `${urlBase}${uri}`;

    const response = await fetch(completeURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });
    return extractData(response);
  }, []);

  function extractData(response: Response) {
    let content: any;

    try {
      content = response.json();
    } catch (error) {
      if (!response.ok) {
        throw new Error(
          `Wrong connection, status ${response.status}.`
        );
      }
      return null;
    }
    if (!response.ok) throw content;
    return content;
  }

  return { httpGet, httpPost };
}
