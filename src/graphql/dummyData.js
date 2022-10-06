export const dummyInternalCounselData = [
  {
    city: "Miami",
    email: "bigdog@gmail.com",
    firstName: "Big",
    lastName: "Dog",
    phone: "(123) 123-1332",
    state: "FL",
    street: "11100 SW 61st Ct.",
    zip: "12321",
    role: "Attorney",
  },
  {
    city: "Albequerque",
    email: "largedog@yahoo.com",
    firstName: "Large",
    lastName: "Dog",
    phone: "(123) 348-3245",
    state: "NM",
    street: "1254 Wallaby Way",
    zip: "53847",
    role: "Paralegal",
  },
];

export const dummyOpposingCounselData = [
  {
    city: "Baltimore",
    email: "sizablecanine@doj.com",
    firstName: "Sizable",
    lastName: "Canine",
    phone: "(123) 486-1332",
    state: "MD",
    street: "555 Cherry St.",
    zip: "20192",
    role: "Attorney",
  },
];

export const dummyProcedureCodesData = [
  {
    code: "92626",
    description: "Auditory Evaluation",
  },
];

export const dummyDiagnosisCodesData = [
  {
    code: "92625",
    description: "Tinnitus, bilateral",
  },
  { code: "92634", description: "Cooties, advanced stage" },
];

export const dummyCasesData = [
  {
    title: "Camp Lejeune",
    defendant: "Department of Justice",
    lawsuitType: "Tort",
    jurisdiction: "Federal",
    judge: "George Smith",
    court: "E.D.N.C.",
    docketNumber: "1234567890",
    opposingCounsel: "2 Members",
    caseStatus: "Open",
  },
  {
    title: "CPAP",
    defendant: "Phillips",
    lawsuitType: "Tort",
    jurisdiction: "Federal",
    judge: "Maria Mendelson",
    court: "W.D.PA.",
    docketNumber: "8475492873",
    opposingCounsel: "3 Members",
    caseStatus: "Closed",
  },
];

export const dummyClaimMetricsData = {
  totalClaims: 1124895,
  approvedClaims: 633315,
  deniedClaims: 149611,
  pendingClaims6mo: 341968,
  totalLawsuitsFiled: 875488,
  medRecordsMissing: 118400,
  milRecordsMissing: 56789,
  totalDamagesBil: 357.3,
};

export const dummyCommonClaimsData = [
    {
      name: "Camp Lejeune",
      num: 83679,
      percentage: 100,
    },
    {
      name: "Hearing Loss",
      num: 21232,
      percentage: 9,
    },
    {
      name: "Tinnitus",
      num: 11240,
      percentage: 7,
    },
    {
      name: "PTSD",
      num: 4995,
      percentage: 4,
    },
    {
      name: "Scars, General",
      num: 2498,
      percentage: 2,
    }
  ];

export const dummyDisabilityScoreData = [
  {
    name: "70% - 80%",
    num: 56202,
    percentage: 45
  },
  {
    name: "40% - 50%",
    num: 34970,
    percentage: 28,
  },
  {
    name: "20% - 30%",
    num: 23730,
    percentage: 19,
  },
  {
    name: "90% - 100%",
    num: 18734,
    percentage: 15,
  },
  {
    name: "10% - 20%",
    num: 12489,
    percentage: 10,
  }
];

export const dummyPayoutRangeData = [
  {
    name: "$250,000 - $500,000",
    num: 71190,
    percentage: 57
  },
  {
    name: "$1,000,000 - $1,500,000",
    num: 26227,
    percentage: 21,
  },
  {
    name: "$100,000 - $250,000",
    num: 17485,
    percentage: 14,
  },
  {
    name: "$500,000 - $750,000",
    num: 14987,
    percentage: 12,
  },
  {
    name: "$3,000,000+",
    num: 6244,
    percentage: 5,
  }
];

export default dummyInternalCounselData;
