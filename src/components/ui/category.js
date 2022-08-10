import React from 'react'

export default function Category({category :{ id, title ,image}}) {
    return (
        <a className="flex flex-col group items-center gap-y-1 text-center p-4 transition hover:bg-purple-50" href="#">
            <img src={image} alt={title} className="h-10 w-10 rounded border-gray-200"/>
            <span className="text-sm font-semibold whitespace-nowrap group-hover:text-brand-color tracking-tight text-gray-700 ">{title}</span>
        </a>
    )
}
