"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, FileText, Image, Video, Music } from "lucide-react";

const TabsVertical = () => {
  return (
    <Tabs defaultValue="home" orientation="vertical" className="flex gap-4 w-full max-w-lg">
      <TabsList className="flex flex-col h-auto w-[180px] bg-muted/50 p-2">
        <TabsTrigger value="home" className="w-full justify-start gap-2">
          <Home className="h-4 w-4" />
          Home
        </TabsTrigger>
        <TabsTrigger value="documents" className="w-full justify-start gap-2">
          <FileText className="h-4 w-4" />
          Documents
        </TabsTrigger>
        <TabsTrigger value="images" className="w-full justify-start gap-2">
          <Image className="h-4 w-4" />
          Images
        </TabsTrigger>
        <TabsTrigger value="videos" className="w-full justify-start gap-2">
          <Video className="h-4 w-4" />
          Videos
        </TabsTrigger>
        <TabsTrigger value="music" className="w-full justify-start gap-2">
          <Music className="h-4 w-4" />
          Music
        </TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="home" className="m-0 p-4 rounded-lg border border-border h-full">
          <h3 className="font-semibold text-foreground mb-2">Welcome Home</h3>
          <p className="text-sm text-muted-foreground">
            Your personal dashboard with all your content.
          </p>
        </TabsContent>
        <TabsContent value="documents" className="m-0 p-4 rounded-lg border border-border h-full">
          <h3 className="font-semibold text-foreground mb-2">Documents</h3>
          <p className="text-sm text-muted-foreground">
            Browse and manage your documents.
          </p>
        </TabsContent>
        <TabsContent value="images" className="m-0 p-4 rounded-lg border border-border h-full">
          <h3 className="font-semibold text-foreground mb-2">Images</h3>
          <p className="text-sm text-muted-foreground">
            Your photo library and galleries.
          </p>
        </TabsContent>
        <TabsContent value="videos" className="m-0 p-4 rounded-lg border border-border h-full">
          <h3 className="font-semibold text-foreground mb-2">Videos</h3>
          <p className="text-sm text-muted-foreground">
            Watch and organize your video content.
          </p>
        </TabsContent>
        <TabsContent value="music" className="m-0 p-4 rounded-lg border border-border h-full">
          <h3 className="font-semibold text-foreground mb-2">Music</h3>
          <p className="text-sm text-muted-foreground">
            Your music library and playlists.
          </p>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default TabsVertical;
