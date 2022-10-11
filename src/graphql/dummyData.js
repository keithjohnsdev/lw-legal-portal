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

export const dummyClientMetricsData = {
  totalClients: 1345000,
  activeClients: 901150,
  inactiveClients: 443850,
  pendingClaims6mo: 341968,
  totalLawsuitsFiled: 875488,
  medRecordsMissing: 118400,
  milRecordsMissing: 56789,
  totalDamagesBil: 357.3,
};

export const dummyMilitaryBranchData = [
  {
    name: "Marine Corps",
    num: 245151,
    percentage: 57,
  },
  {
    name: "Army",
    num: 137628,
    percentage: 32,
  },
  {
    name: "Navy",
    num: 30106,
    percentage: 7,
  },
  {
    name: "Air Force",
    num: 12902,
    percentage: 3,
  },
  {
    name: "Other",
    num: 4301,
    percentage: 1,
  }
];

export const dummyClientAgeRangeData = [
  {
    name: "50 - 55 yrs old",
    num: 141929,
    percentage: 33,
  },
  {
    name: "40 - 45 yrs old",
    num: 107522,
    percentage: 25,
  },
  {
    name: "25 - 30 yrs old",
    num: 81717,
    percentage: 19,
  },
  {
    name: "35 - 40 yrs old",
    num: 38708,
    percentage: 9,
  },
  {
    name: "18 - 25 yrs old",
    num: 25805,
    percentage: 6,
  }
];

export const dummyGenderBreakdownData = [
  {
    name: "Male",
    num: 378479,
    percentage: 88,
  },
  {
    name: "Female",
    num: 47309,
    percentage: 11,
  },
  {
    name: "Other",
    num: 4301,
    percentage: 1,
  }
];

export const dummyClientsData = [
  {
    name: "Edwin Rivera",
    submittingParty: "Legal Firm 1",
    armedForces: "Marine Corps",
    diagnosis: "1",
    procedures: "1",
    ndcs: "-",
    disabilityRating: "90%",
    elements: "Satisfied",
    claimStatus: "Not Submitted",
  },
  {
    name: "David Donaldson",
    submittingParty: "Legal Firm 2",
    armedForces: "Navy",
    diagnosis: "1",
    procedures: "1",
    ndcs: "-",
    disabilityRating: "Not Rated",
    elements: "Missing Data",
    claimStatus: "Not Submitted",
  },
  {
    name: "Clair Candles",
    submittingParty: "Legal Firm 3",
    armedForces: "Air Force",
    diagnosis: "1",
    procedures: "1",
    ndcs: "-",
    disabilityRating: "Not Rated",
    elements: "Missing Records",
    claimStatus: "Not Submitted",
  },
  {
    name: "Rodney Raymonds",
    submittingParty: "Legal Firm 4",
    armedForces: "Army",
    diagnosis: "2",
    procedures: "3",
    ndcs: "-",
    disabilityRating: "70%",
    elements: "Satisfied",
    claimStatus: "Rejected by the Navy",
  },
  {
    name: "Maria Mendez",
    submittingParty: "Legal Firm 1",
    armedForces: "Army",
    diagnosis: "1",
    procedures: "5",
    ndcs: "-",
    disabilityRating: "Not Rated",
    elements: "Missing Records",
    claimStatus: "Not Submitted",
  },
  {
    name: "Jorge Rodriguez",
    submittingParty: "Legal Firm 2",
    armedForces: "Marine Corps",
    diagnosis: "1",
    procedures: "1",
    ndcs: "-",
    disabilityRating: "90%",
    elements: "Satisfied",
    claimStatus: "Awaiting Response",
  },
  {
    name: "Robert Redman",
    submittingParty: "Legal Firm 3",
    armedForces: "Army",
    diagnosis: "1",
    procedures: "1",
    ndcs: "-",
    disabilityRating: "Awaiting Rating",
    elements: "Satisfied",
    claimStatus: "Not Submitted",
  },
  {
    name: "Larry Lackler",
    submittingParty: "Legal Firm 4",
    armedForces: "Marine Corps",
    diagnosis: "1",
    procedures: "1",
    ndcs: "-",
    disabilityRating: "Awaiting Rating",
    elements: "Satisfied",
    claimStatus: "Not Submitted",
  },
  {
    name: "Dennis Daniels",
    submittingParty: "Legal Firm 1",
    armedForces: "Marine Corps",
    diagnosis: "1",
    procedures: "2",
    ndcs: "-",
    disabilityRating: "Not Rated",
    elements: "Missing Records",
    claimStatus: "Not Submitted",
  },
  {
    name: "Rita Rackers",
    submittingParty: "Legal Firm 2",
    armedForces: "Army",
    diagnosis: "2",
    procedures: "3",
    ndcs: "-",
    disabilityRating: "Awaiting Rating",
    elements: "Satisfied",
    claimStatus: "Not Submitted",
  },
  {
    name: "Chris Cramers",
    submittingParty: "Legal Firm 3",
    armedForces: "Marine Corps",
    diagnosis: "1",
    procedures: "1",
    ndcs: "-",
    disabilityRating: "90%",
    elements: "Satisfied",
    claimStatus: "Submitted",
  },
  {
    name: "Steven Sampson",
    submittingParty: "Legal Firm 4",
    armedForces: "Army",
    diagnosis: "1",
    procedures: "1",
    ndcs: "-",
    disabilityRating: "Not Rated",
    elements: "Missing Data",
    claimStatus: "Not Submitted",
  },
  {
    name: "Pauline Peters",
    submittingParty: "Legal Firm 1",
    armedForces: "Army",
    diagnosis: "1",
    procedures: "1",
    ndcs: "-",
    disabilityRating: "Awaiting Rating",
    elements: "Satisfied",
    claimStatus: "Not Submitted",
  },
  {
    name: "Ryan Randal",
    submittingParty: "Legal Firm 2",
    armedForces: "Marine Corps",
    diagnosis: "1",
    procedures: "2",
    ndcs: "-",
    disabilityRating: "Awaiting Rating",
    elements: "Satisfied",
    claimStatus: "Not Submitted",
  },
  {
    name: "Nancy North",
    submittingParty: "Legal Firm 3",
    armedForces: "Marine Corps",
    diagnosis: "1",
    procedures: "2",
    ndcs: "-",
    disabilityRating: "Awaiting Rating",
    elements: "Satisfied",
    claimStatus: "Not Submitted",
  },
];

export default dummyInternalCounselData;
