import React from "react"
import ContentLoader from "react-content-loader"

const Loader = () => (
    <ContentLoader
        width={'100%'}
        height={500}
    >
        <rect x="0" y="20" rx="5" ry="5" width="150" height="10" />
        <rect x="0" y="40" rx="5" ry="5" width="150" height="10" />
        <rect x="0" y="60" rx="5" ry="5" width="150" height="10" />
        <rect x="0" y="100" rx="5" ry="5" width="100%" height="120" />
        <rect x="0" y="240" rx="5" ry="5" width="100%" height="50" />
        <rect x="0" y="310" rx="5" ry="5" width="100%" height="160" />
    </ContentLoader>
)

export default Loader