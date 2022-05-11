import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import sanityClient from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url'

const sanityApi = sanityClient({
    projectId: "hgn2pknz",
    dataset: "production",
    useCdn: true
});

const builder: ImageUrlBuilder = imageUrlBuilder(sanityApi)
export function urlFor(source: SanityImage): ImageUrlBuilder {
    return builder.image(source)
}

interface SanityImage {
  _type: string
  asset: {
    _ref: string
    _type: string
}
}

export default sanityApi;