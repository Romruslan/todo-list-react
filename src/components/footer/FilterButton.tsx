import React, { memo } from 'react'

interface Props {
    className: string, 
    filter: () => void, 
    value: string, 
    href: string
}

const FilterButton: React.FC<Props> = ({className, filter, value, href}) => {
    return (
        <a href={href} className={className} onClick={filter}>{value}</a>
    )
}

export default memo(FilterButton)