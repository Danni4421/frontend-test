import { z } from "zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSessionStore } from "@/store/useSessionStore";
import { useNavigate, useSearchParams } from "react-router-dom";

//==> Components <==//
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/button";
import { Background } from "@/components/background";
import { ErrorMessage } from "@/components/error-message";

//==> Schemas <==//
import { AuthSchemaValidator } from "@/lib/schemas/auth.schema";

//==> Lib <==//
import { loginUser } from "@/lib/users";

//==> Types <==//
import { User } from "@/types";

//==> Assets <==//
import loginVector from "@/assets/login-vector.png";

export default function LoginPage() {
  const navigate = useNavigate();
  const { setUser } = useSessionStore();
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof AuthSchemaValidator.LOGIN_SCHEMA>>({
    resolver: zodResolver(AuthSchemaValidator.LOGIN_SCHEMA),
  });

  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (
      data: z.infer<typeof AuthSchemaValidator.LOGIN_SCHEMA>
    ) => {
      const user = await loginUser(data);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    },
    onSuccess: (user: User) => {
      if (user) {
        setUser(user);
        const redirect = searchParams.get("redirect");
        if (redirect) {
          navigate(redirect);
        } else {
          navigate("/");
        }
      }
    },
  });

  const onSubmit = (data: z.infer<typeof AuthSchemaValidator.LOGIN_SCHEMA>) => {
    mutate(data);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12">
      {/* Left side - Hidden on mobile */}
      <div className="hidden lg:block lg:col-span-8 bg-slate-900 overflow-hidden">
        <div className="flex items-center justify-center h-full overflow-hidden relative">
          <img
            src={loginVector}
            alt="Login"
            className="w-50 z-[9999] absolute bottom-0"
          />
          <Background />
        </div>
      </div>

      {/* Right side - Full width on mobile */}
      <div className="col-span-1 lg:col-span-4 flex flex-col justify-center bg-white p-6 lg:p-12">
        <div className="w-full max-w-sm mx-auto">
          <Button
            onClick={() => navigate(-1)}
            className="p-3 mb-5 rounded-full"
          >
            <ArrowLeft />
          </Button>
          <h1 className="text-2xl font-semibold mb-2">Halo Kembali!</h1>
          <p className="text-gray-600 mb-8">
            Halo, selamat datang kembali! Mari eksplorasi pilihan menarik hari
            ini.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Masukkan email Anda"
                {...register("email")}
                className="w-full px-6 py-3 border rounded-md outline-primary-base mt-1"
              />

              {errors.email && (
                <ErrorMessage message={errors.email.message?.toString()} />
              )}
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Masukkan password Anda"
                {...register("password")}
                className="w-full px-6 py-3 border rounded-md mt-1"
              />

              {errors.password && (
                <ErrorMessage message={errors.password.message?.toString()} />
              )}
            </div>

            <Button
              className="w-full px-6 py-3 rounded-full"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Logging in..." : "Masuk"}
            </Button>

            {isError && (
              <p className="text-red-500 text-center">
                Email atau password salah!
              </p>
            )}

            <p className="text-center text-gray-600 mt-4">
              Belum punya akun?{" "}
              <a
                className="text-blue-800 hover:underline hover:cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Daftar sekarang
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
