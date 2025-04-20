"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const CaptionGenerator = () => {
  const [input, setInput] = useState("");
  const [caption, setCaption] = useState("");

  const generate = () => {
    setCaption(`🔥 ${input} is trending! Boost your reach now!`);
  };

  return (
    <div>
      <Input
        placeholder="Enter a topic or keyword"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={generate} className="mt-2">Generate Caption</Button>
      {caption && <p className="mt-4 font-semibold">{caption}</p>}
    </div>
  );
};
