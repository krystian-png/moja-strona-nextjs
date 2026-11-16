import Link from "next/link";

export default function BrandLogo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link href="/" aria-label="ZmianaKRS.pl – strona główna" className={`inline-flex shrink-0 items-center gap-2 rounded-sm text-[18px] font-bold leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 lg:text-[20px] ${variant === "dark" ? "text-[#FFFFFF] focus-visible:outline-[#FFFFFF]" : "text-[#111E41] focus-visible:outline-[#3459A2]"}`}>
      <svg aria-hidden="true" viewBox="0 0 34 34" fill="none" className="h-[26px] w-[26px] lg:h-[30px] lg:w-[30px]">
        <path d="M21 3H7a3 3 0 0 0-3 3v23a3 3 0 0 0 3 3h17a3 3 0 0 0 3-3V9l-6-6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M20 3v7h7M9 15h12M9 20h12M9 25h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="25" cy="25" r="8" fill="#E7A944" />
        <path d="m21 25 3 3 5-6" stroke="#111E41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>zmiana<span className={variant === "dark" ? "text-[#E7A944]" : "text-[#20376F]"}>krs.pl</span></span>
    </Link>
  );
}
