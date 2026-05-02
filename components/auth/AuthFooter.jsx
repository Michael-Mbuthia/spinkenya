export default function AuthFooter({
  text,
  linkText,
  linkHref,
}) {
  return (
    <div className="mt-6 text-sm text-gray-500">
      <p className="mb-2">🎯 Get exclusive offers & rewards!</p>

      <p>
        {text}{" "}
        <a href={linkHref} className="text-blue-600 font-semibold">
          {linkText}
        </a>
      </p>

      <p className="mt-2 text-xs text-gray-400">
        By continuing, you agree to our Terms & Privacy Policy
      </p>
    </div>
  );
}