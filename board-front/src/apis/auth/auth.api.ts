// auth.api.ts

import type { ApiResponse } from "@/types/common/ApiResponse"
import { API_ROUTES } from "../common/base.path"
import { publicApi } from "../common/axiosInstance"
import type { LoginRequest, LoginResponse } from "@/types/auth.type"

// 로그인 요청
export const authApi = {
  login: async (req: LoginRequest): Promise<LoginResponse> => {
    // axios.메서드<메서드반환타입>();
    const res = await publicApi.post<ApiResponse<LoginResponse>>(
      API_ROUTES.AUTH.LOGIN, req
    );
    return res.data.data;
  }
}

