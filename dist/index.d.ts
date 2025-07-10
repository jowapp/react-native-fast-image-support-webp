import React from 'react';
import { ImageRequireSource, StyleProp, FlexStyle, TransformsStyle, ShadowStyleIOS, ColorValue, LayoutChangeEvent, AccessibilityProps, ViewProps } from 'react-native';
export type ResizeMode = 'contain' | 'cover' | 'stretch' | 'center';
declare const resizeMode: {
    readonly contain: "contain";
    readonly cover: "cover";
    readonly stretch: "stretch";
    readonly center: "center";
};
export type Priority = 'low' | 'normal' | 'high';
declare const priority: {
    readonly low: "low";
    readonly normal: "normal";
    readonly high: "high";
};
type Cache = 'immutable' | 'web' | 'cacheOnly';
declare const cacheControl: {
    readonly immutable: "immutable";
    readonly web: "web";
    readonly cacheOnly: "cacheOnly";
};
export type Source = {
    uri?: string;
    headers?: {
        [key: string]: string;
    };
    priority?: Priority;
    cache?: Cache;
};
export interface OnLoadEvent {
    nativeEvent: {
        width: number;
        height: number;
    };
}
export interface OnProgressEvent {
    nativeEvent: {
        loaded: number;
        total: number;
    };
}
export interface ImageStyle extends FlexStyle, TransformsStyle, ShadowStyleIOS {
    backfaceVisibility?: 'visible' | 'hidden';
    borderBottomLeftRadius?: number;
    borderBottomRightRadius?: number;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
    overlayColor?: string;
    opacity?: number;
}
export interface FastImageProps extends AccessibilityProps, ViewProps {
    source?: Source | ImageRequireSource;
    defaultSource?: ImageRequireSource;
    resizeMode?: ResizeMode;
    fallback?: boolean;
    onLoadStart?(): void;
    onProgress?(event: OnProgressEvent): void;
    onLoad?(event: OnLoadEvent): void;
    onError?(): void;
    onLoadEnd?(): void;
    onLayout?: (event: LayoutChangeEvent) => void;
    style?: StyleProp<ImageStyle>;
    tintColor?: ColorValue;
    testID?: string;
    children?: React.ReactNode;
}
export interface FastImageStaticProperties {
    resizeMode: typeof resizeMode;
    priority: typeof priority;
    cacheControl: typeof cacheControl;
    preload: (sources: Source[]) => void;
    clearMemoryCache: () => Promise<void>;
    clearDiskCache: () => Promise<void>;
}
declare const FastImage: React.ComponentType<FastImageProps> & FastImageStaticProperties;
export default FastImage;
