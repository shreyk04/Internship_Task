import React from "react";

function DonorContribution() {
  const donors = [
    { name: "PATHIK RAMESH JUTHANI", amount: "10,000" },
    { name: "RAHUL V JAIN", amount: "5,000" },
    { name: "SANDEEP GUPTA", amount: "5,000" },
    { name: "HITESH KANUBHAI PAGHADAL", amount: "21,000" },
    { name: "YOGESH SURESH AROTE", amount: "5,000" },
    { name: "CHETAN SAILESH MEHTA", amount: "2,000" },
    { name: "RAJESH CONTRO TRADING COMPANY PVT. LTD", amount: "11,000" },
    { name: "KADAVAKUTI SWARNA", amount: "10,000" },
    { name: "RAMESHBHAI NARSINHBHAI CHAUDHARY", amount: "2,500" },
    { name: "ATISH CHAKRABORTY", amount: "1,000" },
    { name: "MR. RUDRANATH BHATTACHARYA", amount: "1,000" },
    { name: "JATIN SAHGAL", amount: "1,500" },
    { name: "SHIBAJI DEY", amount: "500" },
    { name: "SHUBHAM RAISONI", amount: "2,100" },
    { name: "JAY DELIWALA", amount: "8,250" },
    { name: "DEVANG VORA", amount: "5,000" },
    { name: "DIVYANSH SONI", amount: "2,000" },
    { name: "KSHITISH KUMAR JANA", amount: "2,000" },
    { name: "INDU SINGH", amount: "2,000" },
    { name: "PUSHYAMITHRA SANTHANAM", amount: "5,500" },
    { name: "SHRINIVAS DAKAPPAGARI", amount: "2,000" },
    { name: "OMBIR SINGH (OM TEMPO SERVICE)", amount: "3,000" },
    { name: "TANMAY PRABHUTENDOLKAR", amount: "2,000" },
    { name: "D. V. RAJESHWARI DEVI", amount: "2,000" },
    { name: "SUNNAM PADMA", amount: "2,000" },
    { name: "MR. SANJAY KUMAR SAXENA", amount: "2,000" },
    { name: "PUSHPA", amount: "3,000" },
    { name: "SHUBHASHEESH BAGCHI", amount: "4,000" },
    { name: "REVTISUDHAKAR FUNDE", amount: "2,100" },
    { name: "RAGHAV METALS TRADE PVT. LTD.", amount: "5,000" },
    { name: "MAKARAND M PANDIT", amount: "2,000" },
    { name: "SRI JAY DURGA NUTRI SOYA FOOD PRODUCTS", amount: "2,000" },
    { name: "DVN ARUN KUMAR", amount: "2,000" },
    { name: "DANNANA JANKI RAMANA", amount: "2,000" },
    { name: "ANIL BHATT", amount: "2,100" },
    { name: "ANJALI SHARAN", amount: "5,000" },
    { name: "HARJINDER KAUR", amount: "6,000" },
    { name: "YADUVANSHI ENTERPRISES", amount: "2,000" },
    { name: "GEETA PODDAR", amount: "3,000" },
    { name: "ASHOK SHIVHARE", amount: "2,000" },
    { name: "RAJKUMAR BODWANE", amount: "2,000" },
    { name: "MOHAMMAD ARSHAD", amount: "2,000" },
    { name: "TADEPALLI RAMAKRISHNA", amount: "2,100" },
    { name: "CHARULATA MHATRE", amount: "5,000" },
    { name: "TAPAN SAMANTA", amount: "3,000" },
    { name: "HENRY KASHYAP", amount: "3,000" },
    { name: "USHA DEVI", amount: "3,000" },
    { name: "ARJUN RAJU P", amount: "2,000" },
    { name: "AMIT VERMA", amount: "2,000" },
    { name: "MALEPATI NIRANJANA BABU", amount: "2,000" },
    { name: "AMRITA TONK", amount: "2,000" },
    { name: "VIKAS KSHIRSAGAR", amount: "2,000" },
    { name: "ENTERMONDE POLYCOATEN LIMITED", amount: "12,000" },
    { name: "ASHISH PATEL", amount: "5,000" },
    { name: "KEYUR PATEL", amount: "2,000" },
    { name: "PATEL VINUBHAI GORDHANBHAI", amount: "2,000" },
    { name: "NILAM R PATEL", amount: "2,000" },
    { name: "SUNEET KUMAR AWASTHI", amount: "2,000" },
    { name: "NAGHMA ALTAF", amount: "2,000" },
    { name: "PANKIT ALPESHKUMAR DESAI", amount: "2,000" },
    { name: "SIDHRAJ SINGH", amount: "2,000" },
    { name: "PRANAV", amount: "3,000" },
    { name: "ANEES CASIM", amount: "3,000" },
    { name: "SITARAMARAJU VUNDAMATLA", amount: "2,000" },
    { name: "SATTI RAMA GANGA REDDY", amount: "2,000" },
    { name: "AKASH H", amount: "2,000" },
    { name: "NITHESH N", amount: "2,000" },
    { name: "LAKSHMI PATIL", amount: "2,000" },
    { name: "POOJA BL", amount: "3,000" },
    { name: "GYAN PRAKASH", amount: "3,001" },
    { name: "ADITYA PAWASKAR", amount: "5,000" },
    { name: "SRINIVASAN VISHWAS", amount: "2,000" },
    { name: "ANJANA BALAJI", amount: "2,000" },
    { name: "NOOTHI VENKATESHAM", amount: "3,000" },
    { name: "PRITHVIRAJ SARJERAO CHAVAN", amount: "10,000" },
    { name: "RANDEEP KHARYAL", amount: "5,000" },
    { name: "GONDU SREENIVASA RAO", amount: "2,000" },
    { name: "SAJIDA SHAHNUM", amount: "3,000" },
    { name: "AJAYKUMAR KALLAI", amount: "2,000" },
    { name: "PRAKASH KADTAN", amount: "5,000" },
    { name: "SNEHALATHA KANAKAGIRI", amount: "5,000" },
    { name: "SRISTY RUNGATA", amount: "2,000" },
    { name: "SAI TULASA D", amount: "3,000" },
    { name: "NANDAMURI SOMASHEKAR RAO", amount: "5,000" },
    { name: "ARYAN RAJPARA", amount: "3,000" },
    { name: "ANSHU JAIN", amount: "3,000" },
    { name: "NIKITA SAINI", amount: "2,000" },
    { name: "ADITYA JAYASWAL", amount: "2,000" },
    { name: "DR. NEELAM SHUKLA", amount: "2,000" },
    { name: "JAYANTIBHAI SAVALIA", amount: "2,000" },
    { name: "THANTLA CHINNAPAREDDY", amount: "2,000" },
    { name: "ANNIE SHIBU", amount: "2,000" },
    { name: "N SUBBAIH NAIDU", amount: "2,000" },
    { name: "MALLIKARJUNA. M.", amount: "2,000" },
    { name: "MICHEL ANDRADE", amount: "5,000" },
    { name: "ASWIN UDAY BHATKAL", amount: "2,000" },
    { name: "PRAKASH DEOCHAND WANKAR", amount: "3,000" },
    { name: "SHUBHASHEESH BAGCHI", amount: "2,000" },
    { name: "GURMEET SINGH", amount: "2,000" },
    { name: "VANDANA AGARWAL", amount: "1,000" },
    { name: "PARAMITA SARKAR", amount: "2,000" },
    { name: "SUJATHA SIVASANKAR", amount: "5,005" },
    { name: "AKSHAY MOURIA", amount: "2,001" },
    { name: "PRASHANT KUTRE", amount: "2,000" },
    { name: "ABBAS MURTAZA KARACHIWALA", amount: "10,000" },
    { name: "RAJAN SURENDRA GANDHI", amount: "2,000" },
    { name: "BHAKTI PATHIK SHAH", amount: "4,000" },
    { name: "SHUBHASHEESH BAGCHI", amount: "2,000" },
    { name: "RAMESH CHANDRA SOLANKI", amount: "2,000" },
    { name: "BAGWAN AJIM ISMAIL", amount: "3,000" },
    { name: "SATISH M WADKAR", amount: "3,000" },
    { name: "ANANTA BHAYAN", amount: "3,000" },
    { name: "NIRUPAMA PRADHAN", amount: "2,010" },
    { name: "PAWAN DUTTA", amount: "7,000" },
    { name: "V. M. KHERUDKAR AND COMPANY", amount: "8,000" },
    { name: "MILIND LAXMAN MUSALE", amount: "2,000" },
    { name: "NEELAM KHEER", amount: "2,200" },
    { name: "DATTATRAY KHASHABA BISURKAR", amount: "2,000" },
    { name: "PAUL CHANDY", amount: "2,000" },
    { name: "ZAINA MERAJ", amount: "5,000" },
    { name: "LALIT KUMAR", amount: "2,000" },
    { name: "MADHULIKA VERMA", amount: "2,100" },
    { name: "L. RAVI KIRAN", amount: "3,000" },
    { name: "AMITA PRAKASH PAREKH", amount: "2,000" },
    { name: "RAMLAKHAN CHAURASIYA", amount: "2,000" },
    { name: "VUTHPALA SAVITHA", amount: "2,000" },
    { name: "SUMIT TYAGI", amount: "5,000" },
    { name: "G. KURMA RAO", amount: "2,000" },
    { name: "RAJESH BHANOT", amount: "3,000" },
    { name: "SHUBHASHEESH BAGCHI", amount: "2,000" },
    { name: "SVM SAINATH", amount: "2,000" },
    { name: "VIJAY BRIJWASI", amount: "2,000" },
    { name: "RADHIKA. R", amount: "2,000" },
    { name: "TANMAY PRABHUTENDOLKAR", amount: "2,000" },
    { name: "DURGADAS MANDAL", amount: "2,000" },
    { name: "JYOTIRADITYA MISHRA", amount: "3,000" },
    { name: "RUDATDEEP KAUR", amount: "2,051" },
    { name: "UTTAM MANDAL", amount: "2,000" },
    { name: "DR. SULPHI N", amount: "2,000" },
    { name: "HARVINDER SINGH", amount: "2,000" },
    { name: "PRABAL BHATTACHARYA", amount: "2,000" },
    { name: "T R ARAVAMUTHAN", amount: "3,000" },
    { name: "SUDESH VATS", amount: "4,000" },
    { name: "MADHU SRIVASTAVA", amount: "3,500" }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center    p-10">
      <div className="w-full max-w-4xl mx-auto p-8 bg-white shadow-2xl rounded-3xl border border-purple-200 transform transition-all ">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b py-3 px-6  text-purple-800 font-semibold">
                  Name of Donor
                </th>
                <th className="border-b py-3 px-6  text-purple-800 font-semibold">
                  Amount of Donation (INR)
                </th>
              </tr>
            </thead>
            <tbody>
              {donors.map((donor, index) => (
                <tr
                  key={index}
                  className="bg-white border-b transition duration-300 ease-in-out hover:bg-purple-50"
                >
                  <td className="py-3 px-6">{donor.name}</td>
                  <td className="py-3 px-6">{donor.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DonorContribution;
