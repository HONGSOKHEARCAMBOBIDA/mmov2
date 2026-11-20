import { ElMessage } from "element-plus";
import axios from "axios";

export const showError = (e: unknown) => {
  let msg = "Something went wrong";
  if (axios.isAxiosError(e)) {
    msg = e.response?.data?.message ?? e.response?.data?.error ?? e.message;
  } else if (e instanceof Error) {
    msg = e.message;
  }
  ElMessage.error(msg);
};
