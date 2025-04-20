"use client";

import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { CaptionGenerator } from "./caption-generator";
import { HashtagGenerator } from "./hashtag-generator";
import { ToneCustomizer } from "./tone-customizer";

const ToolTabs = () => {
  const [tab, setTab] = useState("caption");

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Social Media Tools</CardTitle>
          <CardDescription>
            Select a tool below to generate content tailored to your audience.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="caption" onValueChange={setTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="caption">Captions</TabsTrigger>
              <TabsTrigger value="hashtag">Hashtags</TabsTrigger>
              <TabsTrigger value="tone">Tone</TabsTrigger>
            </TabsList>

            <TabsContent value="caption">
              <CaptionGenerator />
            </TabsContent>
            <TabsContent value="hashtag">
              <HashtagGenerator />
            </TabsContent>
            <TabsContent value="tone">
              <ToneCustomizer />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ToolTabs;
