import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
const WorkCard = ({
  img,
  modalImgOne,
  modalImgTwo,
  modalImgThree,
  name,
  description,
  details,
  technologies,
  onClick,
}) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div
        className="overflow-hidden cursor-pointer rounded-lg p-4 mob:p-2 laptop:p-4 first:ml-0"
        onClick={onClick}
      >
        <div
          className="overflow-hidden rounded-lg transition-all ease-out duration-300 hover:scale-95 mob:h-48"
          style={{ height: "600px" }}
        >
          <img
            alt={name}
            className="h-full w-full object-cover"
            src={img}
          ></img>
        </div>
      </div>
      <h1 className=" p-4 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      {/* Details Modal */}
      <>
        <div className="pl-3">
          <button
            type="button"
            onClick={openModal}
            className="pl-1 text-xl opacity-50"
          >
            {description ? description : "Details"}
          </button>
        </div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-7xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <div className="grid mob:grid-cols-1 laptop:grid-cols-3 gap-3">
                      <img src={modalImgOne} alt="" />
                      <img src={modalImgTwo} alt="" />
                      <img src={modalImgThree} alt="" />
                    </div>
                    <Dialog.Title
                      as="h3"
                      className=" font-medium text-2xl laptop:mt-4 leading-6 text-gray-900"
                    >
                      {name}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-medium text-gray-500">{details}</p>
                    </div>
                    <div className="mt-2">
                      <span className="font-medium">Technologies:</span>
                      <p className="text-sm text-gray-800">{technologies}</p>
                    </div>
                    {/* <div className="mt-4">
                      <button
                        type="button"
                        className="absolute top-0 right-0 px-3 py-3"
                        onClick={closeModal}
                      >
                        X
                      </button>
                    </div> */}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    </div>
  );
};

export default WorkCard;
