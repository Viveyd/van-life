import { redirect } from "react-router-dom";

export async function getVans(qty) {
  const raw = await fetch("/api/vans");
  const vans = await raw.json();
  return qty ? vans.slice(0, qty) : vans;
}

export async function getVan(id) {
  const raw = await fetch("/api/vans");
  const vans = await raw.json();
  const van = vans.find((item) => item.id === id);
  return van;
}

export async function authenticateToken(request) {
  const isAuthenticated = localStorage.getItem("vanlife-token") == 1;
  if (!isAuthenticated) {
    const response = redirect(`/login?redirectTo=${request.url}`);
    response.body = true;
    throw response;
  }
  return null;
}

export async function authenticateCredentials(email, password) {
  let authResult = await fetch("api/users", {
    method: "POST",
    body: {
      email,
      password,
    },
  });

  authResult = await authResult.json();

  if (authResult.ok) {
    localStorage.setItem("vanlife-token", "1");
  }

  return authResult;
}
