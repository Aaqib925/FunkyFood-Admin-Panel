import StatusCodes from "@/constant/StatusCodes";
import logger from "@/lib/logger";

export const handleFetchError = async (res: any) => {
  if (res.status >= StatusCodes.BAD_REQUEST && res.status < StatusCodes.CONNECTION_TIMED_OUT) {
    logger(res, "Error while fetching")
    const response = await res.clone().json();
    let errRes = {
      ...response,
      status: res.status
    };
    if (res.status === StatusCodes.UNAUTHORIZED) {
      // localStorage.clear();
    } else {
      //   errorToaster(`${response.Message || "Your Session has been Expired!"}`);
    }
    throw errRes;
  }
  return res.json();
};
