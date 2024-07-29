import Link from "next/link";
import Image from "next/image";
import Logo01 from "@/public/images/logo-01.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <Image
        src={Logo01}
        className="max-w-none"
        width={32}
        height={32}
        alt="logo"
      />
    </Link>
  );
}
