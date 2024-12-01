import { z } from "zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useSessionStore } from "@/store/useSessionStore";

//==> Components <==//
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/button";
import { Background } from "@/components/background";
import { ErrorMessage } from "@/components/error-message";

//==> Schemas <==//
import { UserSchemaValidator } from "@/lib/schemas/user.schema";

//==> Lib <==//
import { registerUser } from "@/lib/users";

//==> Assets <==//
import loginVector from "@/assets/login-vector.png";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { setUser } = useSessionStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof UserSchemaValidator.REGISTER_USER_SCHEMA>>({
    resolver: zodResolver(UserSchemaValidator.REGISTER_USER_SCHEMA),
  });

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (
      data: z.infer<typeof UserSchemaValidator.REGISTER_USER_SCHEMA>
    ) => registerUser(data),
    onSuccess: (data) => {
      setUser(data);
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (
    data: z.infer<typeof UserSchemaValidator.REGISTER_USER_SCHEMA>
  ) => {
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
          <h1 className="text-2xl font-semibold mb-2">Selamat Datang!</h1>
          <p className="text-gray-600 mb-8">
            Halo, selamat datang! Setelah itu eksplorasi pilihan menarik hari
            ini.
          </p>

          <form
            className="space-y-4 lg:space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label htmlFor="username" className="text-sm font-semibold">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Masukkan username Anda"
                {...register("username")}
                className="w-full px-4 lg:px-6 py-2 lg:py-3 border rounded-md outline-primary-base mt-1"
              />
              {errors.username && (
                <ErrorMessage message={errors.username.message?.toString()} />
              )}
            </div>

            <div>
              <label htmlFor="name" className="text-sm font-semibold">
                Nama
              </label>
              <input
                type="text"
                id="name"
                placeholder="Masukkan nama Anda"
                {...register("name")}
                className="w-full px-4 lg:px-6 py-2 lg:py-3 border rounded-md outline-primary-base mt-1"
              />
              {errors.name && (
                <ErrorMessage message={errors.name.message?.toString()} />
              )}
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Masukkan email Anda"
                {...register("email")}
                className="w-full px-4 lg:px-6 py-2 lg:py-3 border rounded-md outline-primary-base mt-1"
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
                className="w-full px-4 lg:px-6 py-2 lg:py-3 border rounded-md outline-primary-base mt-1"
              />
              {errors.password && (
                <ErrorMessage message={errors.password.message?.toString()} />
              )}
            </div>

            <div>
              <label htmlFor="phone" className="text-sm font-semibold">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                maxLength={13}
                placeholder="Masukkan nomor telepon Anda"
                {...register("phone")}
                className="w-full px-4 lg:px-6 py-2 lg:py-3 border rounded-md outline-primary-base mt-1"
              />
              {errors.phone && (
                <ErrorMessage message={errors.phone.message?.toString()} />
              )}
            </div>

            <Button
              className="w-full px-4 lg:px-6 py-2 lg:py-3 rounded-full"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Mendaftar" : "Daftar"}
            </Button>

            {isError && (
              <p className="text-red-500 text-center">
                Pendaftaran gagal, silakan coba lagi!
              </p>
            )}

            <p className="text-center text-gray-600 mt-4">
              Sudah punya akun?{" "}
              <a
                className="text-blue-800 hover:underline hover:cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Masuk Sekarang
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
