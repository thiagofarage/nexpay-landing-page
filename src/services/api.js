export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export async function api(path, { signal, ...options } = {}) {
  let response;
  try {
    response = await fetch("/api" + path, {
      ...options, signal, credentials: "same-origin",
      headers: { "Content-Type": "application/json", ...options.headers },
    });
  } catch (error) {
    if (error.name === "AbortError") throw error;
    throw new ApiError("Não foi possível conectar à API. Verifique se o backend está em execução.", 0);
  }
  if (response.status === 204) return null;
  const data = await response.json().catch(() => null);
  if (!response.ok) throw new ApiError(data?.error || "Não foi possível concluir a solicitação.", response.status);
  if (!data) throw new ApiError("A API retornou uma resposta inesperada.", response.status);
  return data;
}
