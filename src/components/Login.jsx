import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigate,
} from "react-router-dom";
import { authenticateCredentials } from "../scripts";
import { useEffect } from "react";

export default function Login() {
  const loginResult = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginResult?.ok) {
      setTimeout(
        () => navigate(loginResult.redirectURL, { replace: true }),
        3000
      );
    }
  }, [loginResult, navigate]);

  return (
    <section className="flex flex-col items-center pt-3 bg-[#FFF7ED] h-full">
      <h2 className="text-3xl font-bold mt-7"> Sign in to your account </h2>
      {loginResult?.msg && (
        <div
          className={`${
            loginResult?.ok ? "bg-green-300" : "bg-red-300"
          } w-full max-w-[500px] p-4 font-bold mt-3`}
        >
          {loginResult?.msg}
        </div>
      )}
      <Form
        method="POST"
        className={`flex flex-col w-full max-w-[500px] ${
          loginResult?.msg ? "mt-3" : "mt-7"
        }`}
      >
        <input
          type="text"
          name="email"
          placeholder="Email address"
          className="bg-white border-[#D1D5DB] border p-3 rounded-md rounded-b-none"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="bg-white border-[#D1D5DB] border p-3 rounded-md rounded-t-none"
        />
        <button className="bg-[#FF8C38] py-5 text-white w-full mt-4 rounded-md font-bold">
          Sign in
        </button>
      </Form>
      <div className="mt-9 font-medium">
        Don't have an account?{" "}
        <Link to="/register" className="text-[#FF8C38]">
          Create one now
        </Link>
      </div>
    </section>
  );
}

export async function loader({ request, params }) {
  if (localStorage.getItem("vanlife-token")) {
    console.log("already logged in!");
    const response = redirect("/host");
    response.body = true;
    return response;
  }
  return null;
}

export async function action({ request, params }) {
  const { email, password } = Object.fromEntries(await request.formData());
  const authResult = await authenticateCredentials(email, password);

  if (authResult.ok) {
    let redirectURL = new URL(request.url).searchParams.get("redirectTo");
    redirectURL = redirectURL ? new URL(redirectURL.pathname) : "/host";

    return {
      ok: true,
      msg: `Login successful. Redirecting you to ${
        new URL(request.url).origin + redirectURL
      } shortly...`,
      redirectURL: redirectURL,
    };
  }

  return { ok: false, msg: authResult.statusText };
}
