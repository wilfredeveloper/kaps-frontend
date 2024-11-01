import Image from "next/image";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style={{
        backgroundImage: "url(/bg2.jpg)",
        backgroundSize: "fill",
        backgroundPosition: "center",
      }}
    >
      <main className="flex flex-row gap-28 row-start-2 items-center">
        <div className="bg-white/20 backdrop-blur-md p-8 rounded-lg w-full max-w-3xl">
          <div className="max-w-lg flex items-center justify-center flex-col">
            <Image
              src="/logo.png"
              alt="EcoDairy.AI"
              width={250}
              height={250}
              className="rounded-full object-cover"
            />
            <h1 className="text-xl text-center max-w-sm mb-8 text-white font-bold">
              Hello 🌾, <br />
              <br />
              Thank you for making a decision to be a Kenyan Hero
            </h1>
            <p className="max-w-sm text-center text-white">
              Join us in our mission to make farming more profitable while
              fighting climate change <br />
            </p>
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}
