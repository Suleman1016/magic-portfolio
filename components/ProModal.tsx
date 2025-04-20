"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function ProModal({
  onConfirmPayment,
}: {
  onConfirmPayment: () => void;
}) {
  const [open, setOpen] = useState(true);

  const walletAddress = "TJCAGXpV2uGJVFCVn11XxkajD7cY6vP4CX"; // Your TRC20 USDT wallet

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <Dialog.Panel className="bg-white p-6 rounded-xl w-full max-w-md">
        <Dialog.Title className="text-xl font-bold mb-4">
          Unlock Pro Access
        </Dialog.Title>
        <p className="mb-2">Send $10 USDT (TRC20) to the wallet below:</p>
        <div className="bg-gray-100 p-2 rounded-md text-center font-mono mb-4">
          {walletAddress}
        </div>
        <p className="text-sm text-gray-600 mb-4">
          After payment, click the button below. We’ll verify and unlock your
          account manually.
        </p>
        <button
          onClick={() => {
            onConfirmPayment();
            setOpen(false);
          }}
          className="w-full bg-black text-white py-2 rounded-xl font-medium hover:bg-gray-800"
        >
          I’ve Paid
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}
