import Image from "next/image";
import Link from "next/link";

export default function CreateAccountHeader() {
  return (
    <div className=" border-b border-[#76727240]">
      <header className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-5 flex items-center justify-center md:justify-start">
        <Link href="/" aria-label="GTCFX home" className="inline-flex">
          <Image
            src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/logo-2024-new.webp"
            alt="GTCFX"
            width={120}
            height={40}
            className="h-12 w-auto"
            priority
          />
        </Link>
      </header>
    </div>
  );
}
