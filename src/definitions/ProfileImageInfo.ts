/* Generated code */
import ImageUri from './ImageUri';

interface ProfileImageInfo {

    /**
     * Link to a profile image. If an image is not uploaded for an extension, only uri is returned
     */
    uri?: string;

    /**
     * Identifier of an image
     */
    etag?: string;

    /**
     * The datetime when an image was last updated in ISO 8601 format, for example 2016-03-10T18:07:52.534Z
     */
    lastModified?: string;

    /**
     * The type of an image
     */
    contentType?: string;

    /**
     * List of URIs to profile images in different dimensions
     */
    scales?: ImageUri[];
}

export default ProfileImageInfo;
