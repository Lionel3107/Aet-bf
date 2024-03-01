import React from 'react';
import {ThreeDots} from 'react-loader-spinner';

interface LoadingIndicatorProps {
    isLoading: boolean;
}

const LoadingIndicator= ({ isLoading }:LoadingIndicatorProps) => {
    return (
        isLoading &&
        <div
            style={{
                width: "100%",
                height: "100",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <ThreeDots color="#F4C026" height="100" width="100" />
        </div>
    );
};

export default LoadingIndicator;
