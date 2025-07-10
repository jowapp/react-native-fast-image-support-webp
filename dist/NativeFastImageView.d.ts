import type { ColorValue, ImageResolvedAssetSource, StyleProp, TurboModule } from 'react-native';
import { ResizeMode, Source } from './index';
export interface FastImageViewProps {
    tintColor?: ColorValue;
    style?: StyleProp<any>;
    source: ImageResolvedAssetSource & {
        headers?: {
            name: string;
            value: string;
        }[];
    };
    defaultSource?: string | number | null;
    onFastImageLoadStart?: () => void;
    onFastImageProgress?: (event: any) => void;
    onFastImageLoad?: (event: any) => void;
    onFastImageError?: () => void;
    onFastImageLoadEnd?: () => void;
    resizeMode?: ResizeMode;
}
export interface Spec extends TurboModule {
    preload: (sources: Source[]) => void;
    clearMemoryCache: () => Promise<void>;
    clearDiskCache: () => Promise<void>;
}
declare const _default: Spec | null;
export default _default;
