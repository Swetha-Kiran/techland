import React, { useState } from 'react';
import httptl from '@/app/utils/httptl';
import { API_ENDPOINTS_TL } from '@/app/utils/api-endpoints-TL';

const PackageDetails = () =>
{
  const [packageDetails, setPackageDetails] = useState([]);

  const getPackages = async () =>
      {
        const api_url = `${process.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT}${API_ENDPOINTS_TL.GET_ALL_PACKAGES}`;

        try
        {
          const response = await httptl.get(api_url, {
            headers: {
                includeAuthorizationToken : false,
                },
          });

          if(response.data.success == true)
          {
            setPackageDetails(response.data.data.userPackages)
            console.log("get all packages api success response", response.data);
          }
        }
        catch (error)
        {
          console.log("get all packages api error", error);
        }
      };

  return {
    getPackages,
    packageDetails,
  }
};

export default PackageDetails;

// const packageDetails = [
//   {
//     "id": '0',
//     "name":"Micro Land",
//     "amount": 999,
//     "investment": {
//       "shortTerm": {
//         "months": "12",
//         "interestRate": "8%",
//         "estimatedReturns": "1078.92",
//         "TltSquareCm": "0.10"
//       },
//       "midTerm": {
//         "months": "36",
//         "interestRate": "8.5%",
//         "estimatedReturns": "1253.745",
//         "TltSquareCm": "0.15"
//       },
//       "longTerm": {
//         "months": "60",
//         "interestRate": "9%",
//         "estimatedReturns": "1448.55",
//         "TltSquareCm": "0.20"
//       },
//     },
//     "benefits": {
//       "interstRate": "Earn up to 9% interests",
//       "OCBenefits": {
//         "OCBenefitsForShortTerm" : ["12 coupons", "10% off min order value 999", "max discount 5,000" ],
//         "OCBenefitsForMidTerm" : ["36 coupons", "12% off min order value 999", "max discount 7,000" ],
//         "OCBenefitsForLongTerm" : ["60 coupons", "14% off min order value 999", "max discount 8,000" ]
//       },
//       "SSBenefits": "Performance Tracking and Premium Soil Sense Subscription",
//       "ownership": "Get virtual ownership of the land",
//       "votingRight": "Participate in decision making process"
//     }
//   },
//   {
//     "id": '1',
//     "name":"Mini Land",
//     "amount": 9999,
//     "investment": {
//       "shortTerm": {
//         "months": "12",
//         "interestRate": "10%",
//         "estimatedReturns": "10,999",
//         "TltSquareCm": "0.10"
//       },
//       "midTerm": {
//         "months": "36",
//         "interestRate": "10.5%",
//         "estimatedReturns": "13,149",
//         "TltSquareCm": "0.15"
//       },
//       "longTerm": {
//         "months": "60",
//         "interestRate": "11%",
//         "estimatedReturns": "15,498",
//         "TltSquareCm": "0.20"
//       },
//     },
//     "benefits": {
//       "interstRate": "Earn up to 11% interests",
//       "OCBenefits": {
//         "OCBenefitsForShortTerm" : ["12 coupons", "12% off min order value 999", "max discount 10,000" ],
//         "OCBenefitsForMidTerm" : ["36 coupons", "14% off min order value 999", "max discount 12,000" ],
//         "OCBenefitsForLongTerm" : ["60 coupons", "17% off min order value 999", "max discount 15,000" ]
//       },
//       "SSBenefits": "Performance Tracking and Premium Soil Sense Subscription",
//       "ownership": "Get virtual ownership of the land",
//       "votingRight": "Participate in decision making process"
//     }
//   },
//   {
//     "id": '2',
//     "name":"Medium Land",
//     "amount": 99999,
//     "investment": {
//       "shortTerm": {
//         "months": "12",
//         "interestRate": "12%",
//         "estimatedReturns": "111,999",
//         "TltSquareCm": "0.10"
//       },
//       "midTerm": {
//         "months": "36",
//         "interestRate": "12.5%",
//         "estimatedReturns": "137,499",
//         "TltSquareCm": "0.15"
//       },
//       "longTerm": {
//         "months": "60",
//         "interestRate": "13%",
//         "estimatedReturns": "164,998",
//         "TltSquareCm": "0.20"
//       },
//     },
//     "benefits": {
//       "interstRate": "Earn up to 13% interests",
//       "OCBenefits": {
//         "OCBenefitsForShortTerm" : ["12 coupons", "15% off min order value 999", "max discount 15,000" ],
//         "OCBenefitsForMidTerm" : ["36 coupons", "17% off min order value 999", "max discount 17,000" ],
//         "OCBenefitsForLongTerm" : ["60 coupons", "20% off min order value 999", "max discount 20,000" ]
//       },
//       "SSBenefits": "Performance Tracking and Premium Soil Sense Subscription",
//       "ownership": "Get virtual ownership of the land",
//       "votingRight": "Participate in decision making process"
//     }
//   },
//   {
//     "id": '3',
//     "name":"Major Land",
//     "amount": 999999,
//     "investment": {
//       "shortTerm": {
//         "months": "12",
//         "interestRate": "14%",
//         "estimatedReturns": "1,139,999",
//         "TltSquareCm": "0.10"
//       },
//       "midTerm": {
//         "months": "36",
//         "interestRate": "14.5%",
//         "estimatedReturns": "1,434,999",
//         "TltSquareCm": "0.15"
//       },
//       "longTerm": {
//         "months": "60",
//         "interestRate": "15%",
//         "estimatedReturns": "1,749,998",
//         "TltSquareCm": "0.20"
//       },
//     },
//     "benefits": {
//       "interstRate": "Earn up to 15% interests",
//       "OCBenefits": {
//         "OCBenefitsForShortTerm" : ["12 coupons", "17% off min order value 999", "max discount 20,000" ],
//         "OCBenefitsForMidTerm" : ["36 coupons", "20% off min order value 999", "max discount 22,000" ],
//         "OCBenefitsForLongTerm" : ["60 coupons", "22% off min order value 999", "max discount 25,000" ]
//       },
//       "SSBenefits": "Performance Tracking and Premium Soil Sense Subscription",
//       "ownership": "Get virtual ownership of the land",
//       "votingRight": "Participate in decision making process"
//     }
//   },
//   {
//     "id": '4',
//     "name":"Mega Land",
//     "amount": 19999999,
//     "investment": {
//       "shortTerm": {
//         "months": "12",
//         "interestRate": "16%",
//         "estimatedReturns": "23,199,999",
//         "TltSquareCm": "0.10"
//       },
//       "midTerm": {
//         "months": "36",
//         "interestRate": "16%",
//         "estimatedReturns": "29,599,999",
//         "TltSquareCm": "0.15"
//       },
//       "longTerm": {
//         "months": "60",
//         "interestRate": "16%",
//         "estimatedReturns": "35,999,998",
//         "TltSquareCm": "0.20"
//       },
//     },
//     "benefits": {
//       "interstRate": "Earn up to 16% interests",
//       "OCBenefits": {
//         "OCBenefitsForShortTerm" : ["12 coupons", "20% off min order value 999", "max discount 25,000" ],
//         "OCBenefitsForMidTerm" : ["36 coupons", "22% off min order value 999", "max discount 25,000" ],
//         "OCBenefitsForLongTerm" : ["60 coupons", "25% off min order value 999", "max discount 30,000" ]
//       },
//       "SSBenefits": "Performance Tracking and Premium Soil Sense Subscription",
//       "ownership": "Get virtual ownership of the land",
//       "votingRight": "Participate in decision making process"
//     }
//   }
// ]

// export default packageDetails;