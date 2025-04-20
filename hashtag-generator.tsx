"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const HashtagGenerator = () => {
  const [input, setInput] = useState("");
  const [hashtags, setHashtags] = useState("");

  const generate = () => {
    setHashtags(`#${input} #viral #marketing #trending`);
  };

  return (
    <div>
      <Input
        placeholder="Enter a keyword or topic"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={generate} className="mt-2">Generate Hashtags</Button>
      {hashtags && <p className="mt-4 font-semibold">{hashtags}</p>}
    </div>
  );
};
