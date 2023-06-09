export const appendQueryParams = (url: string, paramsObj: Record<string, any>): string => {
    let newUrl: string;
    const paramsArr: string[] = [];
    Object.keys(paramsObj).forEach((key) => {
        if (Array.isArray(paramsObj[key])) {
            paramsObj[key].forEach((paramsVal: any) => {
                paramsArr.push(`${key}[]=${paramsVal}`);
            });
        } else {
            paramsArr.push(`${key}=${paramsObj[key]}`);
        }
    });
    newUrl = `${url}?${paramsArr.join("&")}`;
    return newUrl;
};

export const encodeEscapeCharacterURL = (text: string): string => {
    return encodeURIComponent(text);
};
