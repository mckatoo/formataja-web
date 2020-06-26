/**
 * @file             : api.ts
 * @author           : Milton Carlos Katoo <mckatoo@gmail.com>
 * Date              : 26.06.2020
 * Last Modified Date: 26.06.2020
 * Last Modified By  : Milton Carlos Katoo <mckatoo@gmail.com>
 */
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;
