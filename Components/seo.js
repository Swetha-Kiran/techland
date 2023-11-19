import Head from "next/head";

const Meta = ({title, keywords, description, ogTitle, ogType, ogUrl, ogImage}) => {

    return (
       <Head>
           <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
           <meta name="keywords" content={keywords}></meta>
           <meta name="description" content={description}></meta>
           <meta property="og:title" content={ogTitle} />
           <meta property="og:type" content={ogType} />
           <meta property="og:url" content={ogUrl} />
           <meta property="og:image" content={ogImage} />
           <meta charSet="utf-8"></meta>
           <link rel="icon" href="/favicon.ico"></link>
           <title>{title}</title>
       </Head>
     );
}
 Meta.defaultProps = {
     title: "TechLand Investment Company: Digital Farming, TLT Marketspace, Agricultural Investments, Land Leasing ",
     keywords: "techland , Investment company, Digital Farming investment, TLT Marketspace, agricultural investments, land leasing, fixed returns",
     description: " TechLand Investment Company specializes in Digital Farming investment, TLT Marketspace opportunities, agricultural investments, land leasing, and providing fixed returns. Explore our diverse portfolio and discover profitable investment opportunities with us.",
     ogTitle: "TechLand Investment Company: Digital Farming, TLT Marketspace, Agricultural Investments, Land Leasing"

 }
export default Meta;