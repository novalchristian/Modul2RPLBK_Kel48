import React from 'react';

export default function CardList(props) {
    return (
        <div className="bg-white shadow">
            <div className="max-w-2x1 mx-auto py-16 px-4 sm:py-24 lg:max-w-7x1 lg:px-8">
                <h2 className="text-2x1 font-extrabold tracking-tight text-gray-900">Praktikum RPLBK</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div className="group relative shadow">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 aspect rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img src="https://dummyimage.com/1000x1000/000/fff" alt="Gambar" className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                            <h3
                                className={`${
                                props.isNameBold ? "font-bold " : ""
                                } text-sm text-gray-700`}>
                                    <span aria-hidden="true" className="absolute inset-0"/>
                                    {props.name}
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{props.nim}</p>
                            </div>
                            <p>Kelompok : {props.kelompok}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}