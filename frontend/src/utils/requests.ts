// process.env.REACT_APP_BACKEND_URL -> TEm que ser assim, devido ao netlify (produção)
// Cso não tenha definida, por padrão usa o http://localhost:8080
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";