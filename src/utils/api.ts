const API_BASE_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:3000';

export interface PartnerSignupRequest {
  name: string;
  email: string;
  phone: string;
  role: string;
  company_name?: string;
  additional_info?: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: Record<string, unknown>;
}

export const submitPartnerSignup = async (data: PartnerSignupRequest): Promise<ApiResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/admin/partners/signup-request/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  return result;
};