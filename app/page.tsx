import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex">
      <div></div>
      <div className="flex flex-col items-center">
        <p className="text-center">Disclaimer</p>
        <p className="">
          This videos is made for informational and educational purposes only.
          Wo do not own or affiliate with Dropbox or/and any of its subsidiaries
          in any from. Copyright Disclaimer under section 107 of the Copyright
          Act 1976, allowance is made for "fair use" of this video for
          educational purposes.
        </p>
      </div>
    </main>
  );
}
