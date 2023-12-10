import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      <div className="flex bg-[#2B2929] dark:bg-slate-800 text-white">
        <div className="p-10 flex flex-col space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to Dropbox.
            <br />
            <br />
            Storing everything for you and your business needs. All in one place
          </h1>
          <p className="pb-20">
            Enhance your peronal storage with Dropbox, offering a simple and
            efficient way to upload, organise, and access files from anywhere.
            Securly store important documents and media, and experience the
            convenience of easy file management and sharing in one centralised
            solution.
          </p>
          <Link
            className="flex cursor-pointer bg-blue-500 p-5 w-fit hover:{opacity: 1}"
            href="/dashboard"
          >
            Try it for free!
            <ArrowRight className="ml-10" />
          </Link>
        </div>
        <div>
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.xom/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
        <p className="text-center font-light p-2">
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
