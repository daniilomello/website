"use client";

import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

export interface Story {
  id: number;
  thumbnail: string;
  youtubeVideoId: string;
}

const Stories = ({ storiesData }: { storiesData: Story[] }) => {
  const [open, setOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  const openModal = (videoId: string) => {
    setSelectedVideoId(videoId);
    setOpen(true);
  };

  const closeModal = () => {
    setSelectedVideoId(null);
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <div className="flex gap-4 overflow-x-auto py-4">
        {storiesData.map((story) => (
          <Dialog.Trigger asChild key={story.id}>
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full animate-gradient-border bg-instagram-gradient" />
              <div className="absolute inset-0.5 rounded-full overflow-hidden">
                <button
                  className="relative z-10 w-full h-full cursor-pointer shadow-md hover:shadow-lg transition-shadow"
                  onClick={() => openModal(story.youtubeVideoId)}
                >
                  <img
                    src={story.thumbnail}
                    alt={`Story ${story.id}`}
                    className="object-cover w-full h-full rounded-full"
                  />
                </button>
              </div>
            </div>
          </Dialog.Trigger>
        ))}
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 z-50" />
        <Dialog.Content>
          {selectedVideoId && (
            <div
              className={cn(
                "fixed top-[50%] left-[50%] w-[360px] h-[640px] translate-x-[-50%] translate-y-[-50%] shadow-lg rounded-lg overflow-hidden bg-white p-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-100 data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%]"
              )}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideoId}?controls=1&autoplay=1&mute=1&loop=1?cc_load_policy=0`}
                title="YouTube Shorts video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <Dialog.Close
                asChild
                className="absolute top-0 right-0 bg-gray-100/05 text-white rounded-full w-full h-[60px] text-right pr-5 text-2xl"
                onClick={closeModal}
              >
                <button>x</button>
              </Dialog.Close>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Stories;
