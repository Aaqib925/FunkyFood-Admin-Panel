import { AppConfig } from "@/constant/env";
import { handleFetchError } from "@/utils/errorhandler";

interface FetchData {
    url: string;
    method?: string;
    body?: BodyInit | null;
    token?: string | null;
    image?: boolean;
    abortSignal?: AbortSignal | null;
    credentials?: RequestCredentials;
}

export const fetchUtil = async (data: FetchData) => {
    const {
        url,
        method = "GET",
        body = null,
        token = null,
        image = false,
        abortSignal = null,
    } = data;
    let headers: Record<string, string> = {};
    if (!image) {
        headers = { "Content-Type": "application/json" };
    }

    if (token) {
        headers = { ...headers, token };
    }

    return fetch(`${AppConfig.env()?.API_URL}${url}`, {
        method,
        headers,
        body,
        ...(abortSignal && { signal: abortSignal })
    }).then(handleFetchError);
};
