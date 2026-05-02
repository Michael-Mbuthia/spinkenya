import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import GoogleButton from "@/components/auth/GoogleButton";
import AuthFooter from "@/components/auth/AuthFooter";

export default function SignupPage() {
  return (
    <AuthLayout>
      <AuthCard>

        <AuthHeader
          title="Create Your Account"
          subtitle="Join Spin Kenya and compete in tournaments"
        />

        <GoogleButton label="Sign up with Google" />

        <AuthFooter
          text="Already have an account?"
          linkText="Sign in"
          linkHref="/login"
        />

      </AuthCard>
    </AuthLayout>
  );
}