import { useCallback } from "react";

const urlBase = process.env.NEXT_PUBLIC_API_URL;

export default function useAPI() {
  const httpGet = useCallback(async function (path: string) {
    const uri = path.startsWith("/") ? path : `/${path}`;
    const completeURL = `${urlBase}${uri}`;

    const response = await fetch(completeURL);
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
    return await extractData(response);
  }, []);

  async function extractData(response: Response) {
    let content: any;
    try {
      content = await response.json();
    } catch (error) {
      if (!response.ok) {
        throw new Error(
          `Wrong result with status ${response.status}.`
        );
      }
      return null;
    }
    if (!response.ok) throw content;
    return content;
  }

  return { httpGet, httpPost };
}
