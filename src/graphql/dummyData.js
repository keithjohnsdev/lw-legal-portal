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

export const dummyCasesFilterOptionsData = [
  {
    title: "Defendant",
    name: "Defendant",
    filterOptions: ["Department of Justice", "Phillips"]
  },
  {
    title: "Lawsuit Type",
    name: "Lawsuit Type",
    filterOptions: ["Tort", "Other"]
  },
  {
    title: "Jurisdiction",
    name: "Jurisdiction",
    filterOptions: ["Federal", "State", "Municipal"]
  },
  {
    title: "Judge",
    filterOptions: ["George Smith", "Maria Mendelson"]
  },
  {
    title: "Court",
    filterOptions: ["E.D.N.C.", "W.D.PA."]
  },
  {
    title: "Docket No.",
    filterOptions: ["1234567890", "8475492873"]
  },
  {
    title: "Opposing Counsel",
    filterOptions: ["2 Members", "3 Members"]
  },
  {
    title: "Case Status",
    name: "Case Status",
    filterOptions: ["Open", "Closed"]
  }
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
  },
];

export const dummyDisabilityScoreData = [
  {
    name: "70% - 80%",
    num: 56202,
    percentage: 45,
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
  },
];

export const dummyPayoutRangeData = [
  {
    name: "$250,000 - $500,000",
    num: 71190,
    percentage: 57,
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
  },
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
  },
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
  },
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
  },
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

export const dummyFilterOptionsData = [
  {
    title: "Submitting Party",
    name: "Submitting Parties",
    filterOptions: [
      "Legal Firm 1",
      "Legal Firm 2",
      "Legal Firm 3",
      "Legal Firm 4",
    ],
  },
  {
    title: "Armed Forces",
    name: "Armed Services Branch",
    filterOptions: ["Marine Corps", "Navy", "Air Force", "Army"],
  },
  {
    title: "Diagnosis",
    name: "Diagnosis Codes",
    filterOptions: ["Dx 124.12", "Dx 125.15"],
  },
  {
    title: "Procedures",
    name: "Procedure Codes",
    filterOptions: ["ICD-10 12345", "ICD-11 12345", "ICD-12 12345", "ICD-13 12345", "ICD-14 12345"],
  },
  {
    title: "NDCs",
    filterOptions: ["1", "2", "3", "4"],
  },
  {
    title: "Disability Rating",
    name: "Disability Score",
    filterOptions: [
      "Awaiting Rating",
      "Not Rated",
      "0 - 25%",
      "25% - 50%",
      "50% - 75%",
      "75% - 100%",
    ],
  },
  {
    title: "Elements",
    filterOptions: ["Satisfied", "Missing Data", "Missing Records"],
  },
  {
    title: "Claim Status",
    filterOptions: [
      "Not Submitted",
      "Rejected by the Navy",
      "Awaiting Response",
      "Submitted",
      "Not Submitted to Navy Tort Claims Unit",
      "Pending more than 6 months",
      "Denied",
    ],
  },
];

export const dummyClientViewData = {
  name: "Edwin Rivera",
  gender: "Male",
  age: 67,
  dobStr: "Oct 31, 1955",
  dobNum: "10/31/1955",
  SSN: "*** ** 1234",
  VAID: 5849284830,
  address1: "12345 SW 67 Street",
  address2: "Miami, FL 33123",
  phone: "(305) 123 - 4567",
  email: "e.rivera@email.com",
  fName: "Edwin",
  lName: "Rivera",
  division: "Marine Corps",
  serviceTime: "Jan 1, 1973 - Jan 5, 1980",
  insProvider: "Aetna",
  claimType: "Bladder Cancer",
  diagnosis: "C67.2 Malignant neoplasm of lateral wall of bladder",
  procedureCodes: "CPT 52235",
  NDCCodes: "63323-103-51 Cisplatin",
  elements: "Satisfied",
  status: "Submitted to JAG Navy Tort Claims Unit",
  lienDue: 5000,
  settlementValue: 50000,
  VAReviewer: "Review and Approved",
  reviewerName: "John Lewis",
  claimAmtSought: 50000,
  NPI: 3245734929283,
  disabilityRating: 70,
  submittingParty: "ABC Law Firm",
  leadInternalAttorney: "John Smith",
  addtlAttorneys: "N/A",
  opposingCounsel: "David Clark",
  caseReferredFrom: "Joe Smith",
  linkToRetainer: "linktoretainer.com",
  dateSignedRetainer: "Oct 4, 2022",
};

export const dummyClaimSectionsData = [
  {
    title: "Medical Diagnosis",
    status: "Complete",
  },
  {
    title: "DD214",
    status: "Complete",
  },
  {
    title: "CLJA Claims Form",
    status: "Complete",
  },
];

export const dummyClaimLogData = [
  {
    title: "Claim Submitted",
    by: "David Draper - ABC Law Firm",
    date: "Jan 3, 2023",
  },
];

export const dummyMedicalDiagnosisData = {
  insuranceProvider: "VA Administration",
  facility: "Bruce W. Carter VA Medical Center",
  provider: "Pablo Leon MD",
  claimDate: "01/26/1990",
  totalAmount: 216,
  procedureCode: "CPT 52235",
  prodedureDesc: "Under Urethra and Bladder Transurethral Surgical Procedures",
  diagnosisCode: "C67.2 Malignant neoplasm of lateral wall of bladder",
  diagnosisDesc: "Bladder Cancer",
  prescriptionCode: "63323-103-51",
  prescriptionDesc: "Cisplatin"
}

export default dummyInternalCounselData;
