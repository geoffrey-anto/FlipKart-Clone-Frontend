import sanityClient from "@sanity/client"
export default sanityClient({
    projectId: "hgn2pknz",
    dataset: "production",
    useCdn: true
});