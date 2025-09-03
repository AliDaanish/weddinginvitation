import React, {useState} from "react";
import { CreditCardIcon, GiftIcon } from "@heroicons/react/24/solid";
import "../../style/SendingDirectly.css"; // Pastikan file CSS terhubung

const SendingDirectly = () => {
  const [copiedAccount, setCopiedAccount] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(id);
    setTimeout(() => setCopiedAccount(null), 2000);
  };
  const brideAccount = {
  id: "bride",
  name: "Siti Setianingrum",
  accountNumber: "1394230271",
};

const groomAccount = {
  id: "groom",
  name: <>Asep Ahmad <br /> Hasanudin</>,
  accountNumber: "2820661128",
};


  const renderCard = (account) => (
    <div
      className="relative bg-white text-[#C29897] p-6 shadow-xl rounded-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out mx-5 sm:mx-8 md:mx-10"
    >
      <div className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg">
        <CreditCardIcon className="h-8 w-8 text-[#C29897]" />
      </div>
      <img src="/bca.svg" className=" w-16 mb-4"/>
      <div className="mb-6 flex items-center justify-between">
        <p className="text-2xl font-bold tracking-wider">{account.accountNumber}</p>
        <button
          onClick={() => handleCopy(account.accountNumber, account.id)}
          className={`ml-4 px-3 py-1 rounded-full text-sm transition ${
            copiedAccount === account.id
              ? "bg-green-500 text-white"
              : "bg-[#C29897] text-white hover:bg-[#D9B2AF]"
          }`}
        >
          {copiedAccount === account.id ? "Tersalin!" : "Salin"}
        </button>
      </div>

      <div className="flex justify-between">
        <p className="text-lg">{account.name}</p> <br />
        <p className="text-sm">VALID THRU <br />12/28</p>
      </div>
    </div>
  );

  return (
    <div className="py-16 m-4 rounded-2xl bg-gradient-to-b from-[#EDD0CD] to-[#F1DDDB] relative overflow-hidden shadow-2xl drop-shadow-pink-300 border-1 border-rose-300 bg-cover bg-center bg-no-repeat bg-[url('/bgc.png')]">
      <GiftIcon className="h-24 w-24 p-4 mx-auto mb-4 bg-rose-100 z-40 border-[#C29897] border-2 rounded-full text-[#C29897]" />
      <h2 className="text-4xl font font-elmessir text-center mb-12 text-secondary relative z-10 tracking-wider animate-pulse">
        - Wedding Gift -
      </h2>
      <p className="text-md font font-elmessir text-center mb-12 px-4 text-secondary relative z-10 tracking-wider animate-pulse">
        Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
      </p>
      <div className="max-w-lg mx-auto grid grid-cols-1 gap-10 relative z-10">
        {renderCard(brideAccount)}
        
        {renderCard(groomAccount)}

      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              width: `${Math.random() * 15 + 5}rem`,
              height: `${Math.random() * 15 + 5}rem`,
              opacity: Math.random(),
              animation: `move ${
                Math.random() * 20 + 10
              }s infinite ease-in-out`,
            }}
          >
            <svg
              className="text-[#D8B5B4] h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SendingDirectly;