import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function NewCreate() {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <div
        onClick={open}
        className=" border border-dashed h-64 w-64 flex justify-center items-center cursor-pointer rounded-2xl"
      >
        <Plus className="h-20 w-20 text-red-400" />
      </div>

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium text-white"
                  >
                    New File
                  </DialogTitle>
                  <div className="pt-2">
                  <label className="text-sm/6 font-medium text-white">File Name</label>
                  <input
                    type="text"
                    className="w-full mt-1 block  rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white
            focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  />
                  </div>
                  <div className="pt-2">
                  <label className="text-sm/6 font-medium text-white">Links</label>
                  <input
                    type="text"
                    className="w-full mt-1 block  rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white
            focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  />
                  </div>
                  
                  <div className="mt-4 flex justify-center">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={close}
                    >
                      Just Start
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
