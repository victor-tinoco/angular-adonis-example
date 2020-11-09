import { Strings } from '../constants/strings';

export class ApiResponse {
  success: boolean;
  message: string;
  data: any;

  static fromJSON(obj: any): ApiResponse {
    let res = new ApiResponse()
    res.success = obj.success || false
    res.message = res.success ? obj.message : (obj.message || Strings.DEFAULT_ERROR_MESSAGE)
    res.data = obj.data
    return res
  }
}